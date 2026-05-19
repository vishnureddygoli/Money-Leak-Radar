export interface EmailScanService{scan():Promise<string[]>;}
export interface BankScanService{scan():Promise<string[]>;}
export interface SmsScanService{scanText(input:string):Promise<string[]>;}
export interface ScreenshotScanService{scan(path:string):Promise<string[]>;}
