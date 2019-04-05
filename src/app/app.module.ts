import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ROUTING } from './app.routing';
import { RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UniversityShortlistingComponent } from './dashboard/university-shortlisting/university-shortlisting.component';
import { Interceptor } from './services/intercepter.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonService, LoaderService } from './services/common.service';
import { AuthService } from './services/auth.service';
import { ForexHelpComponent } from './dashboard/forex-help/forex-help.component';
import { AirtravelHelpComponent } from './dashboard/airtravel-help/airtravel-help.component';
import { LoanHelpComponent } from './dashboard/loan-help/loan-help.component';
import { AccomodationHelpComponent } from './dashboard/accomodation-help/accomodation-help.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { MockVisaComponent } from './dashboard/mock-visa/mock-visa.component';
import { UniversityDetailComponent } from './university-detail/university-detail.component';
import { MentorListComponent } from './dashboard/mentor-list/mentor-list.component';
import { StudentQueryComponent } from './dashboard/student-query/student-query.component';
import { CallthatmentorComponent } from './callthatmentor/callthatmentor.component';
import { GoogleloginComponent } from './googlelogin/googlelogin.component';
import { AppointmentsComponent } from './dashboard/appointments/appointments.component';
import { AppointmentsformentorComponent } from './dashboard/appointmentsformentor/appointmentsformentor.component';
import { BlogopenComponent } from './blogopen/blogopen.component';
import { SopresumelorComponent } from './dashboard/sopresumelor/sopresumelor.component';
import { EventsComponent } from './events/events.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { InstructorComponent } from './instructor/instructor.component';
import { NotloggeddashboardComponent } from './notloggeddashboard/notloggeddashboard.component';
import { Buycourse1Component } from './instructors/buycourse1/buycourse1.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CoursesComponent,
    BlogComponent,
    ContactComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    UniversityShortlistingComponent,
    ForexHelpComponent,
    AirtravelHelpComponent,
    LoanHelpComponent,
    AccomodationHelpComponent,
    InstructorsComponent,
    ProfileComponent,
    MockVisaComponent,
    UniversityDetailComponent,
    MentorListComponent,
    StudentQueryComponent,
    CallthatmentorComponent,
    GoogleloginComponent,
    AppointmentsComponent,
    AppointmentsformentorComponent,
    BlogopenComponent,
    SopresumelorComponent,
    EventsComponent,
    ResetpassComponent,
    InstructorComponent,
    NotloggeddashboardComponent,
    Buycourse1Component
  ],
  imports: [
    BrowserModule, 
    ROUTING,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ CommonService,
    AuthService, LoaderService,
    {provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
