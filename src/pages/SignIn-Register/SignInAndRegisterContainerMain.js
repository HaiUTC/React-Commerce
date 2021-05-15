import {connect} from 'react-redux'
import { compose } from 'redux'
import {createStructuredSelector } from 'reselect'
import { selectSignInLoading } from '../../redux/user/userSelector'
import withSpiner from '../../component/with-spiner/withSpiner'
import SignInAndRegister from './SignInAndRegister'




const mapStateToProps = createStructuredSelector({
    isLoading : selectSignInLoading
})

const SignInAndRegisterContainerMain = compose(
    connect(mapStateToProps),
    withSpiner
)(SignInAndRegister)

export default SignInAndRegisterContainerMain