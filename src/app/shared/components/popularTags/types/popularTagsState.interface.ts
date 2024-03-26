import {PopularTagType} from 'src/app/shared/types/popularTage.type'

export interface PopularTagStateInterface {
  isLoading: boolean
  error: string | null
  data: PopularTagType[] | null
}
