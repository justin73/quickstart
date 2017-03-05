import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;
    private client_id = '040c0d40d3fddfb47e99';
    private client_secert = '8071535bc02bb468ff9cf4ddf577f21180bcf8cc';
    constructor(private _http:Http ){
        console.log("github service ready");
        this.username = 'bradtraversy';
    }
    getUser(){
        // return an observable therefore you need map to change the res to json formatted
        return this._http.get('http://api.github.com/users/'+this.username+"?client_id="+this.client_id +"&client_secert"+this.client_secert)
            .map(res => res.json());
    }
    getRepos(){
        // return an observable therefore you need map to change the res to json formatted
        return this._http.get('http://api.github.com/users/'+this.username+"/repos"+"?client_id="+this.client_id +"&client_secert"+this.client_secert)
            .map(res => res.json());
    }
    updateUser(username:string){
        this.username = username;
    }
}