import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DBOperation } from '../shared/data-grid/dboperations';
import { IUser } from './users.model';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  isREADONLY: boolean = false;
  exportFileName: string = "Users_";

  users: IUser[];
  user: any;
  msg: string;
  dbops: DBOperation;
  modalTitle: string;
  modalBtnTitle: string;

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
        title: 'Edit',
        keys: ['Id'],
        action: DBOperation.update,
        ishide: this.isREADONLY
      },
      {
        title: 'X',
        keys: ["Id"],
        action: DBOperation.delete,
        ishide: this.isREADONLY
      }

    ];

  }
  //Grid Vars end

  constructor() { }

  openDialog() {
  }

  ngOnInit(): void {
    this.LoadUsers();
  }

  LoadUsers(): void {
    this.users= new Array<IUser>();
    for(let i=0;i<50;i++){
      let params = {
        "Id":i,
        "name":`A `+i,
        "email":`B `+i,
        "mobile": `C `+i,
        "comments":`Long long `+i
      };
      let usr = new IUser(params);
      this.users.push(usr);
    }
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
    }
  }

}
