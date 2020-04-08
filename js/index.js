const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



// ## Task 1: Create selectors to point your data into elements
// * [ ] Create selectors by using any of the DOM element's methods
// * [ ] Note that IDs have been used on all images.  Use the IDs to update src path content

// ## Task 2: Update the HTML with the JSON data
// * [ ] Remember, NO direct updating of the HTML source is allowed.
// * [ ] Using your selectors, update the content to match the example file.
// * [ ] Remember to update the src attributes on images

let topLogo = document.getElementById("cta-img");
topLogo.setAttribute('src', siteContent["cta"]["img-src"]);

let topText = document.querySelector(".cta-text h1");
topText.textContent = siteContent["cta"]["h1"];

let buttonText = document.querySelector(".cta-text button");
buttonText.textContent = siteContent["cta"]["button"];

// topText.innerText('src', siteContent["cta"]["h1"]);

let midlogo = document.getElementById("middle-img");
midlogo.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

let navContent = document.querySelectorAll("nav a");
// navContent.setAttribute('a', siteContent["nav"]["nav-item-1"]);

const para = document.querySelectorAll("p");
para[5].innerHTML = "123 Way 456 Street <br> Somewhere, USA";

let headerText = document.querySelectorAll(".top-content h4");
headerText[0].textContent = siteContent["main-content"]["features-h4"];
headerText[1].textContent = siteContent["main-content"]["about-h4"];

let textContentTag = document.querySelectorAll(".text-content p");
textContentTag[0].textContent = siteContent["main-content"]["features-content"];
textContentTag[1].textContent = siteContent["main-content"]["about-content"];


let bottomTextHeader = document.querySelectorAll(".bottom-content .text-content h4");
bottomTextHeader[0].textContent = siteContent["main-content"]["services-h4"];
bottomTextHeader[1].textContent = siteContent["main-content"]["product-h4"];
bottomTextHeader[2].textContent = siteContent["main-content"]["vision-h4"];

let bottomTextContent = document.querySelectorAll(".bottom-content .text-content p");
console.log(bottomTextContent);
bottomTextContent[0].textContent = siteContent["main-content"]["services-content"];
bottomTextContent[1].textContent = siteContent["main-content"]["product-content"];
bottomTextContent[2].textContent = siteContent["main-content"]["vision-content"];



// ## Task 3: Add new content
// * [ ] Change the color of the navigation text to be green.
// * [ ] Utilize `.appendChild()` and `.prepend()` to add two new items to the navigation system. You can call them whatever you want.
// * [ ] Check your work by looking at the [original html](original.html) in the browser