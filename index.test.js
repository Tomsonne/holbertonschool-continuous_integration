const test = require("node:test");
const assert = require("node:assert");
const addition = require("./index");

test("addition of 2 and 3 returns 5", () => {
    assert.strictEqual(addition(2, 3), 6);
});