import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DBOperation } from '../shared/data-grid/dboperations';
import { IUser } from './users.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { UserFilterPipe } from '../shared/data-grid/grid-filterpipe';
import { Http} from '@angular/http';
import {map} from 'rxjs/operators/map';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  isREADONLY: boolean = false;
  exportFileName: string = "Users_";
  @ViewChild("template") template:TemplateRef<any>;
  users: IUser[];
  user: IUser;
  msg: string;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;
  modalRef: BsModalRef;
  //userfilter:UserFilterPipe;
  //Grid Vars start
  columns: any[] = [
    {
      display: 'Name',
      variable: 'name',
      filter: 'text',
    },
    {
      display: 'Email',
      variable: 'email',
      filter: 'text'
    },
    {
      display: 'Mobile',
      variable: 'mobile',
      filter: 'text'
    },
    {
      display: 'Comment',
      variable: 'comments',
      filter: 'text'
    }
  ];
  sorting: any = {
    column: 'Name',
    descending: false
  };
  hdrbtns: any[] = [];
  gridbtns: any[] = [];
  usrFilterPipe:UserFilterPipe;
  
  constructor(private modalService: BsModalService,private userFilter:UserFilterPipe,private http:Http) { 
    this.usrFilterPipe=userFilter;
  }

  initGridButton() {

    this.hdrbtns = [
      {
        title: 'Add',
        keys: [''],
        action: DBOperation.create,
        ishide: this.isREADONLY

      }];
    this.gridbtns = [
      {
        title: 'Click To Open',
        keys: ['Id'],
        action: DBOperation.popup,
        ishide: this.isREADONLY
      }
    ];
  }
  //Grid Vars end

  openDialog() {
  }

  ngOnInit(): void {
    this.LoadUsers();
    this.initGridButton();
  }

  LoadUsers(): void {
    this.users= new Array<IUser>();
    
    this.http.get('/assets/userdata.json').map((resp)=> resp.json().data as IUser[]).subscribe(
      e=>{
        this.users=e;
      }
    );
    // for(let i=0;i<50;i++){
    //   let params = {
    //     "Id":i,
    //     "name":`A `+i,
    //     "email":`B `+i,
    //     "mobile": `C `+i,
    //     "comments":`Long long `+i
    //   };
    //   let usr = new IUser(params);
    //   this.users.push(usr);
    // }
  }

  addUser() {
    this.dbops = DBOperation.create;
    this.modalTitle = "Add New User";
    this.modalBtnTitle = "Add";
    this.openDialog();
  }
  
  editUser(id: number) {
    this.dbops = DBOperation.update;
    this.modalTitle = "Edit User";
    this.modalBtnTitle = "Update";
    this.user = this.users.filter(x => x.Id == id)[0];
    this.openDialog();
  }
  
  deleteUser(id: number) {
    this.dbops = DBOperation.delete;
    this.modalTitle = "Confirm to Delete?";
    this.modalBtnTitle = "Delete";
    this.user = this.users.filter(x => x.Id == id)[0];
    this.openDialog();
  }

  modalData:any;
  
  gridaction(gridaction: any): void {
    switch (gridaction.action) {
      case DBOperation.create:
        this.addUser();
        break;
      case DBOperation.update:
        this.editUser(gridaction.values[0].value);
        break;
      case DBOperation.delete:
        this.deleteUser(gridaction.values[0].value);
        break;
      case DBOperation.popup:
        this.user = this.users[gridaction.values[0].value];
        console.log(JSON.stringify(gridaction));
        this.modalRef = this.modalService.show(this.template);
        break;
    }
  }

}
