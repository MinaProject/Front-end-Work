var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
      $routeProvider
      .when('/', {
	  templateUrl: 'loginview.html'
      })
      .when('/Userdetails', {
	  templateUrl: 'Userdetails.html'
      })
      .when('/dashboard', {
	  resolve: {
		"check": function($location, $rootScope) {
		    if(!$rootScope.loggedIn) {
			$location.path('/');
		    }
		}
	    },
	    templateUrl: 'dashboard.html'
	})
	.when('/Writestory', {
	  resolve: {
		"check": function($location, $rootScope) {
		    if(!$rootScope.loggedIn) {
			$location.path('/');
		    }
		}
	    },
	    templateUrl: 'Writestory.html'
	})
	.when('/Storyshow', {
	  resolve: {
		"check": function($location, $rootScope) {
		    if(!$rootScope.loggedIn) {
			$location.path('/');
		    }
		}
	    },
	    templateUrl: 'Storyshow.html'
	})
	.otherwise({
	    redirectTo: '/'
	});
     });

     app.controller('loginCtrl', function($scope, $location, $rootScope) {
	 $scope.submit = function() {

	     if($scope.username == 'admin' && $scope.password == 'admin') {
		  $rootScope.loggedIn = true;
		  $location.path('/dashboard');
	     } else {
		 alert('Wrong Stuff');
	     }
	  };
     });
     
     app.controller('MinaMenuCtrl', function($scope, $location, $rootScope) {
    	 //$rootScope.loggedIn = true;
    	 $scope.viewstories = function() {
    		 $location.path('/Storyshow');
    	  };
    	  
    	  $scope.addstory = function() {
     		 $location.path('/Writestory');
     	  };
     	  
     	 $scope.backtologin = function() {
    		 $location.path('/');
    	  };
         });
     
     app.controller('ViewStoryCtrl', function($scope, $location, $rootScope, $http, $filter) {
    	 $scope.love = "";
			$scope.sex = "";
			$scope.relate = "";
			$scope.HIV = "";
			$scope.stories="";
			$scope.myVar = true;
			$scope.myVar1 = true;
			$scope.myVar2 = true;
			$scope.myVar3 = true;
			$scope.stor="ll";
			$scope.loves="kk";
			$scope.storyview= true;
			$scope.topicview=false;
			$scope.story="";
			$scope.hidelnk1=false;
			$scope.hidelnk2=true;
			
			$scope.toggle = function(){
				$scope.myVar = !$scope.myVar;
			};
			$scope.toggle1 = function(){
				$scope.myVar1 = !$scope.myVar1;
			};
			$scope.toggle2 = function(){
				$scope.myVar2 = !$scope.myVar2;
			};
			$scope.toggle3 = function(){
				$scope.myVar3 = !$scope.myVar3;
			};
			
			$scope.displaystory= function(stry){
				
				$scope.stor = stry;
				
				$scope.story = $filter('filter')($scope.stories, {uuid: $scope.stor});
				$scope.storyview= !$scope.storyview;
				$scope.topicview=!$scope.topicview;
				$scope.hidelnk1=!$scope.hidelnk1;
				$scope.hidelnk2=!$scope.hidelnk2;
				
			} // http://localhost:9000/stories.json
			 $http.get("https://11e9ba55.ngrok.com/backend/")//(" https://11e9ba55.ngrok.com/backend/ http://3e3447.ngrok.com") "http://localhost:9000/gistfile1.txt"
 		.success(function(response){ $scope.stories=response; $scope.love = $filter('filter')($scope.stories, {category: '1'}); 
 		$scope.sex = $filter('filter')($scope.stories, {category: '2'});
 		$scope.relate = $filter('filter')($scope.stories, {category: '3'});
 		}).error(function(response, status){ $scope.loves=status; });
 		//}
 		
 		//$scope.love = filterFilter($scope.stories, 'a');
 		//$scope.gradeC = $filter('filter')($scope.results.subjects, {grade: 'C'})[0];
			 $scope.StorytoTopics = function(){
					$scope.storyview= !$scope.storyview;
					$scope.topicview=!$scope.topicview;
					$scope.hidelnk1=!$scope.hidelnk1;
					$scope.hidelnk2=!$scope.hidelnk2;
			 }
			 
			 $scope.backtomenu = function(){
				 $location.path('/dashboard');
			 }
       });
     
     app.controller('CreateUserCtrl', function($scope/*, $http*/) {  
	      $scope.user = '';
	      //$scope.email = 'john.doe@gmail.com';
	      $scope.passwd1 = "ggg";
	      $scope.passwd2 = '';
	      $scope.thename = '';
         $scope.surname = '';
	      $scope.error = false;
	      $scope.incomplete = true;
	      
	      $scope.backtologin = function() {
	    	  $location.path('/');
	      }
	      
	      $scope.test = function() {
	      if (!$scope.passwd1.length || !$scope.passwd2.length) {
		  $scope.error = true;
		  $scope.stat = "incomplete";
	      } 
	      else {
	    	  $scope.stat = "complete";
		      $scope.error = false;
	      }
	        $scope.incomplete = false;
	      if( ($scope.thename.length == 0) || ($scope.surname.length == 0)  || ($scope.user.length == 0) || ($scope.passwd1.length == 0) || ($scope.passwd2.length == 0) )
	        {
	        	
		  		$scope.incomplete = true;
		    }
	      
	      }
	      
	      $scope.submit = function(){
	    	 if($scope.passwd1 !== $scope.passwd2)
	    	 {
	    		 //Error notification
	    		 alert('Please retype the password correctly');
	    	 }
	    	 else//Save the info to the database if online, else save to an offline storage location
	    	 	 //Also return to login page
	    	 { 
	    		 /*$http({
	    			 url: 'http://3e3447.ngrok.com', 
	    			 method: "POST",
	    			 data: {  
	    				 category: 1,
	    				 author: 'Codie',
	    				 title: 'Miss',
	    				 body: 'Welcome to Praekelt'
	    			 }
	    		 }).success(function (data, status, headers, config) {
	    			  
	    		  });
	    		  
	    		  
	    			 
	    		*/
	    	}
	      }
	  });
     
     app.controller('CreateStoryCtrl', function($scope, $http, $location){

 	    $scope.theForm = {"title": 'Story Title',
 						  "author": 'The Author',
 						  "category": '1',
 						  "body": 'The Story'};
 	   
 	    $scope.thesubmit = function(){
 	   
 	    	//$localstorage.storylist = $scope.theForm;    //storylist in offline storage
 	    	
 	    	$http.post('https://11e9ba55.ngrok.com/backend/create_story', $scope.theForm).success(function(data, status, headers, config) {
 					
 	    			//alert("Thanks for your story. It's successfully submitted!");
 	    			$location.path('/dashboard');
 	    			//$scope.newstory = response;
 			});
 	    	
 	    	$location.path('/dashboard'); //Back to the menu
 		    //$location.path('/Main Menu page.html');
 	    }
 	    
 	   $scope.backtomenu= function(){
    		$location.path('/dashboard');
    	}
 	   
       });