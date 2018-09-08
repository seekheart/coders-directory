import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  userForm: FormGroup = this.fb.group(
    {
      username: ['', Validators.required],
      email: [''],
      avatar: [''],
      bio: [''],
      github: [''],
      programmingLanguages: this.fb.array([this.fb.control('')])
    }
  );

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log(this.userForm.value);
  }

  get programmingLanguages() {
    return this.userForm.get('programmingLanguages') as FormArray;
  }

  addProgrammingLanguage() {
    this.programmingLanguages.push(this.fb.control(''));
  }

}
