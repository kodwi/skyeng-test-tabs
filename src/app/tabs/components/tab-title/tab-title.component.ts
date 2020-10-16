import {ChangeDetectionStrategy, Component, TemplateRef, ViewChild} from '@angular/core';
import {TemplateDirective} from '../../directives/template.directive';

@Component({
  selector: 'tab-title',
  templateUrl: './tab-title.component.html',
  styleUrls: ['./tab-title.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabTitleComponent {
  @ViewChild(TemplateDirective, {read: TemplateRef}) template: TemplateRef<any>;
}
