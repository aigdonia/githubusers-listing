(function(){
  'use strict';

  angular.module('github-users')
    .factory('GithubUsers', GithubUsersFactory);

  GithubUsersFactory.$inject = ['$http', '$q'];

  function GithubUsersFactory($http, $q) {
    this.fetchRemoteGithubUsers = function(tbFetched){
      var remoteUsersListUrl = 'https://api.github.com/users';
      if(!!tbFetched)
        remoteUsersListUrl = tbFetched;

      var deferred = $q.defer();
      $http({
        method: 'GET',
        url: remoteUsersListUrl,
      }).then(function(response){
        var moreLink = response.headers('Link').split(',');
        var section = moreLink[0].split(';');
        if (section.length === 2) {
          moreLink = section[0].replace(/<(.*)>/, '$1').trim();
        }

        var usersList = _.reduce(response.data, function(users,rawUser){
          users.push({
            id: rawUser.id,
            login: rawUser.login,
            avatar_url: rawUser.avatar_url
          });
          return users;
        },[]);

        deferred.resolve({
          usersList: usersList,
          moreUrl: moreLink
        });
      }, function(){});

      return deferred.promise;
    };

    return this;
  }
})();
