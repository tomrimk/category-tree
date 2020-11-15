import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ViewContainerRef,
  ViewChild,
  ViewEncapsulation,
} from "@angular/core";
import { ITreeNode } from "./../models/tree-node.interface";

@Component({
  selector: "app-iterative-tree-node",
  templateUrl: "iterative-tree-node.component.html",
  styleUrls: ["iterative-tree-node.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class IterativeTreeNodeComponent {
  @Input() public node: ITreeNode;

  @ViewChild("child", { read: ViewContainerRef, static: false })
  public childViewRef: ViewContainerRef;

  @HostBinding("class.node-child")
  public get isChild() {
    return this.node.parent;
  }

  public isAddChildInputVisible = false;

  public toggleChildInput(): void {
    this.isAddChildInputVisible = !this.isAddChildInputVisible;
  }

  public addChild($event): void {}

  private updateTreeNode(treeNode: ITreeNode, value: string): void {}
}
