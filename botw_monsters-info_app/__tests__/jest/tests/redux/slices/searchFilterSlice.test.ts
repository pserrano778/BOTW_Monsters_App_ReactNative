import reducer, {
  setSearchFilter,
  clearSearchFilter
} from '../../../../../src/redux/slices/searchFilterSlice'

describe('SearchFilter redux state tests', () => {
    // Check search filter update
  test('should handle search filter update', () => {
    const state = 'newFilter'

    expect(reducer('', setSearchFilter(state))).toEqual(state)
  })

    // Check search filter clear
  test('should handle search filter clear', () => {
    const state = 'newFilter'

    expect(reducer(state, clearSearchFilter)).toEqual('')
  })
})