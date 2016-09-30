import {NgModule} from "@angular/core";
import {WidgetOne} from "./widget-one";
import {WidgetTwo} from "./widget-two";
import { CommonModule } from "@angular/common";
import {WidgetThree} from "./widget-three";

@NgModule({
    imports: [CommonModule],
    declarations:[WidgetOne,WidgetTwo, WidgetThree],
    entryComponents:[WidgetThree],
    exports:[WidgetOne, CommonModule, WidgetTwo, WidgetThree]
})

export class WidgetModule{}