import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/services/posts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  posts: any = [];

  constructor(private postsServices: PostsService) { }

  ngOnInit() {
    this.postsServices.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

}
