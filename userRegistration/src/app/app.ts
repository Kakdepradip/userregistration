import { Component, signal } from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { UserForm } from './Components/user-form/user-form';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatIconModule,MatButtonModule,MatToolbarModule,MatDialogModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('userRegistration');

 
  constructor(private _dialog:MatDialog) {

  }
  openUserForm(){
this._dialog.open(UserForm);
  }
}
