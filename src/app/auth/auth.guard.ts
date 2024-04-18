import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};

// https://youtu.be/wKmoxkAQXdI?si=A_XJ-eCIoTLWHu8M
