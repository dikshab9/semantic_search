import { SocketService } from './../sidebarresults/socket.service';
import { UrlRelation } from './../sidebarresults/urlrelation';
import { Component, OnInit,Input } from '@angular/core';
import { DisplayService } from '../display.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-sidebardomain',
  templateUrl: './sidebardomain.component.html',
  styleUrls: ['./sidebardomain.component.css']
})
export class SidebarDomainComponent implements OnInit {

   
  @Input() fetchedUrls;
  domain:any;
  concept:any;
  anjali:any;
  showLoader:Boolean=false;
  alert;
  registrationsuccessful:Boolean=false;
  public inputField = '<enter some text>!';
  public serverResponse: UrlRelation[];
  constructor(private _stompService: SocketService,
    private route: ActivatedRoute,
    private router: Router,
private usersApi:DisplayService) { }
  
  ngOnInit() {
   
    
  }

  onClick(domain:any,concept:any) {
    this.showLoader=true;
console.log("VALUES")
console.log(domain);
console.log(concept)
    this.usersApi.postquery1(domain,concept).then((res)=>{
     
        // this.fetchedUrls = res;
        console.log(res);
        this.alert=res;
        this.registrationsuccessful=true;
        this.showLoader=false;
       
    })
  }
  
}
