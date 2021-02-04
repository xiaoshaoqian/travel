
export class AuthResult {
  protected success: boolean;
  protected response: any;
  protected redirect: any;
  protected token: any;
  protected errors: string[];
  protected messages: string[];
  constructor(
    success: boolean,
    response?: any,
    redirect?: any,
    errors?: any,
    messages?: any,
    token?: AuthToken
  ) {
    this.success = success;
    this.response = response;
    this.redirect = redirect;
    this.errors = [];
    this.messages = [];
    this.errors = this.errors.concat([errors]);
    if (errors instanceof Array) {
      this.errors = errors;
    }
    this.messages = this.messages.concat([messages]);
    if ((this.messages = this.messages)) {
      this.messages = messages;
    }
    this.token = token;
  }

  getResponse(): any {
    return this.response;
  }

  getTokenValue(): AuthToken {
    return this.token;
  }

  replaceToken(token: AuthToken): void {
    this.token = token;
  }

  getRedirect(): any {
    return this.redirect;
  }

  getErrors(): any {
    return this.errors.filter(function(val) {
      return !!val;
    });
  }

  getMessages(): any {
    return this.messages.filter(function(val) {
      return !!val;
    });
  }

  isSuccess(): boolean {
    return this.success;
  }

  isFailure(): boolean {
    return !this.success;
  }
}

export class AuthToken {
  token: string;
  constructor(){
    this.token = '';
  }
  public setValue(token: string) {
    this.token = token;
  }

  /**
   * Returns the token value
   * @returns string
   */
  public getValue(): string {
    return this.token;
  }
}
