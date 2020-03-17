import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'wc-furigana',
  shadow: true
})
export class HFurigana {

  /**
   * Japanese to display
   */
  @Prop() value: string

  private format(source: string): string {
    return source.replace(
      /\s?([^\s\[\]<>]+)(\[([^\]\[]+)\])?/g,
      (_match, p1, p2, p3) => {
        if (!p2) {
          return p1
        } else {
          return `<ruby>${p1}<rp>(</rp><rt>${p3}</rt><rp>)</rp></ruby>`
        }
    })
  }

  render() {
    return <span innerHTML={ this.format(this.value ?? '') } />
  }
}