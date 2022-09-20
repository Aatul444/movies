import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-focus',
  templateUrl: './auto-focus.component.html',
  styleUrls: ['./auto-focus.component.scss'],
})
export class AutoFocusComponent implements OnInit {
  title = 'Password Reset';
  showOtp: boolean = false;
logo='Auto Focus';
  onSendOtp() {
    this.showOtp = !this.showOtp
  }

  constructor() { }

  ngOnInit(): void {
  }

  move(e: any, one: any, two: any, three: any) {
    console.log(e.target.value);
    var length = two.value.length;
    var maxlength = two.getAttribute("maxlength");
    if (length == maxlength) {
      if (three != "") {
        three.focus();
      }
    }
    if (e.key === 'Backspace') {
      if (one != "") {
        one.focus();
      }
    }
  }
numb(e:any,one:any,two:any){
    var numblength = one.value.length;
    var nummaxlength = one.getAttribute("maxlength");

    if(numblength==nummaxlength){
       if(one != "" && two!=''){
        two.focus();
      }
    }
    if(e.key === 'Backspace'){
      if(one != "" || two ==''){
        one.focus();
      }
    }
  }
  // teenNum(e:any,one:any,two:any,three:any){
  //   var teenNo = one.value.length;
  //   var maxNo = one.getAttribute("maxlength");

  //   console.log(two);
  //   if(teenNo==maxNo){
  //      if(one != "" && two!=''){
  //       two.focus();
  //     }
  //   }
  //   if(e.key === 'Backspace'){
  //     if(one != "" || two ==''){
  //       one.focus();
  //     }
  //   }
  }

