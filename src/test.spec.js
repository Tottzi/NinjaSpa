import {expect, it } from '@jest/globals'
import {testCaseFromFile} from './test'

describe('Test', () => {
  it('Should return ok', (done) =>{
		expect(testCaseFromFile()).toBe('Ok')
		done()
  })
  it('Should reject', done => {
		expect(testCase()).not.toBe('ok')
		done()
  })
})

