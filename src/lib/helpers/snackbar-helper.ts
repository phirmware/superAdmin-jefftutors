import { MatSnackBar as _snackBar } from '@angular/material/snack-bar';

export const openSnackBar = (message: string, action: string) => {
  _snackBar.prototype.open(message, action, {
    duration: 2000,
  });
};
