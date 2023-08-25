export interface Author{
    name: string;
    role: string;
    avatarUrl: string;
  }
  
export interface PostProps{
    author: Author;
    publishedAt: Date;
    content: string;
  }