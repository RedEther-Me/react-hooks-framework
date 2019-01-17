import { takeEvery, all } from "./side-effects";

describe("side effects", () => {
  describe("takeEvery", () => {
    it("single name", () => {
      const handler1 = () => {};

      const result = takeEvery("test-action", handler1);

      expect(result).toEqual({ "test-action": [handler1] });
    });

    it("multi name", () => {
      const handler1 = () => {};

      const result = takeEvery(["test-action", "another-action"], handler1);

      expect(result).toEqual({
        "test-action": [handler1],
        "another-action": [handler1]
      });
    });
  });

  describe("all", () => {
    it("single group", () => {
      const handler1 = () => {};

      const result = all([takeEvery("test-action", handler1)]);

      expect(result).toEqual({ "test-action": [handler1] });
    });

    it("multi group - simple", () => {
      const handler1 = () => {};
      const handler2 = () => {};

      const result = all([
        takeEvery("test-action", handler1),
        takeEvery("test-action", handler2)
      ]);

      expect(result).toEqual({ "test-action": [handler1, handler2] });
    });

    it("multi group - complex", () => {
      const handler1 = () => {};
      const handler2 = () => {};

      const result = all([
        takeEvery(["test-action", "another-action"], handler1),
        takeEvery("test-action", handler2)
      ]);

      expect(result).toEqual({
        "test-action": [handler1, handler2],
        "another-action": [handler1]
      });
    });
  });
});
