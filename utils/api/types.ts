export type LoginUserDto = {
  email: string;
  password: string;
};

export type CreateUserDto = {
  fullName: string;
} & LoginUserDto;

export type UserResponse = {
  id: number;
  email: string;
  fullName: string;
  createdAt: string;
  updatedAt: string;
  token: string;
};
