import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-airtravel-help',
  templateUrl: './airtravel-help.component.html',
  styleUrls: ['./airtravel-help.component.css']
})
export class AirtravelHelpComponent implements OnInit {
  response:any;
  username  = '';
  airTravelData: any= [];
  modal ={
    CompanyName:'',
    name:'',
    email:'',
    contact : '',
    Depature : '',
    Destination :'',
    Date :'',

  }
  constructor(private commonService : CommonService) { }

  ngOnInit() {
    this.username = localStorage.getItem('name');
    this.getAirTravel();
  }

  getAirTravel()
  {
    this.commonService.getAirTravelCompanies().subscribe((result)=>
      {
       console.log(result);
       this.response  = result;
       this.airTravelData = this.response;
       document.getElementById("closebutton").click();
        
     })
  }

  setID(CompanyName)
  {
    this.modal.CompanyName= CompanyName;
  }

  submit()
  {
    //if(localStorage.getItem('Name'))
    this.modal.name=localStorage.getItem('name');
    this.modal.email=localStorage.getItem('email');
    this.commonService.airTravelCompaniesForm(this.modal).subscribe((result)=>
    {
      
     console.log(result);
     this.response  = result;
     document.getElementById("closebutton").click();
      
   })
  }
}
