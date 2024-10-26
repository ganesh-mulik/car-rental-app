import { Component,inject,OnInit } from '@angular/core';
import { BookingService } from '../../../services/booking.service';
import { CarService } from '../../../services/car.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent implements OnInit{
  bookingService = inject(BookingService);
  carService = inject(CarService);
  bookingsData:any[] = [];
  CarData:any[]=[];

  bookingForm:FormGroup = new FormGroup({
    CustomerName: new FormControl(""),
    BookingDate: new FormControl(""),
    MobileNo: new FormControl(""),
    BookingId: new FormControl(0),
    CarId: new FormControl(0),  
    Email: new FormControl(""),
    Discount: new FormControl(0),
    TotalBillAmount: new FormControl(0),
    CustomerCity:new FormControl(""),
  });
  
  ngOnInit(): void {
      this.getBookingData();
      this.getCarData();
  }

  getBookingData(){
    this.bookingService.getAllBookings().subscribe((res:any)=>{
      this.bookingsData = res.data;
    })
  }

  getCarData(){
    this.carService.getAllCars().subscribe((res:any)=>{
      this.CarData= res.data;
    });
  }

  saveBookingData(){
    const formData = this.bookingForm.value;
    this.bookingService.createBooking(formData);
    this.getBookingData();
  }

  // updateBookingsData(data:any){
  //   this.bookingForm=new FormGroup({
  //     CustomerName: new FormControl(data.CustomerName),
  //     BookingDate: new FormControl(data.BookingDate),
  //     MobileNo: new FormControl(data.MobileNo),
  //     BookingId: new FormControl(data.BookingId),
  //     CarId: new FormControl(data.CarId),  
  //     Email: new FormControl(data.Email),
  //     Discount: new FormControl(data.Discount),
  //     TotalBillAmount: new FormControl(data.TotalBillAmount),
  //     CustomerCity:new FormControl(data.CustomerCity),
  //   });
  // }
}
