import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  showPage :boolean = false
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      this.showPage = true
    //  this.loaderService.display(false);
    },500);
  }

}
