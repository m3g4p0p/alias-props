const aliasProps = require('./index')

describe('aliasProps', () => {
  it('should use the alias', () => {
    const { failSilently } = aliasProps({
      ignoreError: true
    }, {
      failSilently: ['ignoreError']
    })

    expect(failSilently).toBe(true)
  })

  it('should work with multiple aliases', () => {
    const { failSilently } = aliasProps({
      shutUpMan: true
    }, {
      failSilently: ['ignoreError', 'shutUpMan']
    })

    expect(failSilently).toBe(true)
  })

  it('should do nothing if the object already has a value', () => {
    const { failSilently } = aliasProps({
      failSilently: false,
      ignoreError: true
    }, {
      failSilently: ['ignoreError']
    })

    expect(failSilently).toBe(false)
  })
})
