document.addEventListener("DOMContentLoaded", function () {
  var openModalButtons = document.querySelectorAll(".open-modal-btn");

  // 获取弹窗
  var modal = document.getElementById("myModal");
  // 打开弹窗的按钮对象
  var btn_cancel = document.getElementById("btn_cancel");
  // 链接
  var btn_enter = document.getElementById("btn_enter");

  // 获取 <span> 元素，用于关闭弹窗
  var span = document.querySelector(".close");

  openModalButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      modal.style.display = "block";
      var modalTitle = this.getAttribute("data-modal-content");
      var modalTitleElement = document.querySelector(".modal-title");
      modalTitleElement.textContent = "开始第" + modalTitle + "关！" 
    });
  });

  // 点击取消 / 点击 <span> (x) / 在用户点击其他地方时, 关闭弹窗
  btn_cancel.onclick = function () {
    modal.style.display = "none";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  btn_enter.onclick = function(){
    var url = "eg.html";
    window.location.href = url;
  }
});
