import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { CustomMaterialModule } from './material.module';

const components = [
  HeaderComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CustomMaterialModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components,
    FormsModule
  ]
})
export class SharedModule { }
