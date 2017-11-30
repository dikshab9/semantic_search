import { UrlRelation } from './urlrelation';
import { SocketService } from './socket.service';
import { Component, OnInit,Input } from '@angular/core';
import { DisplayService } from '../display.service';
import {MatTabsModule} from '@angular/material/tabs';


import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-sideres',
  templateUrl: './sideres.component.html',
  styleUrls: ['./sideres.component.css']
})
export class SideResComponent implements OnInit {

  panelOpenState: boolean = false;
  searchdone: boolean= true;

  fetchedUrls;
  domain:any;
  intent:any="default";
 anjali:boolean=false;
 inputfield:any;
  public serverResponse: UrlRelation[];
  busy: Subscription;
  showLoader: Boolean = false;
  query:any;
  correctedquery:any;
  text:any;
 flagJava:boolean=false;
 flagInvest:boolean=false;
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
 private usersApi:DisplayService,private _stompService: SocketService) { }
  
  ngOnInit() {
    this.domain = this.route.snapshot.paramMap.get('domain');
    console.log(this.domain);
    if (this.domain=="java")
    this.flagJava=true;
    if (this.domain=="finance")
    this.flagInvest=true;

    


  }
 
  public send(query): void {

    console.log(query)
    this.serverResponse=null;
    this.correctedquery=null;
    this.text=null;
    if(query==""){
    this.showLoader=false;
    }
    else{
    this.showLoader=true;
    }
    this.searchdone = false;
    this.query=query;
    
    this.usersApi.postquery(query,this.intent).then((res)=>{
      
        // this.fetchedUrls = res;
        console.log(res);
      
    })
 
 
    this._stompService.sendMessage(query);
    this.busy = this._stompService.socketMessages.subscribe( data => {
      console.log("data"+data);
        console.log("INSIDE QUERY");
        
           this.serverResponse =data.result;
           if(this.serverResponse.length<1){

            this.text="no results available for the query";
           }
           else{
             this.text="showing results for";
           this.correctedquery=data.correctedquery;
           }
           this.showLoader=false;
           console.log("serverresponse"+this.serverResponse)
           
         });
    // this.anjali=false;
    // this.fake(query);
    console.log("SEND END");
  }
}






   
//   @Input() fetchedUrls;
//   concept:any;
//   intent:any = "basic";
//   anjali:any;
//   public inputField = '<enter some text>!';
//   public serverResponse: UrlRelation[];
//   constructor(private _stompService: SocketService,
//     private route: ActivatedRoute,
//     private router: Router,
// private usersApi:DisplayService) { }
  
//   ngOnInit() {
//     this.concept = this.route.snapshot.paramMap.get('concept');
//     this.intent = this.route.snapshot.paramMap.get('intent');
//     console.log(this.concept);
//     console.log(this.intent);
//     this.usersApi.postquery(this.concept,this.intent).then((res)=>{
      
//         this.fetchedUrls = res;
//         console.log(res);
      
//     })
//     // this._stompService.connect();
//     this.fake();
//   }

//   onClick(value:string) {
//     //  this.router.navigate(['/user']);
//     location.reload();
   
//     console.log(value);
//     console.log(this.intent);
   
//     this.router.navigate(['/sideres/'+value+'/'+this.intent]);
      
//   }

//   public send(): void {
//     console.log("hello"+this.inputField)
//     this._stompService.sendMessage(this.inputField);
//     console.log("SENT DONE");
//     // this._stompService.socketMessages.subscribe( data => {
//     //   console.log("data"+data);
//     //        this.serverResponse =data;
//     //        console.log("serverresponse"+this.serverResponse)
//     //      });
//     this.anjali=false;
//     this.fake();
//     console.log("SEND END");
//   }

//   fake(){
//     console.log("INSIDE FAKE")
//       setTimeout(()=>{
//         console.log("INSIDE TIMEOUT")
//         if(this.anjali){
          
//    // this.anjali=false;
//         }
//         if(!this.anjali){
//           this._stompService.socketMessages.subscribe( data => {
//           console.log("data"+data);
//              this.serverResponse =data;
//              console.log("serverresponse"+this.serverResponse)
//              if(data!=null){
//                console.log("DATA IS NOT NULL")
//              this.anjali=true;}
//            });
//            console.log("RECURSION FAKE")
//           this.fake();
//         }
//      }, 1000);
//     }

