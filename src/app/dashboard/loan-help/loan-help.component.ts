import { Component, OnInit } from '@angular/core';
import { CommonService, LoaderService } from '../../services/common.service';

@Component({
  selector: 'app-loan-help',
  templateUrl: './loan-help.component.html',
  styleUrls: ['./loan-help.component.css']
})
export class LoanHelpComponent implements OnInit {
  response: any;
  public list;
  username = '';
  loanData: any = [];
  modal = {
    CompanyName: '',
    name  : '',
    contact : '',
    loanRequirement : '',
    University :'',
    ProgramName :'',
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
    this.commonService.getLoanCompanies().subscribe((result)=>
      {
        this.loaderService.display(false);
       console.log(result);
       this.response  = result;
       this.loanData = this.response;
        
     })
  }

  setID(CompanyName)
  {
    this.modal.CompanyName=CompanyName;
  }

  submit()
  {
    this.commonService.loanInfoForm(this.modal).subscribe((result)=>
    {
     console.log(result);
     this.response  = result;
     document.getElementById("closebutton").click();
   })
  }
}
