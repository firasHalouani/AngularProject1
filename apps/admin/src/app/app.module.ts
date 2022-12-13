import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { NxWelcomeComponent } from './nx-welcome.component'
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import {CardModule} from 'primeng/card';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { CategoriesService, UsersService } from '@firas/products';
import {InputTextModule} from 'primeng/inputtext'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {ToastModule} from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api'
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ColorPickerModule} from 'primeng/colorpicker';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { ProductsFormComponent } from './pages/products/products-form/products-form.component';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputSwitchModule} from 'primeng/inputswitch';
import {DropdownModule} from 'primeng/dropdown';
import {EditorModule} from 'primeng/editor';
import { CategoriesListComponent } from './pages/categories/categories-list/categories-list.component';
import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
import { UsersFormComponent } from './pages/users/users-form/users-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { OrdersListComponent } from './pages/orders/orders-list/orders-list.component';

import { TagModule } from 'primeng/tag';
import { AuthGuard, UserModule } from '@firas/user';
import { OrdersDetailComponent } from './pages/orders/orders-detail/orders-detail.component';
import {FieldsetModule} from 'primeng/fieldset';


const UX_MODULE = [
  CardModule,
  ToolbarModule,
  ButtonModule,
  TableModule,
  InputTextModule,
  ToastModule,
  ConfirmDialogModule,
  ColorPickerModule,
  InputNumberModule,
  InputTextareaModule,
  InputSwitchModule,
  DropdownModule,
  EditorModule,
  TagModule,
  FieldsetModule
]
//"firas halouani"
const routes: Routes = [
    //"firas halouani"
    { path: '', component: ShellComponent ,canActivate:[AuthGuard],
      children:[
        {path:'',component:DashboardComponent},
        {path:'categories',component:CategoriesListComponent},
        {path:'categories/form',component:CategoriesFormComponent},
        {path:'categories/form/:id',component:CategoriesFormComponent},

        {path:'products',component:ProductListComponent},
        {path:'products/form',component:ProductsFormComponent},
        {path:'products/form/:id',component:ProductsFormComponent},

        {path: 'users',component:UsersListComponent },
        {path: 'users/form',component: UsersFormComponent},
        {path: 'users/form/:id',component: UsersFormComponent},

        {path: 'orders',component:OrdersListComponent },
        {path: 'orders/:id',component:OrdersDetailComponent },

      ]
    },
]
@NgModule({
    declarations: [AppComponent, NxWelcomeComponent, DashboardComponent, ShellComponent, SidebarComponent, CategoriesListComponent, CategoriesFormComponent, ProductListComponent, ProductsFormComponent,UsersListComponent, UsersFormComponent, OrdersListComponent, OrdersDetailComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ToastModule,
        RouterModule.forRoot(routes, {
            initialNavigation: 'enabledBlocking',
        },),
        UserModule,
        ...UX_MODULE //create a copie
      ],
    providers: [CategoriesService,UserModule, MessageService,ConfirmationService],
    bootstrap: [AppComponent],
})
export class AppModule {}
