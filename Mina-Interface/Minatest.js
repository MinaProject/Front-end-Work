/**
 * 
 */

/*describe('PasswordController', function() {
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.grade', function() {
    it('sets the strength to "strong" if the password length is >8 chars', function() {
      var $scope = {};
      var controller = $controller('PasswordController', { $scope: $scope });
      $scope.password = 'longerthaneightchars';
      $scope.grade();
      expect($scope.strength).toEqual('strong');
    });
  });
}); */

/* describe('loginCtrl', function() {
	beforeEach(module('mainApp'));
	
	var $controller;
	var location;
	var rootscope;
	var $scope;
	

	beforeEach(inject(function($injector){
		rootscope=$injector.get('$rootScope');
		location=$injector.get('$location');
		
		$controller =  $injector.($controller)('loginCtrl', { 
			$scope: $scope;
		$location: location;
		$rootScope: rootscope;
		
	});
	}));
	
	describe('$rootScope.loggedin', function() {
		it('makes logged in true if the username and password are correct', function() {
			/*var $scope = {};
			var controller = $controller('loginCtrl', { 
				$scope: $scope;
				$location: location;
				$rootScope: rootscope;
				
			});*/
			/* $scope.username = 'admin';
			$scope.password = 'admin';
			expect($rootScope.loggedin).toEqual(true);
			
		});
	});
	
});   */

describe("true", function() {
	it("Should be true", function(){
		 expect(true).toBeTruthy();
	});
	
});