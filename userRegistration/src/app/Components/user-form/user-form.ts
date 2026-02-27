import { Component } from '@angular/core';
import { MatDialogModule } from "@angular/material/dialog";
import { MatAnchor } from "@angular/material/button";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';




@Component({
  selector: 'app-user-form',
  imports: [MatDialogModule, MatAnchor,MatFormFieldModule,MatSelectModule,MatCheckboxModule,MatInputModule,MatDatepickerModule,MatRadioModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {

}
