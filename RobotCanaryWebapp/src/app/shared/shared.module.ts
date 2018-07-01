import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';

const components = [
  HeaderComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomMaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components,
    FormsModule,
    CustomMaterialModule,
    FlexLayoutModule
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ]
})
export class SharedModule { }
