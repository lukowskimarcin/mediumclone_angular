import {inject} from '@angular/core'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {switchMap, of, map, catchError} from 'rxjs'
import {PopularTagService} from '../services/popularTag.service'
import {popularTagsActions} from './actions'
import {PopularTagType} from 'src/app/shared/types/popularTage.type'

export const getPopularTagsEffect = createEffect(
  (
    actions$ = inject(Actions),
    popularTagService = inject(PopularTagService)
  ) => {
    return actions$.pipe(
      ofType(popularTagsActions.getPopularTags),
      switchMap(() => {
        return popularTagService.getPopularTags().pipe(
          map((tags: PopularTagType[]) => {
            return popularTagsActions.getPopularTagsSuccess({popularTags: tags})
          }),
          catchError(() => {
            return of(popularTagsActions.getPopularTagsFailure())
          })
        )
      })
    )
  },
  {functional: true}
)
