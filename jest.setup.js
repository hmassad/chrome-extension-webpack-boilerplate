import React from 'react'

// enzyme
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

// fetch
require('jest-fetch-mock').enableMocks()
