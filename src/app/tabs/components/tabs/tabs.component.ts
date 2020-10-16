import {AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, QueryList} from '@angular/core';
import {TabComponent} from '../tab/tab.component';
import {BaseComponent} from '../../../shared/base-component';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent extends BaseComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  activeTab: TabComponent;


  constructor(private readonly _cdRef: ChangeDetectorRef) {
    super();
  }


  ngAfterContentInit() {
    this.activeTab = this.tabs.first;

    this.tabs.changes.pipe(
      takeUntil(this._onDestroy$)
    ).subscribe(
      (changedTabs: QueryList<TabComponent>) => {
        if (!changedTabs.find((item) => {
          return item === this.activeTab;
        })) {
          this.activeTab = changedTabs.first;
        }

        this._cdRef.markForCheck();
      }
    );
  }


  setActiveTab(tab: TabComponent) {
    this.activeTab = tab;
  }
}

