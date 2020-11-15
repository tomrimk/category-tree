import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ViewContainerRef,
  ViewChild,
  ViewEncapsulation,
  Injector,
  ComponentFactoryResolver,
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

  constructor(
    private injector: Injector,
    private resolver: ComponentFactoryResolver
  ) {}

  public isAddChildInputVisible = false;

  public toggleChildInput(): void {
    this.isAddChildInputVisible = !this.isAddChildInputVisible;
  }

  public addChild($event): void {
    const value = $event.target.value;
    const newChild = {
      id: `${this.node.id}-${this.node.children.length + 1}`,
      name: value,
      parent: this.node.id,
      children: [],
    };

    this.createChildNode(newChild);
    this.toggleChildInput();
  }

  private createChildNode(node: ITreeNode): void {
    const factory = this.resolver.resolveComponentFactory(
      IterativeTreeNodeComponent
    );
    const component = factory.create(this.injector);
    component.instance.node = node;
    this.childViewRef.insert(component.hostView);
  }
}
