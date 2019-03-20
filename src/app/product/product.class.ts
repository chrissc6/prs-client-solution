import{Vendor} from '../vendor/vendor.class'

export class Product{

    vendor: Vendor;
    id: number;
    vendorId: number;
    partNumber: string;
    name: string;
    price: number;
    unit: string;
    photoPath: string;
    active: boolean;

    constructor(vid:number,pn:string,n:string,p:number,u:string,php:string)
    {
        this.id = 0;
        this.vendorId = vid;
        this.partNumber = pn;
        this.name = n;
        this.price = p;
        this.unit = u;
        this.photoPath = php;
        this.active = true;
    }

}