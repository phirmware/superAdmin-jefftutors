import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthguardService } from './authguard.service';
import { MatButtonModule } from '@angular/material/button';
import { AppnavModule } from './shared/components/appnav/appnav.module';
import { AuthInterceptor } from './shared/services/auth.interceptor.service';

const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', loadChildren: './overview/overview.module#OverviewModule', canActivate: [AuthguardService], },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: 'customers', loadChildren: './customers/customers.module#CustomersModule', canActivate: [AuthguardService] },
  { path: 'courses', loadChildren: './courses/courses.module#CoursesModule', canActivate: [AuthguardService] },
  { path: 'subscription', loadChildren: './subscription/subscription.module#SubscriptionModule', canActivate: [AuthguardService] },
  { path: 'codes', loadChildren: './rechargecodes/rechargecodes.module#RechargecodesModule', canActivate: [AuthguardService] }
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    AppnavModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
