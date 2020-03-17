# Furigana

This Web Component is the easiest way to write japanese with furigana.

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

> **Disclaimer** <br> Yes. `rp` tags are not a compulsory. 😀

With Furigana Web Component, things become easy:

```html
<wc-furigana value="漢[かん]字[じ]" />
```

Check out how to use the component in details here: [Furigana](/src/components/furigana/readme.md).

**TL;DR**

1. Write furigana inside square brackets: `桜[さくら]`.
2. Spaces will indicate which characters the furigana are above: `私[わたし]はフランス 人[じん]です。`.
3. Double spaces if you want to display a space character: `一  二  三`.

## Framework integrations

> **Note** <br> The following applies the support for IE11, see below if you don't care about it.

### Vue

The following consider an application created with [Vue CLI](https://cli.vuejs.org/guide/creating-a-project.html).

1. Install the package

```
npm i @paulbarre/wc-furigana
```

2. Modify the main file of your application to import the package:

`main.js` or `main.ts` if you are using TypeScript

```js
import { applyPolyfills, defineCustomElements } from '@paulbarre/wc-furigana/loader'

// The following can be set into your `vue.config.js` file
Vue.config.ignoredElements = [/wc-furigana/]

applyPolyfills().then(() => {
  defineCustomElements(window)
})
```

3. Add a `wc-furigana` to `App.vue` to see if the component is correctly loaded

> If the above doesn't work, check out [Stencil documentation about integration into a Vue app](hhttps://stenciljs.com/docs/vue).

### Angular

The following consider an application created with [Angular CLI](https://angular.io/guide/setup-local#step-2-create-a-workspace-and-initial-application).

1. Install the package

```
npm i @paulbarre/wc-furigana
```

2. You first need to add `CUSTOM_ELEMENTS_SCHEMA` to your application:

`app.module.ts`

```ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
  ...

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
```

3. Modify the main file to import the package:

`main.ts`

```ts
import { applyPolyfills, defineCustomElements } from '@paulbarre/wc-furigana/loader'

applyPolyfills().then(() => {
  defineCustomElements(window)
})
```

4. Add a `wc-furigana` to `app.component.html` to see if the component is correctly loaded

> If the above doesn't work, check out [Stencil documentation about integration into an Angular app](https://stenciljs.com/docs/angular).

### React

The following consider an application created with [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app).

1. Install the package

```
npm i @paulbarre/wc-furigana
```

2. Import the package into `index.js`

```js
import { applyPolyfills, defineCustomElements } from '@paulbarre/wc-furigana/loader'

applyPolyfills().then(() => {
  defineCustomElements(window)
})
```

3. Add a `wc-furigana` to `App.js` to see if the component is correctly loaded

> If the above doesn't work, check out [Stencil documentation about integration into a React app](https://stenciljs.com/docs/react).

### I don't care about IE11

If you don't need to support IE11, no need to apply Polyfills:

```js
import { defineCustomElements } from '@paulbarre/wc-furigana/loader'
defineCustomElements(window)
```

### I don't use a framework

Adding the Web Component into a single file without any framework is also possible

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <script type="module" src="https://unpkg.com/@paulbarre/wc-furigana/latest/dist/furigana/furigana.esm.js"></script>
  <script nomodule src="https://unpkg.com/@paulbarre/wc-furigana/latest/dist/furigana/furigana.js"></script>
</head>
<body>
  <wc-furigana value="漢[かん]字[じ]" />
</body>
</html>
```