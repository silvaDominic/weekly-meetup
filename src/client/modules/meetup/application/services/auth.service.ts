import { AxiosResponse } from 'axios';
import { HttpService } from '../../../core/http.service';
import { ENDPOINT_LOGIN } from '../../../../libs/constants/endpoints.const';

export const AuthService = {
  loginUser(email: string, password: string) {
    const config = {
      auth: {
        username: email,
        password: password,
      },
    };
    return HttpService.post(ENDPOINT_LOGIN, {}, config)
      .then((res: AxiosResponse) => res.data);
  },
};
