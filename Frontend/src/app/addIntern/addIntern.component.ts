import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Toast, ToastrService } from 'ngx-toastr';
import { Intern } from '../services/Intern';
import { InternServiceService } from '../services/internService.service';

@Component({
  selector: 'app-addIntern',
  templateUrl: './addIntern.component.html',
  styleUrls: ['./addIntern.component.scss']
})
export class AddInternComponent implements OnInit {
  @Output() cancelAddIntern = new EventEmitter();
  constructor(private internService: InternServiceService,
    private toastr: ToastrService) { }
  model: Intern = new Intern();
  ngOnInit() {
  }

  addIntern() {
    this.internService.postIntern(this.model).subscribe(() => {
      console.log('registration successfull');
      this.toastr.success('Submitted successfully', 'Payment Detail Register');
      this.cancelAddIntern.emit(false);
      this.internService.refreshList();
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    this.cancelAddIntern.emit(false);
    console.log('cancelled');
  }

}
