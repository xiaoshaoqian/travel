import { Injectable } from '@angular/core';
// import { TokenService } from './token.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { UserService } from './user.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
// import { AuthResult, AuthToken } from './model/authModel';
// import { User } from './model/user';
import { ApiRes } from '../share/model/api-res';
// import { I18n } from '@ngx-translate/i18n-polyfill';

@Injectable()
export class AuthService {
  private headers: any;

  constructor(
    // public tokenService: TokenService,
    public http: HttpClient,
    // public userService: UserService,
    // public i18n: I18n
  ) {
    this.headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    };
  }

  getHeaders(): Headers {
    return this.headers;
  }

  // getToken(): Observable<AuthToken> {
  //   return this.tokenService.get();
  // }

  // isAuthenticated(): Observable<boolean> {
  //   return this.getToken().pipe(
  //     map(function (t) {
  //       return !!(t && t.getValue());
  //     })
  //   );
  // }

  // logout() {
  //   this.tokenService.clearToken();
  //   // this.userService.clear();
  // }

  login(data:any):Observable<ApiRes>{
    const url = '/api/Auth/Login';
    return this.http.post<ApiRes>(url,data);
  }

  getCaptcha(): Observable<ApiRes> {
    const url = '/api/Auth/Code';
    return this.http.get<ApiRes>(url);
  }

  register(data:any): Observable<ApiRes>{
    const url = '/api/Users/Register';
    return this.http.post<ApiRes>(url,data);
  }

  // // 用户+密码登录
  // authentication(data: User): Observable<AuthResult> {
  //   const _this = this;
  //   const url = '/api/token';

  //   const body =
  //     'username=' +
  //     data.email +
  //     '&password=' +
  //     data.password +
  //     '&grant_type=password';
  //   return this.httpClient
  //     .post(url, body, {
  //       headers: _this.headers
  //     })
  //     .pipe(
  //       // map(res => res()),
  //       map(function (res) {
  //         const token = new AuthToken();
  //         token.setValue(res['access_token']);
  //         _this.tokenService.set(token, data.rememberMe);
  //         return new AuthResult(true, res, true, [], [], token);
  //       }),
  //       catchError(function (res) {
  //         const errors = [];
  //         if (res instanceof HttpErrorResponse) {
  //           if (!!res.error.error_description) {
  //             errors.push(res.error.error_description);
  //           } else {
  //             if (typeof res.error === 'string') {
  //               if (
  //                 res.error.indexOf('Error occured while trying to proxy to') >
  //                 -1
  //               ) {
  //                 errors.push(res.error);
  //               }
  //             } else {
  //               errors.push(this.i18n('网络异常'));
  //             }
  //           }
  //         } else {
  //           errors.push(this.i18n('登录失败。'));
  //         }
  //         return of(new AuthResult(false, res, null, errors));
  //       })
  //     );
  // }

  // // sms登录
  // authenticationsms(data: any): Observable<AuthResult> {
  //   const _this = this;
  //   const url = '/api/token';
  //   let body = '';
  //   // tslint:disable-next-line:triple-equals
  //   if (data.islogin == true) {
  //     body = 'phonenum=' + data.phonenum + '&verifycode=' + data.verifycode + '&weixinid=' + '&islogin=' + data.islogin + '&grant_type=sms';
  //   } else {
  //     body = 'phonenum=' + data.phonenum + '&email=' + data.email + '&verifycode='
  //       + data.verifycode + '&weixinid=\'\'' + '&islogin=' + data.islogin + '&grant_type=sms';
  //   }
  //   let nheaders = this.headers;
  //   nheaders = {'sid': data.sid};
  //   return this.httpClient
  //     .post(url, body, {
  //       headers: nheaders
  //     })
  //     .pipe(
  //       map(function (res) {
  //         const token = new AuthToken();
  //         token.setValue(res['access_token']);
  //         _this.tokenService.set(token, data.rememberMe);
  //         return new AuthResult(true, res, true, [], [], token);
  //       }),
  //       catchError(function (res) {
  //         const errors = [];
  //         if (res instanceof HttpErrorResponse) {
  //           if (!!res.error.error_description) {
  //             errors.push(res.error.error_description);
  //           } else {
  //             if (typeof res.error === 'string') {
  //               if (
  //                 res.error.indexOf('Error occured while trying to proxy to') >
  //                 -1
  //               ) {
  //                 errors.push(res.error);
  //               }
  //             } else {
  //               errors.push(this.i18n('网络异常'));
  //             }
  //           }
  //         } else {
  //           errors.push(this.i18n('登录失败。'));
  //         }
  //         return of(new AuthResult(false, res, null, errors));
  //       })
  //     );
  // }
}
