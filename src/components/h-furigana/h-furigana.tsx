import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'h-furigana',
  shadow: true
})
export class HFurigana {
  /**
   * Japanese to display
   */
  @Prop() value: string;

  private getFormat(): string {
    return this.value?.replace(/\s*([^\s\[\]]+)(\[([^\]]+)\])?\s*/g, (_match, p1, _p2, p3) => {
      if (!p3) {
        return p1
      } else {
        return `<ruby>${p1}<rp>(</rp><rt>${p3}</rt><rp>)</rp></ruby>`
      }
    })
  }

  render() {
    return <span innerHTML= {this.getFormat() } />
  }
}