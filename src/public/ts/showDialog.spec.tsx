import { showDialogV4 } from "./showDialog";

describe("showDialogV4", () => {
  it("should show the FooDialog", () => {
    const props = {
      showFooDialog: true,
      showBarDialog: true,
      showBazDialog: true,
      day: 1,
    };
    const node = showDialogV4(props);
    expect(node).toMatchSnapshot();
  });

  it("should show the BarDialog", () => {
    const props = {
      showFooDialog: false,
      showBarDialog: true,
      showBazDialog: true,
      day: 1,
    };
    const node = showDialogV4(props);
    expect(node).toMatchSnapshot();
  });

  it("should show the BazDialog", () => {
    const props = {
      showFooDialog: false,
      showBarDialog: false,
      showBazDialog: true,
      day: 1,
    };
    const node = showDialogV4(props);
    expect(node).toMatchSnapshot();
  });

  it("should show undefined", () => {
    const props = {
      showFooDialog: false,
      showBarDialog: false,
      showBazDialog: false,
      day: 1,
    };
    const node = showDialogV4(props);
    expect(node).toMatchSnapshot();
  });
});
