import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  employees = [
    { srno: 1, first: "xyz", last: "abc", email: "xyz@gmail.com", empid: 1234567890 },
    { srno: 2, first: "abc", last: "xyz", email: "abc@gmail.com", empid: 1234567890 },
    { srno: 3, first: "pqr", last: "abc", email: "pqr@gmail.com", empid: 1234567890 },
    { srno: 4, first: "efg", last: "pqr", email: "efg@gmail.com", empid: 1234567890 },
    { srno: 5, first: "xyz", last: "abc", email: "xyz@gmail.com", empid: 1234567890 }
  ];
  


}
