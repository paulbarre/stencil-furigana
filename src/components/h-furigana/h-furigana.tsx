import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'h-furigana'
})
export class HFurigana {
  @Prop() value: string;

  private getFormat(): string {
    
    return this.value
      .replace(/([^\s\[]+)\[([^\]]+)\]/g, '<ruby>$1<rp>(</rp><rt>$2</rt><rp>)</rp></ruby>')
      .replace(' ', '')
  }

  render() {
    if (!this.value) {
      return ''
    }
    return <span innerHTML= {this.getFormat() } />
  }
}