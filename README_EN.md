<h1 align="center">Planets-fact-site</h1>

<div align="center">
 <a href="https://ivandefender.github.io/Planets/">View Project |</a>
 <a href="https://github.com/Ivandefender/Planets/blob/main/js/script.js">View Code</a>
</div>

<p align="center">
<img src="https://img.shields.io/badge/HTML-orange?style=for-the-badge&logo=html&logoColor=orange">
<img src="https://img.shields.io/badge/css-blue?style=for-the-badge&logo=css&logoColor=blue">
<img src="https://img.shields.io/badge/JavaScript-yellow?style=for-the-badge&logo=JavaScript&logoColor=yellow&labelColor=black">
</p>

# Start HTML

## Start Header

**Building:**

1. Site logo
2. Navigation menu

## End Header

## Start Main

**Building:**

1. Section 1:
- Two columns (left - image of the planet, right - detailed information about it, its surface, internal structure)
2. Section 2:
- Brief information about the planet: rotation time of the planet, rotation time around the sun, radius of the planet, average temperature

## End Main

# End HTML

# Footer - missing

# Start CSS

**There are two style files:**

1. **Reset.css** - resets the basic settings of the browser page
2. **Style.css** - basic styles with adaptability for mobile devices

**Class Specific Selectors:**

Variables with colors for better orientation
```css
:root {
 --white: #FFF;
 --btn-hover: rgba(216, 216, 216, 0.2);
 --btn-border: rgba(255, 255, 255, 0.2);
 --bg: #070724;
 --mercury: #419EBB;
 --venus: #EDA249;
 --earth: #6D2ED5;
 --mars: #D14C32;
 --jupiter: #D83A34;
 --saturn: #CD5120;
 --uranus: #1EC1A2;
 --neptune: #2D68F0;

 --header-padding: 25px;
}
```

**Example of using a variable with color:**
```css
.header__nav-item:nth-child(3) .header__nav-link:hover::before,
.earth .header__nav-item:nth-child(3) .header__nav-link::before,
.earth .planet__button.active {
 background-color: var(--earth);
}
```

Any class that contains a **__container** part
```css
[class*=__container] {
 padding: 0 15px;
 margin: 0 auto;
}
```
# End CSS

# Start JS

**There are two files -** .js and .json:

1. **Data.json** - a file with data that is uploaded to an HTML page. Each data in its own section.
2. **Script.js** - the main file of the program.

**Features:**

```javascript

addContent(); // uploads data to the web page depending on the address of the page (planet)

loadData(); // get data from data.json

getCurrentPlanetData(); // get specific planet data via link

insertPlanetData(); // mechanism for uploading data (creating tags, adding information to tags, changing styles)

changePlanetInfo(); // change information about the planet when clicking on the corresponding button from the set (given below)
```

```html
<div class="planet__buttons">
  <button class="planet__button button"><span>01</span>overview</button>
  <button class="planet__button button"><span>02</span>internal structure</button>
  <button class="planet__button button"><span>03</span>surface geology</button>
</div>
```
# End JS

### The design was taken from [FrontendMentor.io](https://www.frontendmentor.io/challenges/planets-fact-site-gazqN8w_f);

### Developed by: [Ivan Krysak (github: Ivandefender)](https://github.com/Ivandefender);