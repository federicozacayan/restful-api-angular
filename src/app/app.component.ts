import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    title = 'angular-tutorial';
    contacts:any = [];

    constructor(private api: ApiService) { }

    deleting = (id) =>{
        let tmp  = this.contacts.filter((a) => {
            return a.id !== id;
        })
        this.contacts = tmp;
    }

    drop = (id) => {
        this.api.deleteUsers(id)
        .subscribe(data => {
            this.deleting(id)
        });
    }

    update = (element, field, post) => {
        console.log("Updating "+post.id+' '+field+' '+element.innerHTML);
        post[field] = element.innerHTML;
        this.api.updateUser(post)
        .subscribe(data => {
            console.log(data)
        });
    }

    create = () => {
        console.log('creating');
        this.api.createUser({
                name: 'Jhon Doe',
                email: 'bar@email.com',
                phone: '444-555'
            })
        .subscribe(data => {
            console.log(data)
            this.contacts.push(data);
        });
    }
    
    ngOnInit() {
        this.api.getUsers()
        .subscribe(data => {
            this.contacts = data;
            console.log(data)
        });
    }
}
