import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-googlelogin',
  templateUrl: './googlelogin.component.html',
  styleUrls: ['./googlelogin.component.css']
})
export class GoogleloginComponent implements OnInit {
  public response;

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
      localStorage.setItem('email',this.route.snapshot.paramMap.get('email'))
      localStorage.setItem('name',this.route.snapshot.paramMap.get('name'));
      localStorage.setItem('id',this.route.snapshot.paramMap.get('id'));
      this.router.navigate(['/dashboard/university']);
  }
}


