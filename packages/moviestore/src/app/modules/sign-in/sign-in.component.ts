import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AccountService } from '../shared/services/account.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public formGroup: FormGroup
  public error: string
  constructor(
    private fb: FormBuilder,
    private service: AccountService,
    private router: Router
  ) {}

  ngOnInit() {
    this.buildForm()
  }

  public buildForm() {
    this.formGroup = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.maxLength(15)]]
    })
  }

  public getError(controlName: string): string {
    const control = this.formGroup.get(controlName)
    return control.hasError('required')
      ? 'You must enter a value'
      : control.hasError('email')
      ? 'Not a valid email'
      : ''
  }

  public handleCreate() {
    if (this.formGroup.invalid) {
      return
    }
    const account = {
      ...this.formGroup.value,
      state: 1,
      rol: 1
    }

    this.service.add(account).subscribe(res => {
      if (res) {
        this.router.navigate(['/'])
      }
    })
  }
}
