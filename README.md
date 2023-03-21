# scrolly-photos

_A photo gallery that scrolls horizontally as a reader scrolls vertically that weighs 6.7kb with dependencies_

[![Run end-to-end tests](https://github.com/CALmatters/scrolly-photos/actions/workflows/test.yml/badge.svg)](https://github.com/CALmatters/scrolly-photos/actions/workflows/test.yml)

A <code>&lt;scrolly-photos&gt;</code> custom element that wraps any number of <code>&lt;img&gt;</code> elements and converts them into a horizontal scrolling gallery that is tied to the user's scroll position. Falls back to vertically stacking the images when Javascript is not available.

This element uses <a href="https://pudding.cool/process/introducing-scrollama/"><code>scrollama</code></a> by Russell Samora to handle scroll management.

## Usage

The code below creates a horizontally scrolling set of photos. Remember to always include <code>alt</code> text with images.

```html
<scrolly-photos>
    <img src="https://calmatters.org/wp-content/uploads/2022/06/112222-Mobile-Home-Parks-in-Stockton-RL-CM-03.jpg" alt="Mattresses lay on top of each other in a makeshift playground at Stockton Park Village in Stockton on Nov. 22, 2022. Bob Riley, 87, lives in the area where he states that the owner let the park go and garbage hasn't been picked up for months. Photo by Rahul Lal, CalMatters">
    <img src="https://calmatters.org/wp-content/uploads/2022/06/112222-Mobile-Home-Parks-in-Stockton-RL-CM-16.jpg" alt="Garbage piles at Stockton Park Village in Stockton on Nov. 22, 2022. Photo by Rahul Lal, CalMatters.">
    <img src="https://calmatters.org/wp-content/uploads/2022/06/112222-Mobile-Home-Parks-in-Stockton-RL-CM-34.jpg" alt="Trash and debris at Stockton Park village on Nov. 22, 2022. Photo by Rahul Lal, CalMatters">
</scrolly-photos>
```

You'll also need to include the code that defines what a `<scrolly-photos>` element does. In order to do that you should take the contents of `scrolly-photos.js` and put it in your page wrapped in a `<script>`.
```html
<script type="module">

// Put scrolly-photos.js content here

</script>
````

Or, if you are OK with using code hosted from Github you can instead add:
```html
<script type="module" src="https://calmatters.github.io/scrolly-photos/scrolly-photos.js"></script>
```

## Examples

We used `<scrolly-photos>` in ["Mobile home parks offer refuge from California’s housing squeeze. Who’s watching them?"](https://calmatters.org/housing/2023/03/mobile-home-parks-california-housing/) by Manuela Tobias published on March 20, 2023.

Have you used this component on your site? Let us know so we can add it here!

## License

This library is licensed under GNU GPLv3. It uses `scrollama` which is licensed under the MIT license.
