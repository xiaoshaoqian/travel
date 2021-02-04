import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';
import { empty, Observable, of } from 'rxjs';
import { AuthToken } from './model/authModel';

@Injectable()
export class TokenService {

  token: AuthToken;
  constructor() { 
    this.token = new AuthToken;
  }

  

  get(): Observable<any> {
    this.restoreTokenFromCookie();
    return of(this.token);
  }

  restoreTokenFromCookie() {
    if (!this.token) {
      if (!!localStorage['Auth_Token']) {
        this.token = new AuthToken();
        this.token.setValue(JSON.parse(localStorage['Auth_Token']).token);
      }
    }
  }

  set(token: AuthToken, rememberMe: boolean = false): void {
    this.token = token;
    if (rememberMe) {
      localStorage['Auth_Token'] = JSON.stringify(token);
    } else {
      localStorage.setItem('Auth_Token', '');
      localStorage.removeItem('Auth_Token');
    }
  }

  getToken(): AuthToken {
    this.restoreTokenFromCookie();
    return this.token;
  }

  hasToken(): boolean {
    this.restoreTokenFromCookie();
    return !!this.token;
  }

  clearToken() {
    this.token = new AuthToken();
    localStorage.setItem('Auth_Token', '');
    localStorage.removeItem('Auth_Token');
    localStorage.setItem('Online_Date','');
    localStorage.removeItem('Online_Date');
  }
  // 验证时间是否在2小时内,若不在则清空token后跳到login页面,若在则替换Online_Date时间
  checkDateAuth() {
    const date =JSON.parse(localStorage.getItem('Online_Date')!);
    if (date !== null && date !== undefined) {
      const onlinetime = date.kkips;
      const currenttime = new Date().getTime();
      const twoHours = 3600 * 2 * 1000;
      if (currenttime - onlinetime > twoHours) {
        this.clearToken();
        this.tologinUrl();
      } else {
        localStorage.setItem('Online_Date', JSON.stringify({ 'kkips': new Date().getTime() }));
      }
    } else {
      localStorage.setItem('Online_Date', JSON.stringify({ 'kkips': new Date().getTime() }));
    }
  }
  // 跳转到login页面
  tologinUrl() {
    let loginurl = 'http://127.0.0.1';
    // if (location.pathname.startsWith('/app/zh')) {
    //   loginurl = loginurl + '/applogin/zh/login';
    // } else if (location.pathname.startsWith('/app/en')) {
    //   loginurl = loginurl + '/applogin/en/login';
    // }
    window.location.href = loginurl;
  }
}
