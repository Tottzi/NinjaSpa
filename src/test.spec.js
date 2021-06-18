import {expect, it } from '@jest/globals'
import {testCaseFromFile} from './test'


it('Should return ok', (done) =>{
	expect(testCaseFromFile()).toBe('Ok')
	done()
})
it('Should reject', done => {
	expect(testCaseFromFile()).not.toBe('ok')
	done()
})
