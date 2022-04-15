export interface IEvent{
    name:string;  
    type:string; 
    id:string; 
    url:string;  
    locale:string;  
    imagesUrl:string;  
    events: string; 
    _embedded: string; 
}

export interface _embedded{
    events: IEvent; 
}
export class Event{
    name:string;  
    type:string; 
    id:string; 
    url:string;  
    locale:string;  
    imagesUrl:string;  

    constructor( name:string, type:string, id:string, url:string, locale:string, imagesUrl:string) {
        this.name = name;  
        this.type = type; 
        this.id = id; 
        this.url = url;  
        this.locale = locale;  
        this.imagesUrl = imagesUrl;  
    }
}