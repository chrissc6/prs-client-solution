export class Vendor{

    id: number;
    code: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    email: string;
    isPreferred: boolean;
    active: boolean;

    constructor(c:string,n:string,a:string,cy:string,s:string,z:string,p:string,e:string,iP:boolean=true)
    {
        this.id = 0;
        this.code = c;
        this.name = n;
        this.address = a;
        this.city = cy;
        this.state = s;
        this.zip = z;
        this.phone = p;
        this.email = e;
        this.isPreferred = iP;
        this.active = true;
        

    }
}