import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageService } from './login-page/login-page.service';
import { LoginPageComponent } from './login-page/login-page.component';

import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { FormsComponent } from './forms/forms.component';
import { SettingsComponent } from './settings/settings.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomeComponent,
    QuizComponent,
    FormsComponent,
    SettingsComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  providers: [
    LoginPageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
