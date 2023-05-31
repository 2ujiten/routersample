import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmpregistryComponent } from './empregistry/empregistry.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EmpDetailComponent,
    EmployeeComponent,
    EmpregistryComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
  entryComponents: [AppComponent]
})
export class AppModule { 

  constructor(injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    customElements.define('test-element', el);
  }

  ngDoBootstrap() {}
}
