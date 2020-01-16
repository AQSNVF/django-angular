import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'members-frontend';

  members = [
    {name: 'Member 01', id: 1, surname: 'Ciclano', photo: 'http://www.minhaapp.com/photo1'},
    {name: 'Member 02', id: 2, surname: 'Beltrano', photo: 'http://www.minhaapp.com/photo2' },
    {name: 'Member 03', id: 3, surname: 'Fulano', photo: 'http://www.minhaapp.com/photo3' },
    {name: 'Member 04', id: 4, surname: 'Coisano', photo: 'http://www.minhaapp.com/photo4' },
  ];

  constructor(private api: ApiService, private router: Router) {
    this.getMembers();
  }

  getMembers = () => {
    this.api.getAllMembers().subscribe(
      data => {
        this.members = data;
      },
      error => {
        console.log('Aconteceu um Erro!', error.message);
      }
    );
  }

  memberClicked = (member) => {
    this.router.navigate(['member-detail', member.id]);
  }
}
