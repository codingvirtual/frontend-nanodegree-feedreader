/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has URLs', function () {
            for (var index in allFeeds) {
                // Examine each entry and confirm the url property is defined
                expect(allFeeds[index].url).toBeDefined();
                // Examine each entry and confirm the url property has content of some
                // form, which is how I'm defining "not empty"
                expect(allFeeds[index].url.length).not.toBe(0);
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has names', function () {
            for (var index in allFeeds) {
                // Examine each entry and confirm the name property is defined
                expect(allFeeds[index].name).toBeDefined();
                // Examine each entry and confirm the name property has content of some
                // form, which is how I'm defining "not empty"
                expect(allFeeds[index].name.length).not.toBe(0);
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function () {
        /* This test suite verifies proper functionality of the menu navigation
         * system under the "hamburger" icon in the upper-left corner
         */

        /* Set up a few variables to make it easier to modify tests later
         * if CSS or HTML elements/classes change
         */

        // retrieve all elements with class='menu-icon-link'; should be only 1
        var menuIcon = $('.menu-icon-link');
        // the target class we're searching for in some of the tests below
        var targetClass = 'menu-hidden';

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('is hidden by default', function () {
            // The menu is shown and hidden by manipulating the CSS
            // class of the body element. If the body contains the target
            // class, the menu is hidden.
            expect(document.body.className).toContain(targetClass);
        });

        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('menu changes visibility when icon is clicked', function () {
            // First, use JS to "click" the menu icon which should make it
            // appear.
            menuIcon.click();

            // As before, the document body should not contain the target class
            expect(document.body.className).not.toContain(targetClass);

            // Click the menu icon again. Now it should disappear
            menuIcon.click();

            // As with the 'is hidden by default' test, check to see if the
            // body element contains the target class, which means the menu
            // is hidden.
            expect(document.body.className).toContain(targetClass);
        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        // set up beforeEach to call loadFeed with the 0th element of the
        // allFeeds array and with a callback function that simply calls
        // Jasmine's done() function.
        //
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        // Since beforeEach will have already run, meaning loadFeed has
        // finished and returned, there should be at least one element
        // with a class of 'entry'.
        it('loadFeed should fetch at least one element', function () {
            expect($('.entry').length).toBeGreaterThan(0);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function () {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        // Grab the title of the first feed entry that is on the screen
        // when the test suite starts. This will be used in the tests
        // to see if the content actually changed.
        // NOTE: this assumes that any blog other than feed 1 is currently
        // loaded. By default, feed 0 should be loaded.

        var firstEntryTitle = $('.entry h2:first').text();

        // set up beforeEach to call loadFeed with the 1st element of the
        // allFeeds array and with a callback function that simply calls
        // Jasmine's done() function. This call should cause the page
        // content to change from what was there before the beforeEach
        // call was made.
        beforeEach(function (done) {
            loadFeed(1, function () {
                done();
            });
        });

        it('loadFeed actually changes the content on the page', function() {
            // This test works by comparing the title of the first entry
            // on the page "now" (after the loadFeed executes within
            // beforeEach) to the title that was first before the tests
            // started (before "beforeEach()" executed

            // Get the title of the "new" first entry.
            var curTitle = $('.entry h2:first').text();

            // Expect the title of the first entry to be different than it
            // was before the suite's beforeEach() call was made. This means
            // that content actually changed.
            expect(curTitle).not.toBe(firstEntryTitle);
        });

    });

}());
