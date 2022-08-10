const s0101_hamburger_id = document.querySelectorAll(".s0101_hamburger_id");
const s0101_sidebar_main_wrapper = document.querySelector(".s0101_sidebar_main_wrapper");
const closeSidebar = document.querySelector(".s0101_sidebar_close_btn");
const s0101_search_result_main_wrapper = document.querySelector(".s0101_search_result_main_wrapper");
const s0101_popup_close_btn = document.querySelector(".s0101_popup_close_btn");
for (singleHamburger of s0101_hamburger_id) {
    singleHamburger.addEventListener('click', function () {
        s0101_sidebar_main_wrapper.classList.add("s0101_open_sidebar");
    });
};
closeSidebar.addEventListener('click', function () {
    s0101_sidebar_main_wrapper.classList.remove("s0101_open_sidebar");
});

const s0101_search_icon_id = document.getElementById("s0101_search_icon_id");
s0101_search_icon_id.addEventListener("click", function () {
    s0101_search_result_main_wrapper.classList.add("s0101_active_search_popup");
});
s0101_popup_close_btn.addEventListener("click", function () {
    s0101_search_result_main_wrapper.classList.remove("s0101_active_search_popup");
})