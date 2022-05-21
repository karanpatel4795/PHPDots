import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css']
})
export class EditClassComponent implements OnInit {

  collegeId: string = "";
  college: Array<any> = [];
  title: string = ""
  contact: string = ""
  email: string = ""
  price: string = ""
  levels: string = ""
  description: string = ""
  files: any;

  constructor(private SessionService: SessionService, private http: HttpClient, private router: Router, private toastr: ToastrService, private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.collegeId = this.aRoute.snapshot.params['classId']
    this.SessionService.getCollegeById(this.collegeId).subscribe(resp => {
      this.college = resp.data.college.collegeName
      this.title = resp.data.title
      this.contact = resp.data.contact
      this.email = resp.data.email
      this.price = resp.data.price
      this.levels = resp.data.levels
      this.description = resp.data.description
    })
  }

  Submit() {
    // data 
    let data = { collegeId: this.collegeId, title: this.title, contact: this.contact, price: this.price, levels: this.levels, description: this.description }
    this.SessionService.updateData(data).subscribe(resp => {
      if (resp.status == 200) {
        this.toastr.success("", resp.msg, { timeOut: 3000 })
        this.router.navigateByUrl("list-class")
      } else {
        this.toastr.error("", resp.msg, { timeOut: 3000 })
      }
    })
  }

}
