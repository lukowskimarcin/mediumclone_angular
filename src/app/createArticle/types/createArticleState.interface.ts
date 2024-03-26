import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'

export interface CreateArticleStateInterface {
  isSubmiting: boolean
  validationErrors: BackendErrorsInterface | null
}
