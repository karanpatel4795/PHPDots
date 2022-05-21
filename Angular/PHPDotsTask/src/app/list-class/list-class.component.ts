import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { Toast, ToastrService } from 'ngx-toastr';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-list-class',
  templateUrl: './list-class.component.html',
  styleUrls: ['./list-class.component.css']
})
export class ListClassComponent implements OnInit {
  dataTable: any;
  dtOptions: any;
  tableData = [];
  @ViewChild('dataTable', { static: true }) table: any;
  ClassList: Array<any> = []
  constructor(private http: HttpClient, private session: SessionService, private tostr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.getDataFromSource();
  }
  getDataFromSource() {
    this.session.getAllClasses().subscribe(resp => {
      this.ClassList = resp.data
      setTimeout(() => {
        $('#datatableexample').DataTable({
          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true,
          lengthMenu: [5, 10, 25]
        });
      }, 1);
    }, error => console.error(error));
  }
  download(classId: any) {
    this.session.downloadFile(classId).subscribe(resp => {
      if (resp.status == 200) {
        this.tostr.success("", resp.msg, { timeOut: 3000 })
        this.getDataFromSource();
      }
    })
  }
  edit(classId: any) {
    this.router.navigateByUrl("/edit-class/" + classId)
  }
  Delete(classId: any) {
    this.session.deleteClass(classId).subscribe(resp => {
      if (resp.status == 200) {
        this.tostr.success("", resp.msg, { timeOut: 10000 })
        this.getDataFromSource();
      }
    })
  }
}
