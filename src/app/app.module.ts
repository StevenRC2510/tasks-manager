import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';

import { appReducers } from '@store/app.state';
import { TasksModule } from '@modules/tasks/tasks.module';
import { LayoutComponent } from '@components/layout/layout.component';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    LayoutComponent,
    TasksModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
