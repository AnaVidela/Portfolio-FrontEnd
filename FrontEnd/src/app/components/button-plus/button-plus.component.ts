import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-button-plus',
  templateUrl: './button-plus.component.html',
  styleUrls: ['./button-plus.component.css']
})
export class ButtonPlusComponent implements OnInit {

  roles: string[] = [];
  isAdmin = false;

  constructor(private tokenservice: TokenService) { }

  ngOnInit(): void {
    this.roles = this.tokenservice.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    })

  }
}
