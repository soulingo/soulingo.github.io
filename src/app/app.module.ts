import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { icons, LucideAngularModule } from 'lucide-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './hero.component';
import { HowItWorksComponent } from './how-it-works.component';
import { WaveAnimationComponent } from './wave-animation.component';
import { FeaturesComponent } from './features.component';
import { PrivacySecurityComponent } from './privacy-security.component';
import { WaitlistComponent } from './waitlist.component';
import { FooterComponent } from './footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HowItWorksComponent,
    WaveAnimationComponent,
    FeaturesComponent,
    PrivacySecurityComponent,
    WaitlistComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick(icons)  ,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
