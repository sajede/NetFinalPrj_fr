<template>
  <div class="main">
    <div class="form font" style="margin-bottom: 25px">
      <div class="col-md-6" style="margin-right: 3%; margin-top: 30px; clear: both; margin-bottom: 10px">
        <div class="column1-row1">
          <h6 class="case-title">موضوع:</h6>
          <h4 class="case-subtitle">درخواست</h4>
        </div>
        <div class="column1-row2" style="position: relative;display: flex;margin-top: 10%;">
          <h6 class="case-title" >کاربر مسئول:</h6>
          <h4 class="case-subtitle">دکتر شمس فرد (رئیس دانشکده)</h4>
        </div>
        <div class="column1-row3" style="position: relative;display: flex;margin-top: 5%;">
          <h6 class="case-title" >تاریخ ثبت:</h6>
          <h4 class="case-subtitle">5 خرداد 1398</h4>
        </div>
      </div>
      <div class="col-md-6" style="margin-right: 1%; margin-top: 26px; ">
        <div class="column2-row1">
          <h6 class="case-title">عنوان:</h6>
          <h4 class="case-subtitle">افزایش ساعت کاری کتابخانه در ایام فرجه</h4>
        </div>
        <div class="column2-row2" style="position: relative;display: flex;margin-top: 10%;">
          <h6 class="case-title" >وضعیت:</h6>
          <h4 class="case-subtitle">باز</h4>
        </div>
        <div class="column2-row3" style="position: relative;display: flex;margin-top: 5%;float: left; margin-left: 27%">
          <a href="#opinion_popup">
            <button class="button2">ثبت رضایت</button>
          </a>
          <button class="button1">مشاهده مورد</button>
        </div>
      </div>
    </div>
    <div id="opinion_popup" class="overlay">
      <div class="popup" >
        <div style="height: 30px;">
          <a class="close" href="#">&times;</a>
        </div>
        <div>
          <p style="text-align: right" class="font">رضایت دارین یا نه ؟</p>
          <div style="display: table;margin: 0 auto">
            <div style="display: flex;">
              <a href="#" class="ravand-peygiri">
                <img class="popup-img " style="flex: 0 0 20%" src="../../assets/img/angry.jpg" />
              </a>
              <a href="#" class="ravand-peygiri">
                <img class="popup-img" style="flex: 0 0 20%" src="../../assets/img/sad.jpg" />
              </a>
              <a href="#" class="ravand-peygiri">
                <img class="popup-img " style="flex: 0 0 20%" src="../../assets/img/poker.jpg" />
              </a>
              <a href="#" class="ravand-peygiri">
                <img class="popup-img " style="flex: 0 0 20%" src="../../assets/img/good.jpg" />
              </a>
              <a href="#" class="ravand-peygiri">
                <img class="popup-img " style="flex: 0 0 20%" src="../../assets/img/nice.jpg" />
              </a>
            </div>

          </div>
        </div>
        <div>
          <p style="text-align: right" class="font">رضایت دارین یا نه ؟</p>
          <div style="display: table;margin: 0 auto">
            <div style="display: flex;">
              <a href="#" class="rezayat">
                <img class="popup-img " style="flex: 0 0 20%" src="../../assets/img/angry.jpg" />
              </a>
              <a href="#" class="rezayat">
                <img class="popup-img" style="flex: 0 0 20%" src="../../assets/img/sad.jpg" />
              </a>
              <a href="#" class="rezayat">
                <img class="popup-img " style="flex: 0 0 20%" src="../../assets/img/poker.jpg" />
              </a>
              <a href="#" class="rezayat">
                <img class="popup-img " style="flex: 0 0 20%" src="../../assets/img/good.jpg" />
              </a>
              <a href="#" class="rezayat">
                <img class="popup-img " style="flex: 0 0 20%" src="../../assets/img/nice.jpg" />
              </a>
            </div>

          </div>
        </div>
        <div style="text-align: center;margin-top: 30px">
          <button class="button1 font" >مشاهده مورد</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ListCase"
    }
</script>

<style scoped>
  .form{
    position: inherit !important;
  }

  .menu_item{
    color: #9b9b9b;
    margin-left: 110px;
  }

  .menu{
    width: 65%;
    margin:0 auto;
  }

  .form{
    position: relative;
    max-width:92%;
    height: auto;
    margin: 0 auto;
    background-color: #fbfbfb;
    border: solid 1px #d9d9d9;;
    border-radius: 1rem;
    z-index: 1;
    display:flex;
    direction: rtl;
    padding-bottom: 20px;
  }

  .case-title{
    font-size: 14px;
    color: #727272;
    float: right;
    margin-right: 5%;
  }

  .case-subtitle{
    font-size: 17px;
    color: #333333;
    float: right;
    margin-right: 5%;
  }

  @media screen and (max-width:728px) {
    .form {
      height: auto;
    }
    .profile-input-1{
      width: 85% !important;
    }
    .case-subtitle{
      font-size: 14px;
    }
    .case-title{
      font-size: 10px;
    }
    .column1-row2{
      position: relative;
      display: inline-flex !important;
      margin-top: auto;
    }
    .column1-row3{
      position: relative;
      display: inline-flex !important;
      margin-top: auto;
    }
    .column2-row1{
      position: relative;
      display: inline-flex !important;
      margin-top: auto;
    }
    .column2-row2{
      position: relative;
      display: inline-flex !important;
      margin-top: auto;
    }
    .column2-row3{
      margin-left: 0px !important;
    }

  }

  .button1{
    width: 102px;
    height: 36px;
    border-radius: 5px;
    background-color: #303f9f;
    color: white;
  }

  .button2{
    width: 102px;
    height: 36px;
    border-radius: 5px;
    background-color: #ffaf20;
    opacity: 0.5;
    color: white;
    margin-left: 5px;
  }

  /* for popup */

  .box {
    width: 40%;
    margin: 0 auto;
    background: rgba(255,255,255,0.2);
    padding: 35px;
    border: 2px solid #fff;
    border-radius: 20px/50px;
    background-clip: padding-box;
    text-align: center;
  }

  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 500ms;
    visibility: hidden;
    opacity: 0;
  }
  .overlay:target {
    visibility: visible;
    opacity: 1;
  }

  .popup {
    margin: 70px auto;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    width: 30%;
    position: relative;
    transition: all 5s ease-in-out;
  }

  .popup .close {
    position: absolute;
    top: 20px;
    right: 30px;
    transition: all 200ms;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
  }
  .popup .close:hover {
    color: #ffaf20;
  }
  .popup .content {
    max-height: 30%;
    overflow: auto;
  }

  @media screen and (max-width: 700px){
    .box{
      width: 70%;
    }
    .popup{
      width: 70%;
    }
  }
  .popup-img{
    opacity: 0.7;
    width: 40px;
    height: 36px;
    padding: 0px 2.5px 0px 2.5px
  }

  .popup-img:hover{
    opacity: 1 !important;
  }
  /* end of popup */
</style>
