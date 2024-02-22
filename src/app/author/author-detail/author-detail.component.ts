import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorDetail } from '../author-detail';
import { AuthorService } from '../author.service';
import {BookDetail} from "../../book/book-detail";

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: []
})
export class AuthorDetailComponent implements OnInit {

  @Input() authorDetail!: AuthorDetail;

  constructor(
    private route: ActivatedRoute,
    private authorService: AuthorService
  ) {}

  ngOnInit() {
    if(this.authorDetail === undefined){
      this.route.paramMap.subscribe(params=>{
        let authorId=params.get('id')
        if (authorId) {
          this.authorService.getAuthor(authorId).subscribe((apiData: AuthorDetail) => {
            this.authorDetail = apiData;
          })
        }
      })
    }
  }
}
