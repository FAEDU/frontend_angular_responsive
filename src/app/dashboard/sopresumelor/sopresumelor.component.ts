import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-sopresumelor',
  templateUrl: './sopresumelor.component.html',
  styleUrls: ['./sopresumelor.component.css']
})
export class SopresumelorComponent implements OnInit {
  public file=[];
  public Sopfile;
  public Lorfile;
  public Resumefile;
  public isuploadedsop: boolean = true;
  public isuploadedresume: boolean = true;
  public isuploadedlor: boolean = true;
  public response;
  public isdocumentupload:boolean=true;
  public details = {
    soplink: 'NA',
    lorlink: 'NA',
    resumelink: 'NA',
    S_ID: '',
    Name:''
  }


  constructor(private service: CommonService) { }

  ngOnInit() {
  }
  sopchange(e) {
    this.Sopfile=e.target.files[e.target.files.length-1];
    this.service.geturlofFile(this.Sopfile).subscribe(res => {
      this.details.soplink= res.split('**')[0];
      this.isdocumentupload=false;
    })
  }
  lorchange(e) {
    this.Lorfile=e.target.files[e.target.files.length-1];
    this.service.geturlofFile(this.Lorfile).subscribe(res => {
      this.details.lorlink= res.split('**')[0];
      this.isdocumentupload=false;
    })
  }
  resumechange(e) {
    //console.log("yey")
    this.Resumefile=e.target.files[e.target.files.length-1];
    this.service.geturlofFile(this.Resumefile).subscribe(res => {
      this.details.resumelink= res.split('**')[0];
      this.isdocumentupload=false;
    })
  }

  uploadfiles(){
    console.log(this.details);
      if(this.details.soplink!=='NA'){
        this.isuploadedsop=false;
      }
      if(this.details.lorlink!=='NA'){
        this.isuploadedlor=false;
      }
      if(this.details.resumelink!=='NA'){
        this.isuploadedresume=false;
      }
        this.details.Name=localStorage.getItem('email');
        this.details.S_ID=localStorage.getItem('id');
        this.service.sendfileUrl(this.details).subscribe(res => {
        this.response = res;
        this.isdocumentupload=true;
        alert("Uploaded Successfully!");
        console.log(this.response);
    });
  }
}
