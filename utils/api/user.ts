import { AxiosInstance } from 'axios';
import { CreateUserDto, LoginUserDto, UserResponse } from './types';

export const UserApi = (instance: AxiosInstance) => ({
  async getAll() {
    const { data } = await instance.get<UserResponse[]>('/users');
    return data;
  },

  async register(createUserDto: CreateUserDto) {
    const { data } = await instance.post<CreateUserDto, { data: UserResponse }>(
      '/auth/register',
      createUserDto,
    );
    return data;
  },

  async login(loginUserDto: LoginUserDto) {
    const { data } = await instance.post<LoginUserDto, { data: UserResponse }>(
      '/auth/login',
      loginUserDto,
    );
    return data;
  },

  async getMe() {
    const { data } = await instance.get<UserResponse>('/users/me');
    return data;
  },
});
