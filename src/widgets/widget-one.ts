import {Component, Input} from "@angular/core";
@Component({
    selector: "widget-one",
    styles:[`
    :host {
    border: 1px solid blue;
    display: flex;
    }
`],
    template:`    
    <div>{{message}}</div>
`
})

export class WidgetOne{
    selected = false;
    @Input() message: string;
}
