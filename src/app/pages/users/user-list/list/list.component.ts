import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  columns = [{ field: 'MenuCode', title: '菜单编号', width: 50 },
  { field: 'MenuName', title: '菜单名', width: 50 },
  { field: 'ParentCode', title: '父级菜单', width: 50 },
  { field: 'URL', title: '地址', width: 60 },
  { field: 'IconCss', title: '图标样式', width: 50 },
  { field: 'Desc', title: '描述', width: 50 },
  { field: 'Order', title: '排序', width: 50 },
    // {field: 'CreatedDateTime', title: '创建时间', width: 100},
    // {field: 'CreatedUser', title: '创建人', width: 100},
    // {field: 'ModifiedDateTime', title: '修改时间', width: 100},
    // {field: 'ModifiedUser', title: '修改人', width: 100}
  ];
  placeholder = '请输入菜单名称';
  editString = '编辑';
  deleteString = '删除';
  source: any;
  total = 0;
  pageSize = 20;
  pageIndex = 1;
  //  LocalDataSource = new LocalDataSource();
  public searchcondition: any = ''; // 界面查询条件
  public listAssemblyNames = [];
  public isformVisible: any = false; // 填写表单是否可见
  public formmodalTitle: any = '';
  public formdata: any = '';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.LoadData();
  }
  // 通过HttpGet方法读取api菜单数据
  LoadData(reset: boolean = false) {
    if (reset) {
      this.pageIndex = 1;
    }
    let olist = [];
    const pageConfig = '&PageNumber=' + this.pageIndex + '&PageSize=' + this.pageSize;
    const body = 'SearchName=' + this.searchcondition;
    this.http.get('/api/Menu/GetDataMenu?' + body + pageConfig + '&_t=' + new Date().getTime()).subscribe(data => {
      olist = this.convertData(data['list'].List);
      this.source = olist;
      this.total = data['list'].TotalCount;
    });
  }
  // 转换创建日期和修改时间的时间格式
  convertData(list: any) {
    for (let i = 0; i < list.length; i++) {
      list[i].CreatedDateTime = this.datePipe.transform(list[i].CreatedDateTime, 'yyyy-MM-dd HH:mm:ss');
      list[i].ModifiedDateTime = this.datePipe.transform(list[i].ModifiedDateTime, 'yyyy-MM-dd HH:mm:ss');
    }
    return list;
  }

  // 新增
  create() {
    // this.formmodalTitle = '菜单管理';
    this.showFormModal('');
  }

  showFormModal(menudata: any) {
    if (menudata === '') {
      this.formmodalTitle = '新建菜单';
    } else {
      this.formmodalTitle = '编辑菜单';
    }
    this.formdata = menudata;
    this.isformVisible = true;
  }

  // 编辑
  onEdit(menudata): void {
    this.formmodalTitle = '菜单管理';
    this.showFormModal(menudata);
  }

  // 确定删除
  onDeleteConfirm(data): void {
    this.showTipsModal(data);
  }

  showTipsModal(data) {
    const self = this;
    this.modalService.confirm({
      nzTitle: '提示',
      nzContent: '是否确认删除?',
      nzOnOk: () => {
        self.delete(data);
      },
      nzOnCancel: () => {
      }
    });
  }

  // 将需要删除的数据通过HttpPost方法传到api进行删除
  delete(menudata: any) {
    const menu = {
      'id': menudata.Id, 'MenuCode': menudata.MenuCode, 'MenuName': menudata.MenuName, 'ParentCode': menudata.ParentCode,
      'Order': menudata.Order, 'URL': menudata.URL, 'IconURL': menudata.IconURL, 'IconCss': menudata.IconCss, 'Desc': menudata.Desc,
      'IsActived': null, 'ModifiedDateTime': menudata.ModifiedDateTime, 'CreatedDateTime': menudata.CreatedDateTime,
      'CreatedUser': menudata.CreatedUser, 'ModifiedUser': menudata.ModifiedUser
    };
    this.http.post('/api/Menu/Delete', menu).subscribe(
      data => {
        if (data === null) {
          this.message.success('删除成功');
          this.LoadData();
        }
      },
      // erro => { console.log(error); }
    );
  }

  // 关闭当前页
  onCancelform() {
    this.isformVisible = false;
    this.LoadData();
  }

  // 翻页
  refreshStatus(): void {
    this.LoadData();
  }

}
