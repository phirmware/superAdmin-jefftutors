import { MatSnackBar } from '@angular/material/snack-bar';

interface MatSnackBarConfig {
    duration: number;
}

export function successSnackbar(action: string, message: string, config?: MatSnackBarConfig) {
    return MatSnackBar.prototype.open(message, action, config);
}

export function errorSnackbar(action: string, message: string, config?: MatSnackBarConfig) {
    return MatSnackBar.prototype.open(message, action, config);
}

