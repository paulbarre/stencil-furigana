module.exports = {
    head: [
        ['script', {
            type: 'module',
            src: 'https://unpkg.com/@paulbarre/wc-furigana@latest/dist/furigana/furigana.esm.js'
        }],
        ['script', {
            nomodule: true,
            src: 'https://unpkg.com/@paulbarre/wc-furigana@latest/dist/furigana/furigana.js'
        }]
    ]
}
