import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input'
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';


const MATERIALCOMPONENTS = [
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
  exports: [MATERIALCOMPONENTS],
  imports: [MATERIALCOMPONENTS],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]

})
export class MaterialModule { }
