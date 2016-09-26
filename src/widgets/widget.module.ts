import {NgModule} from "@angular/core";
import {WidgetOne} from "./widget-one";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule],
    declarations:[WidgetOne],
    exports:[WidgetOne, CommonModule]
})

export class WidgetModule{}