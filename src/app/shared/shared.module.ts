import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedAppModule } from '@app/shared/shared-app.module';
import { SharedLibModule } from '@app/shared/shared-lib.module'

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedAppModule,
    SharedLibModule
  ],
  exports: [
    CommonModule,
    SharedAppModule,
    SharedLibModule
  ]
})
export class SharedModule { }
