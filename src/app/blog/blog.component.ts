import { Component, OnInit } from '@angular/core';
import { LoaderService, CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  showPage: boolean  = false;
  showremaining:boolean=false;
  response:any;
  r1={
    Title:'',
    Image:'',
    Description:''
  }
  r2={
    Title:'',
    Image:'',
    Description:''
  }
  constructor(private loaderService: LoaderService,private service:CommonService,private router:Router,private sanitization:DomSanitizer) { }

  ngOnInit() {
    this.loaderService.display(true);
    setTimeout(()=>{
     this.showPage = true
     this.loaderService.display(false);
    },400);
    this.getblogs();
  }

  getblogs(){
    this.service.blogs().subscribe(res=>{
      this.response=res;
      this.r1=this.response[0];
      this.r2=this.response[1];
      console.log(this.response);
    })
  }

  show(){
    console.log("yes");
    if(this.showremaining)
      this.showremaining=false;
    else
      this.showremaining=true;
  }

  goto(id){
    this.router.navigateByUrl(`single_blog/${id}`);
  }
}
