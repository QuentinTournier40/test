import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexUserComponent } from './index-user/index-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  { path: '', component: IndexUserComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'delete/:id', component: DeleteUserComponent },
  { path: 'edit/:id', component: EditUserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
