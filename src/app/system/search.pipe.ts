import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../user/user.class';


@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  //pass in arr of user
  transform(users: User[], criteria: string): User[] {
    //if empty return everything
    if(criteria == "")
    {
      return users;
    }

    //create new array to return subset
    let arrOut: User[] = [];
    
    //look a each user
    for(let u of users)
    {
      if(u.username.toLowerCase().includes(criteria.toLowerCase()))
      {
        arrOut.push(u);
        continue;
      }
      if(u.firstname.toLowerCase().includes(criteria.toLowerCase()))
      {
        arrOut.push(u);
        continue;
      }
      if(u.lastname.toLowerCase().includes(criteria.toLowerCase()))
      {
        arrOut.push(u);
        continue;
      }
      // u.phone.replace("-", "");
      if(u.phone.toLowerCase().includes(criteria.toLowerCase()))
      {
        arrOut.push(u);
        continue;
      }
      if(u.email.toLowerCase().includes(criteria.toLowerCase()))
      {
        arrOut.push(u);
        continue;
      }
    }

    return arrOut;
  }

}

