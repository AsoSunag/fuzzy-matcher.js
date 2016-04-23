var assert = require("assert")
var fuzzy = require("../index")


describe("Fuzzy Match", function() {

	it("checks that we got the array sorted", function(done) {

		var entries = ["stat", "stops", "start", "test", "START"]

		var target = "start"

		assert.deepEqual(fuzzy(target, entries), ["start", "stat", "stops", "test"])

		return done()
	})

	it("checks that we got the array sorted with an insensitive case parameter", function(done) {

		var entries = ["stat", "stops", "start", "test", "START"]

		var target = "start"

		assert.deepEqual(fuzzy(target, entries, {caseInsensitive:true}), ["start", "START", "stat", "stops", "test"])

		return done()
	})

	it("checks that we got the array sorted with a minimum distance parameter", function(done) {

		var entries = ["stat", "stops", "start", "test", "START"]

		var target = "star"

		assert.deepEqual(fuzzy(target, entries, {minDistancePercentage:0.7}), ["start", "stat"])

		return done()
	})
})
