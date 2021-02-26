import React, { Component } from 'react';
import '../css/my-login.css'
import Logo from '../img/logo.jpg'
export default class Reset extends Component {
    render() {
        return (

<body class="my-login-page">
<section class="h-100">
		<div class="container h-100" style={{width: "min-content"}}>
			<div class="row justify-content-md-center align-items-center h-100">
				<div class="card-wrapper">
					<div class="brand">
						<img src={Logo} />
					</div>
					<div class="card fat">
						<div class="card-body">
							<h4 class="card-title">تعویض رمز</h4>
							<form method="POST" class="my-login-validation" novalidate="">
								<div class="form-group">
									<label for="new-password">رمز جدید</label>
									<input id="new-password" type="password" class="form-control" name="password" required autofocus data-eye/>
									<div class="invalid-feedback">
										رمز ورودی نیاز است
									</div>
									<div class="form-text text-muted">
										مطمن شوید که رمزتان قوی و قابل به یاد آوردن باشد
									</div>
								</div>

								<div class="form-group m-0">
									<button type="submit" class="btn btn-primary btn-block">
										تعویض رمز
									</button>
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