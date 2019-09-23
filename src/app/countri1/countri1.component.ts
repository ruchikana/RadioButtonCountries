import { Component, OnInit } from '@angular/core';
import { CountriService } from '../countri.service';

@Component({
  selector: 'app-countri1',
  templateUrl: './countri1.component.html',
  styleUrls: ['./countri1.component.css']
})
export class countri1 {
countriList: any;
  constructor(private _cntrserv:CountriService) { 
    this._cntrserv.getcountri()
    .subscribe((data)=>{
      console.log('response countriList',data);
      this.countriList=data;

    })
    /*this._cntrserv.getcountriname()
    .subscribe((data)=>{
      this.countriList=data;
    });*/
    
  }
}