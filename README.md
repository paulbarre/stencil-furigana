# Furigana

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

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

> If the above doesn't work, check out [Stencil documentation about integration into a Vue app](https://stenciljs.com/docs/vue).

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
  <script type="module" src="https://unpkg.com/@paulbarre/wc-furigana@latest/dist/furigana/furigana.esm.js"></script>
  <script nomodule src="https://unpkg.com/@paulbarre/wc-furigana@latest/dist/furigana/furigana.js"></script>
</head>
<body>
  <wc-furigana value="漢[かん]字[じ]" />
</body>
</html>
```

## Examples

Check out the folder [examples](/examples/) to see how to integrate the component.