import { Component, OnInit } from '@angular/core';
import { CommonService, LoaderService } from '../services/common.service';
declare var google: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  map : any;
  detail=
  {
    name :'',
    emailID : '',
    Number : '',
    Purpose:'',
    Description:''
  }
  constructor(private commonService : CommonService, private loaderService : LoaderService) { }

  ngOnInit() {
   // this.initMap();
   this.map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 19.0155, lng: 72.838},
    zoom: 8
  });
  }

  submit()
  {
    console.log('form submit ');
    this.loaderService.display(true);
    this.commonService.contactForm(this.detail).subscribe((result)=>{
      console.log(result);
      this.loaderService.display(false);
      this.commonService.notify(this.detail.emailID,this.detail.name).subscribe(res=>{
        console.log(res)
        this.detail.name = '';
        this.detail.emailID ='';
        this.detail.Number ='';
        this.detail.Purpose='';
        this.detail.Description='';
        alert("Thanks for contacting us we will get back to you of your dream university withing 24 hours"); 
      })
    })
  }

}
