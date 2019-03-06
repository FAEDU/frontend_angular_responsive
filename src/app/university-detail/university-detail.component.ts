import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-university-detail',
  templateUrl: './university-detail.component.html',
  styleUrls: ['./university-detail.component.css']
})
export class UniversityDetailComponent implements OnInit {
  response :any;
  parameter:any;
  universityData:any;
  constructor(private http:HttpClient,private commonService : CommonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( (params) =>{
       this.parameter = params;
      console.log(params) ;
      this.http.get(`https://secret-atoll-46665.herokuapp.com/universityclicked/${this.parameter.id}`).subscribe(res=>{
      console.log(res);
    })
    } );
    
    console.log('yes')
    this.getUniversities();
  }

  getUniversities()
  {
    this.commonService.getUniversityData(this.parameter.id).subscribe((result)=>{
     this.response  =  result;
      this.universityData = this.response;
      console.log(this.universityData);
    });
  }

  search(){
    console.log('yes');
  }
  

}
