import { AxiosInstance } from 'axios';
import { CommentType } from './types';

type CreateCommentDto = {
  text: string;
  postId: number;
};

export const CommentApi = (instance: AxiosInstance) => ({
  async create(createCommentDto: CreateCommentDto) {
    const { data } = await instance.post<CreateCommentDto, { data: CommentType }>(
      '/comments',
      createCommentDto,
    );
    return data;
  },
  async getAll(postId: number | undefined) {
    const { data } = await instance.get<CommentType[]>('/comments', { params: { postId } });
    return data;
  },
  async remove(id: number) {
    return instance.delete(`/comments/${id}`);
  },
});
