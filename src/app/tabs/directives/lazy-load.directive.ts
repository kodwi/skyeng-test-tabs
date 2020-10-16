import {Directive, TemplateRef} from '@angular/core';

@Directive({
  selector: '[lazyLoad]'
})
export class LazyLoadDirective {
  constructor(public readonly template: TemplateRef<any>) {
  }
}


