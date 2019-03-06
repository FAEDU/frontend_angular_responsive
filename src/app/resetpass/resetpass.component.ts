import { Component, OnInit,ViewEncapsulation,OnDestroy } from '@angular/core';
import { CommonService } from '../services/common.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resetpass',
  templateUrl: './resetpass.component.html',
  styleUrls: ['./resetpass.component.css'],
  encapsulation: ViewEncapsulation.Native

})
export class ResetpassComponent implements OnInit , OnDestroy{

  public epassword="";
  public cpassword="";
  public response;
  public detailS={
   "Name":'',
   "Password":'',
   "email":'',
   "contactNo":'',
  }
  public detailM={
    "Name":'',
    "Password":'',
    "email":'',
    "contactNo":'',
   }

  constructor(private commonService:CommonService,private http:HttpClient,private route:ActivatedRoute,private router:Router) { 
    this.commonService.showHeadernFooter(false);
  }

  ngOnInit() {
  }

  update(){
    console.log(this.epassword,this.cpassword);
    if(this.epassword!==this.cpassword){
      this.epassword="";
      this.cpassword="";
      alert("Password should match");
    }
    else{
     if(this.route.snapshot.paramMap.get('string')==="student"){
      var email=this.route.snapshot.paramMap.get('email');
      this.http.get(`https://arcane-ocean-14843.herokuapp.com/api/UserSignUps/findOne?filter={%22where%22:{%22email%22:%22${email}%22}}`)
      .subscribe(res=>{
        this.response=res;
        console.log(this.response);
        console.log(this.response.password);
        this.detailS.Name=this.response.Name;
        this.detailS.email=this.response.email;
        this.detailS.contactNo=this.response.contactNo;
        this.detailS.Password=this.epassword;
        console.log(this.detailS);
        this.http.put(`https://arcane-ocean-14843.herokuapp.com/api/UserSignUps/${this.response.id}`,this.detailS)
        .subscribe(res=>{this.router.navigateByUrl('/login/student')})
      })
    }
    else{
      var email=this.route.snapshot.paramMap.get('email');
      this.http.get(`https://arcane-ocean-14843.herokuapp.com/api/MentorSignUps/findOne?filter={%22where%22:{%22email%22:%22${email}%22}}`)
      .subscribe(res=>{
        this.response=res;
        console.log(this.response);
        console.log(this.response.password);
        this.detailM.Name=this.response.Name;
        this.detailM.email=this.response.email;
        this.detailM.contactNo=this.response.contactNo;
        this.detailM.Password=this.epassword;
        console.log(this.detailM);
        this.http.put(`https://arcane-ocean-14843.herokuapp.com/api/MentorSignUps/${this.response.id}`,this.detailM)
        .subscribe(res=>{this.router.navigateByUrl('/login/mentor')})
      })
    }
  }
    
  }


  ngOnDestroy(){
    this.commonService.showHeadernFooter(true);
    this.commonService.removejscssfile("style.css", "css");
    this.commonService.removejscssfile("material-icon/css/material-design-iconic-font.min.css", "css");
    
  }

}
