const { h } = require('vue');

module.exports = {
  default: (props) => h('div', {}, [
    h('h1', {}, 'Hello, ' + (props.name || 'World') + '!'),
    h('small', {}, 'This is rendered on server.')
  ])
};