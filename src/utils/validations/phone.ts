export const phoneRegex = /\(?\b([0-9]{2,3}|0((x|[0-9]){2,3}[0-9]{2}))\)?\s*[0-9]{4,5}[- ]*[0-9]{4}\b$/;

const isValidPhoneSimple = (phone: string) => phoneRegex.test(String(phone));

export { isValidPhoneSimple };
