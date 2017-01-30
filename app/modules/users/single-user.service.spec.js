(function(){
  'use strict';
  describe('Single User Factory', function(){
    var singUserFactory;
    var httpBackend;
    var mockedUser = {
        "login": "aigdonia",
        "id": 1188074,
        "avatar_url": "https://avatars.githubusercontent.com/u/1188074?v=3",
        "gravatar_id": "",
        "url": "https://api.github.com/users/aigdonia",
        "html_url": "https://github.com/aigdonia",
        "followers_url": "https://api.github.com/users/aigdonia/followers",
        "following_url": "https://api.github.com/users/aigdonia/following{/other_user}",
        "gists_url": "https://api.github.com/users/aigdonia/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/aigdonia/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/aigdonia/subscriptions",
        "organizations_url": "https://api.github.com/users/aigdonia/orgs",
        "repos_url": "https://api.github.com/users/aigdonia/repos",
        "events_url": "https://api.github.com/users/aigdonia/events{/privacy}",
        "received_events_url": "https://api.github.com/users/aigdonia/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Ahmed Gaber",
        "company": "@intouchhq ",
        "blog": "http://aigdonia.me",
        "location": "Egypt",
        "email": "aigdonia@gmail.com",
        "hireable": true,
        "bio": null,
        "public_repos": 25,
        "public_gists": 0,
        "followers": 1,
        "following": 6,
        "created_at": "2011-11-11T08:35:05Z",
        "updated_at": "2016-11-27T10:24:10Z"
      };

    beforeEach(module('github-users'));
    beforeEach(inject(function(SingleGithubUser, $httpBackend){
      singUserFactory = SingleGithubUser;
      httpBackend = $httpBackend;

      $httpBackend.when('GET','https://api.github.com/users/aigdonia')
        .respond(mockedUser);
    }));

    it('MUST return null if no user login passed as parameter', function(){
      var user = singUserFactory.fetchGithubUser();
      expect(user).toBeNull();
    });

    it('by passing user login "aigdonia" SHOULD retrive passed user\'s details in formatted object', function(){
      var user;
      singUserFactory.fetchGithubUser('aigdonia').then(function(response){
          user = response;
      });
      httpBackend.flush();
      expect(user).toBeDefined();
      expect(user.login).toEqual('aigdonia');
      expect(user.stats).toBeDefined();
    });

    // TODO test if user is not found
    // TODO test if qouta is finished


  });


  // angular.module('github-users')
  //   .factory('SingleGithubUser', SingleGithubUserFactory);

//   SingleGithubUserFactory.$inject = ['$http', '$q'];
//   function SingleGithubUserFactory($http, $q){
//
//     function getDummyUser() {
//       var meOnGithub = {
//         "login": "aigdonia",
//         "id": 1188074,
//         "avatar_url": "https://avatars.githubusercontent.com/u/1188074?v=3",
//         "gravatar_id": "",
//         "url": "https://api.github.com/users/aigdonia",
//         "html_url": "https://github.com/aigdonia",
//         "followers_url": "https://api.github.com/users/aigdonia/followers",
//         "following_url": "https://api.github.com/users/aigdonia/following{/other_user}",
//         "gists_url": "https://api.github.com/users/aigdonia/gists{/gist_id}",
//         "starred_url": "https://api.github.com/users/aigdonia/starred{/owner}{/repo}",
//         "subscriptions_url": "https://api.github.com/users/aigdonia/subscriptions",
//         "organizations_url": "https://api.github.com/users/aigdonia/orgs",
//         "repos_url": "https://api.github.com/users/aigdonia/repos",
//         "events_url": "https://api.github.com/users/aigdonia/events{/privacy}",
//         "received_events_url": "https://api.github.com/users/aigdonia/received_events",
//         "type": "User",
//         "site_admin": false,
//         "name": "Ahmed Gaber",
//         "company": "@intouchhq ",
//         "blog": "http://aigdonia.me",
//         "location": "Egypt",
//         "email": "aigdonia@gmail.com",
//         "hireable": true,
//         "bio": null,
//         "public_repos": 25,
//         "public_gists": 0,
//         "followers": 1,
//         "following": 6,
//         "created_at": "2011-11-11T08:35:05Z",
//         "updated_at": "2016-11-27T10:24:10Z"
//       };
//       var defer = $q.defer();
//       defer.resolve(meOnGithub);
//
//       return defer.promise;
//     }
//
//     this.fetchGithubUser = function(userLogin){
//       var defer = $q.defer();
//       $http.get('https://api.github.com/users/'+userLogin).then(
//         function(response){
//           var user = response.data;
//           defer.resolve({
//             avatar_url: user.avatar_url,
//             name: user.name,
//             login: user.login,
//             email: user.email,
//             created_at: user.created_at,
//             stats: {
//               followers: user.followers,
//               following: user.following,
//               repos: user.public_repos,
//               gists: user.public_gists
//             }
//           });
//         },
//         function(){}
//       );
//
//       return defer.promise;
//     };
//
//     return this;
//   }
})();
