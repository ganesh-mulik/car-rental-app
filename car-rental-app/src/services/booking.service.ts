import { Injectable,inject,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService{
  apiUrl = "https://freeapi.gerasim.in/api/CarRentalApp/";
  http = inject(HttpClient);

  getAllBookings(){
    return this.http.get(`${this.apiUrl}geAllBookings`);
  }

  // createBooking(data:any){
  //   this.http.post(`${this.apiUrl}CreateNewBooking`,data).subscribe((res:any)=>{
  //     if(res.result){
  //       return alert("Record inserted successfully");        
  //     }else{
  //       return alert(res.message);
  //     }
  //   })
  // }

  createBooking(data:any){
    return this.http.post(`${this.apiUrl}CreateNewBooking`,data);
  }

  updateBooking(data:any){
    this.http.put(`${this.apiUrl}CreateNewBooking`,data).subscribe((res:any)=>{
      if(res.result){
        return alert("Record updated successfully");
      }else{
        return res.message;
      }      
    })
  }

  deleteBookingById(id:number){
    return this.http.delete(`${this.apiUrl}DeletBookingById?id=${id}`);
  }
}
