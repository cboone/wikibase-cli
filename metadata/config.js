module.exports = {
  args: '<key> [value]',
  description: 'get and set configuration parameters',
  options: {
    lang: false
  },
  examples: [
    { args: 'clipboard true', comment: 'always copy results to the clipboard when possible' },
    { args: 'lang nl', comment: 'set prefered language to Dutch' },
    { args: 'path', comment: 'get configuration path' },
    { args: 'clear', comment: 'clear configuration' }
  ],
  doc: 'https://github.com/maxlath/wikidata-cli/blob/master/docs/config.md'
}
