$(document).ready(function(){

	    // Создаем переменые для кнопки и для меню
		var navToggleButton = $("#header__button");
		var navToggleIcon = $("#header__button .fa");
		var navBlock = $(".header__list");
		var navBlockOpen = "header__list--open";
		var navlink = $(".header__list a");
		// var iconNav = 'fa-bars';
		// var iconClose = 'fa-times';

		// Собития по клико на иконку навигаций
			$(navToggleButton).on("click", function(e){
				e.preventDefault();
				
		  // Добавляем модификатор --open
		  $(navBlock).toggleClass(navBlockOpen);
				navButtonToggle();
			})

		// Собития по клико на ссылки в навигационном меню
			navlink.on('click', function() {

			if (navBlock.hasClass(navBlockOpen)) {
				navButtonToggle();
			}
				navBlock.removeClass(navBlockOpen);
		})
			
		// Функция для анимация иконки 
			function navButtonToggle(){
				if (navToggleButton.hasClass("active")) {
				  navToggleButton.removeClass("active");
				} else {
				  navToggleButton.addClass("active");
				}
			}
		});