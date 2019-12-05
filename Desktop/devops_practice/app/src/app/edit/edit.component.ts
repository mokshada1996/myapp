import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

products = {"id":"","title":"","price":""};
  constructor(private rout: ActivatedRoute,
    private router: Router,
    private service: DataService) { }

  ngOnInit() {
    this.rout.paramMap.subscribe((result)=>{
      let id = result.get("id");
      console.log(id);
      let observableResut = this.service.selectbyId(id);
      observableResut.subscribe((data)=>{
        console.log(data[0]);

        this.products = data[0];
      });

    });
  }

  Update()
  {
    console.log(this.products);

    let obsevableResult = this.service.Update(this.products);

    obsevableResult.subscribe((result)=>{
      console.log(result);
      this.router.navigate(['/home']);
  });
}
}
