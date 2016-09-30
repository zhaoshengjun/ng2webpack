import { NgModule } from '@angular/core';
import {SimpleService} from "./simple-service";
@NgModule({})
export class ServiceModule {
    static forRoot() {
        return {
            ngModule: ServiceModule,
            providers: [SimpleService]
        }
    }
}

export { SimpleService }