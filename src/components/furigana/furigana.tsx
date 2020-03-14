import { Component, h, Element } from '@stencil/core'

@Component({
  tag: 'wc-furigana',
  shadow: true
})
export class HFurigana {

  @Element() el: HTMLElement;

  private format(source: string): string {
    return source.replace(
      /(\s*<[^<>]*>\s*|(\s?([^\s\[\]<>]+)(\[([^\]\[]+)\])?))/gm,
      (_match, p1, p2, p3, _p4, p5) => {
        if (!p2) {
          return p1
        } else if (!p5) {
          return p3
        } else {
          return `<ruby>${p3}<rp>(</rp><rt>${p5}</rt><rp>)</rp></ruby>`
        }
    })
  }

  componentWillLoad () {
    console.log('componentWillLoad')
  }

  componentWillUpdate () {
    console.log('componentWillUpdate')
  }

  componentDidLoad () {
    console.log('componentDidLoad')
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  render() {
    return <span innerHTML={ this.format(this.el.innerHTML) } />
  }
}