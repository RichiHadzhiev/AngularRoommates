export class Activity {
  _id: number;
  name: string;
  points: number;
  completed: boolean;

  constructor(_id: number, name: string, points: number, completed: boolean) {
    this._id = _id;
    this.name = name;
    this.points = points;
    this.completed = completed;
  }
}
