import "../../polyfill.ts";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {EchartModule} from "./echarts.module";

platformBrowserDynamic().bootstrapModule(EchartModule).catch(error => {console.log('Unable to bootstrap module: ' + error.message)});
