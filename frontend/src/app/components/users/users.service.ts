import { Injectable } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'
import { Observable, map } from 'rxjs'
import { User } from './user.model'

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  constructor(private apollo: Apollo) { }
  findAll(): Observable<User[]> {
    return this.apollo.watchQuery<any>({
      query: gql`
        {
          users {
            id
            name
            email
            postsCount
          }
        }`
    }).valueChanges.pipe(map((response) => response.data.users))
  }
}
