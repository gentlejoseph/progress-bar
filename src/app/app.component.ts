import { AppService } from './app.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'progress-bar';
  barList: Array<any> = [];
  buttonList: Array<any> = [];
  limit: number;
  selectedBar = 0;
  private subscription: Subscription;

  constructor(private service: AppService) {}

  ngOnInit() {
    this.subscription = this.service.getProgressBar().subscribe(data => {
      this.barList = data.bars;
      this.buttonList = data.buttons;
      this.limit = data.limit;
    });
  }
  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  onButtonClick(btn: any) {
    let tempSelectedBar = this.barList[this.selectedBar];
    const valueAdded = (tempSelectedBar += btn);
    if (valueAdded >= 0) {
      this.barList[this.selectedBar] = tempSelectedBar;
    } else {
      this.barList[this.selectedBar] = 0;
    }
  }

  onOptionsSelected(index: number) {
    this.selectedBar = index;
  }
}
