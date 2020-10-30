import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Toast, ToastrService } from 'ngx-toastr';
import { Intern } from '../services/Intern';
import { InternServiceService } from '../services/internService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  addInternMode = false;
  model: Intern = new Intern();
  updateBool = false;
  value:number;

  constructor(public internService: InternServiceService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.internService.refreshList();
  }

  addInternToggle() {
    this.addInternMode = true;
  }

  cancelAddInternMode(addInternMode: boolean) {
    this.addInternMode = addInternMode;
  }

  populateForm(intern: Intern) {
    this.updateBool = true;
    this.model = Object.assign({}, intern);
  }
  updateRecord() {
    this.internService.putIntern(this.model).subscribe(
      res => {
        this.toastr.info('Submitted successfully', 'Payment Detail Register');
        this.internService.refreshList();
        this.updateBool = false;
      },
      err => {
        console.log(err);
      }
    )
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?'))
      this.internService.deleteIntern(id).subscribe(
        res => {
          this.internService.refreshList();
          this.toastr.warning('Deleted successfully', 'Payment Detail Register');
        },
        err => {
          console.log(err);
        }
      );
  }

  cancel() {
    this.updateBool = false;
  }

  filterByNameAsc(){
    this.internService.list.sort((a,b)=> a.FirstName.localeCompare(b.FirstName));
  }
  filterByNameDesc(){
    this.filterByNameAsc();
    this.internService.list.reverse();
  }
  filterByCollegeYear(){
    this.internService.list.filter(x => x.CollegeYear===this.value);
  }
}
