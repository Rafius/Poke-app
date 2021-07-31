import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import store from 'src/store'
import { MainContainer.test } from '../MainContainer.test'

describe('<MainContainer.test />', () => {
    const defaultProps = {}
    const wrapper = renderer.create(
        <Provider store={store}>
         <MainContainer.test {...defaultProps} />
        </Provider>,
    )

    test('render', () => {
        expect(wrapper).toMatchSnapshot()
    })
})

