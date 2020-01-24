import React from 'react'
import {mount} from 'enzyme'
import Popup from '.'

// https://medium.com/@rishabhsrao/mocking-and-testing-fetch-with-jest-c4d670e2e167 -> didn't work

// google book that shows how to test useEffect with Jest
// https://books.google.com.ar/books?id=XVqWDwAAQBAJ&pg=PA122&lpg=PA122&dq=useeffect+%22Warning:+An+update+to+null+inside+a+test+was+not+wrapped+in+act(...).%22&source=bl&ots=EPW_P1Z4Np&sig=ACfU3U3EnuqTemZ2-W4eEeu0kTxE-JLYEw&hl=en&sa=X&ved=2ahUKEwjr47fmx5vnAhWlDbkGHZ42AVEQ6AEwAXoECAcQAQ#v=onepage&q=useeffect%20%22Warning%3A%20An%20update%20to%20null%20inside%20a%20test%20was%20not%20wrapped%20in%20act(...).%22&f=false
// TODO still doesn't work

describe('Popup', () => {
  it('loads an URL', done => {
    const mockFetchPromise = Promise.resolve({
      json: () => Promise.resolve([{a:'aa'}]),
    })
    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise)

    const popup = mount(<Popup />)
    expect(popup.find('h1').text()).toBe('Popup')
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');

    process.nextTick(() => {
      expect(popup.find('h3').text()).not.toBe(null)
      global.fetch.mockClear()
      done()
    })
  })
})
