import {sendData} from '../server/index'

test('function sends data', () =>{
    expect(typeof sendData).toBe('function')
})