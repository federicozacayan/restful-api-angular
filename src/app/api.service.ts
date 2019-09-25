import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient ) { }

    getUsers(){
        return this.http.get('https://jsonplaceholder.typicode.com/users/');
    }

    deleteUsers(id){
        return this.http.delete('https://jsonplaceholder.typicode.com/users/'+id);
    }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' })
    };

    updateUser(post) {
        return this.http.put(
            'https://jsonplaceholder.typicode.com/posts/'+post.id,
            post,
            this.httpOptions
        );
    }

    createUser(post) {
        return this.http.post(
            'https://jsonplaceholder.typicode.com/posts/',
            post,
            this.httpOptions
        );
    }
}
