import {createAction, createActionGroup, emptyProps, props} from '@ngrx/store'
import {RegisterRequestInterface} from '../types/registerRequest.interface'
import {CurrentUserInterface} from 'src/app/shared/types/currentUser.interface'

export const authActions = createActionGroup({
  source: 'auth',
  events: {
    Register: props<RegisterRequestInterface>,
    'Register success': props<CurrentUserInterface>,
    'Register failure': emptyProps(),
  },
})

/*
export const register = createAction(
  '[Auth] Register',
  props<RegisterRequestInterface>()
)

export const registerSuccess = createAction(
  '[Auth] Register Success',
  props<RegisterRequestInterface>()
)

export const registerFailure = createAction(
  '[Auth] Register Failure',
  props<RegisterRequestInterface>()
)
*/
