import { Component, Input } from "@angular/core";


@Component({
    selector: "ms-linkscomponent",
    templateUrl: "links.component.html",
    styleUrls: ["links.component.css"]
})
export class LinksComponent {
    @Input() img: String;
    @Input() link: String;

    constructor() {
        this.img = "";
        this.link = "";
    }
}