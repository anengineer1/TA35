import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroDataComponent } from './intro-data/intro-data.component';
import { OutputDataComponent } from './output-data/output-data.component';

@NgModule({
	declarations: [
		AppComponent,
		IntroDataComponent,
		OutputDataComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
