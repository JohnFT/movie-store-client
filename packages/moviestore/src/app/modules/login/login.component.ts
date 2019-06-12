import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AccountService } from '../shared/services/account.service'
import { take } from 'rxjs/operators'
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
      user: ['', [Validators.required]],
      pass: ['', [Validators.required, Validators.maxLength(15)]]
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

  public handleClickLogin() {
    this.error = null

    if (this.formGroup.invalid) {
      return
    }

    this.service
      .logIn(this.formGroup.value.pass, this.formGroup.value.user)
      .pipe(take(1))
      .subscribe(
        res => {
          if (!res) {
            this.error = 'Usuaio o contraseña incorrectos'
            return
          }

          localStorage.setItem('movies_user', JSON.stringify(res))
          this.router.navigate(['ms', 'movies'])
        },
        err => {
          console.log(err)
          this.error =
            'Intenta mas tarde se presento un erro al tratar ingresar'
        }
      )
  }
}
