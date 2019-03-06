import { Component, OnInit } from '@angular/core';
import { CommonService, LoaderService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
response: any;
 details = {
    "email": "",
    "Name": "",
    "Password": "",
    "repeatPassword":'',
    "contactNo":'',
    "remember": false
  }    
  constructor(private commonService : CommonService, private loaderService : LoaderService, private router: Router) {
    this.commonService.showHeadernFooter(false);
   }

  ngOnInit() {
   
  }
  ngAfterViewInit()
  {
    
  }

  login()
  {
    if(this.router.url == '/signup/student')
    {
      this.router.navigate(['/login/student']);
    }
    else{
      this.router.navigate(['/login/mentor']);
    }
  }

  submit()
  {
    if(this.router.url == '/signup/student')
    {
    if(this.details.repeatPassword == this.details.Password)
    {
      delete this.details.repeatPassword;
      delete this.details.remember;
      this.loaderService.display(true);
      this.commonService.signup(this.details).subscribe((result)=>{
      console.log(result);
      this.response = result;
      this.loaderService.display(false);
      this.router.navigate(['/login/student']);
      },
      (error)=>{
        console.log(error);
      }
      )   
    }
    else{
      alert('Password does not match');
    }
  }
  else{
    if(this.details.repeatPassword == this.details.Password)
    {
      delete this.details.repeatPassword;
      delete this.details.remember;
      this.loaderService.display(true);
      this.commonService.mentorSignup(this.details).subscribe((result)=>{
      console.log(result);
      this.response = result;
      this.loaderService.display(false);
      this.router.navigate(['/login/mentor']);
      },
      (error)=>{
        console.log(error);
      }
      )   
    }
    else{
      alert('Password does not match');
    }

  }
   
  }

  ngOnDestroy(){
    this.commonService.showHeadernFooter(true);
    this.commonService.removejscssfile("style.css", "css");
    this.commonService.removejscssfile("material-icon/css/material-design-iconic-font.min.css", "css");
    
  }
}
