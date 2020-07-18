import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Activity} from "../models/Activity";
import {Observable} from "rxjs";
import {Room} from "../models/Room";

@Injectable({
  providedIn: 'root'
})
export class RoommatesService {

  private readonly domain;

  constructor(private http: HttpClient) {
    this.domain = 'http://localhost:3000'
  }

  signUp(username: string, email: string, password: string, roomId: number) {
    return this.http.post(`${this.domain}/users`, {username: username, email: email, password: password, roomId: roomId});
  }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.domain}/rooms`)
  }

  createRoom(name: string) {
    return this.http.post(`${this.domain}/rooms`, {name});
  }

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.domain}/activities`);
  }

  completeActivities(activityIds: number[]) {
    return this.http.patch(`${this.domain}/activities`, {activityIds});
  }

  addActivity(name: string, points: number) {
    return this.http.post(`${this.domain}/activities`, {name, points});
  }

  deleteActivity(activityId: number) {
    return this.http.delete(`${this.domain}/activities/${activityId}`)
  }
}
