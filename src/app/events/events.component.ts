import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { filter } from 'rxjs/operator/filter';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public events;
  public eemail;
  public desc;public Name;public time;public date;
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

  constructor(private service:CommonService) { }

  ngOnInit() {
    this.getevents();
  }

  getevents(){
    this.service.getevents().subscribe(res=>{
      this.events=res;
      console.log(this.events);
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
    console.log(sum);
    // var y=this.events.filter(i=>{
    //   var date=i.Date;
    //   var isum=parseInt(date.split('-')[0])+parseInt(date.split('-')[1])+parseInt(date.split('-')[2])
    //   if(isum >= sum)
    //     return i;
    // })
    var y=this.events.filter(i=>{
      var date=i.Date;
      //console.log(month,parseInt(date.split('-')[1]))
      if(month<parseInt(date.split('-')[1]))
        return i;
      else if(month === parseInt(date.split('-')[1])){
        if(day<parseInt(date.split('-')[2]))
          return i;
      }
    })
    console.log(y);
    this.events=y;
    console.log(this.events)
    })
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
    this.service.eventregister(this.eemail,this.Name).subscribe(res=>{
      console.log(res);
      alert('You have successfully regsitered');
    })
  }

}
