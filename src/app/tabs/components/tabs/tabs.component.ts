import {AfterContentInit, Component, ContentChildren, QueryList} from '@angular/core';
import {TabComponent} from '../tab/tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  activeTab: TabComponent;


  ngAfterContentInit() {
    this.activeTab = this.tabs.first;

    this.tabs.changes.subscribe(
      (changedTabs: QueryList<TabComponent>) => {
        if (!changedTabs.find((item) => {
          return item === this.activeTab;
        })) {
          this.activeTab = changedTabs.first;
        }
      }
    );
  }
}

