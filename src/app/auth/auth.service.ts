import {
  HttpClient,
  HttpErrorResponse
} from "@angular/common/http";
import {
  Injectable
} from "@angular/core";
import {
  catchError,
  tap
} from "rxjs/operators";
import {
  Subject,
  throwError
} from "rxjs";
import {
  User
} from "./user.model";

export interface AuthResponse {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered ? : boolean;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user = new Subject < User > ();



  constructor(private http: HttpClient) {}

  signup(email: string, password: String) {
    return this.http.post < AuthResponse > ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC1EfkT2eD4mxyaDQHLphgZ20w8SC3-liI', {
        email: email,
        password: password,
        returnSecureToken: true
      })
      .pipe(catchError(this.handleError), tap(resData => {
        this.handleAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn);

      }));
  }

  login(email: string, password: string) {
    return this.http.post < AuthResponse > ('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key==AIzaSyC1EfkT2eD4mxyaDQHLphgZ20w8SC3-liI', {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(catchError(this.handleError), tap(resData => {
      this.handleAuth(
        resData.email, resData.localId, resData.idToken, +resData.expiresIn
      );
    }));
  }

  private handleAuth(email: string, userId: string, token: string, expiresIn: number) {


    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);

    const user = new User(email, userId, token, expirationDate);

    this.user.next(user);

  }




  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown Error';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This Email already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = "This Email does not exist";
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'Password incorrect';
        break;

    }
    return throwError(errorMessage);
  }

}
