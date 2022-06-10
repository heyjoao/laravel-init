/* -------- VENDOR -------- */

import "../scss/style.scss";
import "../../vendor/js/vendor";

/* -------- END VENDOR -------- */

/* -------- MAIN -------- */

console.log("teste");

/* -------- END MAIN -------- */

/* -------- HOT RELOAD FOR DEV -------- */

if (process.env.NODE_ENV === "development" && module.hot) {
    module.hot.accept();
}

/* -------- END HOT RELOAD FOR DEV -------- */
