describe("Local storage usage during tests", () => {
  const ITEM_KEY = "random_item_key";

  afterEach(() => {
    localStorage.removeItem(ITEM_KEY);
  });

  it("can access local storage", () => {
    expect(localStorage.getItem(ITEM_KEY)).toEqual(null);
    localStorage.setItem(ITEM_KEY, "test");
    expect(localStorage.getItem(ITEM_KEY)).toEqual("test");
  });
});
