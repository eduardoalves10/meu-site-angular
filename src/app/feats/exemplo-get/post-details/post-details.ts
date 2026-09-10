import { httpResource } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterfacePost } from '../../exemplo-post/interface-post';

@Component({
  selector: 'app-post-details',
  imports: [],
  templateUrl: './post-details.html',
  styleUrl: './post-details.css',
})
export class PostDetails {
  private readonly route = inject(ActivatedRoute);

  private readonly postsId = this.route.snapshot.paramMap.get('id');

  protected readonly post = httpResource <InterfacePost>(
    () => 'https://jsonplaceholder.typicode.com/posts/' + this.postsId);
}
