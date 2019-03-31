import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoaderService, CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  details={
    "email":"",
    "password":""
  }
  details_reg = {
    "email": "",
    "Name": "",
    "Password": "",
    "repeatPassword":'',
    "contactNo":'',
    "remember": true
  } 
  response:any;
  showPage :boolean= true;
    public loggedIn:boolean=false;
  constructor(private http:HttpClient,private loaderService: LoaderService,private commonService:CommonService,private router:Router) {
   }

  ngOnInit() {
    if(localStorage.getItem('id')!==null)
      this.loggedIn=false;
    this.loaderService.display(true);
    setTimeout(()=>{
      this.showPage = true
      this.loaderService.display(false);
    },400);
  }


  reset(who){
    if(who === "student"){
   this.http.get(`https://arcane-ocean-14843.herokuapp.com/api/UserSignUps/findOne?filter={%22where%22:{%22email%22:%22${this.details.email}%22}}`)
   .subscribe((res)=>{
     if(this.router.url==="/login/student"){
       if(this.details.email===""){
         alert("Give emailId to reset your password");
         return;
       }
     console.log(this.details.email,"student")
     this.commonService.reset(this.details.email,"student").subscribe(res=>{
     })
     alert("Verification Link is sent to your EmailId")
    }
    else{
      if(this.details.email===""){
        alert("Give emailId to reset your password");
        return;
      }
     console.log(this.details.email,"mentor")
     this.commonService.reset(this.details.email,"mentor").subscribe(res=>{
     })
     alert("Verification Link is sent to your EmailId")
    }
   },err=>{alert("Oops it looks you Havent Registered With Us !!")})
 }
 else{
   this.http.get(`https://arcane-ocean-14843.herokuapp.com/api/MentorSignUps/findOne?filter={%22where%22:{%22email%22:%22${this.details.email}%22}}`)
   .subscribe((res)=>{
     if(this.router.url==="/login/student"){
       if(this.details.email===""){
         alert("Give emailId to reset your password");
         return;
       }
     console.log(this.details.email,"student")
     this.commonService.reset(this.details.email,"student").subscribe(res=>{
     })
     alert("Verification Link is sent to your EmailId")
    }
    else{
      if(this.details.email===""){
        alert("Give emailId to reset your password");
        return;
      }
     console.log(this.details.email,"mentor")
     this.commonService.reset(this.details.email,"mentor").subscribe(res=>{
     })
     alert("Verification Link is sent to your EmailId")
    }
   },err=>{alert("Oops it looks you Havent Registered With Us !!")})
 }
    
  }



  login(who){
    if(who === "student")
   { console.log(this.details);
    this.commonService.login(this.details).subscribe((result)=>
      {
       console.log(result);
       this.response  = result;
        localStorage.setItem('loggedIn', 'student');
        localStorage.setItem('name',  this.response.Name );
        localStorage.setItem('email',  this.response.email );
        localStorage.setItem('id', this.response.id);
        this.router.navigate(['/dashboard/university']);
     },err=>{alert("Wrong credentials")})
    }
    else{
        this.commonService.mentorLogin(this.details).subscribe((result)=>
        {
         console.log(result);
         this.response  = result;
         console.log(this.response.status);
         if(this.response.status===404){
           alert("Wrong credentials");
           return;
         }
          localStorage.setItem('loggedIn', 'mentor');
          localStorage.setItem('id',this.response.id);
          localStorage.setItem('name', this.response.Name);
          this.router.navigate(['/profile']);
          
       },err=>{alert("Wrong credentials")})
  
      }
  }

  reg(who){
    if(who === 'student'){
      if(this.details_reg.repeatPassword == this.details_reg.Password)
      {
        delete this.details_reg.repeatPassword;
        delete this.details_reg.remember;
        this.loaderService.display(true);
        this.commonService.signup(this.details).subscribe((result)=>{
        console.log(result);
        this.response = result;
        this.loaderService.display(false);
        this.router.navigate(['/dashboard']);
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
        if(this.details_reg.repeatPassword === this.details_reg.Password)
    {
      delete this.details_reg.repeatPassword;
      delete this.details_reg.remember;
      this.loaderService.display(true);
      this.commonService.mentorSignup(this.details).subscribe((result)=>{
      console.log(result);
      this.response = result;
      this.loaderService.display(false);
      this.router.navigate(['/dashboard']);
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
    set(who){
      if(who === 'student')
        localStorage.setItem('loggedIn','student');
      else
        localStorage.setItem('loggedIn','mentor');
    }
  }
