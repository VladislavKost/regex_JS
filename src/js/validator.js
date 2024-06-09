export class Validator {
  validateUsername(userName) {
    const result = userName.match(
      /^(?=[a-zA-Z])(?!.*(\d)\d\d)[a-zA-Z0-9-_]*[a-zA-Z]$/
    );
    return result ? true : false;
  }
}
