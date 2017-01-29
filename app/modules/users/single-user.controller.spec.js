(function(){
  'use strict';

  describe('Single User Controller', function(){

    var singleUserController;
    var userMock = {
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

    beforeEach( module('github-users') );
    beforeEach(inject(function($controller){
        singleUserController = $controller('SingleUserController', {
          user: userMock
        });
      }) );

    it('Github User SHOULD be passed to initiate', function(){
      expect(singleUserController).toBeDefined();
    });

    it('User details SHOULD be accessible through currentUser', function(){
      expect(singleUserController.currentUser).toBeDefined();
    });

    it('passed User details SHOULD contain user login, avatar, email, name, and create_at date', function(){
      expect(singleUserController.currentUser.login).toBe('aigdonia');
      expect(singleUserController.currentUser.name).toBe('Ahmed Gaber');
      expect(singleUserController.currentUser.avatar_url).toBeDefined();
      expect(singleUserController.currentUser.created_at).toBeDefined();
    });
  });

})();
