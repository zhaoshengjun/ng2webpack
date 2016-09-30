import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from "@angular/core";
import {SimpleService} from "../services/service.module";
import {WidgetThree} from "../widgets/widget-three";

@Component({
    selector:'home',
    template:`
    <button (click)="onClick()">Add Component</button>
    <button (click)="onMove()">Move Component</button>    
    <div #container></div>
    <!--<div>I am a home component</div>-->
    <!---->
    <!--<widget-two>-->
        <!--<h3 footer>Footer</h3>-->
        <!--<h2 header>Title</h2>-->
        <!--<widget-one [message]="simpleService.message" widget></widget-one>-->
        <!--<div content>content</div>-->
    <!--</widget-two>-->
    
`
})

export class HomeComponent{
    @ViewChild('container', {read: ViewContainerRef} ) container;
    widgetRef;
    constructor(private simpleService: SimpleService,
                private resolver: ComponentFactoryResolver){

    }

    ngAfterContentInit() {
        const componentTemplate = this.resolver.resolveComponentFactory(WidgetThree);
        for (var i = 0; i < 10; i++) {
            this.container.createComponent(componentTemplate);
        }

        this.widgetRef = this.container.createComponent(componentTemplate);
        this.widgetRef.instance.message="new message";
    }

    onClick() {
        const componentTemplate = this.resolver.resolveComponentFactory(WidgetThree);

        let widgetRef = this.container.createComponent(componentTemplate, 3);
        widgetRef.instance.message="I am the fourth one";
    }

    onMove() {
        const randomIndex = Math.floor(Math.random() * this.container.length);
        this.container.move(this.widgetRef.hostView, randomIndex)
    }
};