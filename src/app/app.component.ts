import { PhonenumberService } from './phonenumber.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  numbers = [];
  title = 'Random Phone Numbers Generator';
  public loading = false;
  totalPhoneNumbers: number[];
  maxNum: string;
  minNum: string;

  constructor(private phoneNumberService: PhonenumberService, private toastr: ToastrService) {
  }

  ngOnInit() {
    this.getRandomNumbers();
  }

  generateRandomNumbers() {
    this.loading = true;
    this.phoneNumberService.generateRandomPhoneNumbers().subscribe((res: any) => {
      this.updateValue(res.numbers, res.numbersLength, res.maxNum, res.minNum)
      this.loading = false;
      this.toastr.success(res.message);
    });

  }

  getRandomNumbers() {
    this.loading = true;
    this.phoneNumberService.getGeneratedPhoneNumbers().subscribe((res: any) => {
        this.updateValue(res.numbers, res.length, res.maxNum, res.minNum);
        this.sortAscendingNum();
        this.sortDescendingNum();
        this.loading = false;
    }, ({error}) => {
      this.loading = false;
      this.toastr.error(error.message);
    });
  }

  updateValue(prevNum: number[], totalNum: number[], maxNum: string, minNum: string) {
    this.numbers = prevNum;
    this.totalPhoneNumbers  = totalNum;
    this.maxNum = maxNum;
    this.minNum = minNum;
  }

  sortAscendingNum() {
    return this.numbers.sort((a, b) => (a > b) ? 1 : -1);
  }

  sortDescendingNum() {
    return this.numbers.sort((a, b) => (a < b) ? 1 : -1);
  }
}
