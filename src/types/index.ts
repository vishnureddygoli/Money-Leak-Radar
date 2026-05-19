export type LeakType='subscription'|'trial'|'price_increase'|'duplicate'|'refund'|'sms_optout';
export interface Leak{id:string;title:string;type:LeakType;monthly:number;urgent?:boolean;details:string;}
