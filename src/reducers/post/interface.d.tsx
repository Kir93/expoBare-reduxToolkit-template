export interface IPost {
  id: string;
  User: {
    id: string;
    nickname: string;
  };
  content: string;
  Comments?: IComment[];
}

export interface IComment {
  id: string;
  content: string;
  User: {
    id: string;
    nickname: string;
  };
}
