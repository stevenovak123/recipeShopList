
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy{
private userSub:Subscription;
isAuthenticated=false;
constructor(private datastorage :DataStorageService,
  private authService: AuthService){}
  ngOnInit()
  {
this.userSub=this.authService.user.subscribe(user=>{
this.isAuthenticated=!!user;
});
  }
Save(){
  this.datastorage.storeRecipes();
}
fetch(){
  this.datastorage.fetchRecipes().subscribe();
}
onLogout(){
  this.authService.logOut();
}
ngOnDestroy(){
  this.userSub.unsubscribe()
}
}
  

