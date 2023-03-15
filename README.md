# scrolly-photos

_A photo gallery that scrolls horizontally as a reader scrolls vertically that weighs 6.7kb with dependencies_

[![Run end-to-end tests](https://github.com/CALmatters/scrolly-photos/actions/workflows/test.yml/badge.svg)](https://github.com/CALmatters/scrolly-photos/actions/workflows/test.yml)

A <code>&lt;scrolly-photos&gt;</code> custom element that wraps any number of <code>&lt;img&gt;</code> elements and converts them into a horizontal scrolling gallery that is tied to the user's scroll position. Falls back to vertically stacking the images when Javascript is not available.

This element uses <a href="https://pudding.cool/process/introducing-scrollama/"><code>scrollama</code></a> by Russell Samora to handle scroll management.

## Usage

Here's an example. The code below creates a horizontally scrolling set of photos.

PS: Remember to always include <code>alt</code> text with images.

```html
<scrolly-photos>
    <img src="https://calmatters-project-mobile-homes.netlify.app/photos/Stockton Mobile Home Park Second Visit MG 05.jpg" alt="Bobby Riley, 87, at his home at a mobile home park in Stockton on Jan. 27, 2023. Riley has been using a generator for electricity and relying on bottled water, as his park currently doesn't provide those services. Photo by Miguel Gutierrez Jr., CalMatters">
    <img src="https://calmatters-project-mobile-homes.netlify.app/photos/Stockton Mobile Home Park Second Visit MG 06.jpg" alt="Bobby Riley has been relying on bottled water for drinking and washing dishes, as his mobile home park currently doesn't provide those services. Jan. 27, 2023. Photo by Miguel Gutierrez Jr., CalMatters">
    <img src="https://calmatters-project-mobile-homes.netlify.app/photos/Stockton Mobile Home Park Second Visit MG 13.jpg" alt="Bobby Riley, 87, at his home at a mobile home park in Stockton on Jan. 27, 2023. Riley has been using a generator for electricity and relying on bottled water, as his park currently doesn't provide those services. Photo by Miguel Gutierrez Jr., CalMatters">
</scrolly-photos>
```

## Installation

You'll also need to include the code that defines what a `<scrolly-photos>` element does. In order to do that you should take the contents of `scrolly-photos.js` and put it in your page wrapped in a `<script>`.
```html
<script type="module">

// Put scrolly-photos.js content here

</script>
````

If you are OK with using code hosted from Github you can also add:
```html
<script type="module" src="https://raw.githubusercontent.com/CALmatters/scrolly-photos/main/scrolly-photos.js"></script>
```

## License

This library is licensed under GNU GPLv3. It uses `scrollama` which is licensed under the MIT license.
