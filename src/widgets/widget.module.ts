import {NgModule} from "@angular/core";
import {WidgetOne} from "./widget-one";
import { CommonModule } from "@angular/common";
import {WidgetTwo} from "./widget-two";
@NgModule({
    imports: [CommonModule],
    declarations:[WidgetOne,WidgetTwo],
    exports:[WidgetOne, CommonModule, WidgetTwo]
})

export class WidgetModule{}