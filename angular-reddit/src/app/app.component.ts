import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fulstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ]
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    // ${} extracts the value of title.value from the string and the backtick ` tells js to parse objects to a string
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value));
    // clear the input fields
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
