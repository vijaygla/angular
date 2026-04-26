// to make any component manually their must be atleast one file which is .ts file without this we cant make any components
import { Component } from "@angular/core";

@Component({
    selector: "app-abc",
    template: "<h1>This is self created component without cli command</h1>"
})

export class Abc {
    name : string = "vijay kumar";
    age : number = 20;
}
