# Timbers Army Football Club

#### An Epicodus independent project in Angular2, 07.14.17

#### **By Anabel Ramirez**

## Description

This web application is for a club manager to keep track of club players.

|Behavior| Input (User Action/Selection) |Output|
|---|:---|:---|
|Any user can view a list of teams.  | "click teams link"|"list of teams"|
|Any user can view a details of a team on click.  | "click team link"|"team name, roster, schedule, scores"|
|Any user can view the about page.  | "click about link"|"information about the club"|
|Manager can access a database of the information.  | "click admin link"|"features allowing edit, adding, deleting information"|
|Any user can filter the information by position played.  | "select by player position in drop down"|"list of players who play that position"|
|Manager can add new players to a clubs.  | "click admin/add link under team"|"add players"|
|Manager can edit club information.  | "click admin/edit link under team"|"edit information"|
|Manager can delete a player from a club.  | "click admin/delete link next to player"|"delete player"|


## To download and run this project:
- Clone [repo](https://github.com/AnabelGR/club-manager.git) to your desktop.
- Ensure you have Angular 4 installed by running `ng -v`.

| If Not Run One of these Commands |
| --- |
| For Windows |
|`npm install @angular/common@next @angular/compiler@next @angular/compiler-cli@next @angular/core@next @angular/forms@next @angular/http@next @angular/platform-browser@next @angular/platform-browser-dynamic@next @angular/platform-server@next @angular/router@next @angular/animations@next --save` |
| For Linux/Mac |
|`npm install @angular/{common,compiler,compiler-cli,core,forms,http,platform-browser,platform-browser-dynamic,platform-server,router,animations}@next --save` |

- Run `$ npm install` and `$ bower install` in your terminal to gather required packages and styling dependencies.
_____________________ADD THIS SECTION FOR FIREBASE, DELETE OTHERWISE
- install Firebase `npm install angularfire2@4.0.0-rc.0 firebase --save`
- install promise-polyfill patch `npm install promise-polyfill --save-exact`
- You will need a [Firebase API](https://firebase.google.com/) key to run this code.
    - Go to the website and create a free account. (Links to your gmail if you have one.)
    - In the user dashboard area, select the option `create a new project` and provide the name `database name here`.
    - You'll be taken to an "Overview" area. Select the option `add Firebase to your web app`.
    - Copy the information in the pop-up window to use in creating an `api-keys.ts` file.
    - Go to the Database area by selecting the Database option from the navbar on the left-hand side. Near the top of the page, there should be a blue navbar reading Realtime Database. Below this, select the option that reads RULES.
    - Change both the ".read", and ".write" properties here to "true" like this:<br> `
    {
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}`
    - In the src/app folder, create a file and name it `api-keys.ts`.
    - Paste the information from the pop-up window into this format:
        ```typescript
        export var masterFirebaseConfig = {
          apiKey: "xxxx",
          authDomain: "xxxx.firebaseapp.com",
          databaseURL: "https://xxxx.firebaseio.com",
          storageBucket: "xxxx.appspot.com",
          messagingSenderId: "xxxx"
        };```
    - Click on the Database option in the left-hand navigational menu.
    - Select the 3 vertical dots on the right-hand side of the grey bar with your database URL on it. (It's right next to the + and - buttons). This should bring up a small menu.
    - Select Import JSON from this menu. This will result in a modal window prompting you to upload a file.
    - Locate the nameofyoursamplefile.json file from the project folder, and upload it.

- Run `ng serve` for a dev server. Navigate to http://localhost:4200/ in a web browser to view the project.

## Support and contact details
To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

If you have any issues or have questions, ideas, concerns, or contributions please contact the contributor through Github.

## Technologies Used
* Angular
* Firebase
* HTML
* CSS
* Bootstrap
* SASS

### License
This software is licensed under the MIT license.

Copyright (c) 2017 **Anabel Ramirez**
