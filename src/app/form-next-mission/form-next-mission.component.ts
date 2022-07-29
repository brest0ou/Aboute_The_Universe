import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-form-next-mission',
  templateUrl: './form-next-mission.component.html',
  styleUrls: ['./form-next-mission.component.scss']
})
export class FormNextMissionComponent implements OnInit {

  addCommentForm:any;
  candidats: any = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.generateCreateForm()
  }

  
 generateCreateForm(){
    this.addCommentForm = this.fb.group({
      first_name_id: [''],
      last_name_id: [''],
      weight_id: [''],
      choice: [''],
      choice_2: ['']
    });

  }

  onSubmit(): void {
    const FORMVALUE= this.addCommentForm.value;

    this.candidats.push(FORMVALUE);
    console.log(FORMVALUE);
    
  }

 
}
