import{Request} from '../request/request.class';
import{Product} from '../product/product.class';

export class RequestLine{
    id:number;
    requestId: number;
    request: Request;
    productId: number;
    product: Product;
    quantity: number;

    constructor(reqid: number = 0, proid: number = 0)
    {
        this.id = 0;
        this.requestId = reqid;
        this.productId = proid;
        this.quantity = 1;
    }
}