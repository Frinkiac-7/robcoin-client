![F7 Logo](http://frinkiac-7.net/images/f7-pos.png "F7 logo")

# Robcoin - Fun with cryptocurrency

Robcoin is an account management app for an eponymous pseudo-cryptocurrency.  The app works by tying into a backend API (repo is at: https://github.com/Frinkiac-7/robcoin) for Create, Read, Update, and Destroy methods for account transactions written in Rails.

## Features

-  The app allows users to perform standard banking tasks with their Robcoin

## App components

- HTML5/CSS3
- JavaScript
- jQuery and AJAX
- Bootstrap
- Custom API built with Ruby on Rails
- PostgreSQL
- Services from GitHub.com and GitHub.io
- git for versioning

### Issues and Planned Features

- `Issue: Only accepts whole number transactions`: Next version will add the ability to post transactions with decimal values of .01 to .99.

- `Feature: Establish actual cryptocurrency`: Explore possibility of converting robcoin from pseudo to actual cryptocurrency

- `Feature: Account transactions & history`: Currently, the app only allows for balance tracking so a ledger is the next logical enhancement.

- `Feature: See a chart of my balance history`: This is a nice to have feature that would likely follow the ledger enhancement.

- `Feature: Foreign exchange rates`: The ability to determine exchange rates against other currencies would be an interesting challenge.

## Development Process

The development of this app will benefit greatly from lessons learned during my last project in which technical issues were allowed to derail the project timeline.

1) The user stories for the full version of this are as follows:
  - As a user, I want to be able to:
    - Create a user account;
    - Open a Robcoin account;
    - See my current account balance;
    - See my account transaction history;
    - See how much my Robcoin is worth in USD or Euros;
    - Select other foreign currencies to compare against;
    - See a chart of my balance history;
    - Register a deposit or withdrawal;
    - Perform standard user authentication (sign-in, sign-out, etc.)
2) Project wireframes and ERD documentation can be found here https://github.com/Frinkiac-7/robcoin-client/tree/master/project_docs
3) The project timeline for MVP completion is as follows:
  - Day 1: Start user and account management APIs
  - Day 2: Complete user & account management, start data model
  - Day 3: Complete data model, start front-end
  - Day 4: Complete front-end, complete deployment and requirements testing
  - Day 5: Pray and present

## Project Story
This project benefited immensely from the lessons learned during my first coding effort.  Specifically, the nature of the work ahead of me was clearer so it was easier to plan my approach and focus so I spent less time getting lost in the weeds while losing sight of the immediate task at hand.  This minimized the amount of time spent on troubleshooting issues as they were more clearly defined.

The development process was much more iterative and focused on incremental steps to a much greater extent than I had before.  Of course, there was the issue of my forgetting to use the correct user controller earlier on which led to a last minute scramble.  Thankfully, the snow gods intervened (praised be the snow gods) and additional time was available to correct my oversight.  This also led to this project's "ah-ha!" which demonstrated just how much more there is to truly understanding Rails.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
