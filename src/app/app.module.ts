import { NgModule } from '@angular/core';


import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';



import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AggiungiVideoComponent } from './componenti/aggiungi-video/aggiungi-video.component';
import { FotoComponent } from './componenti/foto/foto.component';
import { HomeComponent } from './componenti/home/home.component';
import { FormsModule } from '@angular/forms';

import { provideHttpClient } from '@angular/common/http';
import {MatTreeModule} from '@angular/material/tree';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HighlightsDirective } from './direttive/highlights.directive';

@NgModule({
  declarations: [
    AppComponent,
    AggiungiVideoComponent,
    FotoComponent,
    HomeComponent,
    HighlightsDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatSelectModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
     MatInputModule,
     ReactiveFormsModule,
     FormsModule,
     MatTreeModule,
     MatProgressBarModule,
     MatDividerModule
  
    
    
    
    
  ],
  providers: [
   
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
