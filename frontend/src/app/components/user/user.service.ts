import { User } from './../users/user.model'
import { Injectable } from '@angular/core'
import { Apollo, gql } from 'apollo-angular'
import { Observable, map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private apollo: Apollo) { }
  find(id: number): Observable<User> {
    return this.apollo.watchQuery<any>({
      query: gql`
        {
          user(id: "${id}") {
            id
            name
            email
            postsCount
              posts {
                id
                title
                body
              }
          }
        }`
    }).valueChanges.pipe(map((response) => response.data.user))
  }
}
