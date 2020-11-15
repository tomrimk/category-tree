import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ComponentRef,
  Injector,
} from "@angular/core";
import { treeMock } from "./../mocks/tree";
import { ITreeNode } from "./../models/tree-node.interface";
import { IterativeTreeNodeComponent } from "../iterative-tree-node/iterative-tree-node.component";

@Component({
  selector: "app-iterative-tree",
  templateUrl: "iterative-tree.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IterativeTreeComponent implements OnInit {
  public tree: ITreeNode[] = treeMock;
  public treeNodeCache = new Map<
    string,
    ComponentRef<IterativeTreeNodeComponent>
  >();
  public renderedTree = null;

  @ViewChild("treeContainer", { read: ViewContainerRef, static: true })
  public treeContainer: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef,
    private injector: Injector
  ) {}

  public ngOnInit(): void {
    this.generateTreeStructure();
  }

  private generateTreeStructure(): void {
    let queue = [...this.tree];
    let node: ITreeNode;

    while (queue.length > 0) {
      node = queue.shift();

      if (node.parent) {
        this.insertNodeIntoParent(node);
      } else {
        this.createRootNode(node, this.treeContainer);
      }

      node.children.forEach((child) => {
        queue.push(child);
      });
    }
  }

  private createRootNode(node: ITreeNode, viewRef: ViewContainerRef): void {
    this.createNode(node, viewRef);
  }

  private insertNodeIntoParent(nodeToAdd: ITreeNode): void {
    const parentComponentRef = this.treeNodeCache.get(nodeToAdd.parent);

    this.createNode(nodeToAdd, parentComponentRef.instance.childViewRef);
  }

  private createNode(node: ITreeNode, viewRef: ViewContainerRef): void {
    const factory = this.resolver.resolveComponentFactory(
      IterativeTreeNodeComponent
    );
    const componentRef = factory.create(this.injector);
    componentRef.instance.node = node;

    viewRef.insert(componentRef.hostView);

    if (!this.treeNodeCache.has(node.id)) {
      this.treeNodeCache.set(node.id, componentRef);
    }

    this.cd.detectChanges();
  }
}
