import { FormControl } from '@angular/forms';

export function UrlValidator(control: FormControl) {
  const URL_REGEX = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;

  if (control.value) {
    // if (control.value.indexOf('@') === -1) {
    //     return { missingArroba: true };
    // }

    if (!URL_REGEX.test(control.value)) {
      return { malformedUrl: true };
    }
  }

  return null;
}
