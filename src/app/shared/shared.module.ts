import { NgModule } from "@angular/core";

import { NopagesfoundComponent } from "../pages/nopagesfound/nopagesfound.component";
import { HearderComponent } from "./hearder/hearder.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BreadcrumbsComponent } from "./breadcrumbs/breadcrumbs.component";




@NgModule({
    
    declarations:[
        NopagesfoundComponent,
        HearderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagesfoundComponent,
        
    ],
    exports:[
        NopagesfoundComponent,
        HearderComponent,
        SidebarComponent,
        BreadcrumbsComponent,
        NopagesfoundComponent,
    ]


})
export class PagesShared{}