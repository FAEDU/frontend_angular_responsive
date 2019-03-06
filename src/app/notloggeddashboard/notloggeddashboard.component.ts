import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notloggeddashboard',
  templateUrl: './notloggeddashboard.component.html',
  styleUrls: ['./notloggeddashboard.component.css']
})
export class NotloggeddashboardComponent implements OnInit {

  constructor(private commonService:CommonService,private router:Router) {     this.commonService.showHeadernFooter(false);
  }

  ngOnInit() {
  }

  goto(){
    if(localStorage.getItem('id') != undefined )
      this.router.navigateByUrl('/dashboard');
    else
      this.router.navigateByUrl('/login/student');
  }

}
