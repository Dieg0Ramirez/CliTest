import { NgModule } from "@angular/core";
import {  PagesShared } from "../shared/shared.module";
import { PAGES_ROUTES } from "./pages.routes";
//Temporal
import { FormsModule} from '@angular/forms';

//ng-chars
import { ChartsModule } from 'ng2-charts';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ProsgressComponent } from "./prosgress/prosgress.component";
import { Graficas1Component } from "./graficas1/graficas1.component";
import { PagesComponent } from "./pages.component";
//temporal
import { IncrementadorComponent } from "../componets/incrementador/incrementador.component";
import { GraficoDonaComponent } from "../componets/grafico-dona/grafico-dona.component";


@NgModule({

    declarations:[
        DashboardComponent,
        ProsgressComponent,
        Graficas1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    exports:[
        DashboardComponent,
        ProsgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    imports:[
        PagesShared,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
        
    ]
})
export class PagesModule{}
