import {Leak} from '@/types';
export const leakScore=(leaks:Leak[])=>Math.max(0,100-Math.min(95,Math.round(leaks.reduce((a,l)=>a+l.monthly,0))));
export const yearlySavings=(leaks:Leak[])=>Math.round(leaks.reduce((a,l)=>a+l.monthly*12,0));
export const detectTrials=(items:string[])=>items.filter(i=>/trial|expires/i.test(i));
export const detectSubscriptions=(items:string[])=>items.filter(i=>/subscription|monthly|annual/i.test(i));
export const detectSmsOptOut=(text:string)=>/reply\s+stop|text\s+stop|unsubscribe/i.test(text);
export const cancellationTemplate=(name:string)=>`Hello, please cancel my ${name} subscription effective immediately.`;
