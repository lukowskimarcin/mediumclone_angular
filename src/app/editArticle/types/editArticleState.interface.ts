import { ArticleInterface } from 'src/app/shared/types/article.interface'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'

export interface EditArticleStateInterface {
  article: ArticleInterface | null
  isLoading: boolean
  isSubmiting: boolean
  validationErrors: BackendErrorsInterface | null
}
