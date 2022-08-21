import cookies from 'js-cookie';

class Token {
  static ACCESS = 'access';

  static REFRESH = 'refresh';

  static getAccessToken(): string | undefined {
    return cookies.get(this.ACCESS);
  }

  static getRefreshToken(): string | undefined {
    return cookies.get(this.REFRESH);
  }

  static setAccessToken(access: string): void {
    cookies.set(this.ACCESS, access, { expires: 1 });
  }

  static setRefreshToken(refresh: string): void {
    cookies.set(this.REFRESH, refresh, { expires: 7 });
  }
}

export default Token;
