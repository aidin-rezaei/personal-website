'use client'
import { store } from '@/features/Redux/store'
import { Provider } from 'react-redux'
const WrapperRedux = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
}

export default WrapperRedux;