import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}



// import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { I18n } from '@ngx-translate/i18n-polyfill';
// // import { error } from 'util';
// // import { Router } from '@angular/router'; // 配置路由文件
// // import { NzMessageService } from 'ng-zorro-antd'; // 导入消息提示框
// // import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'app-menuform',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.scss']
// })
// export class MenuFormComponent implements OnInit, OnChanges {

//   @Input() isVisible: boolean;
//   @Input() modalTitle: any;
//   @Input() modalData: any;
//   @Output() cancel: any = new EventEmitter<number>();         // 取消事件

//   placeholderinput = this.i18n('请输入');
//   placeholderselect = this.i18n('请选择');


//   public listParentCode: any; // 父级菜单
//   public menuCode: any = ''; // 菜单编号
//   public menuName: any = ''; // 菜单名
//   public parentCode: any; // 父级菜单
//   public order: any = ''; // 序号
//   public url: any = ''; // 图标地址
//   public iconURL: any = ''; // 地址
//   public iconCss: any = ''; // 图标样式
//   public desc: any = ''; // 描述

//   public isActived: any;
//   public id: any;
//   public state: any;
//   submitted: boolean;
//   public menuContent: any;
//   public createdDateTime: any;
//   public createdUser: any;
//   // public isdisabled: any;
//   constructor(private http: HttpClient, private i18n: I18n
//     // private router: Router,
//     // private activeModal: NgbActiveModal
//   ) {
//   }
//   // 初始化得到数据库类型
//   ngOnInit() {
//     this.http.get('/api/Menu/GetProviderSelection?' + '_t=' + new Date().getTime()).subscribe(data => {
//       this.listParentCode = data['list'];
//     });
//   }

//   ngOnChanges() {
//     const queryParams = this.modalData;
//     if (queryParams.Id != null) {
//       this.menuCode = queryParams.MenuCode;
//       this.menuName = queryParams.MenuName;
//       this.parentCode = queryParams.ParentCode;
//       this.order = queryParams.Order;
//       this.url = queryParams.URL;
//       this.iconURL = queryParams.IconURL;
//       this.iconCss = queryParams.IconCss;
//       this.desc = queryParams.Desc;
//       this.isActived = queryParams.IsActived;
//       this.id = queryParams.Id;
//       this.createdDateTime = queryParams.CreatedDateTime;
//       this.createdUser = queryParams.CreatedUser;
//       this.state = 'Edit';
//     } else {
//       this.menuCode = '';
//       this.menuName = '';
//       this.parentCode = undefined;
//       this.order = '';
//       this.url = '';
//       this.iconURL = '';
//       this.iconCss = '';
//       this.desc = '';
//       this.state = 'Add';
//     }
//   }


//   // 保存
//   onSubmit(): void {
//     if (this.state === 'Add') {
//       this.AddSave();
//     } else if (this.state === 'Edit') {
//       this.EditSave();
//     }
//   }
//   // 添加保存
//   AddSave() {
//     const nthis = this;
//     nthis.submitted = true;
//     const appmenuContent = {
//       'MenuCode': this.menuCode, 'MenuName': this.menuName, 'Id': null, 'ParentCode': this.parentCode, 'Order': this.order,
//       'URL': this.url, 'IconURL': this.iconURL, 'IconCss': this.iconCss, 'Desc': this.desc,
//       'ModifiedDateTime': null, 'ModifiedUser': null, 'CreatedUser': null, 'CreatedDateTime': null, 'IsActived': null
//     };
//     this.http.post('/api/Menu/Create', appmenuContent).subscribe(
//       data => {
//         if (data) {

//         }
//         this.handleCancel(true);
//         // nthis.submitted = false;
//         // this.activeModal.close('ok');
//         //  },
//         // erro => { console.log(error); nthis.submitted = false;
//       });
//   }
//   // 修改保存
//   EditSave() {
//     const nthis = this;
//     nthis.submitted = true;
//     const appmenuContent = {
//       'MenuCode': this.menuCode, 'MenuName': this.menuName, 'Id': this.id, 'ParentCode': this.parentCode, 'Order': this.order,
//       'URL': this.url, 'IconURL': this.iconURL, 'IconCss': this.iconCss, 'Desc': this.desc,
//       'ModifiedDateTime': null, 'ModifiedUser': null, 'CreatedUser': this.createdUser, 'CreatedDateTime': this.createdDateTime,
//       'IsActived': this.isActived
//     };
//     this.http.post('/api/Menu/Edit', appmenuContent).subscribe(
//       data => {
//         console.log(data);
//         this.handleCancel(true);

//         // nthis.submitted = false;
//         // this.activeModal.close('ok');
//         //  },
//         // erro => { console.log(error); nthis.submitted = false;
//       });
//   }

//   // 重置按钮
//   onReset() {
//     this.menuCode = '';
//     this.menuName = '';
//     this.parentCode = undefined;
//     this.order = '';
//     this.url = '';
//     this.iconURL = '';
//     this.iconCss = '';
//     this.desc = '';
//   }

//   // 关闭窗体
//   handleCancel(flag: any) {
//     this.cancel.emit({ 'Flag': flag });
//   }
// }
