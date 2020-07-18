import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './pages/main/main.component';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import { ActivitiesComponent } from './pages/activities/activities.component';
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {HttpClientModule} from "@angular/common/http";
import {MatMenuModule} from "@angular/material/menu";
import { SettingsComponent } from './pages/settings/settings.component';
import { AddActivityModalComponent } from './components/add-activity-modal/add-activity-modal.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import { DeleteActivityConfirmationModalComponent } from './components/delete-activity-confirmation-modal/delete-activity-confirmation-modal.component';
import { LoginComponent } from './pages/login/login.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatSelectModule} from "@angular/material/select";
import { AddRoomModalComponent } from './components/add-room-modal/add-room-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ActivitiesComponent,
    SettingsComponent,
    AddActivityModalComponent,
    DeleteActivityConfirmationModalComponent,
    LoginComponent,
    AddRoomModalComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatCardModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatListModule,
        MatTableModule,
        MatCheckboxModule,
        MatMenuModule,
        MatFormFieldModule,
        FormsModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatInputModule,
        MatTabsModule,
        MatSelectModule
    ],
  entryComponents: [AddActivityModalComponent, DeleteActivityConfirmationModalComponent, AddRoomModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
