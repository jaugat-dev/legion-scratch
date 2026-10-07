import { test } from "node:test";
import assert from "node:assert/strict";
import { add, slugify, clamp, isPalindrome } from "../src/util.ts";

test("add", () => assert.equal(add(2, 3), 5));
test("slugify", () => assert.equal(slugify("  Hello, World! "), "hello-world"));
test("clamp", () => {
  assert.equal(clamp(5, 0, 3), 3);
  assert.equal(clamp(-1, 0, 3), 0);
  assert.throws(() => clamp(1, 3, 0), RangeError);
});
test("isPalindrome", () => {
  assert.ok(isPalindrome("A man, a plan, a canal: Panama"));
  assert.ok(!isPalindrome("legion"));
});
