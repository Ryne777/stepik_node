const { expect } = require('chai')
const { sum } = require('./helpers')

describe('Урок 3.3', () => {
  it('Функция sum', () => {
    expect(sum(1, 2, 3)).to.equal(6)
  })
})