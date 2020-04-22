import { showFooDialog } from "./showDialog";

describe("showFooDialog", () => {
  it("should return true if the dialog setting is on and it is Tuesday", () => {
    const props = {
      showFooDialog: true,
      showBarDialog: false,
      showBazDialog: false,
      day: 1,
    };
    const result = showFooDialog(props);
    expect(result).toBe(true);
  });

  it("should return false if the dialog setting is on and it isn't Tuesday", () => {
    const props = {
      showFooDialog: true,
      showBarDialog: false,
      showBazDialog: false,
      day: 2,
    };
    const result = showFooDialog(props);
    expect(result).toBe(false);
  });

  it("should return false if the dialog setting is off and it is Tuesday", () => {
    const props = {
      showFooDialog: false,
      showBarDialog: false,
      showBazDialog: false,
      day: 1,
    };
    const result = showFooDialog(props);
    expect(result).toBe(false);
  });

  it("should return false if the dialog setting is off and it isn't Tuesday", () => {
    const props = {
      showFooDialog: false,
      showBarDialog: false,
      showBazDialog: false,
      day: 2,
    };
    const result = showFooDialog(props);
    expect(result).toBe(false);
  });
});
