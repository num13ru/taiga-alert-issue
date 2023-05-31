import { Component, Inject } from '@angular/core';
import { TuiAlertService } from '@taiga-ui/core';
import { TuiPushService } from '@taiga-ui/kit';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'taiga-alert-issue';
  constructor(
    @Inject(TuiPushService) protected readonly push: TuiPushService,
    @Inject(TuiAlertService) protected readonly alert: TuiAlertService,
  ) { }

  onClickPush(): void {
    this.push
      .open('This is <strong>heavy</strong>!', {
        heading: 'Great Scott!',
        type: 'Quote',
        icon: 'tuiIconVideoLarge',
        buttons: ['Roads?', '1.21 Gigawatts!?!'],
      })
      .pipe(
        take(1),
        switchMap(button => this.alert.open(button)),
      )
      .subscribe();
  }

  onClickAlert(): void {
    this.alert.open('alert').subscribe();
  }
}
