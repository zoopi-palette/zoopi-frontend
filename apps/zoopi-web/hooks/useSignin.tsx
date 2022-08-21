import { useMutation } from '@tanstack/react-query';
import { AuthService } from '@web/services';

export const useSignin = () => useMutation(AuthService.signin);
