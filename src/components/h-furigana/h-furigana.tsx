import { Component, Prop, h } from '@stencil/core'

@Component({
  tag: 'h-furigana',
  shadow: true
})
export class HFurigana {
  @Prop() value: string;

  private getFormat(): string {
    
    return this.value?.replace(/([^\s\[]+)\[([^\]]+)\]/g, '<ruby>$1<rp>(</rp><rt>$2</rt><rp>)</rp></ruby>')
      .replace(' ', '') ?? ''
  }

  render() {
    return <span innerHTML= {this.getFormat() } />
  }
}