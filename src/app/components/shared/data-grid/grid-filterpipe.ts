import { PipeTransform, Pipe, Injectable } from '@angular/core';
import { IUser } from '../../admin-page/users.model';

@Pipe({
    name: 'userFilter'
})
@Injectable()
export class UserFilterPipe implements PipeTransform {

    transform(value: IUser[], filter: string): IUser[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((app: IUser) =>
            app.name != null && app.name.toLocaleLowerCase().indexOf(filter) != -1
            || app.email != null && app.email.toLocaleLowerCase().indexOf(filter) != -1
            || app.comments != null && app.comments.toLocaleLowerCase().indexOf(filter) != -1
        ) : value;
    }

}