import { Component, Input } from "@angular/core";


@Component({
    selector: "ms-surface",
    templateUrl: "surface.component.html",
    styleUrls: ["surface.component.css"]
})
export class SurfaceComponent {
    @Input() img: String;
    @Input() sos: String;
    @Input() description: String;
    @Input() link1: String;
    @Input() link2: String;
   
    constructor() {
        this.img = "";
        this.sos = "XXXXX";
        this.description = "Missing Description";
        this.link1 = "Put the link";
        this.link2 = "";
        
    }

}