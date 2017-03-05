import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;

    constructor(private _http:Http ){
        console.log("github service ready");
        this.username = 'bradtraversy';
    }
    getUser(){
        // return an observable therefore you need map to change the res to json formatted
        return this._http.get('http://api.github.com/users/'+this.username)
            .map(res => res.json());
    }
    getRepos(){
        // return an observable therefore you need map to change the res to json formatted
        return this._http.get('http://api.github.com/users/'+this.username+"/repos")
            .map(res => res.json());
    }
}