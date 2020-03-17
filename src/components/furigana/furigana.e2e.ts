import { newE2EPage } from '@stencil/core/testing'

async function setupTest(value: string) {
  const page = await newE2EPage()

  await page.setContent('<wc-furigana></wc-furigana>')
  const component = await page.find('wc-furigana')
  component.setProperty('value', value)
  await page.waitForChanges()
  
  return await page.find('wc-furigana >>> span')
}

describe('wc-furigana', () => {
  it('renders', async () => {
    const page = await newE2EPage()
  
    await page.setContent('<wc-furigana></wc-furigana>')
    const element = await page.find('wc-furigana')
    expect(element).toHaveClass('hydrated')
  })

  it('renders changes to the value data', async () => {
    const element = await setupTest('漢字[かんじ]')
    expect(element.textContent).toEqual(`漢字(かんじ)`)
    expect(element).toEqualHtml(`
      <span>
        <ruby>漢字<rp>(</rp><rt>かんじ</rt><rp>)</rp></ruby>
      </span`)
  })
  
  it('renders with multiple brackets', async () => {
    const element = await setupTest('漢[かん]字[じ]')
    expect(element.textContent).toEqual(`漢(かん)字(じ)`)
    expect(element).toEqualHtml(`
      <span>
        <ruby>漢<rp>(</rp><rt>かん</rt><rp>)</rp></ruby>
        <ruby>字<rp>(</rp><rt>じ</rt><rp>)</rp></ruby>
      </span`)
  })
  
  it('renders with multiple parts', async () => {
    const element = await setupTest('フランス 人[じん]')
    expect(element.textContent).toEqual(`フランス人(じん)`)
    expect(element).toEqualHtml(`
      <span>
        フランス<ruby>人<rp>(</rp><rt>じん</rt><rp>)</rp></ruby>
      </span`)
  })
    
  it('renders spaces', async () => {
    const element = await setupTest('空[くう]  白[はく]')
    expect(element.textContent).toEqual(`空(くう) 白(はく)`)
    expect(element).toEqualHtml(`
      <span>
        <ruby>空<rp>(</rp><rt>くう</rt><rp>)</rp></ruby> 
        <ruby>白<rp>(</rp><rt>はく</rt><rp>)</rp></ruby>
      </span`)
  })
})