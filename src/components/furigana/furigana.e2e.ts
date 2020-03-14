import { newE2EPage } from '@stencil/core/testing'

describe('h-furigana', () => {
  it('renders', async () => {
    const page = await newE2EPage();
  
    await page.setContent('<h-furigana></h-furigana>')
    const element = await page.find('h-furigana')
    expect(element).toHaveClass('hydrated')
  })

  it('renders changes to the name data', async () => {
    const page = await newE2EPage()

    await page.setContent('<h-furigana></h-furigana>')
    const component = await page.find('h-furigana')
    const element = await page.find('h-furigana >>> span')
    expect(element.textContent).toEqual(``)

    component.setProperty('value', '漢字')
    await page.waitForChanges()
    expect(element.textContent).toEqual(`漢字`)

    component.setProperty('value', '漢[かん]字[じ]')
    await page.waitForChanges()
    expect(element.textContent).toEqual(`漢(かん)字(じ)`)
    expect(element).toEqualHtml(`
      <span>
        <ruby>漢<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>
        <ruby>字<rp>(</rp><rt>じ</rt><rp>)</rp></ruby>
      </span`)

    component.setProperty('value', 'フランス 人[じん]')
    await page.waitForChanges()
    expect(element.textContent).toEqual(`フランス人(じん)`)
    expect(element).toEqualHtml(`
      <span>フランス
        <ruby>人<rp>(</rp><rt>じん</rt><rp>)</rp></ruby>
      </span`)
  })
})