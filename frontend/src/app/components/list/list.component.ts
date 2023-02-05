import { Component, OnInit } from '@angular/core';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  blogs: any = [];
  filteredBlogs: any = [];
  isLoading: boolean = true;
  constructor(private service: BlogsService) {}

  ngOnInit(): void {
    this.service.getBlogs().subscribe((data: any) => {
      this.blogs = data;
      this.filteredBlogs = this.blogs;
      this.isLoading = false;
    });
  }

  search(searchText: any) {
    this.isLoading = true;
    this.filteredBlogs = this.blogs.filter(
      (blog: any) =>
        blog.title.toLowerCase().includes(searchText.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchText.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchText.toLowerCase())
    );
    this.isLoading = false;
  }
}
