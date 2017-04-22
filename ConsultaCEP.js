/**
 * @file Consultor de CEP (JavaScript)
 * @author rique_dev <rique_dev@hotmail.com>
 * @version 1.0
 * @description Simples ferramenta JS para facilitar a busca pela informação de um CEP.<br>Atenção, é necessário ECMAScript 6.
**/

var ConsultaCEP = (function () {
	'use strict';
	
	return new class {
		/**
		 * @constructs ConsultaCEP
		 * @class ConsultaCEP
		*/
		constructor() {
			this.__AL = 'aHR0cHM6Ly92aWFjZXAuY29tLmJyL3dzLw==';
			this.ResponseType = 'json';
			console.log('%cConsultaCEP iniciada com sucesso.\nAcesse meu GitHub -> https://github.com/riquedev (Henrique da Silva Santos)\nDados fornecidos por -> ' + atob(this.__AL), 'background: #222;font-size:15px;color: #bada55');
		}

		get ResponseTypeList() {
			/**
			 * @returns {array} Lista de retornos.
			 * @description Obtem a lista de retornos possíveis.
			*/
			return ['json', 'json/unicode', 'xml', 'piped', 'querty'];
		}

		ConsultarCeps() {
			return new class {
				/**
				 * @constructs ConsultarCEPS
				*/
				
				/**
				 * Retorna a informação do(s) CEP(s) requisitados.
				 * @param {array} arrCeps - Uma lista de CEPs a serem requisitados.
				 * @returns {array} Listagem dos CEPs e suas informações.
				*/
				CEPS(arrCeps) {
					this._cepslist = arrCeps;
					var callback = [];
					for (var item in this._cepslist) {
						var i = this.noSpecial(this.trim(this._cepslist[item]));
						callback.push(this.______REQUESTCEPDATA(i));
					}
					return callback;
				}
				
				/**
				 * Faz trunc numa string.
				 * @param {string} s - Texto qualquer.
				 * @returns {string} Texto truncado.
				*/

				trim(s) {
					var r = /\s/g;
					return s.replace(r, "");
				}
				
				/**
				 * Remove caracteres especiais numa string.
				 * @param {string} s - Texto qualquer.
				 * @returns {string} Texto filtrado.
				*/

				noSpecial(s) {
					var r = /[^\w\s]/gi;
					return s.replace(r, "");
				}
				
				/**
				 * @param {string} data - CEP a ser buscado.
				 * @returns {string} Resposta do Servidor.
				*/

				______REQUESTCEPDATA(data) {
					var tmpUrl = atob(ConsultaCEP.__AL) + '/' + data + '/' + ConsultaCEP.ResponseType;
					var xmlHttp = new XMLHttpRequest();
					xmlHttp.open("GET", tmpUrl, false);
					xmlHttp.send(null);
					return xmlHttp.responseText;
				}
			}
		}
	};
})();
