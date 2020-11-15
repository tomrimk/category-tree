import { NgModule } from "@angular/core";
import { RecursiveComponent } from "./recursive-tree/recursive-tree.component";
import { CommonModule } from "@angular/common";
import { TreeNodeComponent } from "./tree-node/tree-node.component";
import { FormsModule } from "@angular/forms";
import { IterativeTreeComponent } from "./iterative-tree/iterative-tree.component";
import { IterativeTreeNodeComponent } from "./iterative-tree-node/iterative-tree-node.component";

@NgModule({
  declarations: [
    RecursiveComponent,
    TreeNodeComponent,
    IterativeTreeComponent,
    IterativeTreeNodeComponent,
  ],
  imports: [CommonModule, FormsModule],
  exports: [RecursiveComponent, IterativeTreeComponent],
  entryComponents: [TreeNodeComponent, IterativeTreeNodeComponent],
})
export class TreeModule {}
