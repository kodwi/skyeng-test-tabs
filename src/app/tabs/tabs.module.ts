import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabsComponent} from './components/tabs/tabs.component';
import {TabComponent} from './components/tab/tab.component';
import {TabTitleComponent} from './components/tab-title/tab-title.component';
import {TabContentComponent} from './components/tab-content/tab-content.component';
import {TemplateDirective} from './directives/template.directive';
import {LazyLoadDirective} from './directives/lazy-load.directive';


@NgModule({
  declarations: [
    TabsComponent,
    TabComponent,
    TabTitleComponent,
    TabContentComponent,
    TemplateDirective,
    LazyLoadDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabsComponent,
    TabComponent,
    TabTitleComponent,
    TabContentComponent,
    LazyLoadDirective
  ]
})
export class TabsModule {
}
