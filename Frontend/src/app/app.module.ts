import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { AddInternComponent } from './addIntern/addIntern.component';
import { InternServiceService } from './services/internService.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddInternComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [InternServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
