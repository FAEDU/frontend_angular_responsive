import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoaderService } from '../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  showPage :boolean= true;
  public showHeaderFooter=false;
  public loggedIn=true;
  constructor(private loaderService: LoaderService) {
  
   }

  ngOnInit() {
    if(localStorage.getItem('id')!==null)
      this.loggedIn=false;
    this.loaderService.display(true);
    setTimeout(()=>{
      this.showPage = true
      this.loaderService.display(false);
    },400);
  }

}
