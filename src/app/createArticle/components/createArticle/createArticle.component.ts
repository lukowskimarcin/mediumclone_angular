import {CommonModule} from '@angular/common'
import {Component} from '@angular/core'
import {Store} from '@ngrx/store'
import {combineLatest} from 'rxjs'
import {ArticleFormComponent} from 'src/app/shared/components/articleForm/articleForm.component'
import {ArticleFormValuesInterface} from 'src/app/shared/components/articleForm/types/articleFormValues.interface'
import {ArticleRequestInterface} from 'src/app/shared/types/articleRequest.interface'
import {createArticleActions} from '../../store/actions'
import {selectIsSubmiting, selectValidationErrors} from '../../store/reducers'

@Component({
  selector: 'mc-create-article',
  templateUrl: './createArticle.component.html',
  standalone: true,
  imports: [ArticleFormComponent, CommonModule],
})
export class CreateArticleComponent {
  initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  }

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmiting),
    backendErrors: this.store.select(selectValidationErrors),
  })

  constructor(private store: Store) {}

  onSubmit(articleFormValues: ArticleFormValuesInterface): void {
    const request: ArticleRequestInterface = {
      article: articleFormValues,
    }
    this.store.dispatch(createArticleActions.createArticle({request}))
  }
}
