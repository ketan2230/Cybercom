
import { Component, OnInit } from '@angular/core';

import { ReqResGetUserService } from '../_services/req-res-get-user.service';

@Component({
  selector: 'app-res-req',
  templateUrl: './res-req.component.html',
  styleUrls: ['./res-req.component.css']
})
export class ResReqComponent implements OnInit {
  _data : any=[];
  constructor(private service : ReqResGetUserService) { 

    console.log('getdata in componenet')
        this.service.getData()
        .subscribe(Response => { 
          
          console.log(Response);
         this._data = Response
         console.log(this._data.data);
        });
        
  
    
  }

ngOnInit() : void{


}


}