import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

// Http
import { HttpClientModule } from '@angular/common/http';

// Components
import { TextInputComponent } from './text-input/text-input.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { AudioInputComponent } from './audio-input/audio-input.component';
import { TextOutputComponent } from './text-output/text-output.component';
import { TranscribeAudioComponent } from './transcribe-audio/transcribe-audio.component';
import { TranscribeAudioOutputComponent } from './transcribe-audio-output/transcribe-audio-output.component';




@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    MainContainerComponent,
    AudioInputComponent,
    TextOutputComponent,
    TranscribeAudioComponent,
    TranscribeAudioOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSliderModule,
    MatCardModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
