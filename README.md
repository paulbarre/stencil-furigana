# Hyuga

## What is Hyuga?

Hyuga (pronounced /çɯː.ɡa/), is a Web Component to display easily Japanese furigana.

In HTML if you want to display <ruby>漢<rp>(</rp><rt>かん</rt><rp>)</rp></ruby><ruby>字<rp>(</rp><rt>じ</rt><rp>)</rp></ruby> you need to write: 

```html
<ruby>漢
  <rp>(</rp>
  <rt>かん</rt>
  <rp>)</rp>
</ruby>
<ruby>字
  <rp>(</rp>
  <rt>じ</rt>
  <rp>)</rp>
</ruby>
```

> **Disclaimer** <br> Yes. `rp` are not a compulsory. 😀

Hyuga makes things easier:

```html
<h-furigana value="漢[かん]字[じ]"></h-furigana>
```

Check how to use the component here: [Furigana](/src/components/h-furigana/readme.md).

## Framework integrations

```
npm i hyuga
```

> **Note** <br> The following is considering that you are using the CLI for each of these frameworks (Vue CLI, Angular CLI).

> **Note** <br> The following applies the support for IE11, see below if you don't care about it.

**Vue**

`main.js` or `main.ts`

```js
import { applyPolyfills, defineCustomElements } from 'hyuga/loader'

Vue.config.ignoredElements = [/h-\w*/]

applyPolyfills().then(() => {
  defineCustomElements(window)
})
```

**Angular**

`app.module.ts`

```ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

...

@NgModule({
  ...

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
```

`main.ts`

```ts
import { applyPolyfills, defineCustomElements } from 'hyuga/loader'

applyPolyfills().then(() => {
  defineCustomElements(window)
})
```

https://stenciljs.com/docs/angular

**React**

[Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)

1. Add Hyuga

```
npm i hyuga
```

2. Add the following to `index.js`

`index.js`

```js
import { applyPolyfills, defineCustomElements } from 'hyuga/loader'

applyPolyfills().then(() => {
  defineCustomElements(window)
})
```

3. Modify `App.js` to see if the component is correctly loaded

> If the above doesn't work, check out [Stencil documentation about integration into a React app](https://stenciljs.com/docs/react).

**I don't care about IE11**

If you don't need to support IE11, no need to apply Polyfills:

```js
import { defineCustomElements } from 'hyuga/loader'
defineCustomElements(window)
```