import { Component } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-propertylist',
  templateUrl: './propertylist.component.html',
  styleUrls: ['./propertylist.component.scss']
})
export class PropertylistComponent{
  value: number = 100000;
  highValue: number = 30000000;
  options: Options = {
    floor: 100000,
    showSelectionBar: false,
    ceil: 30000000,
  };

  constructor() {}
  ngOnInit() {}
  generateHighValue() {
    let someDate = new Date();
    var numberOfDaysToAdd = this.highValue;
    var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
  }

  generateFirstValue() {
    let someDate = new Date();
    var numberOfDaysToAdd = this.value;
    var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
  }

  
  elements = [
    {
      tag:'Resdiental',
      datetime:'12-07-2023 02:00 PM',
      title:'Bank of Baroda Auctions for Plot in Viramgam, Ahmedabad',
      description:'Flat No 303 on Third Floor of Block 9P admeasuring 720 sq ft. i.e. 66.88 sq mts. togetherwith undivided proportionate share admeasuring 33.48 sq mtrs...',
      auctionid:'107074',
      amount:'Rs.7,35,000'
    },
    {
      tag:'Commercial',
      datetime:'10-03-2023 01:00 PM',
      title:'Union Bank of India Auctions for Land in JAIPUR, Jaipur',
      description:'All that piece and parcel of leasehold land admeasuring 5250 square meter together with construction and structures thereon being hotel known as Holid...',
      auctionid:'78771',
      amount:'Rs.2,28,29,000'
    },
    {
      tag:'Commercial',
      datetime:'28-02-2023 11:00 AM',
      title:'Union Bank of India Auctions for Commercial Property in Anekal, Bengaluru',
      description:'Property No. 7 :- Neo Mall Admeasuring 12.375 acres situated at Neo Mall, Neo Town Survey Nos. 45, 46, 47, 48 Maragondanahlli Village, Survey No. 274...',
      auctionid:'59691',
      amount:'Rs.2,02,50,00,000'
    },
    {
      tag:'Scrap, Plant & Machinery',
      datetime:'14-03-2023 08:00 PM',
      title:'Liquidation E-Auction Auctions for Plant & Machinery in Safdarjung Enclave, New Delhi',
      description:'2. Plant and Machinery (75MWx2 Gas Frame 6GE make Turbines, 74MW GE Steam Turbine, Thermax make Boiler, ABB elec.)',
      auctionid:'67377',
      amount:'Rs.2,02,00,00,000'
    },
    {
      tag:'Commercial',
      datetime:'20-03-2023 12:00 PM',
      title:'Liquidation E-Auction Auctions for Commercial Property in New Delhi, New Delhi',
      description:'Sale of corporate Debtor As Going Concern with Full Adoption/taking Over of all BGs .',
      auctionid:'61833',
      amount:'Rs.1,90,00,00,000'
    },
    {
      tag:'Commercial',
      datetime:'12-06-2023 11:00 AM',
      title:'Indian Bank Auctions for Commercial Property in Nallur, Madurai',
      description:'Land and Building (Medical College and Engineering College) measuring 27 acres and 0.80 1/2 cents at S. No.280/1. 280/2. 281/1, 281/2, 282, 57/2...',
      auctionid:'91658',
      amount:'Rs.1,70,00,00,000'
    },
  ]
}
