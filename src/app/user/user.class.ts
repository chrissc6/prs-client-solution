export class User {

    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    isReviewer: boolean;
    isAdmin: boolean;
    active: boolean;

    constructor(un:string, pw:string, fn:string, ln:string, 
        pn:string, em:string, ir:boolean=false, ia:boolean=false)
    {
        this.id = 0;
        this.username = un;
        this.password = pw;
        this.firstname = fn;
        this.lastname = ln;
        this.phone = pn;
        this.email = em;
        this.isReviewer = ir;
        this.isAdmin = ia;
        this.active = true;
    }
}