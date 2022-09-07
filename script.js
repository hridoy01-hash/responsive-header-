(async function () {

    function sidebarEvent() {
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
        });
    }
    sidebarEvent();

    function menuItemActive() {

        const menuItems = document.querySelectorAll(".s0101_header_menu_list_item_common ");
        for (let i = 0; i < menuItems.length; i++) {
            const element = menuItems[i];
            element.addEventListener("click", function () {
                removeActiveFill();
                element.classList.add("s0101_active_fill");
            });

        };

    }
    menuItemActive();

    function removeActiveFill() {
        const removeItems = document.querySelectorAll(".s0101_header_menu_list_item_common ");
        for (let i = 0; i < removeItems.length; i++) {
            const element = removeItems[i];
            element.classList.contains("s0101_active_fill") && element.classList.remove("s0101_active_fill");
        };
    }


    function mobileActiveMenu() {
        const mobileMenuItem = document.querySelectorAll(".s0101_mobile_menu_list_item ");
        for (let i = 0; i < mobileMenuItem.length; i++) {
            const element = mobileMenuItem[i];
            element.addEventListener("click", function () {
                removeMobileActiveMenu();
                element.classList.add("s0101_active_fill");
                element.classList.contains("s0101_active_fill") && element.classList.remove("s0101_mobile_icon_notification_add");
            });

        }
    }
    mobileActiveMenu();

    function removeMobileActiveMenu() {
        const mobileMenuItem = document.querySelectorAll(".s0101_mobile_menu_list_item ");
        for (let i = 0; i < mobileMenuItem.length; i++) {
            const element = mobileMenuItem[i];
            element.classList.contains("s0101_active_fill") && element.classList.remove("s0101_active_fill")
        }
    }

})();