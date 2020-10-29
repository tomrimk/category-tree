import { NgModule } from "@angular/core";
import { RecursiveComponent } from "./recursive-tree/recursive-tree.component";
import { CommonModule } from "@angular/common";
import { TreeNodeComponent } from "./tree-node/tree-node.component";
import { FormsModule } from "@angular/forms";
import { IterativeTreeComponent } from "./iterative-tree/iterative-tree.component";

@NgModule({
  declarations: [RecursiveComponent, TreeNodeComponent, IterativeTreeComponent],
  imports: [CommonModule, FormsModule],
  exports: [RecursiveComponent, IterativeTreeComponent],
  entryComponents: [TreeNodeComponent],
})
export class TreeModule {}
