import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-appointmentsformentor',
  templateUrl: './appointmentsformentor.component.html',
  styleUrls: ['./appointmentsformentor.component.css']
})
export class AppointmentsformentorComponent implements OnInit {
  public response:any;
  public students:any;

  constructor(private service:CommonService ) {}

  ngOnInit() {
    this.getappointments();
  }
  getappointments(){
    this.service.getappointment().subscribe(res=>{
      this.response=res;
      console.log(this.response);
     this.students=this.response.filter(i=>{
       if(i.mentorId===localStorage.getItem('id'))
        return i;
     })
     console.log(this.students)  
    })
    console.log('hey');
    
  }
}

