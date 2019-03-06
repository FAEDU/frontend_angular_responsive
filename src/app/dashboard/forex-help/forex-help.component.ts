import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-forex-help',
  templateUrl: './forex-help.component.html',
  styleUrls: ['./forex-help.component.css']
})
export class ForexHelpComponent implements OnInit {
  response: any;
  username = '';
  forexdata : any=[];
  modal={
    CompanyName: '',
    name  : '',
    contact : '',
    Amount : '',
    Location :'',
    RequiredDate :'',
    emailID:'',
  }
  constructor(private commonService : CommonService) { }
  
ngOnInit() {
    this.username = localStorage.getItem('name');
    this.getForex();
  }

  getForex()
{
this.commonService.getForexCompanies().subscribe((result)=>
{
       console.log(result);
       this.response  = result;
       this.forexdata = this.response;
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
    this.commonService.airForexCompaniesForm(this.modal).subscribe((result)=>
    {
     console.log(result);
     this.response  = result;
     document.getElementById("closebutton").click();
   })
  }
}
