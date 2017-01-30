(function(){
  'use strict';

  describe('Users List Factory', function(){
    var usersFactory;
    var mockedUsersList = [
        {
          "login": "mojombo",
          "id": 1,
          "avatar_url": "https://avatars.githubusercontent.com/u/1?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/mojombo",
          "html_url": "https://github.com/mojombo",
          "followers_url": "https://api.github.com/users/mojombo/followers",
          "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
          "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
          "organizations_url": "https://api.github.com/users/mojombo/orgs",
          "repos_url": "https://api.github.com/users/mojombo/repos",
          "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
          "received_events_url": "https://api.github.com/users/mojombo/received_events",
          "type": "User",
          "site_admin": false
        },
        {
          "login": "defunkt",
          "id": 2,
          "avatar_url": "https://avatars.githubusercontent.com/u/2?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/defunkt",
          "html_url": "https://github.com/defunkt",
          "followers_url": "https://api.github.com/users/defunkt/followers",
          "following_url": "https://api.github.com/users/defunkt/following{/other_user}",
          "gists_url": "https://api.github.com/users/defunkt/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/defunkt/subscriptions",
          "organizations_url": "https://api.github.com/users/defunkt/orgs",
          "repos_url": "https://api.github.com/users/defunkt/repos",
          "events_url": "https://api.github.com/users/defunkt/events{/privacy}",
          "received_events_url": "https://api.github.com/users/defunkt/received_events",
          "type": "User",
          "site_admin": true
        },
        {
          "login": "pjhyett",
          "id": 3,
          "avatar_url": "https://avatars.githubusercontent.com/u/3?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/pjhyett",
          "html_url": "https://github.com/pjhyett",
          "followers_url": "https://api.github.com/users/pjhyett/followers",
          "following_url": "https://api.github.com/users/pjhyett/following{/other_user}",
          "gists_url": "https://api.github.com/users/pjhyett/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/pjhyett/subscriptions",
          "organizations_url": "https://api.github.com/users/pjhyett/orgs",
          "repos_url": "https://api.github.com/users/pjhyett/repos",
          "events_url": "https://api.github.com/users/pjhyett/events{/privacy}",
          "received_events_url": "https://api.github.com/users/pjhyett/received_events",
          "type": "User",
          "site_admin": false
        },
        {
          "login": "wycats",
          "id": 4,
          "avatar_url": "https://avatars.githubusercontent.com/u/4?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/wycats",
          "html_url": "https://github.com/wycats",
          "followers_url": "https://api.github.com/users/wycats/followers",
          "following_url": "https://api.github.com/users/wycats/following{/other_user}",
          "gists_url": "https://api.github.com/users/wycats/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/wycats/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/wycats/subscriptions",
          "organizations_url": "https://api.github.com/users/wycats/orgs",
          "repos_url": "https://api.github.com/users/wycats/repos",
          "events_url": "https://api.github.com/users/wycats/events{/privacy}",
          "received_events_url": "https://api.github.com/users/wycats/received_events",
          "type": "User",
          "site_admin": false
        }
    ];
    var httpBackend;
    beforeEach(module('github-users'));

    beforeEach(inject(function($httpBackend, GithubUsers){
      usersFactory = GithubUsers;
      httpBackend = $httpBackend;
      $httpBackend.when('GET', 'https://api.github.com/users')
        .respond(
          _.chunk(mockedUsersList,2)[0],
          {
            'Link' :
              '<https://api.github.com/users?since=3>; rel="next", <https://api.github.com/users{?since}>; rel="first"'
          }
        );
    }));

    it('SHOULD be initiated already', function(){
      expect(usersFactory).toBeDefined();
    });

    it('fetchRemoteGithubUsers SHOULD provide processed array of users', function(){
      var usersFactorizedResponse;
      usersFactory.fetchRemoteGithubUsers().then(function(response){
        usersFactorizedResponse = response;
      });
      httpBackend.flush();
      expect(usersFactorizedResponse.usersList.length).toBe(2);
    });

    it('fetchRemoteGithubUsers SHOULD provide URL for next request page', function(){
      var usersFactorizedResponse;
      usersFactory.fetchRemoteGithubUsers().then(function(response){
        usersFactorizedResponse = response;
      });
      httpBackend.flush();
      expect(usersFactorizedResponse.moreUrl).toBeDefined();
    });

    it('fetchRemoteGithubUsers with passed parameter SHOULD invoke the next page and return next users details, and link to next page', function(){
      // mocked Ajax Call
      httpBackend.when('GET', 'https://api.github.com/users?since=3')
        .respond(
          _.chunk(mockedUsersList,2)[1],
          {
            'Link' :
              '<https://api.github.com/users?since=5>; rel="next", <https://api.github.com/users{?since}>; rel="first"'
          }
        );


      var usersFactorizedResponse;
      usersFactory.fetchRemoteGithubUsers("https://api.github.com/users?since=3")
        .then(function(response){
          usersFactorizedResponse = response;
        });
      httpBackend.flush();
      expect(usersFactorizedResponse.usersList).toBeDefined();
      expect(usersFactorizedResponse.moreUrl).toBeDefined();
    });
  });
})();
