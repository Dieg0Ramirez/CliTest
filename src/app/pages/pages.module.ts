import { NgModule } from "@angular/core";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProsgressComponent } from "./prosgress/prosgress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from "./pages.component";
import {  PagesShared } from "../shared/shared.module";
import { PAGES_ROUTES } from "./pages.routes";





@NgModule({

    declarations:[
        DashboardComponent,
        ProsgressComponent,
        Graficas1Component,
        PagesComponent,
    ],
    exports:[
        DashboardComponent,
        ProsgressComponent,
        Graficas1Component,
        PagesComponent,
    ],
    imports:[
        PagesShared,
        PAGES_ROUTES
    ]
})
export class PagesModule{}
