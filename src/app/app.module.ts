import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Firebase
// import { AngularFireModule } from '@angular/fire';

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
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';


// Http
import { HttpClientModule } from '@angular/common/http';

// Components
import { TextInputComponent } from './view-evaluation/text-input/text-input.component';
import { MainContainerComponent } from './view-evaluation/main-container/main-container.component';
import { AudioInputComponent } from './view-evaluation/audio-input/audio-input.component';
import { TranscribeAudioOutputComponent } from './view-evaluation/transcribe-audio-output/transcribe-audio-output.component';
import { GeneratedTextComponent } from './view-evaluation/generated-text/generated-text.component';
import { ProblemDisplayComponent } from './view-evaluation/problem-display/problem-display.component';
import { FeedbackFormComponent } from './view-evaluation/feedback-form/feedback-form.component';
import { SelectorProblemsComponent } from './view-evaluation/selector-problems/selector-problems.component';
import { ViewLoginComponent } from './view-login/view-login.component';
import { NavbarComponent } from './navbar/navbar.component';




@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    MainContainerComponent,
    AudioInputComponent,
    TranscribeAudioOutputComponent,
    GeneratedTextComponent,
    ProblemDisplayComponent,
    FeedbackFormComponent,
    SelectorProblemsComponent,
    ViewLoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    // AngularFireModule,
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
    MatListModule,
    MatExpansionModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
