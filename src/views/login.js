import React, { Component } from 'react';
import '../css/my-login.css'
import Logo from '../img/logo.jpg'
import JsonData from '../data/Userdatbase.json';
import  { Redirect } from 'react-router-dom'

export default class Login extends Component {

    state = {
        UserData: {},
        username:"",
        password:"",
        loggedIn :false,
      }
      getlandingPageData() {
        this.setState({UserData : JsonData})
      }
    
      componentDidMount() {
        this.getlandingPageData();
      }
      setUserName(username){
        this.setState({
            username:username,
        })
      }
      setPassword(pass){
        this.setState({
            password:pass,
        })
      }
      cheekUsernamePass(username,pass){
        if (username=== this.state.UserData.Users.User1.username && pass=== this.state.UserData.Users.User1.password ) {
            this.setState({
                 loggedIn:true  ,
            })
                                           
        }
      }
    render() {
        return (
            <body class="my-login-page">
                <h1></h1>
            <section class="h-100">
            <div class="container h-100" style={{width: "min-content"}}> 
                <div class="row justify-content-md-center h-100">
                    <div class="card-wrapper">
                        <div class="brand">
                            <img src={Logo} alt="logo"/>
                        </div>
                        <div class="card fat">
                            <div class="card-body">
                                <h4 class="card-title">Login</h4>
                                
                                    <div class="form-group">
                                        <label for="email">آدرس ایمیل</label>
                                        <input id="email" type="email" class="form-control" name="email"  required autofocus onChange={e => this.setUserName(e.target.value)}/>
                                        <div class="invalid-feedback">
                                           ایمیل معتبر نیست
                                        </div>
                                    </div>
    
                                    <div class="form-group">
                                        <label for="password">رمز ورود
                                            <a href="forgot" class="float-right">
                                               رمز خود را فراموش کردید ؟
                                            </a>
                                        </label>
                                        <input id="password" type="password" class="form-control" name="password" required data-eye onChange={e => this.setPassword(e.target.value)}/>
                                        <div class="invalid-feedback">
                                            رمز ورود ضروری است
                                        </div>
                                    </div>
    
                                    <div class="form-group">
                                        <div class="custom-checkbox custom-control">
                                            
                                            <label for="remember" class="custom-control-label">مرا به خاطر داشته باش؟</label>
                                            <input type="checkbox" name="remember" id="remember" class="custom-control-input"/>
                                        </div>
                                    </div>
    
                                    <div class="form-group m-0">
                                        <button type="submit" class="btn btn-primary btn-block" onClick={()=>{
                                            
                                          this.cheekUsernamePass(this.state.username,this.state.password)
                                        
                                        }
                                        }>
                                            Login
                                        </button>
                                    </div>
                                    <div class="mt-4 text-center">
                                        حساب کاربری ندارید؟ <a href="sign-up">ساخت حساب</a>
                                    </div>
                            </div>
                        </div>
                    
                    
                        {this.state.loggedIn?<Redirect to="/admin" />:false}   
                        
                        <h1 style={{marginLeft:"20%"}}>برای تست رمز و پسورد 1 است</h1>
                                     
                    </div>
                </div>
            </div>
        </section>
      
   
        
        </body>

       
        
        );
    }
}