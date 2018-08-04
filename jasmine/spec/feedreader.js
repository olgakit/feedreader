/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    const container = document.querySelector('.feed');
    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('have URL links', function() {
             allFeeds.forEach(function(feed) {
                 expect(feed.url).toBeDefined();
                 expect(feed.url.length).not.toBe(0);
             });
         });

        /* test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('have titles for the links', function() {
             allFeeds.forEach(function(feed) {
                 expect(feed.name).toBeDefined();
                 expect(feed.name.length).not.toBe(0);
             });
         });
    });


    describe('The menu', function() {
        const body = document.querySelector('body');

        /* test that ensures the menu element is
         * hidden by default
         */
         it('is hidden by default', function() {
             expect($('body').hasClass('menu-hidden')).toBe(true);
         });
         /* test that ensures the menu changes
          * visibility when the menu icon is clicked
          */
          it('changes visibility upon clicking', function() {
              const menuIcon = document.querySelector('.menu-icon-link');
              //imitating inital click on the menu icon
              menuIcon.click();
              expect($('body').hasClass('menu-hidden')).toBe(false);
              //imitating second click on the menu icon to hide the menu
              menuIcon.click();
              expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });

    describe('Initial Entries', function() {
        /* test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

         //done ensures the load is done and then proceeds to the testing
         beforeEach(function(done) {
             loadFeed(0, done);
         });
         it('show upon the load', function() {
             expect($(".feed .entry").length).not.toBe(0);
         });
    });

    describe('New Feed Selection', function() {
        /* test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes
         */
         let entries = container.children;
         let firstFeed = [];
         let newFeed = [];
         beforeEach(function(done) {
             loadFeed(0, function() {
                 //each link's title from the initial feed is pushed into the firstFeed
                 //variable as an array
                 Array.from(entries).forEach(function(entry) {
                    firstFeed.push(entry.innerText);
                 });
                 // console.log(firstFeed);
                 loadFeed(1, function() {
                     //each link's title from the next feed is pushed into the firstFeed
                     //variable as an array
                     Array.from(entries).forEach(function(entry) {
                        newFeed.push(entry.innerText);
                     });
                     done();
                     // console.log(newFeed);
                 });
             });
         });
         it('has content different from the previous feed', function() {
             Array.from(entries).forEach(function(entry, index) {
                 expect(firstFeed[index]).not.toEqual(newFeed[index]);
             });
         });
    });
}());
