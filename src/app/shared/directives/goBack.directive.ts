import { Directive, HostListener } from '@angular/core';
import { NavigateService } from 'src/app/core/services/navigate/navigate.service';

@Directive({
  selector: '[goBack]'
})
export class GoBackDirective {

  constructor(private navigateService: NavigateService) { }

  @HostListener("click")
  onClick(): void {
    this.navigateService.back();
  }

}
