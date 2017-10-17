import {LOCALE_ID, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {EchartComponent} from "./echarts.component";
import {AngularEchartsModule} from 'ngx-echarts';

@NgModule({
  declarations: [
    EchartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AngularEchartsModule
  ],
  providers: [
  ],
  bootstrap: [EchartComponent],
  entryComponents: [
    EchartComponent
  ]
})
export class EchartModule {

}
