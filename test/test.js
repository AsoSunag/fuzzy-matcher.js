var assert = require("assert")
var fuzzy = require("../index")


describe("Fuzzy Match", function() {

	it("checks that we got the array sorted", function(done) {

		var entries = ["stat", "stops", "start", "test"]

		var target = "start"

		assert.deepEqual(fuzzy(target, entries), ["start", "stat", "stops", "test"])

		return done()
	})
})
