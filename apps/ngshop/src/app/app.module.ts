import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router'
import {UiModule} from '@firas/ui'
import {AccordionModule} from 'primeng/accordion';

import { AppComponent } from './app.component'
import { NxWelcomeComponent } from './nx-welcome.component'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { ProductListComponent } from './pages/product-list/product-list.component'
import { HeaderComponent } from './shared/header/header.component'
import { FooterComponent } from './shared/footer/footer.component'
const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'products', component: ProductListComponent },
]
@NgModule({
    declarations: [
        AppComponent,
        NxWelcomeComponent,
        HomePageComponent,
        ProductListComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [BrowserModule,BrowserAnimationsModule, RouterModule.forRoot(routes),UiModule,AccordionModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
