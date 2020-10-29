import { Component } from "@angular/core";
import { ITreeNode } from "../models/tree-node.interface";
import { treeMock } from "./../mocks/tree";

@Component({
  selector: "app-recursive-tree",
  templateUrl: "recursive-tree.component.html",
})
export class RecursiveComponent {
  public tree: ITreeNode[] = treeMock;

  public trackByNodeId(index: number, node: ITreeNode): string {
    return node.id;
  }
}
