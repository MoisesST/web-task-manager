import { Component, inject, OnInit } from '@angular/core';

import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CapitalizePipe],
  templateUrl: './post.component.html',
})
export class PostComponent implements OnInit {
  private postService = inject(PostService);
  posts: any = [];

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe({
      next: (posts: any) => {
        this.posts = posts;
        console.log('Posts fetched successfully');
      },
      error: (error) => console.log('Error fetching posts', error),
    });
  }
 }
