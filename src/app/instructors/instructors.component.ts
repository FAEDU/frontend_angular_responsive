import { Component, OnInit,AfterViewChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare let paypal: any;


@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit,AfterViewChecked {

  detail={
    "email":""
  }

  addScript: boolean = false;
  paypalLoad: boolean = true;
  
  finalAmount: number = 1;

  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: 'AeZleA66qJQC6AHjzxbcM6mM4hN_oYYIGrEm8Jqxaca8mhPJJpevvM5CI7d48AENQi3_hlpAm6BOrhsD',
      production: '<your-production-key here>'
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total:this.finalAmount, currency: 'INR' } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        //Do something when payment is successful.
      })
    }
  };

  constructor(private http:HttpClient){

  }

  ngOnInit(){

  }

  

  price_clicked(price){
    this.finalAmount=price;
    this.ngAfterViewChecked();
  }

  ngAfterViewChecked(): void {
    //console.log('#b1')
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig,'#b1');
        this.paypalLoad = false;
      })
    }
  }
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }

  add_to_cart(item){
    console.log("yes");
    if(this.detail.email !== ""){
      console.log(this.detail.email);
      this.http.get(`https://secret-atoll-46665.herokuapp.com/purchase_email/${this.detail.email}`).subscribe(res=>{
        console.log(res);
      })
      document.getElementById(`checkoutmodal_${item}`).style.display='block';
      document.getElementById(`purchasemodal_${item}`).style.display='none';
    }
    else
      alert('Email should be given');
  }

}