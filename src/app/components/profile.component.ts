import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: `profile.component.html`,
  // template:`<h1>{{user?.name}}</h1>`
})

export class ProfileComponent  {
  private user: any;
  private repos:any;
  // 1. if you want to use a service or imported module, then inject them into the constructor
  // 2. add private cuz if you want to use the param everywhere in the component, then use private, otherwise you will only be able to use it inside the constructor
  constructor(private _githubService: GithubService){

    this._githubService.getUser().subscribe(user => {
      console.log(user.name);
      this.user = user;
      console.log(this.user.name);
    })

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    })
  }
}
