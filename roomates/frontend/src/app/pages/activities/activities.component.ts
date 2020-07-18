import {Component, OnInit} from '@angular/core';
import {Activity} from "../../models/Activity";
import {SelectionModel} from "@angular/cdk/collections";
import {RoommatesService} from "../../services/roommates.service";

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  displayedColumns: string[] = ['select', 'name', 'points'];
  displayedColumnsCompleted: string[] = ['name', 'points', 'completedBy'];
  dataSource : Activity[];
  dataSourceCompleted: Activity[];
  selection = new SelectionModel<Activity>(true, []);

  constructor(private roommatesService: RoommatesService) { }

  ngOnInit() {
    this.initializeActivities();
  }

  private initializeActivities() {
    this.roommatesService.getActivities().subscribe((data) => {
      this.dataSourceCompleted = data.filter(activity => activity.completed);
      this.dataSource = data.filter(activity => !activity.completed);
    });
  }

  completeActivities() {
    console.log("tuk sme");
    const activityIds = this.selection.selected.map(selectedActivity => selectedActivity._id);
    this.roommatesService.completeActivities(activityIds).subscribe( () => {
      this.initializeActivities();
      this.selection.clear();
    })
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.forEach(row => this.selection.select(row));
  }

}
