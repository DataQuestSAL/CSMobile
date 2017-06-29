import { Injectable, Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'keys', pure: false })
@Injectable()
export class KeysPipe implements PipeTransform {
    transform(value: any, args: any[] = null): any {
        return Object.keys(value)//.map(key => value[key]);
    }
}