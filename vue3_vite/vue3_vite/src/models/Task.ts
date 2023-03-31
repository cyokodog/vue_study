// interfaceは、別ファイルに分けないと重複エラーになる。
export interface Task {
  id: number;
  title: string;
  done: boolean;
}
