import { OutputData } from '@editorjs/editorjs';

export type LoginUserDto = {
  email: string;
  password: string;
};

export type CreateUserDto = {
  fullName: string;
} & LoginUserDto;

export type UserResponse = {
  id: number;
  commentsCount?: number;
  email: string;
  fullName: string;
  createdAt: string;
  updatedAt: string;
  token: string;
};

export type PostType = {
  title: string;
  description: string;
  body: OutputData['blocks'];
  tags: null | string;
  id: number;
  views: number;
  user: UserResponse;
  createdAt: string;
  updatedAt: string;
};

export type CommentType = {
  id: number;
  text: string;
  post: PostType;
  user: UserResponse;
  createdAt: string;
  updatedAt: string;
};
