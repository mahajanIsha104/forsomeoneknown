export class IUser{
    Id?:number;
    name?:string;
    email?:string;
    mobile?:string;
    comments?:string;
    constructor(params:any){
        Object.assign(this,params);
    }
}