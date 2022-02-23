import { Component, Input } from "@angular/core";


@Component({
    selector: "ms-forbusiness",
    templateUrl: "forbusiness.component.html",
    styleUrls: ["forbusiness.component.css"]
})
export class ForBusinessComponent {
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