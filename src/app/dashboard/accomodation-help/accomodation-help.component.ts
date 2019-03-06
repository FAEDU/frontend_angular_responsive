import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-accomodation-help',
  templateUrl: './accomodation-help.component.html',
  styleUrls: ['./accomodation-help.component.css']
})
export class AccomodationHelpComponent implements OnInit {
  response:any;
  username  = '';
  accomodation:any =[];
  modal ={
    CompanyName: '',
    name  : '',
    contact : '',
    emailID : '',
    helpType :''
  }
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.username = localStorage.getItem('name');
    this.getAccomodation();
  }

  getAccomodation()
  {
    this.commonService.getAccomodations().subscribe((result)=>
      {
       console.log(result);
       this.response  = result;
       this.accomodation = this.response;
     })
  }
  setID(CompanyName)
  {
    this.modal.CompanyName= CompanyName;
  }

  submit()
  {
    this.modal.emailID=localStorage.getItem('email');
    this.modal.name=localStorage.getItem('name');
    this.commonService.getHelp(this.modal).subscribe((result)=>
    {
     console.log(result);
     this.response  = result;
     document.getElementById("closebutton").click();
   })
  }

}
