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
import { NgxsStoragePluginModule, StorageOption } from '@ngxs/storage-plugin';
import { NgxsWebsocketPluginModule } from '@ngxs/websocket-plugin';
import { MessagesState } from './store/state/message-state';
import { environment } from 'src/environments/environment';

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
    // NgxsStoragePluginModule.forRoot({
		// 	key: ['user.userConfigurationForm', UserDataState /*, UserConfigurationState*/],
		// 	storage: StorageOption.SessionStorage, /*StorageOption.LocalStorage <= default*/
		// }),
    NgxsModule.forRoot([UserConfigurationState, UserDataState, MessagesState]),
    NgxsFormPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({ disabled: true /*environment.production*/ }),
    // NgxsWebsocketPluginModule.forRoot({
    //   url: 'ws://localhost:4300'
    // }),
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
