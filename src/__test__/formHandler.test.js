import {handleSubmit} from '../client/js/formHandler'

test('handleSubmit is a function', async()=>{
    expect(typeof (handleSubmit)).toBe('function')
});