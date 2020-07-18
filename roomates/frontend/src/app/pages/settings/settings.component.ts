import { Component, OnInit } from '@angular/core';
import {Activity} from "../../models/Activity";
import {RoommatesService} from "../../services/roommates.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddActivityModalComponent} from "../../components/add-activity-modal/add-activity-modal.component";
import {DeleteActivityConfirmationModalComponent} from "../../components/delete-activity-confirmation-modal/delete-activity-confirmation-modal.component";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  allActivities: Activity[];
  displayedColumns: string[] = ['name', 'points', 'delete'];
  name: string;
  points: number;

  constructor(private roommatesService: RoommatesService, private dialog: MatDialog) { }

  ngOnInit() {
    this.initializeActivities();
  }

  private initializeActivities() {
    this.roommatesService.getActivities().subscribe(data => this.allActivities = data);
  }

  addActivity() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "300px";
    const dialogRef = this.dialog.open(AddActivityModalComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => this.roommatesService.addActivity(data.name, data.points).subscribe(() => this.initializeActivities())
    );
  }

  deleteActivity(activity: Activity) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "300px";
    const dialogRef = this.dialog.open(DeleteActivityConfirmationModalComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(confirmed => {
        if (confirmed) {
          this.roommatesService.deleteActivity(activity._id).subscribe(() => this.initializeActivities());
        }
      });
  }

}
