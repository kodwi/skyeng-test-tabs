import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabContentComponent implements OnInit, OnDestroy {
  ngOnInit() {
    console.log('content init');
  }


  ngOnDestroy() {
    console.log('content destroy');
  }
}

