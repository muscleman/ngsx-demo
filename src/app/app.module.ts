import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';
import { NgxsModule } from '@ngxs/store';
import { AppRoutingModule } from './app-routing.module';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'

import { AppComponent } from './app.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { UserConfigurationState } from './store/state/form-state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { TableDemoComponent } from './table-demo/table-demo.component';
import { UserDataState } from './store/state/userdata-state';
import { HttpClientModule } from '@angular/common/http';
import { TableBeforeComponent } from './table-before/table-before.component';
// import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

@NgModule({
  declarations: [
    AppComponent,
    FormsDemoComponent,
    TableDemoComponent,
    TableBeforeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([UserConfigurationState, UserDataState]),
    NgxsFormPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    // NgxsStoragePluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({disabled: false}),
    BrowserAnimationsModule,
    AppMaterialModule,
    FormsModule,
		ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
