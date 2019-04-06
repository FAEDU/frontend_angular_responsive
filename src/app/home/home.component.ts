import { Component, ViewEncapsulation , OnInit } from '@angular/core';
import { CommonService, LoaderService } from '../services/common.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

  // encapsulation: ViewEncapsulation.Native
})
export class HomeComponent implements OnInit {
  showPage : boolean = false;
  public university:any;
  public response;
  public eemail='';
  public unidata=[];
  public response2;
  public desc;public Name;public time;public date;
  public events=[];
  public country=[];
  public finalevents=[];
  public monthvalues=[{name:"Jan",v:1},
  {name:"Feb",v:2},
  {name:"Mar",v:3},
  {name:"Apr",v:4},
  {name:"May",v:5},
  {name:"Jun",v:6},
  {name:"Jul",v:7},
  {name:"Aug",v:8},
  {name:"Sep",v:91},
  {name:"Oct",v:10},
  {name:"Nov",v:11},
  {name:"Dec",v:12}
  ]
  detail=
  {
    Name :'',
    Email : '',
    Phone : '',
    GRE_Verbal:'',
    Term:'',
    GRE_Quant:'',
    IELTS:'',
    TOEFL:'',
    GPA:'',
  }
  constructor(private http:HttpClient,private commonService :CommonService, private loaderService: LoaderService,private router:Router) {
    this.commonService.showHeadernFooter(true);

   }
   

  ngOnInit() {
    
    this.http.get('https://secret-atoll-46665.herokuapp.com/topuniversity').subscribe(res=>{
      this.university=res;
      console.log(this.university);
      this.university.map(i=>{
        this.commonService.getUniversityData(i.uni_id).subscribe(res=>{
          var response=res;
          console.log(response)
          this.unidata.push(response);
          console.log(this.unidata);
        })
      })
    })
    console.log(localStorage);
    var array=[{"id":112,"name":"Abhinav"}]
    var x={"response":"success",array:array};
    console.log(x);
    console.log(x.array[0].id)
    $('.count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 6000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
  });
    this.loaderService.display(true);
    setTimeout(()=>{
      this.showPage = true
      this.loaderService.display(false);
    },400);
    this.commonService.getevents().subscribe(res=>{
      this.response=res
      this.upcoming(this.response);
    })
    this.commonService.getUniversitiesData().subscribe(res=>{
      this.response2=res;
      //console.log(this.response2);
      this.getcountry();
    })
  }

  
  getcountry(){
    var country=this.response2.map(i=>{
      return (i.location);
    })
    country.map(i=>{
      if (this.country.indexOf(i) === -1)
        this.country.push(i);
    })
    console.log(this.country);
  }

  upcoming(res){
    
    var date=new Date().toDateString();
    var day=parseInt(date.split(' ')[2]);
    var m=date.split(' ')[1];
    var year=parseInt(date.split(' ')[3]);
    var mv=this.monthvalues.filter(i=>{
      if(i.name === m)
        return i
    })
    var month=mv[0].v;
    console.log(day,month,year);
    var sum=day+month+year;
    //console.log(sum);
    this.finalevents=res.filter(i=>{
      var date=i.Date;
      console.log(month,parseInt(date.split('-')[1]))
      if(month<parseInt(date.split('-')[1]))
        return i;
      else if(month === parseInt(date.split('-')[1])){
        if(day<parseInt(date.split('-')[2]))
          return i;
      }
    })
    console.log(this.finalevents)
    var len=this.finalevents.length;
    //console.log(this.finalevents[len-1]);
    if(this.finalevents[len-1]){
      console.log(this.finalevents[len-1])
      this.events.push(this.finalevents[len-1]);
    }
    if(this.finalevents[len-2]){
      console.log(this.finalevents[len-1])
      this.events.push(this.finalevents[len-2]);
    }
    if(this.finalevents[len-3]){
      console.log(this.finalevents[len-1])
      this.events.push(this.finalevents[len-3]);
    }
    console.log(this.events);
    console.log(this.finalevents)
  }
  

  submit()
  {
    console.log(localStorage);
    console.log("yes");
    this.loaderService.display(true);
    if(localStorage.getItem('email') === undefined){
      this.router.navigateByUrl('/login/student')
    }
    else{
    this.commonService.scoreForm(this.detail).subscribe((result)=>{
      this.loaderService.display(false);
      this.commonService.notify(this.detail.Email).subscribe(res=>{
        console.log(res);
          this.detail.Name ='';
          this.detail.Email ='';
          this.detail.Phone ='';
          this.detail.Term='';
          this.detail.GRE_Quant='';
          this.detail.GRE_Verbal='';
          this.detail.IELTS='';
          this.detail.TOEFL='';
          this.detail.GPA='';
        alert("Thanks for contacting us we will get back to you of your dream university withing 24 hours");
      })
    })
  }

  }
  eventclicked(desc,name,time,date){
    this.Name=name;
    this.desc=desc;
    this.time=time;
    this.date=date;
    console.log(desc,name);
  }

  register(){
    console.log(this.eemail)
    if(this.eemail === ""){
      alert("Enter your email id!");
      return ;
    }
    this.commonService.eventregister(this.eemail,this.Name).subscribe(res=>{
      console.log(res);
      alert('You have successfully regsitered');
    })
  }

  goto(u){
    this.router.navigateByUrl(`/universitydetail/${u.id}/${u.imageUrl}`)
  }

  check(){
    if(localStorage.getItem('loggedIn') === null)
      alert('You need to login');
    else
      this.router.navigateByUrl('/dashboard');
  }

}
