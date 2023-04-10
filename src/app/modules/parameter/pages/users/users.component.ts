import {
    AfterViewInit,
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './services/user.service';
import { Subject, takeUntil } from 'rxjs';
import { Student } from './models/user.model';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit, OnDestroy, AfterViewInit {
    dtOptions: DataTables.Settings;

    dtTrigger: Subject<any> = new Subject<any>();

    userData: any 

    constructor(private userService: UserService) {
       
    }

    usersData: Student[];

    ngOnInit(): void {
        const that = this;
      

        // this.dtOptions = {
        //     pagingType: 'full_numbers',
        //     data: this.usersData,
        // };

        this.dtOptions = {
          pagingType: "full_numbers",
          paging: true,
          pageLength: 10,
          lengthMenu: [5, 10, 25 ],
          serverSide: true,
          processing: true,
          ajax: (dataTablesParameters: any, callback) => {
              this.userService.fetchStudents(dataTablesParameters).subscribe((data: any) => {
                  this.usersData = data.content;
                  callback({
                    recordsTotal: data.totalElements,
                    recordsFiltered: data.totalElements,
                    data: this.usersData
                  });
                
              })
          },
          columns: [
            {data: "id" , searchable: false},
            {data: null, render: function(data,type,row){
              return row.firstname + "  " +row.lastname
            }},
            {data: "email"},
            {data: "phone"},
            {
              data: null,
              searchable:false,
              render: function(data,type,row){
                return `<span class="badge badge-success">active</span>`
              }

            },
            {
              data:null,
              render: function(data,type,row){
                  return `<button class="btn btn-sm"><i class="anticon anticon-eye"></i></button>`
              }
            }
            
          ],
        };
    }

    ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
    }

    ngAfterViewInit(): void {
        this.dtTrigger.next(null)
    }
}
