import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(private activated: ActivatedRoute) {
    this.activated.params.subscribe(
      (data) => {
        console.log(data)
      }
    )
  }

  ngOnInit(): void {
  }

}
