import {Component} from "@angular/core";
@Component({
    selector: "widget-two",
    styles:[`
    :host {
        display: flex;
        flex-direction: column;
        border: 3px solid red;
    }
`],
    template: `
    <div>Two</div>
    <ng-content select="[header]"></ng-content>
    <ng-content select="[content]"></ng-content>
    <ng-content select="[widget]"></ng-content>
    <ng-content select="[footer]"></ng-content>    
`
})

export class WidgetTwo {

}