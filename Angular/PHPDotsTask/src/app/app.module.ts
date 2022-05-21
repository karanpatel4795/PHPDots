import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClassComponent } from './add-class/add-class.component';
import { FormsModule } from '@angular/forms';
import { ListClassComponent } from './list-class/list-class.component';
import { ToastrModule } from 'ngx-toastr';
import { DataTablesModule } from 'angular-datatables';
import { EditClassComponent } from './edit-class/edit-class.component';

@NgModule({
  declarations: [
    AppComponent,
    AddClassComponent,
    ListClassComponent,
    EditClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
