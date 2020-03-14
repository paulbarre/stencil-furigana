import { newE2EPage } from '@stencil/core/testing'

describe('wc-furigana', () => {
  it('renders', async () => {
    const page = await newE2EPage();
  
    await page.setContent('<wc-furigana></wc-furigana>')
    const element = await page.find('wc-furigana')
    expect(element).toHaveClass('hydrated')
  })

  it('renders text', async () => {
    const page = await newE2EPage()

    await page.setContent('<wc-furigana>a b[1]  c[2]</wc-furigana>')
    let element = await page.find('wc-furigana >>> span')
    expect(element.textContent).toEqual(`ab(1) c(2)`)
    expect(element).toEqualHtml(`
      <span>
        a<ruby>b<rp>(</rp><rt>1</rt><rp>)</rp></ruby> 
        <ruby>c<rp>(</rp><rt>2</rt><rp>)</rp></ruby>
      </span`)
  })

  it('renders html', async () => {
    const page = await newE2EPage()

    await page.setContent(`
      <wc-furigana>
        <ul>
          <li>a[0]</li>
          <li>b[1]</li>
        </ul>
      </wc-furigana>
    `)
    const element = await page.find('wc-furigana >>> span')
    expect(element).toEqualHtml(`
      <span>
        <ul>
          <li><ruby>a<rp>(</rp><rt>0</rt><rp>)</rp></ruby></li>
          <li><ruby>b<rp>(</rp><rt>1</rt><rp>)</rp></ruby></li>
        </ul>
      </span`)
  })
})