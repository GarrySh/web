import { connect } from 'react-redux'
import { orderBy } from 'lodash-es'
import { lifecycle } from 'recompose'
import { load } from '../../actions/list'
import { changeSort } from '../../actions/uiState'
import List from '../../components/desktop/List'

const enhance = lifecycle({
  componentDidMount() {
    this.props.onLoad()
  },
})

export default connect(
  state => {
    const { sortBy, sortDirection } = state.users.uiState
    const { rows } = state.users.list
    return {
      rows: orderBy(rows, [sortBy], [sortDirection]),
      sortBy,
      sortDirection,
    }
  },
  dispatch => ({
    onLoad: () => dispatch(load()),
    onClickSortButton: (sortBy: string) => () => dispatch(changeSort(sortBy)),
  })
)(enhance(List))
