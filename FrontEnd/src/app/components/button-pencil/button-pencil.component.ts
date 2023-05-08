import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-button-pencil',
  templateUrl: './button-pencil.component.html',
  styleUrls: ['./button-pencil.component.css']
})
export class ButtonPencilComponent implements OnInit{

  roles: string[] =[];
  isAdmin = false;

   constructor (private tokenservice: TokenService) {}

   ngOnInit(): void {
    this.roles = this.tokenservice.getAuthorities();
    this.roles.forEach(rol => {
      if(rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    })
       
   }

}
