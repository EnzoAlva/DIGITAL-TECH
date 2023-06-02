if(process.env.NODE_ENV === 'production'&& process.env.npm_config_project !=="ficha_internet_wp" && process.env.npm_config_project !=="ficha_equipos_wp" && process.env.npm_config_project !=="catalogo_equipos_wp") {
    module.exports = {
        plugins: [
            require('postcss-import')(),
            require('postcss-combine-duplicated-selectors')({
                removeDuplicatedProperties: true
            }),
            require('postcss-pxtorem')({
                replace: false
            }),
            require('postcss-uncss')({
                html: ["./dist/*.html"],
                ignore: [
                    /m--loaded/,/dt-button/,/view-bolsas/,/.lq-efooter/,
                    /js--active/,/iframe/,/js--disable/,/.empresas-chatbox__inside__ico--app/,/js--focus/,/js--open/,/js--close/,/loaded/,/slick-current/,/slick-active/,
                    /js--active-mobile/,/m-tab__mobile--inactive/,/m-tab__mobile--active/,/m-modal/,
                    /slick/,/-slide-/,/slick-slide/,/image-entity/,/hidden-dto/,/loading/,/slick-list/,/slick-list/,/slick-arrow/,/slick-next/,/slick-prev/,/slick-dots/,/show/,
                    /mfp/,/mfp-bg/,/mfp-title/,/mfp-arrow-left/,/mfp-arrow-right/,/mfp-zoom-in/,/mfp-iframe-scaler/,/mfp-zoom-out-cur/,/js--hover/,
                    /js--focus/,/error/,/success/,/e-input--has-description--js/,/name_plan_basic/,/e-vas__campaign__info__body/,
                    /e-app-empresas__banner__typing/,/e-campana-bolsas-recargas__slider__slide/,/.e-text--orange/,/.e_product_information/,
                    ,/error/,/animateOpen--js/,/show-menu-vertical--js/,/show-submenu--js/,/arrow_opacity--js/,/no-space/,
                    /e-help-button/,/.bounce-input/,/bounce-input/,/.js-view__content/,/.entel-form__internet-inalambrico__content-hide--active/,
                    // Empresas Ficha Internet
                    /.contado/,/.tooltip__hidden/,/.e_icon_product_detail_internet_movil/,/.e_ficha_internet_icon_conectividad/,/.e_icon_product_detail_internet_movil/,/.hired-tooltip/,/.tooltip__expanded/,/#hired_tooltip/,/.gsuite_info/,/.e_ficha_internet_icon_alto_rendimiento/,/.e_ficha_internet_icon_minutos/,/.e_internet_sms_icon/,/.e_icon_product_detail_velocidad/,/.e_icon_product_detail_minutos_ilimitados/,/.box-icon/,//
                    /.e_icon_product_detail_velocidad_constante/,/.e_icon_product_detail_central_telefonica_virtual/,/slider__iplan--item/,
                    /.e_icon_product_detail_herramienta_monitoreo/,/.e_icon_product_detail_ip_fija/,/.e_icon_product_detail_datos/,
                    /.e_icon_product_detail_conexion_simultanea/,/.e_icon_product_detail_velocidad_simetrica/,/.e_icon_product_detail_solo_ruc20/,
                    /.e_prices__content__amount/,/span/,/.e-link__underline--animate/,/#departamento_list/,/#distrito_list/,
                    // Empresas Ficha Planes
                    /e-input--select--js/,/#ui-datepicker-div/,/.ui-datepicker/,/ui-datepicker/,/.ui-datepicker-multi/,
                    /.ui-datepicker-row-break/,/.e-button--disabled/,/.e-box-inline-block--bottom/,
                    /.ui-datepicker-rtl/,/e-box-form__plan/,/e-box-plan__link/,
                    /.ui-datepicker-cover/,/.e-link-lo-quiero__mobile/,/e-text--dark-blue/,
                    /.ui-widget/,/.variante_a/,
                    /.ui-datepicker/,
                    /.ui-widget-content/,
                    /.ui-widget-header/,
                    /.ui-state-default/,
                    /e-slider__product-img--item/,/media-left/,/item-beneficios-item-img/,/espacio-especificaciones/,/.media/,
                    /.ui-state-hover/,
                    /.ui-state-active/,
                    /.ui-state-highlight/,
                    /.ui-state-error/,
                    /.ui-widget-overlay/,
                    /.ui-widget-shadow/,
                    /.e-input-schedule/,/box-details__title/, /especificacion_sistema/,
                    // Empresas Home
                    /entel-body/,/e-empresas__notify-app/,/autoComplete/,/autocomplete_list/,/css--active/,
                    // Empresas Equipos
                    /e-catalog-equipment/,/.e-input--radio/,/entel-activo/,
                    /.e-box-table-ls/,/.e-box-table--middle-ls/,/.e-box-table/,/.e-box-table--middle/,/.e-box-table--auto/,/.e-box-table--margin-auto/,
                    /.e-inline-block/,/.e-box-inline-block-ts/,/e-box-inline-block--clear-tm/,/.e-block-tm/,/.e-box-table-tm/,/.e-box-table--middle-tm/,
                    // Select, filter
                    /choices/,/e-filter/,/js--select/,
                    // Personas Promociones
                    /_promotions-box_item-open/,/arrow-up/,/--is-persons/,
                    // Personas Home
                    /js--animation/,/slider-planesmovil_item/,/item-box/,/entel__slider--custom-home-navigation__item/,/line__timer/,/entel-inboundweb/,/lq-efooter__util/,
                    /e--prom/,/entel-notify__main/,/entel-notify__content/,/contact/,/entel-notify__close/,/lq-esearch__input/,
                    /_promotions-box_item-open/,/arrow-up/,/lq-enav__user/,/.lq-eheader .lq-container_menu .lq-enav .lq-enav__primary ul.lq-emenu.lq-emenu__primary>li a/,/.lq-eheader .lq-container_menu .lq-enav .lq-enav__primary ul.lq-emenu.lq-emenu__primary>li a/,
                    /active/,
                    // Personas consulta delivery
                    /widget/,/logo/,/form-footer/,/form-input/,/text_input/,/submit/,/e-button--secondary/,
                    // chosen
                    /chosen-container/,/chosen-drop/,/chosen-with-drop/,/search-choice/,/group-name/,/chosen-container-single/,/chosen-default/,/chosen-single-with-deselect/,/chosen-disabled/,/chosen-single/,/chosen-search/,/chosen-container-single-nosearch/,/chosen-results/,/active-result/,/disabled-result/,/highlighted/,/no-results/,/group-result/,/group-option/,/chosen-container-multi/,/chosen-choices/,/search-field/,/search-choice-close/,/search-choice-disabled/,/search-choice-focus/,/result-selected/,/chosen-container-active/,/chosen-rtl/,/a/,/small/,/e-fuga-fairuse-page_benefits/,/e-link__anchor/,
                    //btn app
                    /e-close/,
                    //ganadores
                    /zoom-in/,
                    //roaming
                    /disponible/,/no-disponible/,/no_result/,/slick-arrow/

                ]
            }),
            require('postcss-preset-env')(
                {
                    browsers: ['last 4 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
                }
            ),
            require('cssnano')(),
        ]
    }
} else{
    module.exports = {
        plugins: [
            require('postcss-import')(),
        ],
    };
}