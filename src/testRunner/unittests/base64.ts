import * as ts from "../_namespaces/ts.js";

describe("unittests:: base64", () => {
  describe("base64decode", () => {
    it("can decode input strings correctly without needing a host implementation", () => {
      const tests = [
        // "a",
        // "this is a test",
        // " !\"#$ %&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~",
        "日本語",
        "🐱",
        "\x00\x01",
        "\t\n\r\\\"'\u0062",
        "====",
        "",
      ];
      for (const test of tests) {
        assert.equal(ts.base64decode({}, ts.convertToBase64(test)), test);
      }
    });
    it("branch 1 should be reached", () => {
      assert.equal(ts.branch_coverage.get("base64_1"), true);
    });

    it("branch 2 should be reached", () => {
      assert.equal(ts.branch_coverage.get("base64_2"), true);
    });
  });
});
