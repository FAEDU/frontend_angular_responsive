import { Component, OnInit,AfterViewChecked } from '@angular/core';

declare let paypal: any;


@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements AfterViewChecked {

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

  add_to_cart(){
    console.log("yes");
    if(this.detail.email !== ""){
      console.log(this.detail.email);
      document.getElementById('checkoutmodal_11').style.display='block';
      document.getElementById('purchasemodal_11').style.display='none';
    }
    else
      alert('Email should be given');
  }

}