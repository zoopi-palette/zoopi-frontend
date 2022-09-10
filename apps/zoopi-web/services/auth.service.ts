import { RequestService } from './request.service';
import { Token } from '@web/utils';

class AuthService {
  static async signin(user: { username: string; password: string }) {
    const { data } = await RequestService.postRequest<
      typeof user,
      {
        data:{
          code:string,
          message: string,
          status: string,
          data: {
            accessToken: string;
            refreshToken: string;
          }
        }
      }
    >('/auth/signin', user);

    Token.setAccessToken(data.data.accessToken);
    Token.setRefreshToken(data.data.refreshToken);

    return data;
  }

  static async signup(authenticationKey, password, phone, username) {
    await RequestService.postRequest<
      {
        authenticationKey: string;
        password: string;
        passwordCheck: string;
        phone: string;
        username: string;
      },
      {
        data: {
          data: {
          accessToken: string;
          refreshToken: string;
        }};
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
