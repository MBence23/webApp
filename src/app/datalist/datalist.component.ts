import { Component } from '@angular/core';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  styleUrl: './datalist.component.css'
})
export class DatalistComponent {

  peoples:any

  constructor(private base:BaseService){
    this.base.getPeoples().valueChanges().subscribe(
      (res)=> this.peoples=res
    )
  }

}
