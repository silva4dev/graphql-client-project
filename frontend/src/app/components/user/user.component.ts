import { Component, OnInit } from '@angular/core'
import { UserService } from './user.service'
import { ActivatedRoute } from '@angular/router'
import { User } from '../users/user.model'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  user: User | null = null

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.userService.find(this.route.snapshot.params['id']).subscribe(user => {
      this.user = user
    })
  }
}
