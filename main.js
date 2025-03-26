let video = document.getElementById("first_video");
video.onended = function () {
  video.play();
};

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".Hr, .Hl"); // Chọn tất cả phần tử có Hr hoặc Hl

  const observerOptions = {
    root: null, // Quan sát dựa trên viewport
    rootMargin: "0px", // Không có lề mở rộng
    threshold: 0.2, // Khi 20% phần tử xuất hiện trong viewport thì kích hoạt
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show"); // Thêm class "show" để hiển thị
        observer.unobserve(entry.target); // Ngừng quan sát để tránh chạy lại
      }
    });
  }, observerOptions);

  elements.forEach((el) => observer.observe(el));
});
