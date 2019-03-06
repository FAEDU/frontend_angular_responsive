import { Component, OnInit } from '@angular/core';
import { CommonService, LoaderService } from '../../services/common.service';

@Component({
  selector: 'app-mock-visa',
  templateUrl: './mock-visa.component.html',
  styleUrls: ['./mock-visa.component.css']
})
export class MockVisaComponent implements OnInit {
  response: any;
  username = '';
  mockvisaData: any = [];
  modal = {
    name:'',
    CompanyName: '',
    emailID  : '',
    contactNumber : '',
    Location : ''
  }
  constructor(private commonService : CommonService, private loaderService : LoaderService) { }

  ngOnInit() {
    this.username = localStorage.getItem('name');
    console.log(this.username);
    this.getLoanData();
  }

  getLoanData()
  {
    this.loaderService.display(true);
    this.commonService.MockVisaInterviewForm().subscribe((result)=>
      {
        this.loaderService.display(false);
       console.log(result);
       this.response  = result;
       this.mockvisaData = this.response;
        
     })
  }

  setID(CompanyName)
  {
    this.modal.CompanyName=CompanyName;
  }

  submit()
  {
    this.modal.emailID=localStorage.getItem('email');
    this.modal.name=localStorage.getItem('name');
    this.commonService.mockvisainterview(this.modal).subscribe((result)=>
    {
     console.log(result);
     this.response  = result;
     document.getElementById("closebutton").click();
   })
  }
}
