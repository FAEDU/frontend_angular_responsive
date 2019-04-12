import { Component, OnInit } from '@angular/core';
import { CommonService, LoaderService } from '../../services/common.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css']
})
export class MentorListComponent implements OnInit {


  save()
  {
    if(this.modal.Time===''||this.modal.Date===''){
      return;
    }
    this.commonService.appointmentform(this.modal,this.mentorID,this.mentorName,this.mentorPic,this.mentorEmail).subscribe((result)=>
    {
      console.log(result);
      this.response  = result;
      document.getElementById("closebutton").click();
      // document.getElementById('purchasemodal_7').style.display='none';
    })
  }

  response: any;
  public username;
  mentorID:any;
  mentorName:any;
  mentorPic:any;
  mentorEmail:any;
  mentorData= [];
  public specialization=[];
  public universityname=[];
  public sspecilization='';
  public suniversityname='';
  public filteredmentordata=[];
  modal={
    Time:'',
    Date:'',
  };

  detail =
      {
        "email" :""
      };
  
  constructor(private http:HttpClient,private commonService : CommonService, private loaderService : LoaderService) { }
  

  ngOnInit() {
    this.getLoanData();
  }

  getLoanData()
  {
   this.loaderService.display(true);
    this.commonService.getMentorList().subscribe((result)=>
      {
        this.loaderService.display(false);
       console.log(result);
       this.response  = result;
       this.mentorData = this.response;
       this.filteredmentordata=this.mentorData;
        this.getSpecialization();
        this.getUniversityName();
     })
  }

  getSpecialization(){
    var spe=this.mentorData.map(i=>{
      return(i.Specialization)
    })
    spe.forEach(i=>{
      if(this.specialization.indexOf(i) === -1)
        this.specialization.push(i);
    });
    console.log(this.specialization);
  }
  
  specfilteration(e){
    this.sspecilization=e.target.value;
  }
  unifilteration(e){
    this.suniversityname=e.target.value
  }


  getUniversityName(){
    var name=this.mentorData.map(i=>{return i.UniversityName});
    name.forEach(i=>{
      if(this.universityname.indexOf(i) === -1)
        this.universityname.push(i);
    })
    console.log(this.universityname)
  }

  setdetails(id,name,pic,email){
    console.log(id);
    this.mentorID=id;
    this.mentorPic=pic;
    this.mentorName=name;
    this.mentorEmail=email;
  }

  applyfilter(){
    this.filteredmentordata=this.mentorData;
    if(this.suniversityname !== ''){
      this.filteredmentordata=this.filteredmentordata.filter(i=>{
       if(i.UniversityName === this.suniversityname)
        return i;
     })
    }
    console.log(this.filteredmentordata);
    if(this.sspecilization !== ''){
      this.filteredmentordata=this.filteredmentordata.filter(i=>{
        if(i.Specialization === this.sspecilization)
          return i;
      })
    }
    console.log(this.filteredmentordata);
  }

  reset(){
    this.sspecilization="";
    this.suniversityname="";
    this.filteredmentordata=this.mentorData;
    
  }

}
