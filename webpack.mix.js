let domainDev = "dev.laravel";

let mix = require("laravel-mix");
const mixBlade = require("laravel-mix-blade-reload");
require("laravel-mix-simple-image-processing");

const pathResource = "resources";
const pathPublic = "./public/assets";

mix.options({
    processCssUrls: false,
})
    .js(pathResource + "/assets/js/app.js", pathPublic + "/js/app.js")
    .sass(
        pathResource + "/assets/scss/style.scss",
        pathPublic + "/css/style.css"
    )
    .sourceMaps()
    .webpackConfig((webpack) => {
        return {
            plugins: [
                new webpack.ProvidePlugin({
                    $: "jquery/src/jquery",
                    jQuery: "jquery/src/jquery",
                    Popper: ["popper.js", "default"],
                }),
            ],
        };
    })
    .imgs({
        source: pathResource + "/assets/img",
        destination: pathPublic + "/img",
        webp: false,
        imageminWebpOptions: { quality: 75 },
    })
    .version(pathPublic + "/img")
    .copyDirectory(pathResource + "/assets/fonts", pathPublic + "/fonts")
    .bladeReload({
        path: pathResource + "/views/*.blade.php",
        debug: false,
    })
    .browserSync(domainDev);
