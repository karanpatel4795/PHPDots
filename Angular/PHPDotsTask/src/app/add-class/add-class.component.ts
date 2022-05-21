import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {
  collegeId: string = "";
  college: Array<any> = [];
  title: string = ""
  contact: string = ""
  email: string = ""
  price: string = ""
  levels: string = ""
  description: string = ""
  files: any;

  constructor(private SessionService: SessionService, private http: HttpClient, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.SessionService.getAllCollege().subscribe(resp => {
      this.college = resp.data
    })
  }
  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.files = file;
    }
  }

  Submit() {
    // data 
    let data = { collegeId: this.collegeId, title: this.title, contact: this.contact, email: this.email, price: this.price, levels: this.levels, description: this.description }
    this.SessionService.addData(data).subscribe(resp => {
      if (resp.status == 200) {
        this.toastr.success("",resp.msg,{timeOut:3000})
        this.router.navigateByUrl("list-class")
      } else {
        this.toastr.error("",resp.msg,{timeOut:3000})
      }
    })

    //file upload
    const formData = new FormData();
    formData.append('file', this.files);
    this.http.post<any>('http://localhost:3000/files', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
 }