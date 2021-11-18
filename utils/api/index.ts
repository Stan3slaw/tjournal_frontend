import axios from 'axios';
import { CreateUserDto, LoginUserDto, UserResponse } from './types';

const instance = axios.create({
  baseURL: 'http://localhost:5000/',
});

export const UserApi = {
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
};
