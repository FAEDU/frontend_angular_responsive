var app = angular.module('app',[]);

app.controller('mentor', function($scope, $http){
       $scopenewData={};
       $scope.data=[];
       $scope.originaldata=[];
       $scope.Search=function(){
         if($scope.name===undefined||$scope.name===""){
            $scope.data=$scope.originaldata;
         }
          else{
            $scope.data=$scope.originaldata.filter(user=>{
              if(user.Name.toLowerCase()===$scope.name.toLowerCase())
                return user;
            })
          }
       }
       $scope.getall=function(){
             $http({
                    method : "GET",
                    url : "https://glacial-citadel-47306.herokuapp.com/api/mentors",

                  }).then(function(res){
                    // console.log(res.data);
                  $scope.data=res.data;
                  $scope.originaldata=res.data;
                  console.log($scope.data);
            });
        }
        $scope.Reset=function(){
          var name=document.getElementById("namemen");
          name.value="";
          $scope.data=$scope.originaldata;
        }
});
app.controller('student', function($scope, $http){
       $scopenewData={};
       $scope.data=[];
       $scope.originaldata=[];
       $scope.Search=function(){
         if($scope.name===undefined||$scope.name===""){
            $scope.data=$scope.originaldata;
            if($scope.country===undefined||$scope.country==="")
              $scope.data=$scope.data;
            else{
              $scope.data=$scope.data.filter(user=>{
                if(user.StudyCountry.toLowerCase()===$scope.country.toLowerCase())
                  return user;
              })
            }
         }
          else{
            $scope.data=$scope.originaldata.filter(user=>{
              if(user.name.toLowerCase()===$scope.name.toLowerCase())
                return user;
            })
            console.log($scope.data);
          if($scope.country===undefined||$scope.country==="")
            $scope.data=$scope.data;
          else{
            $scope.data=$scope.data.filter(user=>{
              if(user.StudyCountry.toLowerCase()===$scope.country.toLowerCase())
                return user;
            })
          }
       }
       console.log($scope.data);
     }
       $scope.getall=function(){
             $http({
                    method : "GET",
                    url : "https://glacial-citadel-47306.herokuapp.com/api/students",

                  }).then(function(res){
                    // console.log(res.data);
                    $scope.data=res.data;
                    $scope.originaldata=res.data
                    console.log($scope.data)


            });
        }
        $scope.Reset=function(){
          var name=document.getElementById("namestu");
          var country=document.getElementById("namecountry");
          country.value="";
          name.value="";
          $scope.data=$scope.originaldata;
        }
});
app.controller('forex',function($scope,$http){
  $scope.data={};
  $scope.originaldata={};
  $scope.Search=function(){
    if($scope.name===undefined||$scope.name===""){
       $scope.data=$scope.originaldata;
    }
     else{
       $scope.data=$scope.originaldata.filter(user=>{
         if(user.name.toLowerCase()===$scope.name.toLowerCase())
           return user;
       })
     }
  }
  $scope.getall=function(){
    $http({
           method : "GET",
           url : "https://glacial-citadel-47306.herokuapp.com/api/ForexCompanies",
         }).then(function(res){
           // console.log(res.data);
           $scope.data=res.data;
           $scope.originaldata=res.data
           console.log($scope.data)
   });
  }
  $scope.Reset=function(){
          var name=document.getElementById("forexname");
          name.value="";
          $scope.data=$scope.originaldata;
        }
})
app.controller('forex',function($scope,$http){
  $scope.data={};
  $scope.originaldata={};
  $scope.Search=function(){
    if($scope.name===undefined||$scope.name===""){
       $scope.data=$scope.originaldata;
    }
     else{
       $scope.data=$scope.originaldata.filter(user=>{
         if(user.name.toLowerCase()===$scope.name.toLowerCase())
           return user;
       })
     }
  }
  $scope.getall=function(){
    $http({
           method : "GET",
           url : "https://glacial-citadel-47306.herokuapp.com/api/ForexCompanies",
         }).then(function(res){
           // console.log(res.data);
           $scope.data=res.data;
           $scope.originaldata=res.data
           console.log($scope.data)
   });
  }
  $scope.Reset=function(){
          var name=document.getElementById("forexname");
          name.value="";
          $scope.data=$scope.originaldata;
        }
})



app.controller('loan',function($scope,$http){
  $scope.data={};
  $scope.originaldata={};
  $scope.Search=function(){
    if($scope.name===undefined||$scope.name===""){
       $scope.data=$scope.originaldata;
    }
     else{
       $scope.data=$scope.originaldata.filter(user=>{
         if(user.name.toLowerCase()===$scope.name.toLowerCase())
           return user;
       })
     }
  }
  $scope.getall=function(){
    $http({
           method : "GET",
           url : "https://glacial-citadel-47306.herokuapp.com/api/LoanCompanies",
         }).then(function(res){
           // console.log(res.data);
           $scope.data=res.data;
           $scope.originaldata=res.data
           console.log($scope.data)
   });
  }
  $scope.Reset=function(){
          var name=document.getElementById("loanname");
          name.value="";
          $scope.data=$scope.originaldata;
        }
})




app.controller('airtravel',function($scope,$http){
  $scope.data={};
  $scope.originaldata={};
  $scope.Search=function(){
    if($scope.name===undefined||$scope.name===""){
       $scope.data=$scope.originaldata;
    }
     else{
       $scope.data=$scope.originaldata.filter(user=>{
         if(user.name.toLowerCase()===$scope.name.toLowerCase())
           return user;
       })
     }
  }
  $scope.getall=function(){
    $http({
           method : "GET",
           url : "https://glacial-citadel-47306.herokuapp.com/api/AirTravelCompanies",
         }).then(function(res){
           // console.log(res.data);
           $scope.data=res.data;
           $scope.originaldata=res.data
           console.log($scope.data)
   });
  }
  $scope.Reset=function(){
          var name=document.getElementById("airtravelname");
          name.value="";
          $scope.data=$scope.originaldata;
        }
})


app.controller('sending_data',function($scope,$http){

  $scope.send=function(){
  $http({
    method:"GET",
    url:`https://glacial-citadel-47306.herokuapp.com/api/UserSignUps/findOne?filter={"where":{"email":"${$scope.email}","password":"${$scope.password}"}}`
  }).then(res=>console.log(res)).catch(err=>console.log(err))
  }
})
