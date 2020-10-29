import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  OnInit,
} from "@angular/core";
import { treeMock } from "./../mocks/tree";
import { TreeNodeComponent } from "./../tree-node/tree-node.component";
import { ITreeNode } from "./../models/tree-node.interface";

@Component({
  selector: "app-iterative-tree",
  templateUrl: "iterative-tree.component.html",
})
export class IterativeTreeComponent implements OnInit {
  public tree = treeMock;
  public renderedTree = null;

  @ViewChild("treeContainer", { read: ViewContainerRef, static: true })
  public treeContainer;

  constructor(private resolver: ComponentFactoryResolver) {}

  public ngOnInit(): void {
    this.generateTreeStructure();
  }

  public generateTreeStructure(): void {
    let stack = [...this.tree];
    let node: ITreeNode;

    while (stack.length > 0) {
      node = stack.shift();

      if (!node.children.length) {
        this.createTreeNodeComponent(node);

        return;
      }

      this.createTreeNodeComponent(node);

      for (let i = 0; i < node.children.length; i += 1) {
        stack.push(node.children[i]);
      }
    }
  }

  private createTreeNodeComponent(node: ITreeNode): void {
    const factory = this.resolver.resolveComponentFactory(TreeNodeComponent);
    const treeNodeComponentRef = this.treeContainer.createComponent(factory);
    treeNodeComponentRef.instance.node = node;
  }
}
