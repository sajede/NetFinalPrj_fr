<template>
  <div class="panel">
    <div class="row form">

      <div class="col-md-6 hidden-sm">
        <img class="form-picture" src="../../assets/img/register-pic.png">
      </div>

      <div class="col-md-6 col-sm-12">
        <form class="row">
          <div>
            <h6 class="col-sm-12 font title">ثبت نام</h6>

            <div class="col-sm-12">
              <input type="text" class="form-control font" name="username" placeholder="نام کاربری" required="" autofocus=""/>
              <input type="email" class="form-control font" name="email" placeholder="ایمیل" required=""/>
              <input list="browsers" name="departeman" class="form-control font">
              <datalist id="browsers">
                <option value="مهندسی کامپیوتر"/>
                <option value="مهندسی برق"/>
                <option value="علوم کامپیوتر"/>
                <option value="مهندسی پزشکی"/>
                <option value="دندان پزشکی"/>
              </datalist>
              <input type="password" class="form-control font" name="password" placeholder="رمز عبور" required=""/>
            </div>
            <div class="col-sm-12 text-center">
              <button class="btn font" type="submit">ثبت نام</button>
            </div>
            <div class="col-sm-12 text-center">
              <router-link to="/Login" tag="a" class="font">حساب کاربری دارم</router-link>
            </div>

          </div>

        </form>

      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "Register"
    }
</script>

<style scoped>

  .panel{
    background-image: url('../../assets/img/register-bg.png');
    background-size: cover;
    padding: 10vh 5vw;
  }

  .form{
    direction: rtl;
    max-width: 60vw;
    margin: 0 auto;
    background-color: white;
    border-radius: 1rem;
    z-index: 1;
  }

  .form-picture{
    max-height:100%;
    max-width:100%;
  }

  .title{
    font-size: 18px ;
    text-align: right;
    margin-top: 3vh;
    padding-right: 2vw;
    text-decoration: underline;
    text-decoration-color: #303f9f;
    text-decoration-style: solid;
  }

  .form-control {
    font-size: 12px;
    height: 25px;
    margin: 20px auto;
    width: 70%;
    padding: 10px;
    @include box-sizing(border-box);
    z-index: 2;
    border-radius: 4px ;
  }

  button{
    margin: 10px 0;
    border-radius: 4px;
    background-color: rgb(48, 63, 159);
    color: white;
    width: 104px;
    height: 34px;
  }
  button:hover {
    background-color: rgb(48, 63, 159, 0.9);
    color: white;
  }

</style>
