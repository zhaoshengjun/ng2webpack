import {Component} from "@angular/core";
@Component({
    selector: "widget-one",
    template:`
    <div *ngIf="!selected">One</div>
`
})

export class WidgetOne{
    selected = false;
}
