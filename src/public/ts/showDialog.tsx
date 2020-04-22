import { FooDialog } from "./FooDialog";
import React from "react";
import { BarDialog } from "./BarDialog";
import { BazDialog } from "./BazDialog";

// The original function.
export const showDialog = (
  showFooDialog: boolean,
  showBarDialog: boolean,
  showBazDialog: boolean
) => {
  const day = new Date().getDay();

  if (showFooDialog && day === 1) return <FooDialog open />;
  if (showBarDialog) return <BarDialog open />;
  if (showBazDialog) return <BazDialog open />;
};

interface IShowDialogV2Props {
  showFooDialog: boolean;
  showBarDialog: boolean;
  showBazDialog: boolean;
}

// A decision making function like this will require a lot of parameters.
// By making the input an object we can make it very flexible.
export const showDialogV2 = (props: IShowDialogV2Props) => {
  const day = new Date().getDay();

  if (props.showBazDialog && day === 1) return <BazDialog open />;
  if (props.showFooDialog) return <FooDialog open />;
  if (props.showBarDialog) return <BarDialog open />;
};

interface IShowDialogV3Props {
  showFooDialog: boolean;
  showBarDialog: boolean;
  showBazDialog: boolean;
  day: number;
}

// By moving the dynamic value outside of the function we make the function easy to test
export const showDialogV3 = (props: IShowDialogV3Props) => {
  if (props.showBazDialog && props.day === 1) return <BazDialog open />;
  if (props.showFooDialog) return <FooDialog open />;
  if (props.showBarDialog) return <BarDialog open />;
};

interface IShowDialogV4Props {
  showFooDialog: boolean;
  showBarDialog: boolean;
  showBazDialog: boolean;
  day: number;
}

/**
 * We want to avoid showDialogV4 from growing in complexity.
 * If we isolate the conditional logic to a helper function we can test them independently.
 * We should also add a link to the expected order of presedence.
 *
 * The spec can be found at http://docs.local/this-is-the-order-of-dialogs
 */
export const showDialogV4 = (props: IShowDialogV4Props) => {
  if (showFooDialog(props)) return <FooDialog open />;
  if (props.showBarDialog) return <BarDialog open />;
  if (props.showBazDialog) return <BazDialog open />;
};

export const showFooDialog = (props: IShowDialogV4Props) => {
  return props.showFooDialog && props.day === 1;
};
