(function(){
  'use strict';

  angular.module('github-users')
    .factory('SingleGithubUser', SingleGithubUserFactory);

  SingleGithubUserFactory.$inject = ['$http', '$q'];
  function SingleGithubUserFactory($http, $q){
    this.fetchGithubUser = function(userLogin){
      var defer = $q.defer();
      if(!userLogin){
        return null;
      } else {
        $http.get('https://api.github.com/users/'+userLogin).then(
          function(response){
            var user = response.data;
            defer.resolve({
              avatar_url: user.avatar_url,
              name: user.name,
              login: user.login,
              email: user.email,
              created_at: user.created_at,
              stats: {
                followers: user.followers,
                following: user.following,
                repos: user.public_repos,
                gists: user.public_gists
              }
            });
          },
          function(error){
            defer.reject(error);
          }
        );
      }

      return defer.promise;
    };

    return this;
  }
})();
