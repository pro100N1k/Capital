import { detectBrowser } from './_helpers';

import '../../node_modules/select2/dist/js/select2.min';
import '@fancyapps/fancybox';
import 'slick-carousel';
import './_news';
class Application {
    constructor() {
        Application.init();
    }

    static initializePlugins() {
        // INIT YOUR PLUGINS
        $(window).on('load',function() {
            $('.cooperation-item-text').slideUp();
            $('section').each(function() {
                const _this = $(this);
                const data = _this.attr('data-title');
                const title = _this.find('.data-section-title');
                title.html(data);
            });
        });
        $('.fancybox').fancybox();
        $('.fancy-link').on('click',function() {
            const _this = $(this);
            const wrapper = _this.closest('.path-step');
            const text = wrapper.find('.path-step__text').html();
            const title = wrapper.find('.path-step-head__title').html();
            const counter = wrapper.find('.path-step-head__counter').html();

            console.log(counter);
            const modal = $('.modal-path');
            const textWrapper = modal.find('.modal-body__text');
            const titleWrapper = modal.find('.modal-header__title');
            const counterWrapper = modal.find('.modal-header__counter');

            titleWrapper.html(title);
            textWrapper.html(text);
            counterWrapper.html(counter);
            console.log(title);
        });

        $(document).ready(function() {
            $('.js-example-basic-single').select2({
                minimumResultsForSearch: -1
            });

            const wrapper = $('.roadmap-slider');
            const slick = wrapper.find('.slick-slide');
            const slide = slick.closest('.roadmap-slider-item');
            const data = slick.attr('aria-hidden');

            slick.each(function() {
                if($(this).attr('aria-hidden') == "true") {
                    $(this).css('opacity','0.5');
                } else {
                    $(this).css('opacity','1');
                }
            });
        });

        $('.roadmap-slider').on('afterChange', function(event,  currentSlide, nextSlide){
            const wrapper = $('.roadmap-slider');
            const slick = wrapper.find('.slick-slide');
            const slide = slick.closest('.roadmap-slider-item');
            const data = slick.attr('aria-hidden');

            slick.each(function() {
                if($(this).attr('aria-hidden') == "true") {
                    $(this).css('opacity','0.5');
                } else {
                    $(this).css('opacity','1');
                }
            });
        });

        $('.plan-card-info__btn a').on('click', function (e) {
            e.preventDefault();
            let thsVal = $(this).attr('data-plan');
            const formSelector = $('.input-wrapper-select'),
                _select = formSelector.find('.js-example-basic-single').select2({
                    minimumResultsForSearch: -1,
                });

            _select.val(thsVal).trigger("change");

            let id  = $(this).attr('href'),
                top = $(id).offset().top;

            $('body,html').animate({scrollTop: top}, 1500);
        });

        $('.menu-bar').on('click', function() {
            $('.header-menu').slideToggle(500);
            if($(this).is('.active:not(.back)')) {
                $(this).addClass('back');
            } else if ($(this).is('.back')) {
                $(this).removeClass('back');

            } else {
                $(this).addClass('active');
            }
        });

        $(document).mouseup(function (e) {
            const Div = $('.sublist, .menu-bar');
            const menu = $('.menu-bar');

            if (!Div.is(e.target) && Div.has(e.target).length === 0) {
                Div.removeClass('sublist-active');
                // menu.removeClass('active');
                if(menu.is('.active')) {
                    menu.addClass('back');
                } else if (menu.is('.back')) {
                    menu.removeClass('back');
                } else {
                    menu.addClass('active');
                }
            }
        });

        $('.cooperation-item-title').on('click', function() {
            const _button = $(this);
            const tabID = _button.attr("data-text");
            const text = $('.cooperation-item-text[data-text="' + tabID + '"]');

            if (_button.hasClass('cooperation-item-title-active')) {
                text.slideUp();
                _button.removeClass('cooperation-item-title-active');
                return false;
            };

            $('.cooperation-item-title').removeClass('cooperation-item-title-active');
            $('.cooperation-item-text').slideUp();
            _button.addClass('cooperation-item-title-active');
            text.slideToggle();

        });

     
        $(document).mouseup(function (e) {
            const Div = $('.path-step');
            const text = $('.path-step__text');

            if (!Div.is(e.target) && Div.has(e.target).length === 0) {
                Div.removeClass('path-step--open');
                text.removeClass('path-step__text--open');
            }
        });
    };

    static initializeModules() {
        // INIT YOUR MODULES
    };

    static detectBrowser() {
        document.body.setAttribute('data-browser', detectBrowser());
    }

    static init() {
        this.detectBrowser();
        this.initializePlugins();
        this.initializeModules();
    }
};

const App = new Application();