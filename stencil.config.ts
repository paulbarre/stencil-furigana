import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'furigana',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme',
      footer: ''
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
