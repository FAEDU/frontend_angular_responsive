import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-blogopen',
  templateUrl: './blogopen.component.html',
  styleUrls: ['./blogopen.component.css']
})
export class BlogopenComponent implements OnInit {

  response:any;

  detail={
    Title:'',
    Image:'',
    Author:'',
    Description:'',
  }
  constructor(private router:ActivatedRoute,private service:CommonService) { }

  ngOnInit() {
    console.log(this.router.snapshot.paramMap.get('id'));
    this.service.blog_by_id(this.router.snapshot.paramMap.get('id')).subscribe(res=>{
      this.response=res;
      console.log(this.response)
      this.detail.Title=this.response.Title;
      this.detail.Image=this.response.Image;
      this.detail.Author=this.response.Author;
      this.detail.Description=this.response.Description;
      console.log(this.detail);
    })
  }

}
