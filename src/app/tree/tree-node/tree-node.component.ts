import { Component, Input } from "@angular/core";
import { ITreeNode } from "../models/tree-node.interface";

@Component({
  selector: "app-tree-node",
  templateUrl: "tree-node.component.html",
  styleUrls: ["tree-node.component.scss"],
})
export class TreeNodeComponent {
  @Input() public node: ITreeNode;

  public isAddChildInputVisible = false;

  public toggleChildInput(): void {
    this.isAddChildInputVisible = !this.isAddChildInputVisible;
  }

  public addChild($event): void {
    const value = $event.target.value;
    this.node = this.updateTreeNode(this.node, value);
    this.toggleChildInput();
  }

  private updateTreeNode(treeNode: ITreeNode, value: string): ITreeNode {
    const newChild = {
      id: `${treeNode.id}-${treeNode.children.length + 1}`,
      name: value,
      children: [],
    };

    return {
      ...treeNode,
      children: [...treeNode.children, newChild],
    };
  }
}
