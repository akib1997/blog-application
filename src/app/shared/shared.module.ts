import { NgModule } from "@angular/core";
import { GoBackDirective } from "./directives/goBack.directive";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [GoBackDirective],
  exports: [GoBackDirective]
})
export class SharedModule {}
