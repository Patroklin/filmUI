import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule }  from 'primeng/inputtext';
import { ButtonModule }  from 'primeng/button';
import { TableModule }  from 'primeng/table';
import { DialogModule }  from 'primeng/dialog';
import {DataTableModule} from "primeng/primeng";
import { FilmsService } from './services/films.service';
import { FilmsComponent } from './films/films.component';

@NgModule({
    declarations: [
        FilmsComponent
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
        DataTableModule
    ],
    providers: [FilmsService],
    bootstrap: [FilmsComponent]
})
export class AppModule { }
