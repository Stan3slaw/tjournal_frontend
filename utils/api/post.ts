import { OutputData } from '@editorjs/editorjs';
import { AxiosInstance } from 'axios';
import { PostType } from './types';

type CreatePostDto = {
  title: string;
  body: OutputData['blocks'];
};

type SearchPostDto = {
  title?: string;
  body?: string;
  tag?: string;
  views?: 'ASC' | 'DESC';
  limit?: number;
  offset?: number;
};

export const PostApi = (instance: AxiosInstance) => ({
  async getAll() {
    const { data } = await instance.get<PostType[]>('/posts');
    return data;
  },

  async search(query: SearchPostDto) {
    const { data } = await instance.get<{ posts: PostType[]; total: number }>('/posts/search', {
      params: query,
    });
    return data;
  },
  async getOne(id?: number) {
    const { data } = await instance.get<PostType>(`/posts/${id}`);
    return data;
  },
  async create(createPostDto: CreatePostDto) {
    const { data } = await instance.post<CreatePostDto, { data: PostType }>(
      '/posts',
      createPostDto,
    );
    return data;
  },
  async update(id: number, createPostDto: CreatePostDto) {
    const { data } = await instance.patch<CreatePostDto, { data: PostType }>(
      `/posts/${id}`,
      createPostDto,
    );
    return data;
  },
});
