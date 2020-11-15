export interface ITreeNode {
  id: string;
  name: string;
  children: ITreeNode[];
  parent: string | null;
}
