import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { BlogsService } from '../../services/blogs.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private service: BlogsService,
    private router: Router
  ) {}

  form = this.fb.group({
    author: ['', Validators.required],
    title: ['', Validators.required],
    content: ['', Validators.required],
  });

  ngOnInit() {}
  onSubmit() {
    this.service.addBlog({ ...this.form.value }).subscribe({
      next: (res) => {
        this.router.navigate(['/']);
      },
      error: (err) => console.error(err),
    });
  }
}
