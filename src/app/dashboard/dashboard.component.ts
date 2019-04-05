import { Component, OnInit } from '@angular/core';
import { CommonService, LoaderService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  showPage:boolean  = false ;
  public navbar:boolean=true;
  username=''; 
  isStudent = '';
  constructor(private commonService : CommonService, private loaderService : LoaderService, private router:Router) {
    this.commonService.showHeadernFooter(false);
   }

  ngOnInit() {
    if(localStorage.getItem('name')===null)
      this.router.navigateByUrl('/');
    this.username = localStorage.getItem('name');
    this.isStudent = localStorage.getItem('loggedIn');
    this.loaderService.display(true);
    setTimeout(()=>{
     this.showPage = true
     this.loaderService.display(false);
    },400);
  }

  logout()
  {
    console.log('logout');
    localStorage.clear();
    if(this.isStudent)
    {
      console.log('logout for student');
      this.router.navigateByUrl('/');

    }
    else{
      this.router.navigateByUrl('/');
    }
  }
  shownavbar(){
    this.navbar=false;
    console.log(this.navbar);
  }

}
