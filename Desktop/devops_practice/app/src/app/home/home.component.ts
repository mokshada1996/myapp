import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products = [] 
  constructor(private service: DataService) { }

  ngOnInit() 
  {
  
    let observableResult = this.service.select();
    observableResult.subscribe((response)=> {
      if(response['status'] === 'success')
      {
      this.products = response['data'] as any
      }
      else{
        console.log('error',response['error'])
      }
    });
  }

}
