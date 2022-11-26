import { Component, OnInit, ɵɵNgOnChangesFeature } from '@angular/core';
import { Subscription } from 'rxjs';
import { OnLoadProcessService } from '../services/on-load-process.service';

@Component({
  selector: 'app-on-load-process',
  templateUrl: './on-load-process.component.html',
  styleUrls: ['./on-load-process.component.css']
})
export class OnLoadProcessComponent implements OnInit {

  processActive: Boolean = false;
  subscription: Subscription = new Subscription;
 
   constructor(public loadingService:OnLoadProcessService) { }
 
   ngOnInit(): void {
     this.subscribeToLoadings();
     console.log("subscribeToLoadings---> ",this.processActive);
     console.log("subscribeToLoadings");
   }

   subscribeToLoadings() {
    console.log('subscribeToLoadings');
     this.subscription = this.loadingService.processActiveChange
     .subscribe(isActive => {
       //this.msgs.length = 0;
       this.setProcessActive(isActive);
     });
   }
 
   ngOnDestroy() {
    this.subscription.unsubscribe();
   }

   setProcessActive(processActive:Boolean){

    this.processActive = processActive;
    console.log(" this.processActive =", this.processActive );
   }

}
