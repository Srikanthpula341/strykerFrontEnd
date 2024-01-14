export interface dealeralertStatus {
    id: number;
    customerId:string;
    alertstatus: string;
    ticketid: string;
    ticketstatus: string;
    alertheading: string;
    prioritystatus: string;
    ordereditemno: string;
    request: string;
    type:string;
    doctorsname:string;
    hospitalname:string;
}
//Order tracking
export interface tools {
    name: string;
    code: string;
    slno: number;
    qty: number;
}

export interface ToolSet {
    name: string;
    id: number;
    tools: tools[];
}
//order list
export interface OrderTool {
	name: string;
	code: string;
	slno: number;
	qty: number;
	orderid: string;
	size: number;
	status: string;
}

export interface OrderALLList {
	name: string;
	id: number;
	tools: OrderTool[];
}

export interface AlertHospital {
    id:number,
    customerType: string,
    customerId: string,
    customerName: string,
    Requestedby: string,
    address: string,
    phone: string,
}

export interface HospitalOtherTicket {
    ticketnumber: any;
    requesteddate: String;
    returndate: string;
    status: String;
    action: String

};
export interface IorderList{
    orderId:Number;


}
