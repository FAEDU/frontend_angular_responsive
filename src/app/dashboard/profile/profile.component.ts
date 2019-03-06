import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isStudent = false;
  fileurl="";
  public isphotouploaded:boolean=false;
  public isresumeuploaded:boolean=false;
  response:any;
  public responsef1:any;
  public file;
  targetappsessionyear='';
  detailmentor= {
    "Name":'Mr.Mentor',
    "EmailID": '',
    "ContactNum": '',
    "Services": '',
    "UniversityName": '',
    "Major": '',
    "Specialization": '',
    "ResumeUrl": '',
    "LinkedInUrl": '',
    "ProfilePic": '',
    "Hrs": '',
    "Availability": '',
    "Description": '',
    "Password": '1234567'
  };

  detailstudent= {
    "name": '',
    "emailID": '',
    "contactNo": '',
    "ApplyingFor": '',
    "TargetAppSession": '',
    "StudyField": '',
    "Specialization": '',
    "StudyCountry": '',
    "GreScore": '',
    "ToeflIeltsScore": '',
    "UgGPA": '',
    "UgUniversity" : '',
    "ResumeUrl": '',
    "password":'1234567'
  }


  constructor(private commonService : CommonService, private router : Router) { 
    this.commonService.showHeadernFooter(false);
  }

  ngOnInit() {
    var name = localStorage.getItem('loggedIn');
    console.log(name);
    if(name == 'student'){
      this.isStudent = true;
    }
    else{
      this.isStudent = false;
    }
  }
  
  filechange(e){
    console.log(e.target.files[0]);
    this.file=e.target.files[0];
  }

  uploadResume(){
    if(this.file===undefined){
      alert("Field cant be empty");
      return;
    }
    this.commonService.geturlofFile(this.file).subscribe(res=>{
      this.responsef1=res;
      this.file=undefined;
      console.log(this.responsef1)
      if(this.isStudent)
        this.detailstudent.ResumeUrl=this.responsef1.split('**')[0];
      else
        this.detailmentor.ResumeUrl=this.responsef1.split('**')[0];
     this.isresumeuploaded=true;
    })
  }

  uploadPhoto(){
    if(this.file===undefined){
      alert("Field cant be empty");
      return
    }
    this.commonService.geturlofFile(this.file).subscribe(res=>{
      this.responsef1=res;
      this.detailmentor.ProfilePic=this.responsef1.split('**')[0];
      console.log(this.detailmentor.ProfilePic);
      this.isphotouploaded=true;
      
    })
  }

  submit()
  {
    
    if(this.isStudent)
    {
      if(!this.isresumeuploaded){
        alert('Upload Files');
        return;
      }
      this.detailstudent.TargetAppSession = this.detailstudent.TargetAppSession+ ''+ this.targetappsessionyear;
      console.log(this.detailstudent);
      this.commonService.studentRegistration(this.detailstudent).subscribe((result)=>
      {
       console.log(result);
       this.response  = result;
       this.detailstudent.ResumeUrl=this.response;

       this.router.navigate(['/dashboard/university']);
        
     })
    }
    else{
      if(!this.isphotouploaded||!this.isresumeuploaded){
        alert('Upload Your Files');
        return;
      }
      console.log(this.detailstudent);
      this.commonService.mentorRegistration(this.detailmentor).subscribe((result)=>
      {
       console.log(result);
       this.response  = result;
        this.router.navigate(['/dashboard/student-query']);
        
     })

    }

  }

  private imageSrc: string = '';

  handleInputChange(e) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
   reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e) {
    let reader = e.target;
    this.imageSrc = reader.result;
    this.detailmentor.ProfilePic = reader.result;
    console.log(this.imageSrc)
  }

}
