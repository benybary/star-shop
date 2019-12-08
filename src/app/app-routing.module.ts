import { NgModule, OnChanges } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
   {path: '', component: HomeComponent},
{path: 'about', component: AboutComponent},
{path: 'contact', component: ContactComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  constructor(){

  }
  // constructor(private router: Router){ 
  //   const pages = ['/about', '/', 'contact']
  //   router.events.subscribe((val) => {
  //     console.log(val) 

  //     let scroll = 'scroll';
  //     if(pages['about']){
  //       console.log('ddd')
  //       scroll = 'hidden';
  //     }

  //     document.querySelector("html").style['overflow-y'] = scroll;

  //     return;
  // });
  //}

}
