import Dialog from "@material-ui/core/Dialog";
import React from "react";
import DialogContent from "@material-ui/core/DialogContent";

interface IProps {
  open: boolean;
}

export const BarDialog: React.FunctionComponent<IProps> = ({ open }) => {
  return (
    <Dialog open={open}>
      <DialogContent>bar</DialogContent>
    </Dialog>
  );
};
