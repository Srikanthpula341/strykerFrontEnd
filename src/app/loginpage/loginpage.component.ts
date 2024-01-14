import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
    static handleLoginClick() {
        throw new Error('Method not implemented.');
    }

  public loginForm! : FormGroup
  email: any;
  password: any;

  constructor(private formBuilder :FormBuilder,private http: HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.loginForm =this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

//   login(){
//     this.http.get<any>("http://localhost:3000/loginUsers")
//     .subscribe(res=>{
//       const user = res.find((a:any)=>{
//         return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
//       });
//       if(user){
//         alert("Login Success!!!");
//         this.loginForm.reset();
//         this.router.navigate(['/'])
//       }else{
//         alert("user not found!!");
//        }
//       },err=>{
//         alert("Something went wrong !!!")

//     })
// }

// login(){
//   this.http.get<any>("http://localhost:3000/loginUsers")
//   .subscribe(res=>{
//     const user = res.find((a:any)=>{
//       return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
//     });
//     if(user){
//       alert("Login Success!!!");
//       this.loginForm.reset();
//       this.router.navigate(['/'])
//     }else{
//       alert("user not found!!");
//      }
//     },err=>{
//       alert("Something went wrong !!!")

//   })
// }








handleLoginClick(){
  if(this.email && this.password){
    this.authenticateUser(this.email,this.password);
  } else {
    alert('enter username and password');
  }

}

authenticateUser(Email: string,Password: string){
  sessionStorage.setItem("user", Email);
  if(Email == "hospital" && Password == 'hospital@1'){
    this.router.navigate(['/hospital']);
  } else if(Email == "service" && Password == 'service@1'){
    this.router.navigate(['/service']);
  } else if(Email == "dealer" && Password == 'dealer@1'){
    this.router.navigate(['/dealer/request/dashboard'])
  }else{
    alert("enter valid credentials")
  }
}
}
