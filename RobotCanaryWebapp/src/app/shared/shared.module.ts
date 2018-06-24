import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';

const components = [
  HeaderComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule
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
