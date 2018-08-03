# The Feed Reader Testing Project

Testing the existing web-based application that displays Udacity blog RSS feeds using Jasmine.

* [Instructions](#instructions)
* [Contributing](#contributing)
* [Credits](#credits)

## Instructions
To run the application online, use the following link:
https://olgakit.github.io/feedreader/

To run the application locally, download this github repository. Open the index.html file in the browser.

Jasmine Tests:

1. RSS Feed links and titles: ensures that every title is a link and vice versa
2. Menu: ensures that the menu is hidden by default and open upon the initial click on the menu icon, closes upon the subsequent click on the menu icon
3. Inital Entries: ensures that the feed is loaded and contains at least one title
4. New RSS Feed Selection: ensures the content update upon the new feed load

## Contributing
Will review pull requests and accept if it improves game functionality.

## Credits

1. JQuery library: http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js

2. Handlebars: http://cdn.jsdelivr.net/handlebarsjs/2.0.0/handlebars.min.js

3. Jasmine JS Testing: https://jasmine.github.io/

4. fonts.css file is the font style code taken from https://fonts.googleapis.com/css?family=Roboto:400,100,300,700 to replace the link in index.html file to avoid browser from blocking all content when running Jasmine tests online
