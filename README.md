## Front-End Nanodegree: Project 6 - Feedreader Testing


#### CONTENTS ####

-A- Project Details
        Application Overview
        Why This Project?
        Requirements (From Udacity)
        What Will I Learn?
-B- Project Files
-C- Installation/Use
-D- Customizing the Application


#### -A- PROJECT DETAILS ####

Application Overview
####################

In this project you are given a web-based application that reads RSS feeds. The 
original developer of this application clearly saw the value in testing, they've 
already included [Jasmine](http://jasmine.github.io/) and even started writing 
their first test suite! Unfortunately, they decided to move on to start their 
own company and we're now left with an application with an incomplete test suite.

The goal of the project is to develop a set of Jasmine tests that test specific
functionality of the application.


See Installation/Use below for a few additional details on using the app.

Why This Project?
###########################

Testing is an important part of the development process and many organizations 
practice a standard of development known as "test-driven development". This is 
when developers write tests first, before they ever start developing their 
application. All the tests initially fail and then they start writing application 
code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an 
organization that uses tests to make sure future feature development doesn't 
break existing features, it's an important skill to have!

Requirements (from Udacity)
###########################

How will I complete this Project?

1. Download the [required project assets](http://github.com/udacity/frontend-nanodegree-feedreader).
2. Review the functionality of the application within your browser.
3. Explore the application's HTML (*./index.html*), CSS (*./css/style.css*) and JavaScript (*./js/app.js*) to gain an understanding of how it works.
4. Explore the Jasmine spec file in *./jasmine/spec/feedreader.js*
5. Edit the allFeeds variable in *./js/app.js* to make the provided test fail and see how Jasmine visualizes this failure in your application.
6. Return the allFeeds variable to a passing state.
7. Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
8. Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
9. Write a new test suite named "The menu".
10. Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
11. Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
12. Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. Remember, loadFeed() is asynchronous so this test wil require the use of Jasmine's beforeEach and asynchronous done() function.
13. Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes. Remember, loadFeed() is asynchronous.
14. When complete - all of your tests should pass.


What Will I Learn?
###############################

You will learn how to use Jasmine to write a number of tests against a 
pre-existing application. These will test the underlying business logic of the 
application as well as the event handling and DOM manipulation.


#### -B- PROJECT FILES ####

Within the project files you will find the following:
a)  css, fonts, jasmine, and js: these directories all contain required
    project files and should be downloaded to your local machine or uploaded
    to a web server.
b)  index.html: the main page for the application. This file is required.
c)  project-meta: contains notes and rubric for the project itself. This 
    directory is not required to make the project run.
d)  README.md: this file. Not required to make the project run.
    
    
#### -C- INSTALLATION/USE ####

To INSTALL this application, follow these steps:
a)  Create a project directory on your machine. In the following steps,
    this directory will be referred to as the "project root."
b)  Download the directories referenced in a) under Project Files above into
    the project root directory.
c)  Downlaod the index.html file referenced in b) under Project Files above
    into the project root directory.
d)  If you wish to run this application from a web server, copy the project
    root directory to an appropriate location on your web server and point your
    browser to the index.html file located inside that directory.
e)  If you wish to run this application locally, open the index.html file within
    the project root directory to your preferred web browser and the app will
    run.
    
To RUN this application, follow the installation steps and open the index.html
file and you will land on the application page. When the page loads, the
default display will be a listing of the first four or so feeds from the
Udacity Blog feed.

To view the entries for a different feed, click the "hamburger" menu icon
in the top-left of the screen and select a different feed to view. Moments
later, the latest entries for that feed will appear on the screen, replacing
the entries from the previously-displayed feed.

At the bottom of the screen you will find the Jasmine test runner output.

There are a total of 4 test suites designed to test key areas of the application.

They are:
RSS Feeds
    Tests that the feed "sources" are properly defined, have names (used as
    a title at the top of the screen), and have URLs. Note that the URLs
    are only checked for "existence" and are not validated as to the correctness
    of the URL relative to the named feed.
    
The menu
    Test the basic functionality of the "hamburger" menu in the top-left of
    the screen. Confirms that the menu is hidden by default (when the page
    first loads) and also confirms that clicking the hamburger icon toggles
    the menu into view and then back to hidden (as you'd expect).
   
Initial Entries
    Tests the basic Ajax call that retrieves a list of feed entries from
    the selected feed. If there is at least one entry in the list, the 
    test is deemed to have passed. Note that this test would fail if for 
    some reason the URL was malformed or improperly specified.
    
New Feed Selection
    Tests the functionality of the Ajax call to load a new set of entries
    after a different feed is selected. This test works by first grabbing
    the title of the current entry (by default, this would be the first
    entry of the Udacity Blog), then changing to a different feed, and 
    finally comparing the title of the first entry to the prior title; the
    premise of this test is that by changing the feed, the first entry should
    also change as well. There's an extremely minute chance that two feeds
    might feature the same entry, but the possibility of that is remote enough
    to ignore.
    
The application, as downloaded, should pass all tests assuming you have an
active Internet connection at the time the page is loaded.


#### -D- CUSTOMIZING THE APP ####

The principle customizations that one would consider making to the app all
revolve around manipulating the existing tests as well as adding new tests.

Familiarity with the Jasmine test runner is required. Further documentation
on Jasmine can be found at http://jasmine.github.io (you will also find
downloads at that location as well should you wish to use Jasmine in your
own projects).

You can add new tests to the existing suites by defining new "it()" functions
under each respective suite's "describe()" function.

You can also add new suites by creating new describe() functions and the
associated nested it() functions.