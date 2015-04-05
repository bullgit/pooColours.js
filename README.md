# pooColours.js

# what?

pooColours is a JavaScript script to randomly generate hex poo colours. The colours are based on:

* `#4D3318`
* `#33220D`
* `#794D1D`
* `#895735`
* `#281202`
* `#553818`
* `#BB9612`

## usage

`pooColour()` will generate a random colour that looks like poo for whenever you need it.

## meh, js is boring

Well, there's now an SCSS-function too by @pixelass. Example use by him in [this codepen](http://codepen.io/pixelass/pen/pvmyqV)

## contributing

Since I know how much everyone on the web will whant to use this, and make it better by using more shades of poo-colours.

* add a new case with your colour split up by R,G,B (make sure the ending value isn't higher than D or lower than 2)
* add 1 to the max "typeColour" can become (i.e. `var typeColour = Math.floor((Math.random() * 7) + 1);` becomes `var typeColour = Math.floor((Math.random() * 8) + 1);`)
* propose a pull request

The SCSS method uses a different way of generating the random colours, there you can just add your favourite poo in the obvious place (center).

## license

[VVL](https://github.com/bullgit/VVL/blob/master/VVL.md)
