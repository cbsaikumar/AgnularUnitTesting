import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UnitService {
    public ROOT_URl = 'http://jsonplaceholder.typicode.com';

    constructor(private  http: HttpClient) {
    }

    getPosts() {
        return this.http.get<Post[]>(`${this.ROOT_URl}/posts`);
    }
}

export interface Post{
  id: number;
  userId: string;
  body: string;
  title: string;
}