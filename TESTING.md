# Testing

## Code validation

The Pete's Party site has be throughly tested. All the code has been run through the [W3C html Validator](https://validator.w3.org/) and the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).

The HTML validator results for each page are below:

* Home
![Validatione home](./assets/readme-images/validation%20home.png)

* Joe's DIY
![Validation services](./assets/readme-images/validation%20services.png)

* Contact
![Contact validation](./assets/readme-images/Validation%20contact.png)

* Contact form validation
![Form validation](./assets/readme-images/validation%20form%20confirmation.png)

The CSS validator results are below:

![Css validation](./assets/readme-images/css%20validation.png)

# Resposiveness test
The responsive design tests were carried out manually with [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/) and [Responsive Design Checker](https://responsivedesignchecker.com/).

Screen dimentions tested:
* >1200px
* <1200px
* Ipad Air
* Iphone SE
* Suface Pro 7
* Nest Hub
* Galaxy S8+

Parameters checked and passed:
* Render
* Images
* Links

# Browser compatibillity
Joe's Garage site was tested on the following browsers with no visible issues for the user. Google Chrome, Microsoft Edge, Safari and Mozilla Firefox. Appearance, functionality and responsiveness were consistent throughout for a range of device sizes and browsers.

# User stories testing
* As a As a user I want to be able to navigate through the whole site smoothly, no matter device.
    * Main navigation on top of every page.
    * Useful links in hte footer on every page.
* As a user I quickly want to understand the purpose of the site upon loading it.
    * Hero image hints that it has to do with cars.
    * Quotes and Welcome section quickly gets to te point.
* As a user I want to see what services are being offered and to what cost.
    * Classic services presented on home page.
    * Visitors shoul be inspires and further DIY services are presented on Joe's DIY-page.
* As a user I want to easily be able to contact Joe's Garage for more information or help with my car.
    * Almost the first thing your eyes will land on is the 24 hour service phone number.
    * Contact in the main and footer links
* As a user I want to be inspired and to challenge myself to maybe one day fix my own car.
    * Joe wishes to change the classic garage services and increase the interest in mechanics. This is being entitled with a complete sub-page: Joe's DIY.
* As a user I want to know some history and basic facts about Joe's Garage.
    * There is a short welcome and about section on the home-page.
* As a user I want to know how other peoples' experiences with Joe's Garage has been.
    * Customer testimonials can be found on the home-page and this section is prepared to handle more feedback from customers.
* As a user I want to connect with Joe's Garage on social media and become a part of their community.
    * In the footer the social icons will guide you.
    * Also the instruction videos are thought to further encourage social connections.

### Known bugs, minor issues and solutions:

During validation these three main bugs occured:
* **Id duplicate on Company name**: This was due to id was used and I reused that id in the footer. Solution was to add it to class.
* **Stray ends**: I unfortunately created this stray end very early on so it was copied via the header to all pages. These were removed.
* **Inline styling on youtube videos**: I did not think of this when embedding the videos and everything worked fine, allthough I had the size-settings in the service.html. When removed I got a bit surprised how it acted until I found out that I had to have an extra div and give that parameters to maintain original proportions.

# Additional testing

## Lighthouse
The site was also tested using [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) in Chrome Developer Tools to test each of the pages for:

Performance - How the page performs whilst loading.
Accessibility - Is the site acccessible for all users and how can it be improved.
Best Practices - Site conforms to industry best practices.
SEO - Search engine optimisation. Is the site optimised for search engine result rankings.

![Lighthouse report on Home-page](./assets/readme-images/lighthouse.png)

Back to [README.md](./README.md).