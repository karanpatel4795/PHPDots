import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClassComponent } from './add-class/add-class.component';
import { EditClassComponent } from './edit-class/edit-class.component';
import { ListClassComponent } from './list-class/list-class.component';

const routes: Routes = [
  {path:"",component:ListClassComponent},
  {path:"add-class",component:AddClassComponent},
  {path:"list-class",component:ListClassComponent},
  {path:"edit-class/:classId",component:EditClassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
