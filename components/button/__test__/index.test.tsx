import * as React from 'react'
import { shallow } from 'enzyme';
import * as renderer from 'react-test-renderer';
import Button from '../index'

describe('Button', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Button>Default</Button>)
    expect(wrapper).toMatchSnapshot()
  });

  it('mount correctly', () => {
    expect(() => renderer.create(<Button>Follow</Button>)).not.toThrow();
  });

  it('have the correct className', () => {
    const wrapperDefault = shallow(<Button>button</Button>)
    expect(wrapperDefault.find('.siren-btn').length).toBe(1)
    const wrapperPrimary = shallow(<Button type="primary">button</Button>)
    expect(wrapperPrimary.find('.siren-btn-primary').length).toBe(1)
    const wrapperDashed = shallow(<Button type="dashed">button</Button>)
    expect(wrapperDashed.find('.siren-btn-dashed').length).toBe(1)
    const wrapperDanger = shallow(<Button type="danger">button</Button>)
    expect(wrapperDanger.find('.siren-btn-danger').length).toBe(1)
  });

  it('onClick', () => {
    let a = 0
    const wrapper = shallow(<Button onClick={() => a = a + 1}>button</Button>)
    wrapper.simulate('click')
    expect(a).toBe(1)
  })
})