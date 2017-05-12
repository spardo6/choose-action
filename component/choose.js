window.app = window.app || {}; // Objeto general

/**
 * CHOOSE ACTION
 * Seleccionar una acción
 * @author Steven Pardo 2017-05-11
 * @required $ {object} jQuery Library
 * @return {object} Objecto para generar una lista de selección
 */
app.Choose = (function () {

	'use strict';
	
	/**
	 * CONSTRUCTOR
	 * @author Steven Pardo 2017-05-11
	 * @param request {array} Arreglo de datos {icon: '<material-icon>', text: '<texto>', value: <value-on-select>}
	 */
	function Choose (request) {
		try {
			if ('object' != typeof request) {
				throw new Error("request parameter is not defined");
			}

			this.__instance__;
			this.__request__ = request;
			this.__component__ = '.app-choose';
			this.__container__ = '.app-choose__container';
			this.__item__ = '.app-choose__item';
			this.__icon__ = '.app-choose__icon > i';
			this.__text__ = '.app-choose__text';

			this.__build__ = this.build(); // Construir el componente
		} catch (e) {
			console.error(e);
		}
	}

	/**
	 * CONSTRUIR EL COMPONENTE
	 * @return {promise}
	 */
	Choose.prototype.build = function () {
		try {
			var Self = this; // Scope

			return new Promise(function (resolve, reject) {
				Self.__instance__ = $(Self.__component__ + '.app-demo').clone().removeClass('app-demo'); // Clon

				for (var i in Self.__request__) {
					var request = Self.__request__[i];

					var item = Self.__instance__.find(Self.__item__ + '.app-demo').clone().removeClass('app-demo hide'); // Clon
					item.find(Self.__icon__).text(request.icon);
					item.find(Self.__text__).text(request.text);
					item.attr('data-id', request.value);
					item.on('click', function () {
						Self.hide();
						resolve($(this).attr('data-id'));
					});
					item.appendTo(Self.__instance__.find(Self.__container__));
				}

				Self.__instance__.find(Self.__item__ + '.app-demo').remove();

				Self.__instance__.find(Self.__container__).on('click', function (e) {
					e.stopPropagation();
				});

				Self.__instance__.on('click', function () {
					Self.hide();
					reject();
				});

				Self.__instance__.appendTo('body'); // Agrega el componente
				
			});
		} catch (e) {
			console.error(e);
		}
	}

	/**
	 * MOSTRAR EL COMPONENTE
	 * @author Steven Pardo 2017-05-11
	 * @return {object} Scope
	 */
	Choose.prototype.show = function () {
		try {
			this.__instance__.removeClass('hide');
			new app.Fx(this.__instance__).fadeIn();
			return this;
		} catch (e) {
			console.error(e);
		}
	}

	Choose.prototype.hide = function () {
		try {
			new app.Fx(this.__instance__).fadeOut(function () {
				this.__instance__.addClass('hide');
			});
		} catch (e) {
			console.error(e);
		}
	}

	/**
	 * EVENTO
	 * @author Steven Pardo
	 * @return {promise}
	 */
	Choose.prototype.on = function () {
		try {
			return this.__build__;
		} catch (e) {
			console.error(e);
		}
	}

	return Choose; // Objeto
})();