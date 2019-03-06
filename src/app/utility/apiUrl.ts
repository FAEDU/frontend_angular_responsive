export class AppSettings {
    public static API_ENDPOINT='https://arcane-ocean-14843.herokuapp.com/api/';

    static University = AppSettings.API_ENDPOINT + 'Universities'; //get
    static UserSignUp = AppSettings.API_ENDPOINT + 'UserSignUps'; //post
    static MentorSignUp = AppSettings.API_ENDPOINT + 'MentorSignUps'; //post
    static UserLogin = AppSettings.API_ENDPOINT + 'UserSignUps/findOne';  //post
    static MentorLogin = AppSettings.API_ENDPOINT + 'MentorSignUps/findOne';  //post
    static ContactUs = AppSettings.API_ENDPOINT + 'ContactUs';  //post
    static UserLogout = AppSettings.API_ENDPOINT + 'Users/logout';  //post
    static Accomodations = AppSettings.API_ENDPOINT + 'Accomodations';  //get
    static AirTravelCompanies = AppSettings.API_ENDPOINT + 'AirTravelCompanies';  //get
    static AirTravelCompaniesForm = AppSettings.API_ENDPOINT + 'AirTravelForms';  //post
    static ForexCompanies = AppSettings.API_ENDPOINT + 'ForexCompanies';  //get
    static ForexCompaniesForm = AppSettings.API_ENDPOINT + 'ForexHelpForms';  //post
    static LoanInfoForm = AppSettings.API_ENDPOINT + 'LoanInfoForms';  //post
    static HelpForm = AppSettings.API_ENDPOINT + 'HelpForm';  //post
    static LoanCompanies = AppSettings.API_ENDPOINT + 'loanCompanies';  //get

    static MockVisaInterview = AppSettings.API_ENDPOINT + 'MockVisaInterviews';  //post
    static MockVisaInterviewForm = AppSettings.API_ENDPOINT + 'MockVisaInterviewForms';  //get

    static StudentRegistration = AppSettings.API_ENDPOINT + 'students';  //get
    static MentorRegistration = AppSettings.API_ENDPOINT + 'Mentors';  //get 

 }