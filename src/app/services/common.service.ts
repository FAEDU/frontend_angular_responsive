import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { AppSettings } from "../utility/apiUrl";
import { BehaviorSubject } from "rxjs";

@Injectable() 
export class CommonService {
    public showHeaderFooter = new BehaviorSubject<boolean>(true);
    constructor(private http : HttpClient)
    {

    }

    blog_by_id(id){
        return this.http.get('http://arcane-ocean-14843.herokuapp.com/api/Blogs/'+id);
    }

    blogs(){
        return this.http.get('http://arcane-ocean-14843.herokuapp.com/api/Blogs');
    }

    sendfileUrl(details){
        return this.http.post('https://arcane-ocean-14843.herokuapp.com/api/Documents',details)
    }

    getevents(){
        return this.http.get('https://arcane-ocean-14843.herokuapp.com/api/Events')
    }

    getappointment(){
        return this.http.get('https://arcane-ocean-14843.herokuapp.com/api/Appointments');
    }

    geturlofFile(file){
        console.log("yes");
        let formdata=new FormData();
        formdata.append('file',file)
        return this.http.post('https://floating-gorge-25007.herokuapp.com/api/Upload/',formdata,{responseType:'text'})
    }

    gettingmentorsid(email){
        return this.http.get(`https://arcane-ocean-14843.herokuapp.com/Mentors/findOne?filter={%22where%22:{%22EmailID%22:%22${email}%22}}`)
    }

    appointmentform(details,mentorId,mentorName,mentorPic,mentorEmail){
        details.mentorId=mentorId;
        details.S_id=localStorage.getItem('id');
        details.m_name=mentorName;
        details.m_email=mentorEmail;
        details.s_email=localStorage.getItem('email');
        details.m_profilePic=mentorPic;
        details.s_name=localStorage.getItem('name');
        console.log(details);
        return this.http.post('https://arcane-ocean-14843.herokuapp.com/api/Appointments',details);
    }

    login(details)
    {
        let params = new HttpParams();
        params = params.append("email", details.email);
        params = params.append("password", details.password);
        return this.http.get(`https://arcane-ocean-14843.herokuapp.com/api/UserSignUps/findOne?filter={%22where%22:{%22and%22:[{%22email%22:%22${details.email}%22},{%22Password%22:%22${details.password}%22}]}}`);
    }

    mentorLogin(details)
    {
        let params = new HttpParams();
        params = params.append("email", details.email);
        params = params.append("password", details.password);
        return this.http.get(`https://arcane-ocean-14843.herokuapp.com/api/MentorSignUps/findOne?filter={%22where%22:{%22and%22:[{%22email%22:%22${details.email}%22},{%22Password%22:%22${details.password}%22}]}}`);

    }

    notify(email){
        console.log(email);
        return this.http.get(`https://secret-atoll-46665.herokuapp.com/sendemailtostudent/${email}`)
    }

    reset(email,string){
        console.log(email);
       return this.http.get(`https://secret-atoll-46665.herokuapp.com/reset/${string}/${email}`);
    }

    studentRegistration(details)
    {
        return this.http.post(AppSettings.StudentRegistration, details);
    }

    mentorRegistration(details)
    {
        return this.http.post(AppSettings.MentorRegistration, details);
    }
    showHeadernFooter(value)
    {
        this.showHeaderFooter.next(value);
    }
    scoreForm(details)
    {
        
        return this.http.post('https://arcane-ocean-14843.herokuapp.com/api/DreamColleges',details);
    }

    signup(details)
    {
        return this.http.post(AppSettings.UserSignUp, details);
    }
    mentorSignup(details)
    {
        return this.http.post(AppSettings.MentorSignUp, details);
    }

    
    contactForm(details)
    {
        return this.http.post(AppSettings.ContactUs, details);
    }

    getForexCompanies()
    {
        return this.http.get(AppSettings.ForexCompanies);
    }

    getAccomodations()
    {
        return this.http.get(AppSettings.Accomodations);
    }

    getHelp(details){
        return this.http.post(AppSettings.HelpForm,details);
    }
    
    getLoanCompanies()
    {
        return this.http.get(AppSettings.LoanCompanies);
    }

    getAirTravelCompanies()
    {
        return this.http.get(AppSettings.AirTravelCompanies);
    }

    airTravelCompaniesForm(details)
    {
        return this.http.post(AppSettings.AirTravelCompaniesForm, details);
    }
    airForexCompaniesForm(details)
    {
        return this.http.post(AppSettings.ForexCompaniesForm, details);
    }
    loanInfoForm(details)
    {
        return this.http.post(AppSettings.LoanInfoForm, details);
    }
    
    getUniversitiesData()
    {
        return this.http.get(AppSettings.University);
    }
    accomodationsForm(details)
    {
        return this.http.post(AppSettings.Accomodations, details);   
    }
    mockvisainterview(details)
    {
        return this.http.post(AppSettings.MockVisaInterviewForm,details);   
    }

    MockVisaInterviewForm()
    {
        return this.http.get(AppSettings.MockVisaInterview);   
    }

    getUniversityData(id)
        {
            return this.http.get(AppSettings.University+'/'+id);
        }
    
    getMentorList()
    {
        return this.http.get(AppSettings.MentorRegistration);   
    }
    eventregister(email,name){
        return this.http.get(`https://secret-atoll-46665.herokuapp.com/event_reg/${email}/${name}`)
    }

    removejscssfile(filename, filetype){
        var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none" //determine element type to create nodelist from
        var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none" //determine corresponding attribute to test for
        var allsuspects=document.getElementsByTagName(targetelement)
        for (var i=allsuspects.length; i>=0; i--){ //search backwards within nodelist for matching elements to remove
        if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
            allsuspects[i].parentNode.removeChild(allsuspects[i]) //remove element by calling parentNode.removeChild()
        }
    }
}

@Injectable()
export class LoaderService {
    public status: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    display(value: boolean) {
        this.status.next(value);
    }
    isShown() {
        return this.status.value;
    }
}
