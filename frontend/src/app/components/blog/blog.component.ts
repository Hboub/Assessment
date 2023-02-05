import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  id: string = '';
  blog: any = {};
  isLoading: boolean = true;
  constructor(private route: ActivatedRoute, private service: BlogsService) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.id = params.id;
    });
    this.service.getBlog(this.id).subscribe((data: any) => {
      this.blog = data;
      this.blog.ratio = this.blog.upvotes - this.blog.downvotes;
      this.isLoading = false;
    });
  }
}
