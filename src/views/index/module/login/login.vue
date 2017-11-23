<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="../../index2.html"><b>Admin</b>LTE</a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">Sign in to start your session</p>
      <form action="../../index2.html" method="post">
        <div class="form-group has-feedback">
          <input type="email" class="form-control" placeholder="Email">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" placeholder="Password">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="row">
          <div class="col-xs-8">
            <div class="checkbox icheck">
              <label>
                <input type="checkbox"> Remember Me
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-xs-4">
            <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
          </div>
          <!-- /.col -->
        </div>
      </form>
      <div class="social-auth-links text-center">
        <p>- OR -</p>
        <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign in using
        Facebook</a>
        <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google-plus"></i> Sign in using
        Google+</a>
      </div>
      <!-- /.social-auth-links -->
      <a href="#">I forgot my password</a>
      <br>
      <a href="register.html" class="text-center">Register a new membership</a>
    </div>
    <!-- /.login-box-body -->
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {}
  },
  components: {},
  methods: {}
}

</script>
<style>
/*
 * Page: Login & Register
 * ----------------------
 */

.login-logo,
.register-logo {
  font-size: 35px;
  text-align: center;
  margin-bottom: 25px;
  font-weight: 300;
}

.login-logo a,
.register-logo a {
  color: #444;
}

.login-page,
.register-page {
  background: #d2d6de;
}

.login-box,
.register-box {
  width: 360px;
  margin: 7% auto;
}

@media (max-width: 768px) {
  .login-box,
  .register-box {
    width: 90%;
    margin-top: 20px;
  }
}

.login-box-body,
.register-box-body {
  background: #fff;
  padding: 20px;
  border-top: 0;
  color: #666;
}

.login-box-body .form-control-feedback,
.register-box-body .form-control-feedback {
  color: #777;
}

.login-box-msg,
.register-box-msg {
  margin: 0;
  text-align: center;
  padding: 0 20px 20px 20px;
}

.social-auth-links {
  margin: 10px 0;
}

</style>
