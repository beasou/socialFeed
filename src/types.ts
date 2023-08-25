export interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface Content {
  type: 'paragraph' | 'link' ;
  content:string;
}

export interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export interface CommentProps{
  content: string;
  onDeleteComment: (comment: string) => void;
}

export interface AvatarProps{
  hasBorder?: boolean; //? pois é opcional
  src: string;
  alt?: string;
}