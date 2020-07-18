import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-activity-confirmation-modal',
  templateUrl: './delete-activity-confirmation-modal.component.html',
  styleUrls: ['./delete-activity-confirmation-modal.component.scss']
})
export class DeleteActivityConfirmationModalComponent {

  constructor(private dialogRef: MatDialogRef<DeleteActivityConfirmationModalComponent>) { }

  close() {
    this.dialogRef.close()
  }

}
