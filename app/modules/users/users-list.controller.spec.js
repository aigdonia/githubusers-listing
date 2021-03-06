(function(){
  'use strict';

  describe('Users Listing Controller', function(){

    var usersListController;
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
    var mockedMoreUrl = "https://api.github.com/users?since=";
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
    var mockedGithubUsersFactory = {
        fetchRemoteGithubUsers: function(url){}
      };

    var mockedResponse = {
      usersList: _.chunk(mockedUsersList,2)[0],
      moreUrl: mockedMoreUrl+"3"
    };
    beforeEach(module('github-users'));
    beforeEach(inject(function($controller, $q){
      spyOn(mockedGithubUsersFactory, 'fetchRemoteGithubUsers').and.callFake(function(url){
        var nextPageMock = {
          usersList: _.chunk(mockedUsersList,2)[1],
          moreUrl: mockedMoreUrl+"5"
        };
        return {
          then: function(cb) { return cb(nextPageMock); }
        };
      });

      usersListController = $controller('UsersListController', {
        ghUsersPreloaded:mockedResponse,
        userPreloaded: mockedUser,
        GithubUsers: mockedGithubUsersFactory
      });
    }));
    //function UsersListController(ghUsers, GithubUsers){

    it('SHOULD be initiated with users list', function(){
      expect(usersListController.usersList).toBeDefined();
    });

    it('load more url SHOULD be exist to load next page', function(){
      expect(usersListController.loadMoreUrl).toBeDefined();
    });

    it('invoke LoadMore function SHOULD return the next page content including loadMoreUrl, and add the new entried to usersList', function(){
      expect(usersListController.usersList.length).toBe(2);
      usersListController.loadMore();
      expect(usersListController.usersList.length).toBe(4);
    });

  });
})();
