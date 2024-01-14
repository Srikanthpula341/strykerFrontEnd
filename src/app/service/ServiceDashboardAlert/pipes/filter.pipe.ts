import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any ,filterstring:string) {
    if (value.length === 0 || filterstring === ''){
     return value;
    }
 
    const alerts = [];
    for (const alert of value){
     if(alert['prioritystatus'] === filterstring){
       alerts.push(alert);
     }
    }
    return alerts;
   }

}
