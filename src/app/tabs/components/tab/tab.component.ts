import {Component, ContentChild, TemplateRef, ViewChild} from '@angular/core';
import {TabTitleComponent} from '../tab-title/tab-title.component';
import {LazyLoadDirective} from '../../directives/lazy-load.directive';
import {TemplateDirective} from '../../directives/template.directive';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent {
  @ContentChild(TabTitleComponent) title: TabTitleComponent;
  @ContentChild(LazyLoadDirective) lazyLoadedContentRef: LazyLoadDirective;
  @ViewChild(TemplateDirective, {read: TemplateRef}) contentTemplate: TemplateRef<any>;
}

