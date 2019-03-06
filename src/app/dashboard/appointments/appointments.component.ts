import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  public response:any;
  public mentors:any

  constructor(private service:CommonService ) {}

  ngOnInit() {
    this.getappointments();
  }
  getappointments(){
    this.service.getappointment().subscribe(res=>{
      this.response=res;
     this.mentors=this.response.filter(i=>{
       if(i.S_id===localStorage.id)
        return i;
     })
    })  
  }
}
