# fuzzy-matcher.js
A simple module to do string fuzzy search.

	npm install fuzzy-matcher.js

# Getting Started

This module take a target and a list of entries as arguments. It will return an array with the entries closest to the target at the front. Entries which are completely different from the target will be discarded.

``` javascript
var fuzzy = require("fuzzy-matcher.js")

var entriesToSearch = ["a", "b"]
var targetToFind = "b"
fuzzy(targetToFind, entriesToSearch) // // return ["b"]

entriesToSearch = ["ab", "bb"]
targetToFind = "bb"
fuzzy(targetToFind, entriesToSearch) // // return ["bb", "ab"]
```

By default the search is case sensitive. You can make it insensitive by passing an object as a third parameter with the attribute caseInsensitive set to true. 

You can also fine tune the search by deciding the minimum acceptable distance percentage between two words by adding the attribute minDistancePercentage.

``` javascript
var opts = {
	caseInsensitive : true,
	minDistancePercentage : 0.4
}
var result = fuzzy(targetToFind, entriesToSearch, opts)

```

# License
Copyright (c) 2016 Gautier TANGUY

MIT License