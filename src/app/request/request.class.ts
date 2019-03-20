import{User} from '../user/user.class'

export class Request{

    id:number;
    userId:number;
    user:User;
    justification:string;
    rejectionReason:string;
    deliveryMode:string;
    submittedDate:string;
    status:string;
    total:number;
    active:boolean;

    constructor()
    {
        this.id = 0;
        this.userId = 0;
        this.justification = "";
        this.rejectionReason = "";
        this.deliveryMode = "Pickup";
        this.submittedDate = "";
        this.status = "NEW";
        this.active = true;
    }

}