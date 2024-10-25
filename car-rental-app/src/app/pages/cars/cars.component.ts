import { Component,inject,OnInit } from '@angular/core';
import { CarService } from '../../../services/car.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent implements OnInit{
  carData:any[]=[];
  carService = inject(CarService);
  carForm:FormGroup = new FormGroup({    
      carId:new FormControl(0),
      brand:new FormControl(""),
      model:new FormControl(""),
      year:new FormControl(""),
      color:new FormControl(""),
      dailyRate:new FormControl(""),
      carImage:new FormControl(""),
      regNo:new FormControl("")   
    
  });

  ngOnInit(): void {
    this.getCars();           
  }

  addNew(){
    this.carForm = new FormGroup({    
      carId:new FormControl(0),
      brand:new FormControl(""),
      model:new FormControl(""),
      year:new FormControl(""),
      color:new FormControl(""),
      dailyRate:new FormControl(""),
      carImage:new FormControl(""),
      regNo:new FormControl("") 
    
  });
  }

  getCars(){
    this.carService.getAllCars().subscribe((res:any)=>{
      this.carData = res.data;
    })
  }

  saveCar(){
    const formValue = this.carForm.value;
    this.carService.createCar(formValue).subscribe((res:any)=>{
      if(res.result){
        alert("New Record created successfully");
        this.getCars();
      }
      else{
        alert(res.message);
      }
    })
  }

  updateCar(){
    const formValue = this.carForm.value;
    this.carService.updateCar(formValue).subscribe((res:any)=>{
      if(res.result){
        alert("Record updated successfully");
        this.getCars();
      }
      else{
        alert(res.message);
      }
    })
  }

  deleteCar(id:number){
    this.carService.deleteCar(id).subscribe((res:any)=>{
      if(res.result){
        alert("Record deleted successfully");
        this.getCars();
      }
      else{
        alert(res.message);
      }
    })
  }

  onEdit(data:any){
    this.carForm = new FormGroup({    
      carId:new FormControl(data.carId),
      brand:new FormControl(data.brand),
      model:new FormControl(data.model),
      year:new FormControl(data.year),
      color:new FormControl(data.color),
      dailyRate:new FormControl(data.dailyRate),
      carImage:new FormControl(data.carImage),
      regNo:new FormControl(data.regNo)   
    
  });
  }

}
