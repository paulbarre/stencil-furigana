# h-furigana

## What it does

This component compiles a `<ruby>` tag from a simple string.

## How to use

> Example 1

```html
<h-furigana value="漢[かん]字[じ]"></h-furigana>
```

The above will output: <ruby>漢<rp>(</rp><rt>かん</rt><rp>)</rp></ruby><ruby>字<rp>(</rp><rt>じ</rt><rp>)</rp></ruby>

Be careful of the position of the square brackets.

> Example 2

```html
<h-furigana value="漢字[かんじ]"></h-furigana>
```

The above will output: <ruby>漢字<rp>(</rp><rt>かんじ</rt><rp>)</rp></ruby>

Also you might need to insert spaces to specify on which characters the furigana should be set.

> Example 3

```html
😡 <h-furigana value="フランス人[じん]"></h-furigana>
😀 <h-furigana value="フランス 人[じん]"></h-furigana> <!-- We insert here a `space` before 人 -->
```

Above example will output :

😡 <ruby>フランス人<rp>(</rp><rt>じん</rt><rp>)</rp></ruby><br>
😀 フランス<ruby>人<rp>(</rp><rt>じん</rt><rp>)</rp></ruby>

## A full example

```html
<h-furigana value="秋[あき]の 田[た]の かりほの 庵[いほ]の 苫[とま]をあらみ"></h-furigana>
<h-furigana value="わが 衣手[ころもで]は 露[つゆ]にぬれつつ"></h-furigana>
```

> First poem from the _[Ogura Hyakunin Isshu](https://en.wikipedia.org/wiki/Ogura_Hyakunin_Isshu)_

<span><ruby>秋<rp>(</rp><rt>あき</rt><rp>)</rp></ruby>の<ruby>田<rp>(</rp><rt>た</rt><rp>)</rp></ruby>のかりほの<ruby>庵<rp>(</rp><rt>いほ</rt><rp>)</rp></ruby>の<ruby>苫<rp>(</rp><rt>とま</rt><rp>)</rp></ruby>をあらみ</span><br>
<span>わが<ruby>衣手<rp>(</rp><rt>ころもで</rt><rp>)</rp></ruby>は<ruby>露<rp>(</rp><rt>つゆ</rt><rp>)</rp></ruby>にぬれつつ</span>


<!-- Auto Generated Below -->


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
