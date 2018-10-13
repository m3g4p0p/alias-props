'use strict'

const aliasProps = ({ ...object }, aliases) => Object.entries(aliases).reduce((result, [ key, value ]) => {
  const alias = result[key] === undefined &&
    value.find(current => result.hasOwnProperty(current) && result[current] !== undefined)

  if (alias) {
    result[key] = result[alias]
  }

  return result
}, object)

module.exports = aliasProps
