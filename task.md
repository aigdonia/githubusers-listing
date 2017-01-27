## Notes:
  - If you use any of the node task runners or you didn't
    please provide the steps of configuring your app, running, and testing it (Preferred to be in README file or you could send them in the e-mail)
  - If you use bower or npm and you will send the task as .zip or .rar file
    you don't have to include the bower-components or the node-modules folders if it makes the task too large
  - If you will send the task as zip or rar please try to extract it before sending to see if any warning or errors happening during extracting

## Requirements: Create Angular <<<< 1.x >>>> app with the following features:
- It has 3 main pages Home, Users, About.
- The 3 pages has:
  - A fixed header in common with:
    - Title: "Github users" and Github logo.
    - 3 links for the pages (Home  |  Users  |  About)
      - The current page link has active style
      - Change the page title with current selected page name.

- Home and about has any static content.

- The users page has 2 views:
  - A list of Github users:
    - Each user has an avatar, ID, and username.
    - Users are loaded by the request ( https://api.github.com/users ).
    - The users should be loaded before entering the users route (should be in ui router resolve function)
    - There is a "Load More" button at the bottom, which fetches another page of users and added it to the existing list.
    - The list item is clickable to load user details in the side view of the user part
      and change the url form '/users' to '/users/{login}'

  - User part:
    - Displays the first user in the list data by default after the list is loaded.
    - User data is loaded by the request ( https://api.github.com/users/{login} ), try it: https://api.github.com/users/1 or a name instead of 1.
    - This part displays the User data: user id, user avatar image, name, email, and created at.

- pages' URLs:
  - home: '/'
  - about: '/about'
  - users: '/users'
  - user details: '/users/{login}'

  - Redirect from '/home' to '/'.
  - Redirect from '/about/' to '/about'.
  - Redirect from any invalid url to the home page '/'

- Use angular-ui-router.
- Use Sass.
- Use Foundation => >=6.0.0 with flex-box grid and if you want to us any js foundation components Use angular foundation.
- Create unit tests that validates all your code (controllers, services mock GitHub requests, directive, etc...).
- In Your structure consider the project to be SCALEABLE <---- it is an important point.

### Preferred:
- Use git and the commit messages to make sense
- Style your pages as much as you can with the only necessary css or Sass.
- Try to use BEM, OOCSS, SMACSS while writing you css code.
- Try to go with these guides as much as possible:
  - http://cssguidelin.es/.
  - https://github.com/airbnb/javascript/tree/master/es5
  - https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md

- If you didn't use any of the Preferred Please read about them.

**Mockup attached**
