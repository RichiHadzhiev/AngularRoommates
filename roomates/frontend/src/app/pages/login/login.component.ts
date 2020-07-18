import { Component, OnInit } from '@angular/core';
import {RoommatesService} from "../../services/roommates.service";
import {Room} from "../../models/Room";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddRoomModalComponent} from "../../components/add-room-modal/add-room-modal.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  allRooms: Room[];
  loginForm: FormGroup;
  signInForm: FormGroup;

  constructor(private roommatesService: RoommatesService, private dialog: MatDialog) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
    this.signInForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      room: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.initializeRooms();
  }

  createRoom() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "300px";
    const dialogRef = this.dialog.open(AddRoomModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => this.roommatesService.createRoom(data.name).subscribe(() => this.initializeRooms())
    );
  }

  signUp() {
    let formValue = this.signInForm.value;
    this.roommatesService.signUp(formValue.username, formValue.email, formValue.password, formValue.room).subscribe(data =>
    console.log(data));
  }

  private initializeRooms() {
    this.roommatesService.getRooms().subscribe(data => this.allRooms = data);
  }
}
