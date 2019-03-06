import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { CoursesComponent } from './courses/courses.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UniversityShortlistingComponent } from './dashboard/university-shortlisting/university-shortlisting.component';
import { ForexHelpComponent } from './dashboard/forex-help/forex-help.component';
import { LoanHelpComponent } from './dashboard/loan-help/loan-help.component';
import { AirtravelHelpComponent } from './dashboard/airtravel-help/airtravel-help.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { AccomodationHelpComponent } from './dashboard/accomodation-help/accomodation-help.component';
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


 
export const AppRoutes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
  //  { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'plansandpricing', component: InstructorsComponent },
    {path:'instructor',component:InstructorComponent},
    { path: 'login/:id', component: LoginComponent },
    { path: 'signup/:id', component: SignupComponent },
    {path:'single_blog/:id',component:BlogopenComponent},
    {path:'events',component:EventsComponent},
    {path:'not_logged_dashboard',component:NotloggeddashboardComponent},
    {path:'googlelogin/:email/:name/:id',component:GoogleloginComponent},
    {path:"callthatmentor/:email",component:CallthatmentorComponent},
    {path:"reset/:string/:email",component:ResetpassComponent},
    { path: 'universitydetail/:id/:image', component: UniversityDetailComponent },
    { path: 'dashboard', component: DashboardComponent, 
    children: [
        { path: '', redirectTo: 'university', pathMatch: 'full' },
        {path: 'sopresumelor',component:SopresumelorComponent},
        { path: 'university', component: UniversityShortlistingComponent },
        { path: 'air-travel', component: AirtravelHelpComponent},
        { path: 'forex', component: ForexHelpComponent },
        { path: 'accomodation', component: AccomodationHelpComponent },
        { path: 'mock-visa', component: MockVisaComponent },
        { path: 'mentor', component: MentorListComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'student-query', component: StudentQueryComponent },
        {path:'appointmentbooked',component:AppointmentsComponent},
        {path:'appointmentbookedmentor',component:AppointmentsformentorComponent},
        { path: 'loan', component: LoanHelpComponent}]},
  
    {path: '**', redirectTo: 'home'}
];
 
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);