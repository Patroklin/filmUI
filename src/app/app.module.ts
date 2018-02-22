import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule }  from 'primeng/inputtext';
import { ButtonModule }  from 'primeng/button';
import { TableModule }  from 'primeng/table';
import { DialogModule }  from 'primeng/dialog';
import {DataTableModule, SlideMenuModule} from "primeng/primeng";
import { FilmsService } from './services/films.service';
import { FilmsComponent } from './films/films.component';
import {SlideMenu} from "./controller/slide-menu";
import { FilmFormComponent } from './film-form/film-form.component';
import { FilmRoutingModule } from './app-routing/app-routing.module';
import { MainComponent } from './main/main.component';
import { UsersComponent } from './users/users/users.component';
import {UsersService} from "./services/users.service";

@NgModule({
    declarations: [
        FilmsComponent,
        FilmFormComponent,
        MainComponent,
        UsersComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        DataTableModule,
        SlideMenuModule,
        FilmRoutingModule
    ],
    providers: [FilmsService, SlideMenu, UsersService],
    bootstrap: [MainComponent]
})
export class AppModule { }
