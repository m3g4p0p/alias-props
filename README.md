# alias-props

Specify aliases for object properties.

## Installation

```bash
yarn add alias-props
```

## Usage

```javascript
const aliasProps = require('alias-props')

const doSomething = options => {
  const {
    importantNote = 'Remember buying milk!',
    failSilently = false
  } = aliasProps(options, {
    importantNote: ['cleverComment', 'remarkableRemark'],
    failSilently: ['ignoreError']
  })

  // ...
}

doSomething({ ignoreError: true })
```

## License

MIT
