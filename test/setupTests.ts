// import 'raf/polyfill'
import * as enzyme from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
// import 'jest-enzyme'

enzyme.configure({ adapter: new Adapter() })