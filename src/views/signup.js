import React, { Component } from "react";
import Logo from '../img/logo.jpg'
import '../css/my-login.css'
export default class SignUp extends Component {
    render() {
        return (

<body class="my-login-page">
	<section class="h-100">
		<div class="container h-100" style={{width: "min-content"}}>
			<div class="row justify-content-md-center h-100">
				<div class="card-wrapper">
					<div class="brand">
						<img src={Logo} alt="bootstrap 4 login page"/>
					</div>
					<div class="card fat">
						<div class="card-body">
							<h4 class="card-title">ثبت نام</h4>
							<form method="POST" class="my-login-validation" novalidate="">
								<div class="form-group">
									<label for="name">نام</label>
									<input id="name" type="text" class="form-control" name="name" required autofocus/>
									<div class="invalid-feedback">
										اسم شما چیست؟
									</div>
								</div>

								<div class="form-group">
									<label for="email">آدرس ایمیل</label>
									<input id="email" type="email" class="form-control" name="email" required/>
									<div class="invalid-feedback">
										ایمیل معتبر نیست
									</div>
								</div>

								<div class="form-group">
									<label for="password">رمز ورود</label>
									<input id="password" type="password" class="form-control" name="password" required data-eye/>
									<div class="invalid-feedback">
										رمز ورودی ضروریست
									</div>
								</div>

								<div class="form-group">
									<div class="custom-checkbox custom-control">
										<input type="checkbox" name="agree" id="agree" class="custom-control-input" required=""/>
										<label for="agree" class="custom-control-label">موافقم <a href="#">با قوانین سایت</a></label>
										<div class="invalid-feedback">
											باید با قوانین سایت موافقت کنید
										</div>
									</div>
								</div>

								<div class="form-group m-0">
									<button type="submit" class="btn btn-primary btn-block">
										ثبت نام
									</button>
								</div>
								<div class="mt-4 text-center">
									حسابی دارید؟ <a href="login">Login</a>
								</div>
							</form>
						</div>
					</div>
					<div class="footer">
						Copyright &copy; 2017 &mdash; Your Company 
					</div>
				</div>
			</div>
		</div>
	</section></body>
        );
    }
}