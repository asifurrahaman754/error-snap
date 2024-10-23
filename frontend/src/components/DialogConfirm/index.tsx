import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
} from "@mui/material";
import { ReactNode } from "react";
import { zeroArgsFunction } from "types/function";

export interface DialogConfirmProps extends DialogProps {
  open: boolean;
  onClose: zeroArgsFunction;
  onSubmit?: zeroArgsFunction;
  children: ReactNode;
  title?: ReactNode;
}

export default function DialogConfirm({
  open,
  onClose,
  children,
  onSubmit,
  title,
  ...props
}: DialogConfirmProps) {
  return (
    <Dialog onClose={onClose} open={open} fullWidth maxWidth="xs" {...props}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent sx={{ pt: "8px !important" }}>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color={"secondary"}>
          Cancel
        </Button>
        <Button onClick={onSubmit} color={"secondary"}>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
