import { Component } from '@angular/core';
import { CommonService, LoaderService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  showLoader : boolean =  false;
  isLoggedIn : boolean = false;
  showHeaderFooter: boolean = true;
  constructor(private commonService : CommonService, private loaderService : LoaderService)
  {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
    if(localStorage.getItem('loggedIn'))
    {
      this.isLoggedIn = true;
      console.log(this.isLoggedIn);
    }
   
    this.commonService.showHeaderFooter.subscribe((flag) => {
      this.showHeaderFooter = flag;
    //  alert(flag);
    console.log(flag);
    });
  
  }
  ngAfterViewInit()
  {
    
  }

}
