import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Firebase
// import { AngularFireModule } from '@angular/fire';

// Markdown
import { MarkdownModule } from 'ngx-markdown';

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
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';

// Http
import { HttpClientModule } from '@angular/common/http';

// Components
import { TextInputComponent } from './components/view-evaluation/text-input/text-input.component';
import { MainContainerComponent } from './components/view-evaluation/main-container/main-container.component';
import { AudioInputComponent } from './components/view-evaluation/audio-input/audio-input.component';
import { AudioOutputComponent } from './components/view-evaluation/audio-output/audio-output.component';
import { TextOutputComponent } from './components/view-evaluation/text-output/text-output.component';
import { ProblemDisplayComponent } from './components/view-evaluation/problem-display/problem-display.component';
import { FeedbackFormComponent } from './components/view-evaluation/feedback-form/feedback-form.component';
import { ProblemSelectorComponent } from './components/view-evaluation/problem-selector/problem-selector.component';
import { ViewLoginComponent } from './components/view-login/view-login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PromptSelectorComponent } from './components/view-evaluation/prompt-selector/prompt-selector.component';
import { PromptDisplayComponent } from './components/view-evaluation/prompt-display/prompt-display.component';




@NgModule({
  declarations: [
    AppComponent,
    TextInputComponent,
    MainContainerComponent,
    AudioInputComponent,
    AudioOutputComponent,
    TextOutputComponent,
    ProblemDisplayComponent,
    FeedbackFormComponent,
    ProblemSelectorComponent,
    ViewLoginComponent,
    NavbarComponent,
    PromptSelectorComponent,
    PromptDisplayComponent
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
    MatTooltipModule,
    MatChipsModule,
    MatRadioModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
