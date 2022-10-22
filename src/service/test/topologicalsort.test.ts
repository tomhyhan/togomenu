import { TopologicalSort } from "../topologicalsort";

describe("topological sort", () => {
  it("should return correct order", () => {
    const topologicalsort = new TopologicalSort();

    const orders = topologicalsort.getInstrunctions(
      [
        [1, "asdf"],
        [2, "zxcv"],
        [3, "qwer"],
      ],
      [
        ["1:order one", "2:order two"],
        ["3:order three", "2:order two"],
      ]
    );

    expect(orders).toEqual([3, 1, 2]);
  });

  it("should return correct order", () => {
    const topologicalsort = new TopologicalSort();

    const orders = topologicalsort.getInstrunctions(
      [
        [1, "asdf"],
        [2, "zxcv"],
        [3, "qwer"],
      ],
      [
        ["1:order one", "1:order two"],
        // ["3:order three", "2:order two"],
      ]
    );

    expect(orders).toEqual([]);
  });
});

export {};
