import { Component, OnInit } from '@angular/core';
import { CommonService, LoaderService } from '../../services/common.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-university-shortlisting',
  templateUrl: './university-shortlisting.component.html',
  styleUrls: ['./university-shortlisting.component.css']
})
export class UniversityShortlistingComponent implements OnInit {
  response: any;
  public university={
    name:"",
    desc:"",
    GRE:"",
    TOEFL:"",
    ranking:"",
    TopRecruiters:"",
    location:"",
    courses:"",
  }

  public finaldata=[];
  public who=false;
  public searchbar='';
  public name;
  public test;
  universityData = [];
  public check=[];
  public options=[];
  public image;
  public filtereduniversity=[];
  public courses;
  public fees="";
  public locationfilter="";
  public filtergre="";
  public rankfilter="";
  public toeflfilter="";
  public course="";
  public courses2=[];
  public c="";
  public ieltsfilter="";
  public filtercourse="";
  constructor(private commonService :CommonService, private loaderService : LoaderService,private http:HttpClient) { }

  ngOnInit() {
    if(localStorage.getItem('loggedIn')==='mentor'){
      this.who=true;
      this.name=localStorage.getItem('name');
    }
    else{
      this.getUniversities();
    }
  }

  getUniversities()
  {
    this.loaderService.display(true);
    this.commonService.getUniversitiesData().subscribe((result)=>{
      this.loaderService.display(false);
     this.response = result;
    this.finaldata=this.universityData=this.filtereduniversity = this.response
    console.log(this.finaldata);
      this.filterlocation();
      this.coursesfilter();
    });
    
  }

  //making a list of courses from universities recevied from databse
  coursesfilter(){
    var courses=this.universityData.map(i=>{return i.courses})
    console.log(courses)
    var courses2=[];
    courses.forEach(i=>{
      i.forEach(j=>{
        courses2.push(j)
      });
    })
   
    console.log(courses2);
    courses2.forEach(i=>{
      if(this.courses2.indexOf(i)=== -1)
        this.courses2.push(i);
    })
    console.log(this.courses2);
  }

  //making a list of country from universities coming for database 
  filterlocation(){
    var location=this.universityData.map(i=>{
      return i.location;
    })

    location.forEach(i=>{
      if(this.options.indexOf(i)=== -1){
        this.options.push(i);
        console.log(this.options);
      }
    })
    console.log(this.options);
    return;
  }

  //getting data for modal which represents details of university
  details(id){
    console.log(id);
    this.commonService.getUniversityData(id).subscribe((result)=>{
    this.test=result;
    this.university.name=this.test.name;
    this.university.desc=this.test.desc;
    this.university.GRE=this.test.GRE;
    this.university.TOEFL=this.test.TOEFL;
    this.university.ranking=this.test.ranking;
    this.university.TopRecruiters=this.test.TopRecruiters;
    this.university.courses=this.test.courses;
    this.courses=this.university.courses;
    this.university.location=this.test.location;
     console.log(this.university);
     this.http.get(`https://secret-atoll-46665.herokuapp.com/universityclicked/${id}`).subscribe(res=>{
      console.log(res);
    })
   });
  }
  
  

  //getting the data from dropdown of SelectCountry
  locatefilteration(option){
    this.locationfilter=option.target.value;
    console.log(this.locationfilter)
  }

  //getting data from dropdown AverageGreScore
  grefilteration(gre){
    this.filtergre=gre.target.value
    console.log(this.filtergre);
  }

  //getting data from dropdown AverageToefScore
  toeflfilteration(toefl){
    this.toeflfilter=toefl.target.value
    console.log(this.toeflfilter)
  }

  //getting the selected value from dropdown RankFilter
  rankingfilteration(rank){
    this.rankfilter=rank.target.value;
    console.log(this.rankfilter);
  }

  //getting the selected value from dropdown Courses
  coursefilteration(e){
    this.c=e.target.value;
    console.log(e.target.value);
  }

  //getting the selected value from dropdown AverageCourseFees
  feesfilteration(e){
    this.fees=e.target.value;
    console.log(this.fees);
  }

  //getting selected value from dropdown AverageIELT Score
  ieltsfilteration(e){
    this.ieltsfilter=e.target.value;
    console.log(this.ieltsfilter);
  }



  //reseting the dropdowns value making filtereduniversitydata same as universityData
  reset(){
    console.log("yes");
    this.c="";
    this.locationfilter="";
    this.filtergre="";
    this.rankfilter="";
    this.toeflfilter="";
    this.fees="";
    this.ieltsfilter="";
   this.finaldata=this.filtereduniversity=this.universityData;
    this.searchbar='';
  }

  //filteration is happening
  applyfilter(){
   this.filtereduniversity=this.universityData;

    if(this.locationfilter!==""){
      this.filtereduniversity=this.filtereduniversity.filter(i=>{
        if(i.location===this.locationfilter)
          return i;
      })
      this.finaldata=this.filtereduniversity
      console.log(this.filtereduniversity);
    }
    if(this.filtergre!==""){
      this.filtereduniversity=this.filtereduniversity.filter(i=>{
        if(parseInt(i.GRE)===parseInt(this.filtergre))
          return i;
      })
      this.finaldata=this.filtereduniversity
      console.log(this.filtereduniversity);
    }
  if(this.c!==""){
    this.filtereduniversity=this.filtereduniversity.filter(i=>{
      if(this.checki(i))
        return i;
    })
    this.finaldata=this.filtereduniversity
    console.log(this.filtereduniversity);
  }

  if(this.toeflfilter!==""){
    this.filtereduniversity=this.filtereduniversity.filter(i=>{
      if(parseInt(this.toeflfilter) <= parseInt(i.TOEFL))
        return i;
    })
    this.finaldata=this.filtereduniversity
    console.log(this.filtereduniversity);
  }

  if(this.ieltsfilter!==""){
    this.filtereduniversity=this.filtereduniversity.filter(i=>{
      if(parseInt(this.ieltsfilter)===parseInt(i.IELTS))
        return i;
    })
    this.finaldata=this.filtereduniversity
    console.log(this.filtereduniversity);
  }

  if(this.fees!==""){
    this.filtereduniversity=this.filtereduniversity.filter(i=>{
      if(parseInt(this.fees) >= parseInt(i.TuitionFee))
        return i;
    })
    console.log(this.filtereduniversity);
  }
  
  if(this.rankfilter!==""){
    this.filtereduniversity=this.filtereduniversity.filter(i=>{
      if(parseInt(this.rankfilter) >= parseInt(i.ranking))
        return i;
    })
    this.finaldata=this.filtereduniversity
    console.log(this.filtereduniversity);
  }
}

  //method to check whether the university has that course which is selected in dropdown Courses(invoked the function from line number:180)
  checki(i):Observable<boolean>{
    var t;
   i.courses.forEach(j=>{
     if(this.c===j){
     return t=1;
    }
   })
   return t;
  }

  search(){
    console.log(this.searchbar);
    if(this.searchbar === '')
      return;
    this.finaldata=this.filtereduniversity.filter(i=>{
      if(i.name.toLowerCase() === this.searchbar.toLowerCase())
        return i;
    })
    console.log(this.finaldata);
  }
  
 
}
