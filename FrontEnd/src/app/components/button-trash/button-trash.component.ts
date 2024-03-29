import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-button-trash',
  templateUrl: './button-trash.component.html',
  styleUrls: ['./button-trash.component.css']
})
export class ButtonTrashComponent implements OnInit {

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
