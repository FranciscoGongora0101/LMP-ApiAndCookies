import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles = [];

  constructor (private apiService: ApiService) {}

	ngOnInit() {
		this.apiService.getNews().subscribe((data: any[])=>{  
			console.log(data);  
			this.articles = data['articles'];  
		})  
	}



}
