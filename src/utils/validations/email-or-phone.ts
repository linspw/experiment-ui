/* eslint-disable max-len */

export const emailOrPhoneRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function isValidEmailOrPhone(emailOrPhone: string) {
  return emailOrPhoneRegex.test(String(emailOrPhone).toLowerCase());
}

export { isValidEmailOrPhone };
