import {createFeature, createReducer, on} from '@ngrx/store'
import {routerNavigationAction} from '@ngrx/router-store'
import {popularTagsActions} from './actions'
import {PopularTagStateInterface} from '../types/popularTagsState.interface'

const initialState: PopularTagStateInterface = {
  isLoading: false,
  error: null,
  data: null,
}

const popularTagsFeature = createFeature({
  name: 'feed',
  reducer: createReducer(
    initialState,

    on(popularTagsActions.getPopularTags, (state) => ({
      ...state,
      isLoading: true,
    })),
    on(popularTagsActions.getPopularTagsSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      data: action.popularTags,
    })),
    on(popularTagsActions.getPopularTagsFailure, (state) => ({
      ...state,
      isLoading: false,
    }))
  ),
})

export const {
  name: popularTagsFeatureKey,
  reducer: popularTagsReducer,
  selectIsLoading,
  selectError,
  selectData: selectPopularTagsData,
} = popularTagsFeature
