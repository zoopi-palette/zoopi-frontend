import { RequestService } from './request.service';
import { Token } from '@web/utils';

class AuthService {
  static async signin(username: string, password: string) {
    const res = await RequestService.postRequest<
      {
        username: string;
        password: string;
      },
      {
        data: {
          accessToken: string;
          refreshToken: string;
        };
      }
    >('/auth/signin', {
      username,
      password,
    });

    Token.setAccessToken(res.data.accessToken);
    Token.setRefreshToken(res.data.refreshToken);
  }

  static async signup(authenticationKey, password, phone, username) {
    const res = await RequestService.postRequest<
      {
        authenticationKey: string;
        password: string;
        passwordCheck: string;
        phone: string;
        username: string;
      },
      {
        data: {
          accessToken: string;
          refreshToken: string;
        };
      }
    >('auth/signup', {
      authenticationKey,
      password,
      passwordCheck: password,
      phone,
      username,
    });

    // TODO: signup 명세서 업데이트되면 수정 예정
  }
}

export default AuthService;
