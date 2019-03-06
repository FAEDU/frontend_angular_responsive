import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-callthatmentor',
  templateUrl: './callthatmentor.component.html',
  styleUrls: ['./callthatmentor.component.css']
})
export class CallthatmentorComponent implements OnInit {
  public email:String;
  public mid:any;
  public sid:String;
  public response:any;
  public url:String;

  constructor(private router:Router,private http:HttpClient,private route:ActivatedRoute,private service:CommonService) { }

  ngOnInit() {
    this.service.gettingmentorsid(this.route.snapshot.paramMap.get('email')).subscribe(res=>{
      //console.log(res.data)
      this.response=res;
      this.sid=localStorage.getItem('id');  
      this.mid=this.response.id;
      console.log(this.response);
      console.log(this.response)
        console.log(this.mid);
        console.log(this.sid);
      this.url='https://arcane-ocean-14843.herokuapp.com/call?from='+this.sid+'&to='+this.mid
    })
  }
}
