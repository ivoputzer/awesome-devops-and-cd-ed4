import {equal} from 'assert'
import battleship from '../index.mjs'

describe('battleship', () => {
  it('should be defined', () => {
    equal(typeof battleship, 'function')
  })
})
