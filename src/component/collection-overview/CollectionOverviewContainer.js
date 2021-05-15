import {connect} from 'react-redux'
import { compose } from 'redux'
import {createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching } from '../../redux/shop/shopSelector'
import withSpiner from '../with-spiner/withSpiner'
import collectionOverview from './collectionOverview'



const mapStateToProps = createStructuredSelector({
    isLoading : selectIsCollectionFetching
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    withSpiner
)(collectionOverview)

export default CollectionOverviewContainer