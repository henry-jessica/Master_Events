    
// export class Event{
//   //  Event?:IEvent; 
//     name?: string;
//     // images?:IImage[]; 
//     dates?: IDates;
//     id?:string; 
    
//     constructor(name?:string, dates?:IDates, id?:string){
//         this.name = name; 
//         // this.images = images; 
//         this.dates = dates; 
//         this.id = id; 
//    //     this.Event=Event; 
//     }

// }

export class Event{
   event?:IEvent; 
    
    constructor(event?:IEvent){
       this.event = event; 
    }

}

export interface IEvent {
        name: string;
        type: string;
        id: string;
        test: boolean;
        url: string;
        locale: string;
        images: IImage[];
        sales: ISales;
        dates: IDates;
        classifications: IClassification[];
        accessibility: IAccessibility;
        ageRestrictions: IAgeRestrictions;
        code: string;
        _links: ILinks;
        _embedded: IEmbedded2;
        promoter: IPromoter;
        promoters: IPromoter2[];
        pleaseNote: string;
        priceRanges: IPriceRange[];
        seatmap: ISeatmap;
        ticketLimit: ITicketLimit;
        products: IProduct[];
        info: string;
    }
    export interface IImage {
        ratio: string;
        url: string;
        width: number;
        height: number;
        fallback: boolean;
    }

    export interface IPublic {
        startTBD: boolean;
        startTBA: boolean;
        startDateTime?: Date;
        endDateTime?: Date;
    }

    export interface IPresale {
        startDateTime: Date;
        endDateTime: Date;
        name: string;
    }

    export interface ISales {
        public: IPublic;
        presales: IPresale[];
    }

    export interface IStart {
        localDate: string;
        localTime: string;
        dateTime: Date;
        dateTBD: boolean;
        dateTBA: boolean;
        timeTBA: boolean;
        noSpecificTime: boolean;
    }

    export interface IStatus {
        code: string;
    }

    export interface End {
        localDate: string;
        approximate: boolean;
        noSpecificTime: boolean;
    }

    export interface IDates {
        start: IStart;
        timezone: string;
        status: IStatus;
        spanMultipleDays: boolean;
        end: End;
    }

    export interface ISegment {
        id: string;
        name: string;
    }

    export interface IGenre {
        id: string;
        name: string;
    }

    export interface ISubGenre {
        id: string;
        name: string;
    }

    export interface IType {
        id: string;
        name: string;
    }

    export interface ISubType {
        id: string;
        name: string;
    }

    export interface IClassification {
        primary: boolean;
        segment: ISegment;
        genre: IGenre;
        subGenre: ISubGenre;
        type: IType;
        subType: ISubType;
        family: boolean;
    }

    export interface IAccessibility {
        info: string;
        ticketLimit?: number;
        url: string;
        urlText: string;
    }

    export interface IAgeRestrictions {
        legalAgeEnforced: boolean;
    }

    export interface Self {
        href: string;
    }

    export interface IAttraction {
        href: string;
    }

    export interface Venue {
        href: string;
    }

    export interface ILinks {
        self: Self;
        attractions: IAttraction[];
        venues: Venue[];
    }

    export interface IImage2 {
        ratio: string;
        url: string;
        width: number;
        height: number;
        fallback: boolean;
        attribution: string;
    }

    export interface ICity {
        name: string;
    }

    export interface ICountry {
        name: string;
        countryCode: string;
    }

    export interface IAddress {
        line1: string;
        line2: string;
    }

    export interface ILocation {
        longitude: string;
        latitude: string;
    }

    export interface IMarket {
        name: string;
        id: string;
    }

    export interface IDma {
        id: number;
    }

    export interface ITwitter {
        handle: string;
    }

    export interface ISocial {
        twitter: ITwitter;
    }

    export interface IGeneralInfo {
        generalRule: string;
        childRule: string;
    }

    export interface IUpcomingEvents {
        _total: number;
        ticketmaster: number;
        _filtered: number;
    }

    export interface IAda {
        adaPhones: string;
        adaCustomCopy: string;
        adaHours: string;
    }

    export interface ISelf2 {
        href: string;
    }

    export interface ILinks2 {
        self: ISelf2;
    }

    export interface IState {
        name: string;
        stateCode: string;
    }

    export interface IBoxOfficeInfo {
        openHoursDetail: string;
        acceptedPaymentDetail: string;
        willCallDetail: string;
        phoneNumberDetail: string;
    }

    export interface IVenue2 {
        name: string;
        type: string;
        id: string;
        test: boolean;
        url: string;
        locale: string;
        images: IImage2[];
        postalCode: string;
        timezone: string;
        city: ICity;
        country: ICountry;
        address: IAddress;
        location: ILocation;
        markets: IMarket[];
        dmas: IDma[];
        social: ISocial;
        parkingDetail: string;
        generalInfo: IGeneralInfo;
        upcomingEvents: IUpcomingEvents;
        ada: IAda;
        _links: ILinks2;
        state: IState;
        boxOfficeInfo: IBoxOfficeInfo;
        accessibleSeatingDetail: string;
    }

    export interface IImage3 {
        ratio: string;
        url: string;
        width: number;
        height: number;
        fallback: boolean;
    }

    export interface ISegment2 {
        id: string;
        name: string;
    }

    export interface IGenre2 {
        id: string;
        name: string;
    }

    export interface ISubGenre2 {
        id: string;
        name: string;
    }

    export interface IType2 {
        id: string;
        name: string;
    }

    export interface ISubType2 {
        id: string;
        name: string;
    }

    export interface IClassification2 {
        primary: boolean;
        segment: ISegment2;
        genre: IGenre2;
        subGenre: ISubGenre2;
        type: IType2;
        subType: ISubType2;
        family: boolean;
    }

    export interface IUpcomingEvents2 {
        _total: number;
        ticketmaster: number;
        _filtered: number;
        tmr?: number;
        mfx_pl?: number;
    }

    export interface ISelf3 {
        href: string;
    }

    export interface ILinks3 {
        self: ISelf3;
    }

    export interface IYoutube {
        url: string;
    }

    export interface IItune {
        url: string;
    }

    export interface IFacebook {
        url: string;
    }

    export interface ISpotify {
        url: string;
    }

    export interface IMusicbrainz {
        id: string;
    }

    export interface IHomepage {
        url: string;
    }

    export interface ITwitter2 {
        url: string;
    }

    export interface ILastfm {
        url: string;
    }

    export interface IWiki {
        url: string;
    }

    export interface IInstagram {
        url: string;
    }

    export interface IExternalLinks {
        youtube: IYoutube[];
        itunes: IItune[];
        facebook: IFacebook[];
        spotify: ISpotify[];
        musicbrainz: IMusicbrainz[];
        homepage: IHomepage[];
        twitter: ITwitter2[];
        lastfm: ILastfm[];
        wiki: IWiki[];
        instagram: IInstagram[];
    }

    export interface IAttraction2 {
        name: string;
        type: string;
        id: string;
        test: boolean;
        url: string;
        locale: string;
        images: IImage3[];
        classifications: IClassification2[];
        upcomingEvents: IUpcomingEvents2;
        _links: ILinks3;
        externalLinks: IExternalLinks;
    }

    export interface IEmbedded2 {
        venues: IVenue2[];
        attractions: IAttraction2[];
    }

    export interface IPromoter {
        id: string;
        name: string;
        description: string;
    }

    export interface IPromoter2 {
        id: string;
        name: string;
        description: string;
    }

    export interface IPriceRange {
        type: string;
        currency: string;
        min: number;
        max: number;
    }

    export interface ISeatmap {
        staticUrl: string;
    }

    export interface ITicketLimit {
        info: string;
    }

    export interface ISegment3 {
        id: string;
        name: string;
    }

    export interface IGenre3 {
        id: string;
        name: string;
    }

    export interface ISubGenre3 {
        id: string;
        name: string;
    }

    export interface IType3 {
        id: string;
        name: string;
    }

    export interface ISubType3 {
        id: string;
        name: string;
    }

    export interface IClassification3 {
        primary: boolean;
        segment: ISegment3;
        genre: IGenre3;
        subGenre: ISubGenre3;
        type: IType3;
        subType: ISubType3;
        family: boolean;
    }

    export interface IProduct {
        name: string;
        id: string;
        url: string;
        type: string;
        classifications: IClassification3[];
    }


    export interface IEmbedded {
        events: IEvent[];
    }

    export interface IFirst {
        href: string;
    }

    export interface ISelf4 {
        href: string;
    }

    export interface INext {
        href: string;
    }

    export interface ILast {
        href: string;
    }

    export interface ILinks4 {
        first: IFirst;
        self: ISelf4;
        next: INext;
        last: ILast;
    }

    export interface IPage {
        size: number;
        totalElements: number;
        totalPages: number;
        number: number;
    }

    export interface IRootObject {
        _embedded: IEmbedded;
        _links: ILinks4;
        page: IPage;
    }


