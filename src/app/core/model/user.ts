export class User {
  id: number;
  email: string;
  password: string;
  rememberMe: boolean;
  terms: boolean;
  confirmPassword: string;
  fullName: string;
  constructor(
    id?: number,
    email?: string,
    password?: string,
    rememberMe?: boolean,
    terms?: boolean,
    confirmPassword?: string,
    fullName?: string
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.rememberMe = rememberMe;
    this.terms = terms;
    this.confirmPassword = confirmPassword;
    this.fullName = fullName;
  }
}

export class SimpleUser {
  constructor(
    public nickname: string,
    public email: string,
    public phone: string,
    public id: string,
    public Ip: string,
    public province: string,
    public department: any,
    public region: any
  ) { }
}
