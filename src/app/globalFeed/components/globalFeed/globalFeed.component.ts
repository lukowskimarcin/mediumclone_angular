import {CommonModule} from '@angular/common'
import {Component} from '@angular/core'
import { FeedComponent } from 'src/app/shared/components/feed/feed.component'

@Component({
  selector: 'mc-global-feed',
  templateUrl: './globalFeed.component.html',
  standalone: true,
  imports: [FeedComponent, CommonModule],
})
export class GlobalFeedComponent {}
