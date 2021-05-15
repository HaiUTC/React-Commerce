import {connect} from 'react-redux'
import { compose } from 'redux'
import {createStructuredSelector} from 'reselect'
import { selectCollectionLoading } from '../../redux/shop/shopSelector'
import withSpiner from '../../component/with-spiner/withSpiner'
import Collection from './Collection'

const mapStateToProps = createStructuredSelector({
    isLoading : state =>!selectCollectionLoading(state)
})

const CollectionContainer = compose(
    connect(mapStateToProps),
    withSpiner
)(Collection)

export default CollectionContainer
