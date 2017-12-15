(function() {
    'use strict';
  
    angular
      .module('dopplerRelay')
      .controller('LoginAdminCtrl', LoginAdminCtrl);
  
      LoginAdminCtrl.$inject = [
      'auth',
      '$translate',
      '$location'
    ];
  
    function LoginAdminCtrl(auth, $translate, $location) {
        var vm = this;
        
        vm.submitLogin = submitLogin;
        vm.updateValidation = updateValidation;

        function updateValidation(loginform) {
            if (loginform && loginform.email.$modelValue) {
              loginform.email.$setValidity('error', true);
            }
            if (loginform && loginform.password.$modelValue) {
              loginform.password.$setValidity('error', true);
            }
          }

        function submitLogin (loginform) {
            if (loginform.$invalid) {
              return;
            }
      
            var credentials = {
              username: vm.email,
              password: vm.password,
              userToImpersonate: vm.userData
            };
      
            auth.login(credentials).then(function (result) {
                if(result.personToImpersonateNotFound){
                    return loginform.userData.$setValidity('error', false);
                }
                if (result.authenticated) {
                    $location.path('/');
                } else {
                    loginform.email.$setValidity('error', false);
                    loginform.password.$setValidity('error', false);
                }
            });
        };
    }
  
})();
  