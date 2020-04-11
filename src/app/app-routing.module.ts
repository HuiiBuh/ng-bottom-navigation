import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LikeComponent} from './like/like.component';
import {WatchComponent} from './watch/watch.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'like', component: LikeComponent},
  {path: 'watch', component: WatchComponent},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
