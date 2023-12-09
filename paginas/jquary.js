/*!
 * Biblioteca JavaScript jQuery v3.7.0 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr ,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/animatedSelector,-effects/Tween
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation e outros colaboradores
 * Lançado sob a licença MIT
 * https://jquery.org/license
 *
 * Data: 2023-05-11T18:29Z
 */
(função(global, fábrica) {

	"use estrito";

	if ( tipo de módulo === "objeto" && tipo de módulo.exports === "objeto" ) {

		// Para ambientes CommonJS e do tipo CommonJS, onde uma `janela` adequada
		// está presente, execute a fábrica e obtenha jQuery.
		// Para ambientes que não possuem `window` com `document`
		// (como Node.js), exponha uma fábrica como module.exports.
		// Isso acentua a necessidade da criação de uma `janela` real.
		// por exemplo var jQuery = require("jquery")(window);
		// Veja ticket trac-14549 para mais informações.
		module.exports = global.document ?
			fábrica (global, verdadeiro):
			function( w ) {
				if (!w.documento) {
					throw new Error("jQuery requer uma janela com um documento");
				}
				retornar fábrica( w );
			};
	} outro {
		fábrica (global);
	}

// Passe isso se a janela ainda não estiver definida
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// lança exceções quando código não estrito (por exemplo, ASP.NET 4.5) acessa o modo estrito
// argumentos.callee.caller (trac-13335). Mas a partir do jQuery 3.0 (2016), o modo estrito deve ser comum
// o suficiente para que todas essas tentativas sejam protegidas em um bloco try.
"use estrito";

var arr = [];

var getProto = Object.getPrototypeOf;

var fatia = arr.fatia;

var flat = arr.flat ? function(matriz) {
	return arr.flat.call(array);
} : função( matriz ) {
	return arr.concat.apply([], array);
};


var push = arr.push;

var indexOf = arr.indexOf;

var classe2tipo = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var suporte = {};

var isFunction = function isFunction( obj ) {

		// Suporte: Chrome <=57, Firefox <=52
		// Em alguns navegadores, typeof retorna "função" para elementos HTML <object>
		// (ou seja, `typeof document.createElement( "object" ) === "function"`).
		// Não queremos classificar *qualquer* nó DOM como uma função.
		// Suporte: QtWeb <=3.8.5, WebKit <=534.34, ferramenta wkhtmltopdf <=0.12.5
		// Além disso, para WebKit antigo, typeof retorna "função" para coleções HTML
		// (por exemplo, `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "função" && typeof obj.nodeType !== "número" &&
			typeof obj.item !== "função";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var documento = janela.documento;



	var preservadoScriptAttributes = {
		tipo: verdadeiro,
		src: verdadeiro,
		nonce: verdadeiro,
		noModule: verdadeiro
	};

	função DOMEval( código, nó, doc ) {
		documento = documento || documento;

		var i, val,
			script = doc.createElement( "script" );

		script.text = código;
		if (nó) {
			for (i em preserveScriptAttributes) {

				// Suporte: Firefox 64+, Edge 18+
				// Alguns navegadores não suportam a propriedade "nonce" em scripts.
				// Por outro lado, apenas usar `getAttribute` não é suficiente, pois
				// o atributo `nonce` é redefinido para uma string vazia sempre que
				// torna-se conectado ao contexto de navegação.
				// Veja https://github.com/whatwg/html/issues/2369
				// Consulte https://html.spec.whatwg.org/#nonce-attributes
				// A verificação `node.getAttribute` foi adicionada para fins de
				// `jQuery.globalEval` para que possa falsificar um nó não contendo
				// por meio de um objeto.
				val = nó[i] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Suporte: Android <=2.3 apenas (regExp funcional)
	return typeof obj === "objeto" || typeof obj === "função" ?
		class2type[ toString.call( obj ) ] || "objeto":
		tipo de obj;
}
/* Símbolo global */
// Definir esse global em .eslintrc.json criaria o perigo de usar o global
// desprotegido em outro lugar, parece mais seguro definir global apenas para este módulo



var version = "3.7.0 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr ,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/animatedSelector,-effects/Tween",

	rhtmlSufixo = /HTML$/i,

	// Definir uma cópia local do jQuery
	jQuery = function(seletor, contexto) {

		// O objeto jQuery é na verdade apenas o construtor init 'aprimorado'
		// Precisa de init se o jQuery for chamado (apenas permite que o erro seja lançado se não for incluído)
		return new jQuery.fn.init( seletor, contexto );
	};

jQuery.fn = jQuery.prototype = {

	// A versão atual do jQuery sendo usada
	jquery: versão,

	construtor: jQuery,

	// O comprimento padrão de um objeto jQuery é 0
	comprimento: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Obtém o N-ésimo elemento no conjunto de elementos correspondentes OU
	// Obtém todo o elemento correspondente definido como um array limpo
	obter: function( num ) {

		// Retorna todos os elementos em um array limpo
		if ( num == null ) {
			return slice.call( this );
		}

		// Retorna apenas um elemento do conjunto
		retorna num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Pega um array de elementos e coloca na pilha
	// (retornando o novo conjunto de elementos correspondentes)
	pushStack: function(elems) {

		// Construir um novo conjunto de elementos correspondentes jQuery
		var ret = jQuery.merge( this.constructor(), elems );

		// Adiciona o objeto antigo na pilha (como referência)
		ret.prevObject = this;

		// Retorna o conjunto de elementos recém-formado
		retorno ret;
	},

	// Executa um retorno de chamada para cada elemento no conjunto correspondente.
	cada: função( retorno de chamada ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call(elem, i, elem);
		} ) );
	},

	fatia: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	primeiro: function() {
		return this.eq( 0 );
	},

	último: function() {
		return this.eq( -1 );
	},

	função par() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			retorno ( i + 1 ) % 2;
		} ) );
	},

	Função estranha() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			retornar i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	fim: função() {
		return this.prevObject || this.construtor();
	},

	// Apenas para uso interno.
	// Comporta-se como um método de Array, não como um método jQuery.
	empurre empurre,
	sort: arr.sort,
	emenda: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var opções, nome, origem, cópia, copyIsArray, clone,
		alvo = argumentos[ 0 ] || {},
		eu = 1,
		comprimento = argumentos.comprimento,
		profundo = falso;

	// Lida com uma situação de cópia profunda
	if (tipo de alvo === "booleano" ) {
		profundo = alvo;

		// Ignora o booleano e o alvo
		alvo = argumentos[i] || {};
		i++;
	}

	// Trata caso quando o alvo é uma string ou algo assim (possível em deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		destino = {};
	}

	// Estende o próprio jQuery se apenas um argumento for passado
	if ( i === comprimento ) {
		alvo = este;
		eu--;
	}

	for ( ; i < comprimento; i++ ) {

		// Só lida com valores não nulos/indefinidos
		if (( opções = argumentos[ i ] ) != nulo ) {

			// Estende o objeto base
			for (nome nas opções) {
				copiar = opções[nome];

				// Impede a poluição do Object.prototype
				// Prevenir loop sem fim
				if ( nome === "__proto__" || destino === copiar ) {
					continuar;
				}

				// Recurse se estivermos mesclando objetos simples ou arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					(copyIsArray = Array.isArray(cópia)))) {
					src = destino[nome];

					// Garanta o tipo adequado para o valor de origem
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if (!copyIsArray && !jQuery.isPlainObject(src)) {
						clone = {};
					} outro {
						clone = src;
					}
					copyIsArray = false;

					// Nunca mova objetos originais, clone-os
					target[ nome ] = jQuery.extend( deep, clone, copy );

				// Não traz valores indefinidos
				} else if (copiar!== indefinido) {
					alvo[nome] = copiar;
				}
			}
		}
	}

	// Retorna o objeto modificado
	destino de retorno;
};

jQuery.extend( {

	// Único para cada cópia do jQuery na página
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Supõe que o jQuery está pronto sem o módulo pronto
	isReady: verdadeiro,

	erro: function(mensagem) {
		lançar novo erro (msg);
	},

	noop: função() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detecta negativos óbvios
		// Use toString em vez de jQuery.type para capturar objetos de host
		if (!obj || toString.call(obj) !== "[objeto Objeto]" ) {
			retorna falso;
		}

		proto = getProto(obj);

		// Objetos sem protótipo (por exemplo, `Object.create( null )`) são simples
		if ( !proto ) {
			retornar verdadeiro;
		}

		// Objetos com protótipo são simples se forem construídos por uma função Object global
		Ctor = hasOwn.call( proto, "construtor" ) && proto.constructor;
		return typeof Ctor === "função" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var nome;

		for (nome em obj) {
			retorna falso;
		}
		retornar verdadeiro;
	},

	// Avalia um script em um contexto fornecido; cai de volta para o global
	// se não especificado.
	globalEval: function( código, opções, doc ) {
		DOMEval( código, { nonce: opções && opções.nonce }, doc );
	},

	cada: function( obj, callback ) {
		var comprimento, i = 0;

		if (isArrayLike(obj)) {
			comprimento = obj.comprimento;
			for ( ; i < comprimento; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					quebrar;
				}
			}
		} outro {
			for ( i em obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					quebrar;
				}
			}
		}

		retornar obj;
	},


	// Recupera o valor de texto de um array de nodos DOM
	texto: function(elem) {
		nó var,
			ret = "",
			eu = 0,
			nodeType = elem.nodeType;

		if (!nodeType) {

			// Se não houver nodeType, espera-se que seja um array
			while ((nó = elem[i++])) {

				// Não percorre nós de comentário
				ret += jQuery.text( nó );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			return elem.textContent;
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}

		// Não inclua comentários ou nós de instruções de processamento

		retorno ret;
	},

	// os resultados são apenas para uso interno
	makeArray: function( arr, resultados ) {
		var ret = resultados || [];

		if ( arr != nulo ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[arr]: arr
				);
			} outro {
				push.call( ret, arr );
			}
		}

		retorno ret;
	},

	inArray: function(elem, arr, i) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	isXMLDoc: function(elem) {
		var namespace = elem && elem.namespaceURI,
			docElem = elem && ( elem.ownerDocument || elem ).documentElement;

		// Assume HTML quando documentElement ainda não existe, como dentro
		// fragmentos de documento.
		return !rhtmlSuffix.test( namespace || docElem && docElem.nodeName || "HTML" );
	},

	// Suporte: Android <=4.0 apenas, PhantomJS 1 apenas
	// push.apply(_, arraylike) lança no antigo WebKit
	mesclar: função (primeiro, segundo) {
		var len = +segundo.comprimento,
			j = 0,
			i = primeiro.comprimento;

		for ( ; j < len; j++ ) {
			primeiro[i++] = segundo[j];
		}

		primeiro.comprimento = i;

		retorne primeiro;
	},

	grep: function(elems, callback, inverter) {
		var callbackInverse,
			partidas = [],
			eu = 0,
			comprimento = elementos.comprimento,
			callbackExpect = !invert;

		// Percorre o array, salvando apenas os itens
		// que passa a função do validador
		for ( ; i < comprimento; i++ ) {
			callbackInverse = !callback(elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matchs.push(elems[ i ] );
			}
		}

		partidas de retorno;
	},

	// arg é apenas para uso interno
	map: function(elems, callback, arg) {
		var comprimento, valor,
			eu = 0,
			ret = [];

		// Percorre o array, traduzindo cada um dos itens para seus novos valores
		if (isArrayLike(elems)) {
			comprimento = elems.comprimento;
			for ( ; i < comprimento; i++ ) {
				value = callback(elems[ i ], i, arg );

				if ( valor != nulo ) {
					ret.push( valor );
				}
			}

		// Percorre todas as chaves do objeto,
		} outro {
			for ( i em elementos ) {
				value = callback(elems[ i ], i, arg );

				if ( valor != nulo ) {
					ret.push( valor );
				}
			}
		}

		// Achata quaisquer arrays aninhados
		retornar plano( ret );
	},

	// Um ​​contador GUID global para objetos
	guia: 1,

	// jQuery.support não é usado no Core, mas outros projetos anexam seus
	// propriedades para ele, então ele precisa existir.
	suporte: suporte
} );

if (tipo de Símbolo === "função" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Preenche o mapa class2type
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, nome ) {
		class2type[ "[objeto " + nome + "]" ] = nome.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Suporte: somente iOS 8.2 real (não reproduzível no simulador)
	// verificação `in` usada para evitar erro JIT (gh-2145)
	// hasOwn não é usado aqui devido a falsos negativos
	// referente ao tamanho da lista de nós no IE
	var length = !!obj && "comprimento" in obj && obj.length,
		tipo = toType(obj);

	if ( isFunction( obj ) || isWindow( obj ) ) {
		retorna falso;
	}

	tipo de retorno === "array" || comprimento === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}


function nodeName(elem, name) {

	return elem.nodeName && elem.nodeName.toLowerCase() === nome.toLowerCase();

}
var pop = arr.pop;


var sort = arr.sort;


var emenda = arr. emenda;


var whitespace = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = new RegExp(
	"^" + espaço em branco + "+|((?:^|[^\\\\])(?:\\\\.)*)" + espaço em branco + "+$",
	"g"
);




// Nota: um elemento não contém a si mesmo
jQuery.contains = function( a, b ) {
	var bup = b && b.parentNode;

	retornar um === bup || !!( bup && bup.nodeType === 1 && (

		// Suporte: IE 9 - 11+
		// IE não tem `contém` em SVG.
		a.contém ?
			a.contém( bup ):
			a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
	) );
};




// Serialização de string/identificador CSS
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

function fcssescape( ch, asCodePoint ) {
	if (asCodePoint) {

		// U+0000 NULL torna-se U+FFFD SUBSTITUIÇÃO CARACTER
		if ( ch === "\0" ) {
			retornar "\uFFFD";
		}

		// Caracteres de controle e (dependendo da posição) números são escapados como pontos de código
		return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
	}

	// Outros caracteres ASCII potencialmente especiais recebem escape de barra invertida
	return "\\" + ch;
}

jQuery.escapeSelector = function(sel) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};




var preferidoDoc = documento,
	pushNative = push;

( função() {

var eu,
	Expr,
	contexto mais externo,
	sortInput,
	temDuplicado,
	push = pushNative,

	// vars de documento local
	documento,
	documentElement,
	documentIsHTML,
	rbuggyQSA,
	partidas,

	// Dados específicos da instância
	expando = jQuery.expandindo,
	dirruns = 0,
	feito = 0,
	classeCache = criarCache(),
	tokenCache = criarCache(),
	compiladorCache = criarCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		se (a === b) {
			hasDuplicate = verdadeiro;
		}
		retornar 0;
	},

	booleans = "marcado|selecionado|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|" +
		"loop|múltiplo|aberto|readonly|required|scoped",

	// Expressões regulares

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identificador = "(?:\\\\[\\da-fA-F]{1,6}" + espaço em branco +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Seletores de atributos: https://www.w3.org/TR/selectors/#attribute-selectors
	atributos = "\\[" + espaço em branco + "*(" + identificador + ")(?:" + espaço em branco +

		// Operador (captura 2)
		"*([*^$|!~]?=)" + espaço em branco +

		// "Os valores dos atributos devem ser identificadores CSS [captura 5] ou strings [captura 3 ou captura 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"] )*)\"|(" + identificador + "))|)" +
		espaço em branco + "*\\]",

	pseudos = ":(" + identificador + ")(?:\\((" +

		// Para reduzir o número de seletores que precisam ser tokenizados no preFilter, prefira argumentos:
		// 1. citado (captura 3; captura 4 ou captura 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*) \"|" +

		// 2. simples (captura 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + atributos + ")*)|" +

		// 3. qualquer outra coisa (captura 2)
		".*" +
		")\\)|)",

	// Espaço em branco à esquerda e à direita sem escape, capturando alguns caracteres sem espaço em branco que precedem o último
	rwhitespace = new RegExp(whitespace + "+", "g" ),

	rcomma = new RegExp( "^" + espaço em branco + "*," + espaço em branco + "*" ),
	rleadingCombinator = new RegExp( "^" + espaço em branco + "*([>+~]|" + espaço em branco + ")" +
		espaço em branco + "*" ),
	rdescend = new RegExp(espaço em branco + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identificador + "$" ),

	matchExpr = {
		ID: novo RegExp( "^#(" + identificador + ")" ),
		CLASSE: new RegExp( "^\\.(" + identificador + ")" ),
		TAG: novo RegExp( "^(" + identificador + "|[*])" ),
		ATTR: novo RegExp( "^" + atributos ),
		PSEUDO: novo RegExp( "^" + pseudos ),
		FILHO: novo RegExp(
			"^:(somente|primeiro|último|enésimo|enésimo-último)-(filho|do-tipo)(?:\\(" +
				espaço em branco + "*(par|ímpar|(([+-]|)(\\d*)n|)" + espaço em branco + "*(?:([+-]|)" +
				espaço em branco + "*(\\d+)|))" + espaço em branco + "*\\)|)", "i" ),
		bool: new RegExp( "^(?:" + booleanos + ")$", "i" ),

		// Para uso em bibliotecas implementando .is()
		// Usamos isso para correspondência de PDV em `select`
		needContext: new RegExp( "^" + espaço em branco +
			"*[>+~]|:(par|ímpar|eq|gt|lt|nth|primeiro|último)(?:\\(" + espaço em branco +
			"*((?:-\\d)?\\d*)" + espaço em branco + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	cabeçalho = /^h\d$/i,

	// Seletores de ID ou TAG ou CLASS facilmente analisáveis/recuperáveis
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapa
	// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + espaço em branco +
		"?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		if ( não Hex ) {

			// Retira o prefixo da barra invertida de uma sequência de escape não hexadecimal
			return nonHex;
		}

		// Substitui uma sequência de escape hexadecimal pelo ponto de código Unicode codificado
		// Suporte: IE <=11+
		// Para valores fora do Basic Multilingual Plane (BMP), construa manualmente um
		// par substituto
		retornar alto < 0 ?
			String.fromCharCode(alto + 0x10000):
			String.fromCharCode( alto >> 10 | 0xD800, alto & 0x3FF | 0xDC00 );
	},

	// Usado para iframes; veja `setDocument`.
	// Suporte: IE 9 - 11+, Edge 12 - 18+
	// A remoção do wrapper da função causa uma "Permissão negada"
	// erro no IE/Edge.
	descarregarHandler = function() {
		setDocumento();
	},

	inDisabledFieldset = addCombinator(
		function(elem) {
			return elem.disabled === true && nodeName( elem, "fieldset" );
		},
		{ dir: "parentNode", próximo: "legenda" }
	);

// Suporte: IE <=9 apenas
// Acessando document.activeElement pode lançar inesperadamente
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	tentar {
		return document.activeElement;
	} pegar (err) { }
}

// Otimize para push.apply( _, NodeList )
tentar {
	push.apply(
		(arr = slice.call(preferredDoc.childNodes)),
		preferidoDoc.childNodes
	);

	// Suporte: Android <=4.0
	// Detecta push.apply com falha silenciosa
	// eslint-disable-next-line no-unused-expressions
	arr[preferredDoc.childNodes.length ].nodeType;
} pegar ( e ) {
	empurre = {
		aplicar: function(alvo, els) {
			pushNative.apply(alvo, slice.call(els));
		},
		chamada: function(alvo) {
			pushNative.apply(alvo, slice.call(argumentos, 1));
		}
	};
}

function find(seletor, contexto, resultados, semente) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = contexto && context.ownerDocument,

		// nodeType padrão é 9, já que o padrão do contexto é document
		nodeType = contexto ? context.nodeType : 9;

	resultados = resultados || [];

	// Retorno antecipado de chamadas com seletor ou contexto inválido
	if ( seletor de tipo !== "string" || !seletor ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		resultados de retorno;
	}

	// Tenta encontrar atalhos para operações (ao contrário de filtros) em documentos HTML
	if (!semente) {
		setDocumento(contexto);
		contexto = contexto || documento;

		if ( documentIsHTML ) {

			// Se o seletor for suficientemente simples, tente usar um método DOM "get*By*"
			// (exceto o contexto DocumentFragment, onde os métodos não existem)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// seletor de id
				if ((m = match[1])) {

					// Contexto do documento
					if ( tipo de nó === 9 ) {
						if ((elem = context.getElementById(m))) {

							// Suporte: somente IE 9
							// getElementById pode corresponder elementos por nome em vez de ID
							if (elem.id === m) {
								push.call( resultados, elem );
								resultados de retorno;
							}
						} outro {
							resultados de retorno;
						}

					// Contexto do elemento
					} outro {

						// Suporte: somente IE 9
						// getElementById pode corresponder elementos por nome em vez de ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							find.contains( contexto, elemento ) &&
							elem.id === m ) {

							push.call( resultados, elem );
							resultados de retorno;
						}
					}

				// Seletor de tipo
				} else if (combinar[ 2 ] ) {
					push.apply(resultados, context.getElementsByTagName(seletor));
					resultados de retorno;

				// seletor de classe
				} else if ( ( m = match[ 3 ] ) && context.getElementsByClassName ) {
					push.apply( resultados, context.getElementsByClassName( m ) );
					resultados de retorno;
				}
			}

			// Tira proveito de querySelectorAll
			if (!nonnativeSelectorCache[ seletor + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( seletor ) ) ) {

				novoSeletor = seletor;
				novoContexto = contexto;

				// qSA considera elementos fora de uma raiz de escopo ao avaliar filho ou
				// combinadores descendentes, o que não é o que queremos.
				// Nesses casos, contornamos o comportamento prefixando cada seletor no
				// lista com um seletor de ID referenciando o contexto do escopo.
				// A técnica também deve ser usada quando um combinador principal é usado
				// como tais seletores não são reconhecidos por querySelectorAll.
				// Obrigado a Andrew Dupont por esta técnica.
				if ( tipo de nó === 1 &&
					( rdescend.test( seletor ) || rleadingCombinator.test( seletor ) ) ) {

					// Expandir contexto para seletores irmãos
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						contexto;

					// Podemos usar :scope ao invés do ID hack se o navegador
					// suporta & se não estivermos mudando o contexto.
					// Suporte: IE 11+, Edge 17 - 18+
					// IE/Edge às vezes lança um erro "Permissão negada" quando
					// comparação estrita de dois documentos; comparações rasas funcionam.
					// eslint-disable-next-line eqeqeq
					if ( newContext != contexto || !support.scope ) {

						// Captura o ID de contexto, definindo-o primeiro se necessário
						if ((nid = context.getAttribute("id"))) {
							nid = jQuery.escapeSelector(nid);
						} outro {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefixa cada seletor na lista
					grupos = tokenize(seletor);
					i = grupos.comprimento;
					enquanto eu-- ) {
						grupos[ i ] = ( nid ? "#" + nid: ":scope" ) + " " +
							toSelector(grupos[i]);
					}
					newSelector = groups.join( "," );
				}

				tentar {
					push.apply(resultados,
						newContext.querySelectorAll( newSelector )
					);
					resultados de retorno;
				} catch (qsaError) {
					nonnativeSelectorCache(seletor, true );
				} finalmente {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// Todos os outros
	return select( selector.replace( rtrimCSS, "$1" ), contexto, resultados, semente );
}

/**
 * Crie caches de valor-chave de tamanho limitado
 * @returns {function(string, object)} Retorna os dados do objeto após armazená-lo em si mesmo com
 * nome da propriedade a string (com sufixo de espaço) e (se o cache for maior que Expr.cacheLength)
 * excluindo a entrada mais antiga
 */
função criarCache() {
	var chaves = [];

	função cache(chave, valor) {

		// Use (tecla + " ") para evitar colisão com as propriedades do protótipo nativo
		// (consulte https://github.com/jquery/sizzle/issues/157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Apenas mantém as entradas mais recentes
			excluir cache[ keys.shift() ];
		}
		return (cache[chave + ""] = valor);
	}
	cache de retorno;
}

/**
 * Marque uma função para uso especial pelo módulo seletor jQuery
 * @param {Function} fn A função a ser marcada
 */
função marcaFunção( fn ) {
	fn[ expandido ] = verdadeiro;
	retornar fn;
}

/**
 * Teste de suporte usando um elemento
 * @param {Function} fn Passou o elemento criado e retorna um resultado booleano
 */
função assert( fn ) {
	var el = document.createElement( "fieldset" );

	tentar {
		retornar !!fn(el);
	} pegar ( e ) {
		retorna falso;
	} finalmente {

		// Remove de seu pai por padrão
		if (el.parentNode) {
			el.parentNode.removeChild( el );
		}

		// libera memoria no IE
		el = nulo;
	}
}

/**
 * Retorna uma função para usar em pseudos para tipos de entrada
 * @param {String} tipo
 */
function createInputPseudo( tipo ) {
	return função(elem){
		return nodeName( elem, "input" ) && elem.type === type;
	};
}

/**
 * Retorna uma função para usar em pseudos para botões
 * @param {String} tipo
 */
function createButtonPseudo( tipo ) {
	return função(elem){
		return ( nodeName(elem, "entrada") || nodeName(elem, "botão") ) &&
			elem.type === type;
	};
}

/**
 * Retorna uma função para usar em pseudos para :enabled/:disabled
 * @param {Boolean} desativado verdadeiro para :desativado; falso para: ativado
 */
function createDisabledPseudo(desativado) {

	// Conhecido :disabled falsos positivos: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return função(elem){

		// Somente certos elementos podem corresponder a :enabled ou :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "formulário" no elemento) {

			// Verifique se há deficiência herdada em elementos não desativados relevantes:
			// * elementos associados a formulários listados em um fieldset desabilitado
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * elementos de opção em um optgroup desabilitado
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// Todos esses elementos possuem uma propriedade "form".
			if ( elem.parentNode && elem.disabled === false ) {

				// Elementos de opção adiam para um optgroup pai, se presente
				if ( "rótulo" no elemento) {
					if ( "rótulo" em elem.parentNode ) {
						return elem.parentNode.disabled === desativado;
					} outro {
						return elem.disabled === desativado;
					}
				}

				// Suporte: IE 6 - 11+
				// Use a propriedade de atalho isDisabled para verificar os ancestrais do conjunto de campos desabilitados
				return elem.isDisabled === desativado ||

					// Onde não houver isDisabled, verifique manualmente
					elem.isDisabled !== !disabled &&
						inDisabledFieldset(elem) === desabilitado;
			}

			return elem.disabled === desativado;

		// Tente eliminar os elementos que não podem ser desabilitados antes de confiar na propriedade desabilitada.
		// Algumas vítimas são pegas em nossa rede (label, legend, menu, track), mas não deveria
		// mesmo existe neles, muito menos tem um valor booleano.
		} else if ( "rótulo" em elem ) {
			return elem.disabled === desativado;
		}

		// Os elementos restantes não são nem :enabled nem :disabled
		retorna falso;
	};
}

/**
 * Retorna uma função para usar em pseudos para posicionais
 * @param {Função} fn
 */
função criarPosicionalPseudo( fn ) {
	return markFunction( function( argumento ) {
		argumento = +argumento;
		return markFunction( function( seed, matchs ) {
			var j,
				matchIndexes = fn( [], seed.length, argumento ),
				i = matchIndexes.length;

			// Corresponde aos elementos encontrados nos índices especificados
			enquanto eu-- ) {
				if ( semente [ ( j = matchIndexes [ i ] ) ] ) {
					seed[j] = !(match[j] = seed[j]);
				}
			}
		} );
	} );
}

/**
 * Verifica a validade de um nó como um contexto de seletor jQuery
 * @param {Elemento|Objeto=} contexto
 * @returns {Element|Object|Boolean} O nó de entrada, se aceitável, caso contrário, um valor falso
 */
função testeContext( contexto ) {
	return context && typeof context.getElementsByTagName !== "indefinido" && context;
}

/**
 * Define as variáveis ​​relacionadas ao documento uma vez com base no documento atual
 * @param {Element|Object} [node] Um elemento ou objeto de documento a ser usado para definir o documento
 * @returns {Object} Retorna o documento atual
 */
function setDocument( node ) {
	var subJanela,
		doc = nó ? node.ownerDocument || nó : preferidoDoc;

	// Retorna antecipadamente se o documento for inválido ou já selecionado
	// Suporte: IE 11+, Edge 17 - 18+
	// Às vezes, o IE/Edge lança um erro de "Permissão negada" ao comparar estritamente
	// dois documentos; comparações rasas funcionam.
	// eslint-disable-next-line eqeqeq
	if ( doc == documento || doc.nodeType !== 9 || !doc.documentElement ) {
		documento de devolução;
	}

	// Atualiza variáveis ​​globais
	documento = documento;
	documentElement = document.documentElement;
	documentIsHTML = !jQuery.isXMLDoc(documento);

	// Suporte: apenas iOS 7, IE 9 - 11+
	// Navegadores mais antigos não suportavam `correspondências` sem prefixo.
	partidas = documentElement.matches ||
		documentElement.webkitMatchesSelector ||
		documentElement.msMatchesSelector;

	// Suporte: IE 9 - 11+, Edge 12 - 18+
	// Acessar documentos iframe após o descarregamento gera erros de "permissão negada" (consulte trac-13936)
	// Suporte: IE 11+, Edge 17 - 18+
	// Às vezes, o IE/Edge lança um erro de "Permissão negada" ao comparar estritamente
	// dois documentos; comparações rasas funcionam.
	// eslint-disable-next-line eqeqeq
	if (preferidoDoc != documento &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Suporte: IE 9 - 11+, Edge 12 - 18+
		subWindow.addEventListener( "descarregar", descarregarHandler );
	}

	// Suporte: IE <10
	// Verifica se getElementById retorna elementos pelo nome
	// Os métodos getElementById quebrados não pegam nomes definidos programaticamente,
	// então use um teste getElementsByName indireto
	support.getById = assert( function( el ) {
		documentElement.appendChild( el ).id = jQuery.expando;
		return !document.getElementsByName ||
			!document.getElementsByName( jQuery.expando ).length;
	} );

	// Suporte: somente IE 9
	// Verifica se é possível fazer matchSelector
	// em um nó desconectado.
	support.disconnectedMatch = assert( function( el ) {
		return matchs.call( el, "*" );
	} );

	// Suporte: IE 9 - 11+, Edge 12 - 18+
	// IE/Edge não suporta a pseudoclasse :scope.
	support.scope = assert( function() {
		return document.querySelectorAll( ":scope" );
	} );

	// Suporte: apenas Chrome 105 - 111, Safari 15.4 - 16.3 apenas
	// Certifique-se de que o argumento `:has()` seja analisado impiedosamente.
	// Incluímos `*` no teste para detectar implementações com bugs que são
	// perdoando _seletivamente_ (especificamente quando a lista inclui pelo menos
	// um seletor válido).
	// Observe que tratamos a total falta de suporte para `:has()` como se fosse
	// suporte compatível com especificações, o que é bom porque o uso de `:has()` em tal
	// os ambientes falharão no caminho qSA e retornarão ao jQuery traversal
	// de qualquer forma.
	support.cssHas = assert( function() {
		tentar {
			document.querySelector( ":has(*,:jqfake)" );
			retorna falso;
		} pegar ( e ) {
			retornar verdadeiro;
		}
	} );

	// ID filtra e encontra
	if (suporte.getById) {
		Expr.filter.ID = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return função(elem){
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find.ID = function( id, contexto ) {
			if ( typeof context.getElementById !== "indefinido" && documentIsHTML ) {
				var elem = context.getElementById( id );
				retornar elem? [ elem ] : [];
			}
		};
	} outro {
		Expr.filter.ID = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return função(elem){
				var node = typeof elem.getAttributeNode !== "indefinido" &&
					elem.getAttributeNode("id");
				nó de retorno && node.value === attrId;
			};
		};

		// Suporte: IE 6 - 7 somente
		// getElementById não é confiável como um atalho de busca
		Expr.find.ID = function( id, contexto ) {
			if ( typeof context.getElementById !== "indefinido" && documentIsHTML ) {
				nó var, i, elems,
					elem = context.getElementById(id);

				if (elem) {

					// Verifica o atributo id
					node = elem.getAttributeNode("id");
					if (node ​​&& node.value === id) {
						retornar [elem];
					}

					// Recorre a getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ((elem = elems[i++])) {
						node = elem.getAttributeNode("id");
						if (node ​​&& node.value === id) {
							retornar [elem];
						}
					}
				}

				retornar [];
			}
		};
	}

	// Marcação
	Expr.find.TAG = função( tag, contexto) {
		if ( typeof context.getElementsByTagName !== "indefinido" ) {
			return context.getElementsByTagName( tag );

		// nós DocumentFragment não possuem gEBTN
		} outro {
			return context.querySelectorAll( tag );
		}
	};

	// Aula
	Expr.find.CLASS = function( className, context ) {
		if ( typeof context.getElementsByClassName !== "indefinido" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	-------------------------------------------------- -------------------- */

	// Suporte a QSA e matchSelector

	rbuggyQSA = [];

	// Construir regex QSA
	// Estratégia Regex adotada por Diego Perini
	assert(função(el){

		var entrada;

		documentElement.appendChild( el ).innerHTML =
			"<a id='" + expando + "' href='' disabled='disabled'></a>" +
			"<select id='" + expando + "-\r\\' disabled='disabled'>" +
			"<option selected=''></option></select>";

		// Suporte: iOS <=7 - 8 somente
		// Atributos booleanos e "valor" não são tratados corretamente em alguns documentos XML
		if (!el.querySelectorAll( "[selecionado]" ).length) {
			rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
		}

		// Suporte: iOS <=7 - 8 somente
		if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
			rbuggyQSA.push( "~=" );
		}

		// Suporte: apenas iOS 8
		// https://bugs.webkit.org/show_bug.cgi?id=136851
		// `selector#id sibling-combinator selector` na página falha
		if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
			rbuggyQSA.push( ".#.+[+~]" );
		}

		// Suporte: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// Em alguns tipos de documento, esses seletores não funcionariam nativamente.
		// Isso provavelmente está OK, mas para compatibilidade com versões anteriores, queremos manter
		// manipulando-os através do jQuery traversal no jQuery 3.x.
		if ( !el.querySelectorAll( ":checked" ).length ) {
			rbuggyQSA.push( ":marcado" );
		}

		// Suporte: Aplicativos nativos do Windows 8
		// Os atributos type e name são restritos durante a atribuição .innerHTML
		input = document.createElement( "input" );
		input.setAttribute( "tipo", "oculto" );
		el.appendChild( entrada ).setAttribute( "nome", "D" );

		// Suporte: IE 9 - 11+
		// Seletor :disabled do IE não pega os filhos de fieldsets desabilitados
		// Suporte: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// Em alguns tipos de documento, esses seletores não funcionariam nativamente.
		// Isso provavelmente está OK, mas para compatibilidade com versões anteriores, queremos manter
		// manipulando-os através do jQuery traversal no jQuery 3.x.
		documentElement.appendChild( el ).disabled = true;
		if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
			rbuggyQSA.push( ":ativado", ":desativado" );
		}

		// Suporte: IE 11+, Edge 15 - 18+
		// IE 11/Edge não encontra elementos em uma consulta `[name='']` em alguns casos.
		// Adicionando um atributo temporário ao documento antes que a seleção funcione
		// em torno do problema.
		// Curiosamente, IE 10 e anteriores não parecem ter o problema.
		input = document.createElement( "input" );
		input.setAttribute( "nome", "" );
		el.appendChild( entrada );
		if (!el.querySelectorAll( "[nome='']" ).length) {
			rbuggyQSA.push( "\\[" + espaço em branco + "*nome" + espaço em branco + "*=" +
				espaço em branco + "*(?:''|\"\")" );
		}
	} );

	if (!support.cssHas) {

		// Suporte: Chrome 105 - 110+, Safari 15.4 - 16.3+
		// Nosso mecanismo regular `try-catch` falha ao detectar arquivos não suportados nativamente
		// pseudo-classes dentro de `:has()` (como `:has(:contains("Foo"))`)
		// em navegadores que analisam o argumento `:has()` como uma lista de seletores indulgente.
		// https://drafts.csswg.org/selectors/#relational agora requer o argumento
		// para ser analisado impiedosamente, mas os navegadores ainda não foram totalmente ajustados.
		rbuggyQSA.push( ":tem" );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );

	/* Ordenação
	-------------------------------------------------- -------------------- */

	// Ordenação do documento
	sortOrder = function( a, b ) {

		// Flag para remoção duplicada
		se (a === b) {
			hasDuplicate = verdadeiro;
			retornar 0;
		}

		// Classifica na existência do método se apenas uma entrada tiver compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		se ( comparar ) {
			retornar comparar;
		}

		// Calcula a posição se ambas as entradas pertencerem ao mesmo documento
		// Suporte: IE 11+, Edge 17 - 18+
		// Às vezes, o IE/Edge lança um erro de "Permissão negada" ao comparar estritamente
		// dois documentos; comparações rasas funcionam.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Caso contrário, sabemos que eles estão desconectados
			1;

		// nós desconectados
		if ( comparar & 1 ||
			(!support.sortDetached && b.compareDocumentPosition(a) === compare)) {

			// Escolha o primeiro elemento relacionado ao nosso documento preferido
			// Suporte: IE 11+, Edge 17 - 18+
			// Às vezes, o IE/Edge lança um erro de "Permissão negada" ao comparar estritamente
			// dois documentos; comparações rasas funcionam.
			// eslint-disable-next-line eqeqeq
			if ( um === documento || a.ownerDocument == preferidoDoc &&
				find.contains(preferredDoc, a)) {
				retornar -1;
			}

			// Suporte: IE 11+, Edge 17 - 18+
			// Às vezes, o IE/Edge lança um erro de "Permissão negada" ao comparar estritamente
			// dois documentos; comparações rasas funcionam.
			// eslint-disable-next-line eqeqeq
			if ( b === documento || b.ownerDocument == preferidoDoc &&
				find.contains(preferredDoc, b)) {
				retornar 1;
			}

			// Mantém a ordem original
			return sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		}

		retornar comparar & 4 ? -1:1;
	};

	documento de devolução;
}

find.matches = function( expr, elements ) {
	return find(expr, null, null, elementos);
};

find.matchesSelector = function( elem, expr ) {
	setDocument(elem);

	if (documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyQSA || !rbuggyQSA.test( expr ) ) ) {

		tentar {
			var ret = matchs.call( elem, expr );

			// MatchSelector do IE 9 retorna falso em nós desconectados
			if ( ret || support.disconnectedMatch ||

					// Da mesma forma, nós desconectados estão em um documento
					// fragmento no IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				retorno ret;
			}
		} pegar ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return find(expr, document, null, [elem]).length > 0;
};

find.contains = function( contexto, elemento ) {

	// Definir vars de documento se necessário
	// Suporte: IE 11+, Edge 17 - 18+
	// Às vezes, o IE/Edge lança um erro de "Permissão negada" ao comparar estritamente
	// dois documentos; comparações rasas funcionam.
	// eslint-disable-next-line eqeqeq
	if ((contexto.proprietárioDocumento || contexto) != documento) {
		setDocumento(contexto);
	}
	return jQuery.contains( contexto, elem );
};


find.attr = function(elem, name) {

	// Definir vars de documento se necessário
	// Suporte: IE 11+, Edge 17 - 18+
	// Às vezes, o IE/Edge lança um erro de "Permissão negada" ao comparar estritamente
	// dois documentos; comparações rasas funcionam.
	// eslint-disable-next-line eqeqeq
	if ((elem.ownerDocument || elem) != documento) {
		setDocument(elem);
	}

	var fn = Expr.attrHandle[ nome.toLowerCase() ],

		// Não se deixe enganar pelas propriedades de Object.prototype (consulte trac-13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn(elem, nome, !documentIsHTML):
			indefinido;

	if ( val !== indefinido ) {
		valor de retorno;
	}

	return elem.getAttribute( nome );
};

find.error = function( msg ) {
	throw new Error( "Erro de sintaxe, expressão não reconhecida: " + msg );
};

/**
 * Classificação de documentos e remoção de duplicatas
 * Resultados @param {ArrayLike}
 */
jQuery.uniqueSort = function(resultados) {
	var elem,
		duplicatas = [],
		j = 0,
		i = 0;

	// A menos que *sabemos* que podemos detectar duplicatas, assuma sua presença
	//
	// Suporte: Android <=4.0+
	// O teste para detecção de duplicatas é imprevisível, portanto, assuma que não podemos
	// depende da detecção de duplicatas em todos os navegadores sem classificação estável.
	hasDuplicate = !support.sortStable;
	sortInput = !support.sortStable && slice.call( resultados, 0 );
	sort.call( resultados, sortOrder );

	if (temDuplicado) {
		while ((elem = resultados[i++])){
			if (elem === resultados[ i ] ) {
				j = duplicados.push( i );
			}
		}
		while ( j-- ) {
			splice.call(resultados, duplicados[ j ], 1 );
		}
	}

	// Limpa a entrada após a classificação para liberar os objetos
	// Veja https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	resultados de retorno;
};

jQuery.fn.uniqueSort = function() {
	return this.pushStack(jQuery.uniqueSort(slice.apply(this)));
};

Expr = jQuery.expr = {

	// Pode ser ajustado pelo usuário
	cacheComprimento: 50,

	createPseudo: markFunction,

	correspondência: matchExpr,

	atrHandle: {},

	encontrar: {},

	relativo: {
		">": { dir: "parentNode", primeiro: verdadeiro },
		" ": { dir: "parentNode" },
		"+": { dir: "irmão anterior", primeiro: verdadeiro },
		"~": { dir: "irmão anterior" }
	},

	préFiltro: {
		ATTR: function( corresponder ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move o valor dado para corresponder[3] entre aspas ou sem aspas
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] || match[ 5 ] || "" )
				.replace( runescape, funescape );

			if (combinar[2] === "~=") {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		FILHO: function( corresponder ) {

			/* correspondências de matchExpr["CHILD"]
				1 tipo (somente|nth|...)
				2 o quê (filho | do tipo)
				3 argumentos (par|ímpar|\d*|\d*n([+-]\d+)?|...)
				4 xn-componente do argumento xn+y ([+-]?\d*n|)
				5 sinal de xn-componente
				6 x de xn-componente
				7 sinal do componente y
				8 y do componente y
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requer argumento
				if (!match[ 3 ] ) {
					find.error(match[ 0 ] );
				}

				// Parâmetros numéricos x e y para Expr.filter.CHILD
				// lembre-se que false/true cast respectivamente para 0/1
				correspondência[ 4 ] = +( correspondência[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ):
					2 * ( corresponder[ 3 ] === "par" || corresponder[ 3 ] === "ímpar" )
				);
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

			// outros tipos proíbem argumentos
			} else if (combinar[ 3 ] ) {
				find.error(match[ 0 ] );
			}

			jogo de retorno;
		},

		PSEUDO: function( corresponder ) {
			excesso de var,
				sem aspas = !match[ 6 ] && match[ 2 ];

			if (matchExpr.CHILD.test(match[ 0 ] ) ) {
				retornar nulo;
			}

			// Aceita argumentos entre aspas como estão
			if (combinar[3]) {
				correspondência[ 2 ] = correspondência[ 4 ] || combinar[ 5 ] || "";

			// Retira caracteres em excesso de argumentos sem aspas
			} else if ( sem aspas && rpseudo.test( sem aspas ) &&

				// Obtém o excesso de tokenize (recursivamente)
				(excesso = tokenize(sem aspas, true)) &&

				// avança para o próximo parêntese de fechamento
				( excesso = sem aspas.indexOf( ")", sem aspas.comprimento - excesso ) - sem aspas.comprimento ) ) {

				// excesso é um índice negativo
				match[ 0 ] = match[ 0 ].slice( 0, excesso );
				match[ 2 ] = sem aspas.slice( 0, excesso );
			}

			// Retorna apenas as capturas necessárias para o pseudo método de filtro (tipo e argumento)
			return match.slice( 0, 3 );
		}
	},

	filtro: {

		TAG: function( nodeNameSelector ) {
			var ExpectNodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				função() {
					retornar verdadeiro;
				} :
				function(elem) {
					return nodeName(elem, esperadoNodeNome);
				};
		},

		CLASSE: function(className) {
			var padrão = classCache[ className + " " ];

			padrão de retorno ||
				( padrão = new RegExp( "(^|" + espaço em branco + ")" + className +
					"(" + espaço em branco + "|$)" ) ) &&
				classCache(className, function(elem) {
					return padrão.teste(
						typeof elem.className === "string" && elem.className ||
							typeof elem.getAttribute !== "indefinido" &&
								elem.getAttribute( "classe" ) ||
							""
					);
				} );
		},

		ATTR: function( nome, operador, cheque ) {
			return função(elem){
				var resultado = find.attr(elem, nome);

				if ( resultado == null ) {
					operador de retorno === "!=";
				}
				if (!operador) {
					retornar verdadeiro;
				}

				resultado += "";

				if ( operador === "=" ) {
					resultado de retorno === verificar;
				}
				if ( operador === "!=" ) {
					retorna o resultado !== verifica;
				}
				if (operador === "^=") {
					return check && result.indexOf( check ) === 0;
				}
				if ( operador === "*=" ) {
					return check && result.indexOf( check ) > -1;
				}
				if (operador === "$=") {
					return check && result.slice( -check.length ) === check;
				}
				if ( operador === "~=" ) {
					return( " " + resultado.replace( rwhitespace, " " ) + " " )
						.indexOf( verificar ) > -1;
				}
				if ( operador === "|=" ) {
					resultado de retorno === verificar || result.slice( 0, check.length + 1 ) === check + "-";
				}

				retorna falso;
			};
		},

		FILHO: função( tipo, o quê, _argumento, primeiro, último ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = o que === "do tipo";

			retornar primeiro === 1 && último === 0 ?

				// Atalho para :nth-*(n)
				function(elem) {
					return !!elem.parentNode;
				} :

				function(elem, _context, xml) {
					var cache, outerCache, node, nodeIndex, start,
						dir = simples !== encaminhar ? "nextSibling" : "anteriorSibling",
						pai = elem.parentNode,
						nome = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diferença = falso;

					if (pai) {

						// :(first|last|only)-(child|of-type)
						if ( simples ) {
							enquanto (dir) {
								nó = elem;
								while ((nó = nó[dir])) {
									if (doTipo?
										nodeName( node, name ):
										node.nodeType === 1 ) {

										retorna falso;
									}
								}

								// Direção inversa para :only-* (se ainda não o fizemos)
								start = dir = digite === "apenas" && !start && "nextSibling";
							}
							retornar verdadeiro;
						}

						início = [ encaminhar ? pai.primeirofilho : pai.últimofilho ];

						// não-xml :nth-child(...) armazena dados de cache no `pai`
						if ( encaminhar && usarCache ) {

							// Procura `elem` de um índice armazenado em cache anteriormente
							outerCache = pai[ expando ] || ( pai[ expando ] = {} );
							cache = outerCache[ tipo ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback para buscar `elem` desde o início
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// Quando encontrado, cache índices em `parent` e break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ tipo ] = [ dirruns, nodeIndex, diff ];
									quebrar;
								}
							}

						} outro {

							// Use o índice de elemento armazenado em cache anteriormente, se disponível
							if (useCache) {
								outerCache = elem[ expando ] || (elem[expansão] = {});
								cache = outerCache[ tipo ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// ou :nth-last-child(...) ou :nth(-last)?-of-type(...)
							if ( dif === false ) {

								// Use o mesmo loop acima para buscar `elem` desde o início
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ((doTipo?
										nodeName( node, name ):
										node.nodeType === 1 ) &&
										++diferente) {

										// Cache o índice de cada elemento encontrado
										if (useCache) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );
											outerCache[ tipo ] = [ dirruns, diff ];
										}

										if ( nó === elem ) {
											quebrar;
										}
									}
								}
							}
						}

						// Incorpore o deslocamento e, em seguida, verifique o tamanho do ciclo
						diff -= último;
						return diff === primeiro || (diff % primeiro === 0 && diff / first >= 0 );
					}
				};
		},

		PSEUDO: function( pseudo, argumento ) {

			// nomes de pseudoclasses não diferenciam maiúsculas de minúsculas
			// https://www.w3.org/TR/selectors/#pseudo-classes
			// Prioriza a diferenciação de maiúsculas e minúsculas no caso de pseudos personalizados serem adicionados com letras maiúsculas
			// Lembre-se que setFilters herda de pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					find.error( "pseudo não suportado: " + pseudo );

			// O usuário pode usar createPseudo para indicar que
			// argumentos são necessários para criar a função de filtro
			// assim como o jQuery faz
			if (fn[expansão]) {
				return fn(argumento);
			}

			// Mas mantém o suporte para assinaturas antigas
			if ( fn.comprimento > 1 ) {
				args = [ pseudo, pseudo, "", argumento ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( semente, correspondências ) {
						var idx,
							correspondido = fn(semente, argumento),
							i = matched.length;
						enquanto eu-- ) {
							idx = indexOf.call( seed, matched[ i ] );
							seed[idx] = !(matches[idx] = matched[i]);
						}
					} ):
					function(elem) {
						return fn(elem, 0, args);
					};
			}

			retornar fn;
		}
	},

	pseudos: {

		// pseudos potencialmente complexos
		not: markFunction( function( selector ) {

			// Apara o seletor passado para compilar
			// para evitar o tratamento inicial e final
			// espaços como combinadores
			var entrada = [],
				resultados = [],
				matcher = compile( selector.replace( rtrimCSS, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						incomparável = matcher( seed, null, xml, [] ),
						i = semente.comprimento;

					// Corresponde a elementos não correspondidos por `matcher`
					enquanto eu-- ) {
						if ((elem = incomparável[ i ] ) ) {
							seed[ i ] = !( corresponde a [ i ] = elem );
						}
					}
				} ):
				function(elem, _context, xml) {
					entrada[ 0 ] = elemento;
					matcher(entrada, nulo, xml, resultados);

					// Não mantém o elemento
					// (consulte https://github.com/jquery/sizzle/issues/299)
					entrada[ 0 ] = nulo;
					return !resultados.pop();
				};
		} ),

		tem: markFunction( function( selector ) {
			return função(elem){
				return find( seletor, elemento ).length > 0;
			};
		} ),

		contém: markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return função(elem){
				return ( elem.textContent || jQuery.text( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Se um elemento é representado por um seletor :lang()
		// é baseado apenas no valor de linguagem do elemento
		// sendo igual ao identificador C,
		// ou começando com o identificador C imediatamente seguido por "-".
		// A correspondência de C com o valor de idioma do elemento é executada sem distinção entre maiúsculas e minúsculas.
		// O identificador C não precisa ser um nome de idioma válido."
		// https://www.w3.org/TR/selectors/#lang-pseudo
		lang: markFunction( function( lang ) {

			// valor lang deve ser um identificador válido
			if (!ridentifier.test( lang || "" ) ) {
				find.error( "idioma não suportado: " + idioma );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return função(elem){
				var elemLang;
				fazer {
					if ((elemLang = documentIsHTML?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				retorna falso;
			};
		} ),

		// Diversos
		alvo: function(elem) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		root: function(elem) {
			return elem === documentElement;
		},

		foco: function(elem) {
			return elemento === safeActiveElement() &&
				document.hasFocus() &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Propriedades booleanas
		habilitado: createDisabledPseudo( false ),
		desativado: createDisabledPseudo( true ),

		verificado: function(elem) {

			// Em CSS3, :checked deve retornar elementos marcados e selecionados
			// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			return ( nodeName( elem, "input" ) && !!elem.checked ) ||
				( nodeName( elem, "opção" ) && !!elem.selected );
		},

		selecionado: function(elem) {

			// Suporte: IE <=11+
			// Acessando a propriedade selectedIndex
			// força o navegador a tratar a opção padrão como
			// selecionado quando em um optgroup.
			if (elem.parentNode) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Conteúdo
		vazio: function(elem) {

			// https://www.w3.org/TR/selectors/#empty-pseudo
			// :empty é negado pelo elemento (1) ou nós de conteúdo (texto: 3; cdata: 4; entidade ref: 5),
			// mas não por outros (comentário: 8; instrução de processamento: 7; etc.)
			// nodeType < 6 funciona porque os atributos (2) não aparecem como filhos
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					retorna falso;
				}
			}
			retornar verdadeiro;
		},

		pai: function(elem) {
			return !Expr.pseudos.empty( elem );
		},

		// Tipos de elemento/entrada
		cabeçalho: function(elem) {
			return rheader.test( elem.nodeName );
		},

		entrada: function(elem) {
			return rinputs.test( elem.nodeName );
		},

		botão: function(elem) {
			return nodeName( elem, "input" ) && elem.type === "button" ||
				nodeName(elem, "botão");
		},

		texto: function(elem) {
			var atr;
			return nodeName( elem, "input" ) && elem.type === "text" &&

				// Suporte: IE <10 apenas
				// Novos valores de atributo HTML5 (por exemplo, "search") aparecem
				// com elem.type === "texto"
				( ( attr = elem.getAttribute( "tipo") ) == nulo ||
					attr.toLowerCase() === "texto" );
		},

		// Posição na coleção
		primeiro: createPositionalPseudo( function() {
			retornar [ 0 ];
		} ),

		último: createPositionalPseudo( function( _matchIndexes, length ) {
			retornar [comprimento - 1];
		} ),

		eq: createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argumento < 0 ? argumento + comprimento: argumento ];
		} ),

		mesmo: createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < comprimento; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		odd: createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < comprimento; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		lt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i;

			if (argumento < 0) {
				i = argumento + comprimento;
			} else if (argumento > comprimento) {
				i = comprimento;
			} outro {
				i = argumento;
			}

			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		gt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argumento < 0 ? argumento + comprimento: argumento;
			for ( ; ++i < comprimento; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos.nth = Expr.pseudos.eq;

// Adicionar pseudos de tipo de botão/entrada
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[i] = createInputPseudo(i);
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[i] = createButtonPseudo(i);
}

// API fácil para criar novos setFilters
função setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

function tokenize(seletor, parseOnly) {
	var correspondente, correspondência, tokens, tipo,
		soFar, grupos, preFilters,
		em cache = tokenCache[ seletor + " " ];

	if (em cache) {
		return parseOnly? 0 : cached.slice( 0 );
	}

	soFar = seletor;
	grupos = [];
	preFilters = Expr.preFilter;

	enquanto ( até agora ) {

		// Vírgula e primeira execução
		if (!matched || (match = rcomma.exec( soFar ) ) ) {
			if (combinar) {

				// Não consuma vírgulas à direita como válidas
				soFar = soFar.slice( match[ 0 ].length ) || até aqui;
			}
			groups.push( (tokens = [] ) );
		}

		combinado = falso;

		// Combinadores
		if ((match = rleadingCombinator.exec(soFar))) {
			combinado = match.shift();
			tokens.push( {
				valor: combinado,

				// Lança os combinadores descendentes no espaço
				digite: match[ 0 ].replace( rtrimCSS, " " )
			} );
			soFar = soFar.slice(matched.length);
		}

		// Filtros
		for ( digite Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				(correspondência = preFiltros[tipo](correspondência)))) {
				combinado = match.shift();
				tokens.push( {
					valor: combinado,
					tipo: tipo,
					correspondências: correspondência
				} );
				soFar = soFar.slice(matched.length);
			}
		}

		if (!combinado) {
			quebrar;
		}
	}

	// Retorna o comprimento do excesso inválido
	// se estamos apenas analisando
	// Caso contrário, lança um erro ou retorna tokens
	if ( parseOnly ) {
		return soFar.length;
	}

	voltar tão longe?
		find.error(seletor):

		// Cache os tokens
		tokenCache( seletor, grupos ).slice( 0 );
}

function toSelector(tokens) {
	var i = 0,
		len = tokens.length,
		seletor = "";
	for ( ; i < len; i++ ) {
		seletor += tokens[i].valor;
	}
	seletor de retorno;
}

function addCombinator(correspondente, combinador, base) {
	var dir = combinator.dir,
		skip = combinador.next,
		tecla = pular || dir,
		checkNonElements = base && chave === "parentNode",
		feitoNome = feito++;

	return combinator.first ?

		// Verifica o elemento ancestral/precedente mais próximo
		function(elem, contexto, xml) {
			while ((elem = elem[dir])) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher(elem, context, xml);
				}
			}
			retorna falso;
		} :

		// Verifica todos os elementos ancestrais/precedentes
		function(elem, contexto, xml) {
			var oldCache, outerCache,
				newCache = [dirruns, doneName];

			// Não podemos definir dados arbitrários em nós XML, então eles não se beneficiam do cache do combinador
			if (xml) {
				while ((elem = elem[dir])) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if (matcher(elem, context, xml)) {
							retornar verdadeiro;
						}
					}
				}
			} outro {
				while ((elem = elem[dir])) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[expansão] = {});

						if (skip && nodeName(elem, skip)) {
							elem = elem[ dir ] || elemento;
						} else if ((oldCache = outerCache[chave]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Atribuir a newCache para que os resultados se propaguem de volta aos elementos anteriores
							return (newCache[2] = oldCache[2]);
						} outro {

							// Reutiliza o newcache para que os resultados se propaguem de volta para os elementos anteriores
							outerCache[chave] = newCache;

							// Uma correspondência significa que terminamos; uma falha significa que temos que continuar verificando
							if ((newCache[2] = matcher(elem, contexto, xml))) {
								retornar verdadeiro;
							}
						}
					}
				}
			}
			retorna falso;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function(elem, contexto, xml) {
			var i = matchers.length;
			enquanto eu-- ) {
				if (!matchers[ i ](elem, context, xml) ) {
					retorna falso;
				}
			}
			retornar verdadeiro;
		} :
		correspondentes[ 0 ];
}

função multipleContexts(seletor, contextos, resultados) {
	var i = 0,
		len = contextos.comprimento;
	for ( ; i < len; i++ ) {
		find(seletor, contextos[ i ], resultados );
	}
	resultados de retorno;
}

função condensar(incomparável, mapa, filtro, contexto, xml) {
	var elem,
		novoNão correspondido = [],
		eu = 0,
		len = incomparável. comprimento,
		mapeado = mapa != nulo;

	for ( ; i < len; i++ ) {
		if ((elem = incomparável[ i ] ) ) {
			if (!filtro || filtro(elem, contexto, xml)) {
				newUnmatched.push(elem);
				if ( mapeado ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher(postFilter);
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem, matcherOut,
			préMapa = [],
			postMapa = [],
			preexistente = resultados.comprimento,

			// Obtém elementos iniciais da semente ou do contexto
			elems = semente ||
				multipleContexts( seletor || "*",
					context.nodeType ? [ contexto ] : contexto, [] ),

			// Pré-filtro para obter entrada correspondente, preservando um mapa para sincronização de resultados iniciais
			matcherIn = preFilter && ( seed || !seletor ) ?
				condense(elems, preMap, preFilter, context, xml):
				elementos;

		if (correspondente) {

			// Se tivermos um postFinder, ou seed filtrado, ou postFilter não seed
			// ou resultados preexistentes,
			matcherOut = postFinder || ( semente ? preFilter : preexistente || postFilter ) ?

				// ...processamento intermediário é necessário
				[] :

				// ... caso contrário, use os resultados diretamente
				resultados;

			// Encontrar correspondências primárias
			matcher(matcherIn, matcherOut, contexto, xml);
		} outro {
			matcherOut = matcherIn;
		}

		// Aplicar postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], contexto, xml);

			// Descombina os elementos com falha movendo-os de volta para matcherIn
			i = temp.comprimento;
			enquanto eu-- ) {
				if ((elem = temp[i])) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( semente ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Obtenha o matcherOut final condensando este intermediário em contextos postFinder
					temperatura = [];
					i = matcherOut.length;
					enquanto eu-- ) {
						if ((elem = matcherOut[i])) {

							// Restaura matcherIn já que elem ainda não é uma correspondência final
							temp.push( (matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move os elementos correspondentes da semente para os resultados para mantê-los sincronizados
				i = matcherOut.length;
				enquanto eu-- ) {
					if ((elem = matcherOut[i]) &&
						( temp = postFinder ? indexOf.call( seed, elem ): preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( resultados[ temp ] = elem );
					}
				}
			}

		// Adiciona elementos aos resultados, através do postFinder se definido
		} outro {
			matcherOut = condensar(
				matcherOut === resultados?
					matcherOut.splice( preexistente, matcherOut.length ):
					matcherOut
			);
			if ( postFinder ) {
				postFinder(nulo, resultados, matcherOut, xml);
			} outro {
				push.apply( resultados, matcherOut );
			}
		}
	} );
}

function matcherFromTokens(tokens) {
	var checkContext, correspondente, j,
		len = tokens.length,
		leaderRelative = Expr.relative[ tokens[ 0 ].type ],
		Relativo implícito = Relativo principal || Expr.relativa[ " " ],
		i = líderRelativo ? 1: 0,

		// O matcher fundamental garante que os elementos sejam acessíveis a partir do(s) contexto(s) de nível superior
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call(checkContext, elem) > -1;
		}, implicitRelative, true ),
		matchers = [ função(elem, contexto, xml) {

			// Suporte: IE 11+, Edge 17 - 18+
			// Às vezes, o IE/Edge lança um erro de "Permissão negada" ao comparar estritamente
			// dois documentos; comparações rasas funcionam.
			// eslint-disable-next-line eqeqeq
			var ret = ( !leadingRelative && ( xml || contexto != outermostContext ) ) || (
				(checkContext = contexto).nodeType?
					matchContext(elem, contexto, xml):
					matchAnyContext(elem, context, xml));

			// Evite pendurar no elemento
			// (consulte https://github.com/jquery/sizzle/issues/299)
			checkContext = null;
			retorno ret;
		} ];

	for ( ; i < len; i++ ) {
		if ((matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} outro {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Retorna especial ao ver um matcher posicional
			if (correspondente[expansão]) {

				// Encontra o próximo operador relativo (se houver) para manipulação adequada
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						quebrar;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && paraSeletor(

						// Se o token anterior for um combinador descendente, insira um elemento qualquer implícito `*`
						tokens.slice( 0, i - 1 )
							.concat( { valor: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace(rtrimCSS, "$1" ),
					combinador,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice(j))),
					j < len && toSelector(tokens)
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

função matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = função( semente, contexto, xml , results, outermost) {
			var elem, j, correspondente,
				número correspondente = 0,
				eu = "0",
				incomparável = semente && [],
				setMatched = [],
				contextBackup = contexto externo,

				// Devemos sempre ter elementos de origem ou contexto externo
				elems = semente || byElement && Expr.find.TAG( "*", mais externo ),

				// Use dirruns inteiros se este for o matcher mais externo
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if (mais externo) {

				// Suporte: IE 11+, Edge 17 - 18+
				// Às vezes, o IE/Edge lança um erro de "Permissão negada" ao comparar estritamente
				// dois documentos; comparações rasas funcionam.
				// eslint-disable-next-line eqeqeq
				outermostContext = contexto == documento || contexto || mais externo;
			}

			// Adiciona elementos passando elementMatchers diretamente aos resultados
			// Suporte: iOS <=7 - 9 apenas
			// Tolera propriedades NodeList (IE: "comprimento"; Safari: <número>) correspondente
			// elementos por id. (ver trac-14142)
			for ( ; i !== len && ( elem = elems[ i ] ) != nulo; i++ ) {
				if (porElemento && elem) {
					j = 0;

					// Suporte: IE 11+, Edge 17 - 18+
					// Às vezes, o IE/Edge lança um erro de "Permissão negada" ao comparar estritamente
					// dois documentos; comparações rasas funcionam.
					// eslint-disable-next-line eqeqeq
					if ( !contexto && elem.ownerDocument != documento ) {
						setDocument(elem);
						xml = !documentIsHTML;
					}
					while ((matcher = elementMatchers[j++])){
						if (correspondente(elem, contexto || documento, xml)) {
							push.call( resultados, elem );
							quebrar;
						}
					}
					if (mais externo) {
						dirruns = dirrunsÚnico;
					}
				}

				// Rastrear elementos incomparáveis ​​para filtros definidos
				if (porSet) {

					// Eles terão passado por todos os matchers possíveis
					if ((elem = !matcher && elem)) {
						matchedCount--;
					}

					// Aumenta o array para cada elemento, combinado ou não
					if ( semente ) {
						unmatched.push(elem);
					}
				}
			}

			// `i` agora é a contagem de elementos visitados acima, e adicionando-a a `matchedCount`
			// torna o último não negativo.
			matchedCont += i;

			// Aplicar filtros de conjunto a elementos não correspondentes
			// NOTA: Isso pode ser ignorado se não houver elementos não correspondentes (ou seja, `matchedCount`
			// é igual a `i`), a menos que não tenhamos visitado _any_ elementos no loop acima porque temos
			// sem matchers de elemento e sem seed.
			// Incrementar uma string inicial "0" `i` permite que `i` permaneça uma string apenas naquele
			// caso, que resultará em um "00" `matchedCount` que difere de `i`, mas também é
			// numericamente zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ((matcher = setMatchers[j++])){
					matcher(incomparável, setMatched, contexto, xml);
				}

				if ( semente ) {

					// Reintegra correspondências de elemento para eliminar a necessidade de classificação
					if (contagem correspondente > 0) {
						enquanto eu-- ) {
							if ( !( incomparável[ i ] || setMatched[ i ] ) ) {
								setMatched[i] = pop.call(resultados);
							}
						}
					}

					// Descarta os valores de espaço reservado do índice para obter apenas correspondências reais
					setMatched = condense( setMatched );
				}

				// Adicionar correspondências aos resultados
				push.apply( resultados, setMatched );

				// Correspondências de conjunto sem sementes sucedendo várias correspondências bem-sucedidas estipulam classificação
				if ( mais externo && !seed && setMatched.length > 0 &&
					(matchedCount + setMatchers.length) > 1) {

					jQuery.uniqueSort( resultados );
				}
			}

			// Substitui a manipulação de globais por correspondências aninhadas
			if (mais externo) {
				dirruns = dirrunsÚnico;
				outermostContext = contextoBackup;
			}

			retorno incomparável;
		};

	retornar porSet ?
		markFunction(superMatcher):
		superMatcher;
}

function compile( selector, match /* Apenas para uso interno */ ) {
	var eu,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ seletor + " " ];

	if ( !em cache ) {

		// Gera uma função de funções recursivas que podem ser usadas para verificar cada elemento
		if (!match) {
			match = tokenize(seletor);
		}
		i = correspondência.comprimento;
		enquanto eu-- ) {
			cached = matcherFromTokens(match[i]);
			if (em cache[ expandido ] ) {
				setMatchers.push( em cache );
			} outro {
				elementMatchers.push( em cache );
			}
		}

		// Cache a função compilada
		cached = compiladorCache(seletor,
			matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Salvar seletor e tokenização
		cached.selector = seletor;
	}
	retornar em cache;
}

/**
 * Uma função de seleção de baixo nível que funciona com jQuery's compilado
 * funções do seletor
 * @param {String|Function} seletor Um seletor ou pré-compilado
 * função de seletor construída com compilação de seletor jQuery
 * @param {Elemento} contexto
 * @param {Array} [resultados]
 * @param {Array} [seed] Um conjunto de elementos para comparar
 */
function select(seletor, contexto, resultados, semente) {
	var i, tokens, token, type, find,
		compilado = seletor de tipo === "função" && seletor,
		match = !seed && tokenize( ( seletor = compilado.seletor || seletor ) );

	resultados = resultados || [];

	// Tenta minimizar as operações se houver apenas um seletor na lista e nenhuma semente
	// (este último nos garante o contexto)
	if ( match.length === 1 ) {

		// Reduz o contexto se o seletor composto principal for um ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			contexto = ( Expr.find.ID(
				token.matches[ 0 ].replace( runescape, funescape ),
				contexto
			) || [] )[0];
			if ( !contexto ) {
				resultados de retorno;

			// Correspondentes pré-compilados ainda verificarão a ancestralidade, então suba um nível
			} else if ( compilado ) {
				contexto = context.parentNode;
			}

			seletor = seletor.fatia(tokens.shift().valor.comprimento);
		}

		// Busca um conjunto de sementes para correspondência da direita para a esquerda
		i = matchExpr.needsContext.test(seletor)? 0 : tokens.comprimento;
		enquanto eu-- ) {
			ficha = fichas[i];

			// Aborta se atingirmos um combinador
			if ( Expr.relative[ ( type = token.type ) ] ) {
				quebrar;
			}
			if ((find = Expr.find[tipo])){

				// Pesquise, expandindo o contexto para os principais combinadores irmãos
				if ((semente = encontrar(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) &&
						testContext( context.parentNode ) || contexto
				) ) ) {

					// Se a semente estiver vazia ou nenhum token restar, podemos retornar antecipadamente
					tokens.splice( i, 1 );
					seletor = seed.length && toSelector( tokens );
					if (!seletor) {
						push.apply( resultados, semente );
						resultados de retorno;
					}

					quebrar;
				}
			}
		}
	}

	// Compila e executa uma função de filtragem se não for fornecida
	// Forneça `match` para evitar a reconstituição se modificarmos o seletor acima
	(compilado || compilar(seletor, corresponder))(
		semente,
		contexto,
		!documentIsHTML,
		resultados,
		!contexto || rsibling.test( selector ) && testContext( context.parentNode ) || contexto
	);
	resultados de retorno;
}

// Atribuições únicas

// Suporte: Android <=4.0 - 4.1+
// Estabilidade de classificação
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Inicializa contra o documento padrão
setDocumento();

// Suporte: Android <=4.0 - 4.1+
// Nós separados seguem confusamente *um ao outro*
support.sortDetached = assert( function( el ) {

	// Deve retornar 1, mas retorna 4 (seguindo)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

jQuery.find = localizar;

// Descontinuada
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.unique = jQuery.uniqueSort;

// Estes sempre foram privados, mas costumavam ser documentados
// como parte do Sizzle então vamos mantê-los na linha 3.x
// para fins de compatibilidade com versões anteriores.
localizar.compile = compilar;
localizar.selecionar = selecionar;
find.setDocument = setDocument;

find.escape = jQuery.escapeSelector;
localizar.getText = jQuery.text;
encontrar.isXML = jQuery.isXMLDoc;
encontrar.seletores = jQuery.expr;
encontrar.suporte = jQuery.suporte;
encontrar.uniqueSort = jQuery.uniqueSort;

	/* habilitar eslint */

} )();


var dir = function(elem, dir, até) {
	var correspondente = [],
		truncar = até !== indefinido;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if (elem.nodeType === 1) {
			if ( truncar && jQuery(elem).is(até)){
				quebrar;
			}
			matched.push(elem);
		}
	}
	retornar correspondido;
};


var irmãos = function( n, elem ) {
	var correspondido = [];

	for ( ; n; n = n.próximoIrmão ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	retornar correspondido;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([az][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>( ?:<\/\1>|)$/i );



// Implemente a funcionalidade idêntica para filtro e não
função winnow( elementos, qualificador, não ) {
	if ( isFunction( qualificador ) ) {
		return jQuery.grep(elementos, função(elem,i){
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Único elemento
	if (qualifier.nodeType) {
		return jQuery.grep(elementos, função(elem){
			return (elem === qualificador) !== não;
		} );
	}

	// Arraylike de elementos (jQuery, argumentos, Array)
	if ( qualificador typeof !== "string" ) {
		return jQuery.grep(elementos, função(elem){
			return ( indexOf.call( qualificador, elem ) > -1 ) !== não;
		} );
	}

	// Filtrado diretamente para seletores simples e complexos
	return jQuery.filter( qualificador, elementos, não );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	se não ) {
		expr = ":not(" + expr + ")";
	}

	if (elems.length === 1 && elem.nodeType === 1) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches(expr, jQuery.grep(elems, function(elem){
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	encontre: function(seletor) {
		var i, ret,
			len = this.length,
			auto = isso;

		if (tipo de seletor !== "string" ) {
			return this.pushStack( jQuery( seletor ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						retornar verdadeiro;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( seletor, self[ i ], ret );
		}

		retornar len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filtro: function(seletor) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	não: function(seletor) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	é: function(seletor) {
		voltar !!winnow(
			esse,

			// Se este for um seletor posicional/relativo, verifique a associação no conjunto retornado
			// então $("p:first").is("p:last") não retornará verdadeiro para um documento com dois "p".
			seletor typeof === "string" && rneedsContext.test( seletor ) ?
				jQuery(seletor):
				seletor || [],
			falso
		).comprimento;
	}
} );


// Inicializa um objeto jQuery


// Uma referência central para a raiz jQuery(document)
var rootjQuery,

	// Uma maneira simples de verificar strings HTML
	// Priorizar #id sobre <tag> para evitar XSS via location.hash (trac-9521)
	// Reconhecimento estrito de HTML (trac-11290: deve começar com <)
	// Atalho simples #id case para velocidade
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function(seletor, contexto, raiz) {
		var corresponder, elem;

		// HANDLE: $(""), $(nulo), $(indefinido), $(falso)
		if (!seletor) {
			devolva isto;
		}

		// O método init() aceita um rootjQuery alternativo
		// então a migração pode suportar jQuery.sub (gh-2101)
		raiz = raiz || rootjQuery;

		// Manipula strings HTML
		if (tipo de seletor === "string" ) {
			if (seletor[ 0 ] === "<" &&
				seletor[ seletor.comprimento - 1 ] === ">" &&
				seletor.comprimento >= 3 ) {

				// Assuma que as strings que começam e terminam com <> são HTML e pule a verificação de regex
				match = [nulo, seletor, nulo];

			} outro {
				match = rquickExpr.exec(seletor);
			}

			// Corresponde html ou certifique-se de que nenhum contexto seja especificado para #id
			if (combinar && (combinar[ 1 ] || !contexto ) ) {

				// HANDLE: $(html) -> $(array)
				if (combinar[1]) {
					context = instância de contexto de jQuery? contexto[ 0 ] : contexto;

					// A opção de executar scripts é verdadeira para back-compat
					// Permitir intencionalmente que o erro seja lançado se parseHTML não estiver presente
					jQuery.merge( this, jQuery.parseHTML(
						corresponder[1],
						context && context.nodeType ? context.ownerDocument || contexto: documento,
						verdadeiro
					) );

					// MANIPULAÇÃO: $(html, props)
					if (rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for (combinar no contexto) {

							// Propriedades de contexto são chamadas como métodos se possível
							if ( isFunction( this[ match ] ) ) {
								esta[correspondência](contexto[correspondência]);

							// ...e de outra forma definido como atributos
							} outro {
								this.attr(correspondência, contexto[correspondência]);
							}
						}
					}

					devolva isto;

				// MANUSEIO: $(#id)
				} outro {
					elem = document.getElementById( match[ 2 ] );

					if (elem) {

						// Injeta o elemento diretamente no objeto jQuery
						este[ 0 ] = elemento;
						this.length = 1;
					}
					devolva isto;
				}

			//HANDLE: $(expr, $(...))
			} else if (!context || context.jquery) {
				return (contexto || root ).find( seletor );

			// MANIPULAÇÃO: $(expr, contexto)
			// (que é apenas equivalente a: $(context).find(expr)
			} outro {
				return this.constructor(contexto).find(seletor);
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = seletor;
			this.length = 1;
			devolva isto;

		//HANDLE: $(função)
		// Atalho para documento pronto
		} else if (isFunction(seletor)) {
			return root.ready !== indefinido ?
				root.ready(seletor):

				// Executa imediatamente se pronto não estiver presente
				seletor(jQuery);
		}

		return jQuery.makeArray(seletor, this);
	};

// Dê à função init o protótipo jQuery para instanciação posterior
init.prototype = jQuery.fn;

// Inicializa a referência central
rootjQuery = jQuery(documento);


var rparentsprev = /^(?:parents|prev(?:Até|All))/,

	// Métodos garantidos para produzir um conjunto único ao iniciar de um conjunto único
	garantido Único = {
		crianças: verdade,
		conteúdo: verdadeiro,
		próximo: verdadeiro,
		anterior: verdadeiro
	};

jQuery.fn.extend( {
	tem: function(alvo) {
		var targets = jQuery( target, this ),
			l = alvos.comprimento;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					retornar verdadeiro;
				}
			}
		} );
	},

	mais próximo: function(seletores, contexto) {
		var cur,
			eu = 0,
			l = this.length,
			correspondido = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Os seletores posicionais nunca correspondem, pois não há contexto _selection_
		if (!rneedsContext.test(seletores)) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== contexto; cur = cur.parentNode ) {

					// Sempre pular fragmentos de documento
					if (cur.nodeType < 11 && (alvos?
						targets.index( cur ) > -1 :

						// Não passe não-elementos para jQuery#find
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						quebrar;
					}
				}
			}
		}

		return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched):matched);
	},

	// Determina a posição de um elemento dentro do conjunto
	index: function(elem) {

		// Sem argumento, retorna índice no pai
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length: -1;
		}

		// Índice no seletor
		if (tipo de elemento === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Localiza a posição do elemento desejado
		return indexOf.call( this,

			// Se receber um objeto jQuery, o primeiro elemento é usado
			elem.jquery ? elemento[ 0 ] : elemento
		);
	},

	adicione: function(seletor, contexto) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( seletor, contexto ) )
			)
		);
	},

	addBack: function(seletor) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( seletor )
		);
	}
} );

função irmão( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	retorno cur;
}

jQuery.each( {
	pai: function(elem) {
		var pai = elem.parentNode;
		return parent && parent.nodeType !== 11 ? pai: nulo;
	},
	pais: function(elem) {
		return dir(elem, "parentNode");
	},
	paisAté: função(elem, _i, até) {
		return dir(elem, "parentNode", até );
	},
	próximo: function(elem) {
		return sibling(elem, "nextSibling" );
	},
	anterior: function(elem) {
		return irmão(elem, "irmãoanterior");
	},
	nextAll: function(elem) {
		return dir(elem, "nextSibling" );
	},
	prevAll: function(elem) {
		return dir(elem, "irmão anterior");
	},
	nextUntil: function( elem, _i, até ) {
		return dir(elem, "nextSibling", até );
	},
	prevUntil: function( elem, _i, até ) {
		return dir(elem, "irmão anterior", até );
	},
	irmãos: function(elem) {
		return irmãos( ( elem.parentNode || {} ).firstChild, elem );
	},
	filhos: function(elem) {
		return irmãos(elem.firstChild);
	},
	conteúdo: function(elem) {
		if ( elem.contentDocument != null &&

			// Suporte: IE 11+
			// elementos <object> sem atributo `data` tem um objeto
			// `contentDocument` com um protótipo `null`.
			getProto(elem.contentDocument)) {

			return elem.contentDocument;
		}

		// Suporte: apenas IE 9 - 11, apenas iOS 7, navegador Android <=4.3 apenas
		// Trate o elemento template como um normal em navegadores que
		// não suporta isso.
		if (nodeName(elem, "modelo")) {
			elem = elem.content || elemento;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, função(nome, fn) {
	jQuery.fn[ nome ] = função( até, seletor ) {
		var matched = jQuery.map( this, fn, until );

		if (name.slice( -5) !== "Até" ) {
			seletor = até;
		}

		if ( seletor && tipo de seletor === "string" ) {
			correspondido = jQuery.filter(seletor, correspondido);
		}

		if ( this.length > 1 ) {

			// Remove duplicatas
			if (!guaranteedUnique[ nome ] ) {
				jQuery.uniqueSort(combinado);
			}

			// Ordem inversa para pais* e derivados anteriores
			if (rparentsprev.test(nome)) {
				matched.reverse();
			}
		}

		return this.pushStack(matched);
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Converte opções formatadas em string em formatadas em objeto
função criarOpções(opções) {
	var objeto = {};
	jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
		objeto[ sinalizador ] = verdadeiro;
	} );
	objeto de retorno;
}

/*
 * Crie uma lista de retorno de chamada usando os seguintes parâmetros:
 *
 * opções: uma lista opcional de opções separadas por espaços que mudarão como
 * a lista de callback se comporta ou um objeto de opção mais tradicional
 *
 * Por padrão, uma lista de retorno de chamada funcionará como uma lista de retorno de chamada de evento e pode ser
 * "disparou" várias vezes.
 *
 * Opções possíveis:
 *
 * once: garantirá que a lista de retorno de chamada possa ser disparada apenas uma vez (como um Deferred)
 *
 * memória: acompanhará os valores anteriores e chamará qualquer callback adicionado
 * após a lista ter sido disparada imediatamente com o último "memorizado"
 * valores (como um Adiado)
 *
 * exclusivo: garantirá que um retorno de chamada possa ser adicionado apenas uma vez (sem duplicatas na lista)
 *
 * stopOnFalse: interrompa chamadas quando um retorno de chamada retornar falso
 *
 */
jQuery.Callbacks = função( opções) {

	// Converte opções do formato String para o formato Object, se necessário
	// (verificamos o cache primeiro)
	opções = tipo de opções === "string" ?
		criarOpções(opções):
		jQuery.extend( {}, opções );

	var // Flag para saber se a lista está disparando no momento
		disparando,

		// Último valor de disparo para listas não esquecíveis
		memória,

		// Flag para saber se a lista já foi disparada
		despedido,

		// Flag para evitar disparos
		bloqueado,

		// lista de callback real
		lista = [],

		// Fila de dados de execução para listas repetíveis
		fila = [],

		// Índice de retorno de chamada acionado atualmente (modificado por adicionar/remover conforme necessário)
		índice de disparo = -1,

		// Dispara retornos de chamada
		fogo = função() {

			// Aplica disparo único
			bloqueado = bloqueado || opções.uma vez;

			// Executa callbacks para todas as execuções pendentes,
			// respeitando substituições de shootingIndex e alterações de tempo de execução
			disparado = disparando = verdadeiro;
			for ( ; queue.length; shootingIndex = -1 ) {
				memoria = fila.shift();
				while (++firingIndex < lista.comprimento) {

					// Executa o retorno de chamada e verifica se há encerramento antecipado
					if ( list[ shootingIndex ].apply( memory[ 0 ], memory [ 1 ] ) === false &&
						opções.stopOnFalse ) {

						// Pule para o final e esqueça os dados para que .add não seja disparado novamente
						fireIndex = lista.comprimento;
						memória = falso;
					}
				}
			}

			// Esqueça os dados se terminarmos
			if ( !options.memory ) {
				memória = falso;
			}

			disparo = falso;

			// Limpe se terminarmos de atirar de vez
			if (bloqueado) {

				// Mantém uma lista vazia se tivermos dados para futuras chamadas de adição
				if (memória) {
					lista = [];

				// Caso contrário, este objeto é gasto
				} outro {
					lista = "";
				}
			}
		},

		// Objeto de retornos de chamada reais
		auto = {

			// Adiciona um callback ou uma coleção de callbacks à lista
			adicione: função() {
				if ( lista ) {

					// Se tivermos memória de uma execução anterior, devemos disparar após adicionar
					if (memória && !disparando) {
						disparoIndex = lista.comprimento - 1;
						fila.push( memória );
					}

					(função add(args){
						jQuery.each( args, function( _, arg ) {
							if (isFunction(arg)) {
								if (!options.unique || !self.has( arg ) ) {
									lista.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspecionar recursivamente
								add(arg);
							}
						} );
					} )(argumentos);

					if (memória && !disparando) {
						fogo();
					}
				}
				devolva isto;
			},

			// Remove um callback da lista
			remover: function () {
				jQuery.each( argumentos, função( _, arg ) {
					var índice;
					while ((índice = jQuery.inArray(arg, lista, índice)) > -1) {
						lista.splice( índice, 1 );

						// Trata índices de disparo
						if ( índice <= índice de disparo ) {
							fireIndex--;
						}
					}
				} );
				devolva isto;
			},

			// Verifica se um determinado callback está na lista.
			// Se nenhum argumento for fornecido, retorna se a lista possui ou não callbacks anexados.
			tem: function( fn ) {
				retornar f?
					jQuery.inArray( fn, lista ) > -1 :
					lista.comprimento > 0;
			},

			// Remove todos os callbacks da lista
			vazio: function() {
				if ( lista ) {
					lista = [];
				}
				devolva isto;
			},

			// Desabilitar .fire e .add
			// Aborta qualquer execução atual/pendente
			// Limpa todos os callbacks e valores
			desabilitar: function() {
				bloqueado = fila = [];
				lista = memoria = "";
				devolva isto;
			},
			desabilitado: function() {
				retornar !lista;
			},

			// Desabilita .fire
			// Também desabilite .add a menos que tenhamos memória (já que não teria efeito)
			// Aborta qualquer execução pendente
			bloqueio: function () {
				bloqueado = fila = [];
				if ( !memória && !disparando ) {
					lista = memoria = "";
				}
				devolva isto;
			},
			bloqueado: function() {
				retornar !!bloqueado;
			},

			// Chama todos os retornos de chamada com o contexto e os argumentos fornecidos
			fireWith: function( contexto, args ) {
				if ( ! bloqueado ) {
					args = args || [];
					args = [ contexto, args.slice ? args.slice() : args ];
					fila.push( args );
					if ( !disparando ) {
						fogo();
					}
				}
				devolva isto;
			},

			// Chama todos os callbacks com os argumentos dados
			fogo: function() {
				self.fireWith( isto, argumentos );
				devolva isto;
			},

			// Para saber se os callbacks já foram chamados pelo menos uma vez
			disparado: function () {
				retorno !!disparado;
			}
		};

	retornar auto;
};


função Identidade( v ) {
	retornar v;
}
função Lançador (ex) {
	jogue ex;
}

function adoptValue( valor, resolver, rejeitar, noValue ) {
	método var;

	tentar {

		// Verifique primeiro o aspecto da promessa para privilegiar o comportamento síncrono
		if ( valor && isFunction( ( método = valor.promessa ) ) ) {
			method.call( valor ).done( resolver ).fail( rejeitar );

		// Outras possibilidades
		} else if ( valor && isFunction( ( método = valor.então ) ) ) {
			method.call(valor, resolver, rejeitar);

		// Outros não-entáveis
		} outro {

			// Controle os argumentos `resolve` deixando Array#slice converter booleano `noValue` para inteiro:
			// * false: [ valor ].slice( 0 ) => resolve( valor )
			// * verdadeiro: [ valor ].slice( 1 ) => resolve()
			resolve.apply( indefinido, [ valor ].slice( noValue ) );
		}

	// Para Promises/A+, converte exceções em rejeições
	// Já que jQuery.when não desempacota os theables, podemos pular as verificações extras que aparecem em
	// Deferred#then para suprimir condicionalmente a rejeição.
	} pegar ( valor ) {

		// Suporte: apenas Android 4.0
		// Funções de modo estrito invocadas sem .call/.apply obtêm contexto de objeto global
		rejeitar.aplicar(indefinido, [valor]);
	}
}

jQuery.extend( {

	Adiado: function( func ) {
		var tuplas = [

				// ação, adiciona ouvinte, callbacks,
				// ... .then manipuladores, índice de argumento, [estado final]
				[ "notificar", "progresso", jQuery.Callbacks( "memória" ),
					jQuery.Callbacks( "memória" ), 2 ],
				[ "resolver", "concluído", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolvido" ],
				[ "rejeitar", "falha", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejeitado"]
			],
			estado = "pendente",
			promessa = {
				função estatal() {
					estado de retorno;
				},
				sempre: function() {
					deferred.done(argumentos).fail(argumentos);
					devolva isto;
				},
				"pegar": function( fn ) {
					return promessa.então( null, fn );
				},

				// Mantém o pipe para back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = argumentos;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuplas, function( _i, tupla ) {

							// Mapeia tuplas (progress, done, fail) para argumentos (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { vincular a newDefer ou newDefer.notify })
							// deferred.done(function() { vincular a newDefer ou newDefer.resolve })
							// deferred.fail(function() { vincular a newDefer ou newDefer.reject })
							deferido[ tupla[ 1 ] ]( function() {
								var retornado = fn && fn.apply( isto, argumentos );
								if (retornou && isFunction(retornou.promise)) {
									devolvido.promessa()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} outro {
									newDefer[ tupla[ 0 ] + "Com" ](
										esse,
										fn? [retornou]: argumentos
									);
								}
							} );
						} );
						fns = nulo;
					} ).promessa();
				},
				então: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					função resolve( profundidade, adiada, manipulador, especial ) {
						função return() {
							var que = isso,
								args = argumentos,
								mayThrow = function() {
									var retornou, então;

									// Suporte: Promessas/A+ seção 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignora tentativas de resolução dupla
									if ( profundidade < maxDepth ) {
										retornar;
									}

									retornado = handler.apply( that, args );

									// Suporte: Promessas/A+ seção 2.3.1
									// https://promisesaplus.com/#point-48
									if (retornou === deferred.promise()) {
										throw new TypeError("Enable auto-resolução");
									}

									// Suporte: Promessas/seções A+ 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Recupera `then` apenas uma vez
									então = retornado &&

										// Suporte: Promessas/A+ seção 2.3.4
										// https://promisesaplus.com/#point-64
										// Apenas verifica objetos e funções quanto à sua capacidade
										( typeof retornado === "objeto" ||
											typeof retornado === "função" ) &&
										retornado.então;

									// Manipula um thenable retornado
									if (éFunção(então)) {

										// Processadores especiais (notificar) apenas aguardar a resolução
										se ( especial ) {
											Em seguida, ligue(
												devolvida,
												resolve(maxDepth, adiado, Identidade, especial),
												resolve(maxDepth, diferido, Thrower, especial)
											);

										// Processadores normais (resolver) também se conectam ao progresso
										} outro {

											// ...e desconsidera valores de resolução mais antigos
											maxDepth++;

											Em seguida, ligue(
												devolvida,
												resolve(maxDepth, adiado, Identidade, especial),
												resolve(maxDepth, diferido, Thrower, especial),
												resolve(maxDepth, adiado, Identidade,
													adiado.notifyWith )
											);
										}

									// Trata todos os outros valores retornados
									} outro {

										// Somente manipuladores substitutos passam o contexto
										// e vários valores (comportamento não especificado)
										if ( manipulador !== Identidade ) {
											que = indefinido;
											args = [retornou];
										}

										// Processa o(s) valor(es)
										// O processo padrão é resolver
										( especial || deferred.resolveWith )( that, args );
									}
								},

								// Apenas processadores normais (resolvem) capturam e rejeitam exceções
								processo = especial ?
									mayThrow:
									função() {
										tentar {
											mayThrow();
										} pegar ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.error );
											}

											// Suporte: Promessas/A+ seção 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignora exceções pós-resolução
											if ( profundidade + 1 >= maxDepth ) {

												// Somente manipuladores substitutos passam o contexto
												// e vários valores (comportamento não especificado)
												if ( manipulador !== Lançador ) {
													que = indefinido;
													args = [e];
												}

												deferred.rejectWith( isso, args );
											}
										}
									};

							// Suporte: Promessas/A+ seção 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Resolva promessas imediatamente para evitar falsas rejeições de
							// erros subseqüentes
							if ( profundidade ) {
								processo();
							} outro {

								// Chama um hook opcional para registrar o erro, em caso de exceção
								// já que é perdido quando a execução fica assíncrona
								if ( jQuery.Deferred.getErrorHook ) {
									process.error = jQuery.Deferred.getErrorHook();

								// O alias obsoleto acima. Embora o nome sugira
								// retornando a pilha, não uma instância de erro, jQuery apenas passa
								// diretamente para `console.warn` para que ambos funcionem; uma instância
								// apenas coopera melhor com os mapas de origem.
								} else if ( jQuery.Deferred.getStackHook ) {
									process.error = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( processo );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuplas[ 0 ][ 3 ].add(
							resolver(
								0,
								novoAdiar,
								isFunction(onProgress) ?
									em progresso :
									Identidade,
								newDefer.notifyWith
							)
						);

						// cumprido_handlers.add( ... )
						tuplas[ 1 ][ 3 ].add(
							resolver(
								0,
								novoAdiar,
								isFunction(onFulfilled) ?
									onCumprido:
									Identidade
							)
						);

						// rejeitado_handlers.add( ... )
						tuplas[ 2 ][ 3 ].add(
							resolver(
								0,
								novoAdiar,
								isFunction(onRejected) ?
									onRejected:
									Atirador
							)
						);
					} ).promessa();
				},

				// Obter uma promessa para este diferido
				// Se obj for fornecido, o aspecto de promessa é adicionado ao objeto
				promessa: function( obj ) {
					return obj != null ? jQuery.extend(obj, promessa): promessa;
				}
			},
			diferido = {};

		// Adicionar métodos específicos da lista
		jQuery.each( tuplas, função( i, tupla ) {
			var lista = tupla[ 2 ],
				estadoString = tuple[ 5 ];

			// promessa.progresso = lista.add
			// promessa.done = list.add
			// promessa.fail = list.add
			promessa[ tupla[ 1 ] ] = lista.add;

			// Manipula o estado
			if (estadoString) {
				lista.adicionar(
					função() {

						// estado = "resolvido" (ou seja, cumprido)
						// estado = "rejeitado"
						estado = estadoString;
					},

					// rejeição_callbacks.disable
					// cumprido_callbacks.disable
					tuplas[ 3 - i ][ 2 ].desativar,

					// rejeitado_handlers.disable
					// cumprido_handlers.disable
					tuplas[ 3 - i ][ 3 ].desativar,

					// progress_callbacks.lock
					tuplas[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuplas[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// cumprido_handlers.fire
			// rejeitado_handlers.fire
			list.add(tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferido[ tupla[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				devolva isto;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Faça do adiado uma promessa
		promessa.promessa( adiada );

		// Chama a função fornecida se houver
		if (função) {
			func.call( adiado, adiado );
		}

		// Tudo feito!
		retorno diferido;
	},

	// ajudante diferido
	quando: function( singleValue ) {
		var

			// contagem de subordinados incompletos
			restante = argumentos.comprimento,

			// contagem de argumentos não processados
			i = restante,

			// dados de atendimento subordinados
			resolveContexts = Array( i ),
			resolveValues ​​= slice.call(argumentos),

			// o principal diferido
			primário = jQuery.Deferred(),

			// fábrica de retorno de chamada subordinada
			updateFunc = function(i) {
				return function( valor ) {
					resolveContexts[i] = this;
					resolveValues[ i ] = argumentos.comprimento > 1 ? slice.call(argumentos): valor;
					if ( !( --restante ) ) {
						primário.resolveWith( resolveContexts, resolveValues ​​);
					}
				};
			};

		// Argumentos simples e vazios são adotados como Promise.resolve
		if (restante <= 1) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!restante );

			// Use .then() para desembrulhar os thenables secundários (cf. gh-3000)
			if ( primary.state() === "pendente" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primário.então();
			}
		}

		// Múltiplos argumentos são agregados como elementos do array Promise.all
		enquanto eu-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primário.promessa();
	}
} );


// Geralmente indicam um erro do programador durante o desenvolvimento,
// alerta sobre eles o mais rápido possível, em vez de engoli-los por padrão.
var rerrorNames = /^(Eval|Interno|Intervalo|Referência|Sintaxe|Tipo|URI)Error$/;

// Se `jQuery.Deferred.getErrorHook` for definido, `asyncError` é um erro
// capturado antes da barreira assíncrona para obter a causa original do erro
// que, de outra forma, pode estar oculto.
jQuery.Deferred.exceptionHook = function(erro, asyncError) {

	// Suporte: IE 8 - 9 somente
	// O console existe quando as ferramentas de desenvolvimento estão abertas, o que pode acontecer a qualquer momento
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "exceção jQuery.Deferred: " + error.message,
			error.stack, asyncError );
	}
};




jQuery.readyException = function(erro) {
	window.setTimeout( function() {
		lançar erro;
	} );
};




// O diferido usado no DOM pronto
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	lista pronta
		.então ( fn )

		// Envolva jQuery.readyException em uma função para que a pesquisa
		// acontece no momento do tratamento de erro ao invés do retorno de chamada
		// cadastro.
		.catch(função(erro){
			jQuery.readyException( erro );
		} );

	devolva isto;
};

jQuery.extend( {

	// O DOM está pronto para ser usado? Defina como verdadeiro assim que ocorrer.
	isReady: falso,

	// Um ​​contador para rastrear quantos itens esperar antes
	// o evento pronto dispara. Veja trac-6781
	prontoEspera: 1,

	// Trata quando o DOM está pronto
	pronto: function(espera) {

		// Abortar se houver retenções pendentes ou já estivermos prontos
		if (espera === true? --jQuery.readyWait: jQuery.isReady) {
			retornar;
		}

		// Lembre-se que o DOM está pronto
		jQuery.isReady = verdadeiro;

		// Se um evento DOM Ready normal disparar, diminua e aguarde se necessário
		if ( espere !== true && --jQuery.readyWait > 0 ) {
			retornar;
		}

		// Se houver funções vinculadas, para executar
		readyList.resolveWith(documento, [jQuery]);
	}
} );

jQuery.ready.then = readyList.then;

// O manipulador de eventos pronto e o método de autolimpeza
função concluída() {
	document.removeEventListener( "DOMContentLoaded", concluído );
	window.removeEventListener("carregar", concluído);
	jQuery.ready();
}

// Captura casos em que $(document).ready() é chamado
// depois que o evento do navegador já ocorreu.
// Suporte: IE <=9 - 10 apenas
// IE mais antigo às vezes sinaliza "interativo" muito cedo
if ( document.readyState === "completo" ||
	( document.readyState !== "carregando" && !document.documentElement.doScroll ) ) {

	// Manipule-o de forma assíncrona para permitir que os scripts tenham a oportunidade de atrasar o pronto
	window.setTimeout( jQuery.ready );

} outro {

	// Use o retorno de chamada de evento útil
	document.addEventListener( "DOMContentLoaded", concluído );

	// Um ​​substituto para window.onload, que sempre funcionará
	window.addEventListener("carregar", concluído);
}




// Método multifuncional para obter e definir valores de uma coleção
// O(s) valor(es) podem opcionalmente ser executados se for uma função
var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
	var i = 0,
		len = elems.length,
		massa = chave == null;

	// Define muitos valores
	if ( toType( chave ) === "objeto" ) {
		encadeável = verdadeiro;
		for ( i na chave ) {
			access(elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Define um valor
	} else if ( valor !== indefinido ) {
		encadeável = verdadeiro;

		if (!isFunction( valor ) ) {
			bruto = verdadeiro;
		}

		if (em massa) {

			// Operações em massa são executadas em todo o conjunto
			if (bruto) {
				fn.call(elems, valor);
				fn = nulo;

			// ...exceto ao executar valores de função
			} outro {
				massa = fn;
				fn = function(elem, _key, valor) {
					return bulk.call( jQuery( elem ), valor );
				};
			}
		}

		se ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], chave, raw ?
						valor :
						value.call(elems[i],i,fn(elems[i],chave))
				);
			}
		}
	}

	if ( encadeável ) {
		elementos de retorno;
	}

	// Obtém
	if (em massa) {
		return fn.call(elems);
	}

	Devolve Len? fn(elems[ 0 ], key ): emptyGet;
};


// Corresponde à string tracejada para camelizar
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([az])/g;

// Usado por camelCase como callback para replace()
função fcamelCase( _all, letra ) {
	return letter.toUpperCase();
}

// Converte tracejado para camelCase; usado pelos módulos css e dados
// Suporte: IE <=9 - 11, Edge 12 - 15
// A Microsoft esqueceu de alterar o prefixo do fornecedor (trac-9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var aceitarDados = function(proprietário) {

	// Aceita apenas:
	// - Nó
	// - Node.ELEMENT_NODE
	// - Node.DOCUMENT_NODE
	// - Objeto
	// - Qualquer
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




função Dados() {
	this.expando = jQuery.expando + Data.uid++;
}

dados.uid = 1;

Data.prototype = {

	cache: função (proprietário) {

		// Verifica se o objeto proprietário já possui um cache
		var value = owner[ this.expando ];

		// Se não, crie um
		if ( !valor ) {
			valor = {};

			// Podemos aceitar dados para nós não elementares em navegadores modernos,
			// mas não devemos, veja trac-8335.
			// Sempre retorna um objeto vazio.
			if (aceitarDados(proprietário)) {

				// Se for um nó improvável de ser stringificado ou repetido
				// usa atribuição simples
				if (owner.nodeType) {
					proprietário[ this.expandindo ] = valor;

				// Caso contrário, proteja-o em uma propriedade não enumerável
				// configurável deve ser verdadeiro para permitir que a propriedade seja
				// excluído quando os dados são removidos
				} outro {
					Object.defineProperty(proprietário, this.expandindo, {
						valor: valor,
						configurável: verdadeiro
					} );
				}
			}
		}

		valor de retorno;
	},
	set: function(proprietário, dados, valor) {
		suporte var,
			cache = this.cache(proprietário);

		// Handle: [proprietário, chave, valor] args
		// Sempre use a chave camelCase (gh-2257)
		if (tipo de dado === "string" ) {
			cache[ camelCase(dados)] = valor;

		// Handle: [proprietário, {propriedades}] args
		} outro {

			// Copia as propriedades uma a uma para o objeto cache
			for ( prop em dados ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		cache de retorno;
	},
	get: function(proprietário, chave) {
		tecla de retorno === indefinido?
			this.cache(proprietário):

			// Sempre use a chave camelCase (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	acesso: function(proprietário, chave, valor) {

		// Nos casos em que:
		//
		// 1. Nenhuma chave foi especificada
		// 2. Uma chave de string foi especificada, mas nenhum valor foi fornecido
		//
		// Pegue o caminho "read" e permita que o método get determine
		// qual valor retornar, respectivamente:
		//
		// 1. Todo o objeto de cache
		// 2. Os dados armazenados na chave
		//
		if (tecla === indefinido ||
				((chave && tipo de chave === "string") && valor === indefinido) ) {

			return this.get(proprietário, chave);
		}

		// Quando a chave não é uma string, ou tanto uma chave quanto um valor
		// são especificados, definidos ou estendidos (objetos existentes) com:
		//
		// 1. Um objeto de propriedades
		// 2. Uma chave e um valor
		//
		this.set(proprietário, chave, valor);

		// Uma vez que o caminho "set" pode ter dois pontos de entrada possíveis
		// retorna os dados esperados com base em qual caminho foi tomado[*]
		valor de retorno !== indefinido ? valor : chave;
	},
	remover: function(proprietário, chave) {
		var eu,
			cache = dono[ this.expandindo ];

		if ( cache === indefinido ) {
			retornar;
		}

		if ( chave !== indefinido ) {

			// Suporta array ou string de chaves separadas por espaço
			if (Array.isArray(chave)) {

				// Se a chave for um array de chaves...
				// Nós sempre definimos chaves camelCase, então remova isso.
				key = key.map( camelCase );
			} outro {
				chave = camelCase( chave );

				// Se existir uma chave com os espaços, use-a.
				// Caso contrário, crie uma matriz combinando não-espaço em branco
				chave = chave no cache?
					[ chave ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = chave.comprimento;

			enquanto eu-- ) {
				excluir cache[chave[i]];
			}
		}

		// Remove o expando se não houver mais dados
		if (chave === indefinido || jQuery.isEmptyObject( cache ) ) {

			// Suporte: Chrome <=35 - 45
			// O desempenho do Webkit & Blink sofre ao excluir propriedades
			// a partir de nós DOM, então defina como indefinido
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restrito)
			if (owner.nodeType) {
				proprietário[ this.expandindo ] = indefinido;
			} outro {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function(proprietário) {
		var cache = owner[ this.expando ];
		cache de retorno !== indefinido && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



// Resumo da Implementação
//
// 1. Aplicar superfície API e compatibilidade semântica com ramificação 1.9.x
// 2. Melhorar a capacidade de manutenção do módulo reduzindo o armazenamento
// caminhos para um único mecanismo.
// 3. Use o mesmo mecanismo único para oferecer suporte a dados "privados" e "usuários".
// 4. _Nunca_ exponha dados "privados" ao código do usuário (TODO: Drop _data, _removeData)
// 5. Evite expor detalhes de implementação em objetos de usuário (por exemplo, propriedades expando)
// 6. Fornecer um caminho claro para atualização de implementação para WeakMap em 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[AZ]/g;

função getData( dados ) {
	if (dados === "verdadeiro" ) {
		retornar verdadeiro;
	}

	if (dados === "falso" ) {
		retorna falso;
	}

	if (dados === "nulo" ) {
		retornar nulo;
	}

	// Só converte para um número se não mudar a string
	if (dados === +dados + "") {
		retornar +dados;
	}

	if (rbrace.test(data)) {
		return JSON.parse( dados );
	}

	dados de retorno;
}

function dataAttr(elem, key, data) {
	var nome;

	// Se nada for encontrado internamente, tente buscar algum
	// dados do atributo data-* do HTML5
	if ( dados === undefined && elem.nodeType === 1 ) {
		nome = "dados-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		dados = elem.getAttribute(nome);

		if (tipo de dado === "string" ) {
			tentar {
				dados = getDados(dados);
			} pegar ( e ) {}

			// Certifique-se de definir os dados para que não sejam alterados posteriormente
			dataUser.set(elem, chave, dados);
		} outro {
			dados = indefinido;
		}
	}
	dados de retorno;
}

jQuery.extend( {
	hasData: function(elem) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	dados: função(elem, nome, dados) {
		return dataUser.access(elem, nome, dados);
	},

	removeData: function(elem, nome) {
		dataUser.remove(elem, nome);
	},

	// TODO: Agora que todas as chamadas para _data e _removeData foram substituídas
	// com chamadas diretas para métodos dataPriv, eles podem ser obsoletos.
	_data: função(elem, nome, dados) {
		return dataPriv.access(elem, nome, dados);
	},

	_removeData: function(elem, nome) {
		dataPriv.remove(elem, nome);
	}
} );

jQuery.fn.extend( {
	dados: function(chave, valor) {
		var i, nome, dados,
			elemento = este[ 0 ],
			attrs = elem && elem.atributos;

		// Obtém todos os valores
		if (tecla === indefinido) {
			if ( this.length ) {
				dados = dataUser.get(elem);

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					enquanto eu-- ) {

						// Suporte: somente IE 11
						// Os elementos attrs podem ser nulos (trac-14894)
						if (attrs[i]) {
							nome = attrs[i].nome;
							if (name.indexOf("dados-") === 0) {
								nome = camelCase( nome.fatia( 5 ) );
								dataAttr(elem, nome, dados[ nome ] );
							}
						}
					}
					dataPriv.set(elem, "hasDataAttrs", true );
				}
			}

			dados de retorno;
		}

		// Define vários valores
		if (tipo de chave === "objeto" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var dados;

			// O objeto jQuery de chamada (correspondências de elemento) não está vazio
			// (e, portanto, tem um elemento aparece neste [ 0 ]) e o
			// O parâmetro `value` não era indefinido. Um objeto jQuery vazio
			// resultará em `indefinido` para elem = this[ 0 ] que irá
			// lança uma exceção se for feita uma tentativa de ler um cache de dados.
			if (elem && valor === indefinido) {

				// Tenta obter dados do cache
				// A chave sempre será camelCased em Data
				dados = dataUser.get(elem, chave);
				if ( dados !== indefinido ) {
					dados de retorno;
				}

				// Tenta "descobrir" os dados em
				// dados personalizados HTML5-* attrs
				dados = dataAttr(elem, chave);
				if ( dados !== indefinido ) {
					dados de retorno;
				}

				// Nós tentamos muito, mas os dados não existem.
				retornar;
			}

			// Define os dados...
			this.each( função() {

				// Sempre armazenamos a chave camelCased
				dataUser.set( this, key, value );
			} );
		}, nulo, valor, argumentos.comprimento > 1, nulo, verdadeiro );
	},

	removeData: function(chave) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	fila: function(elem, type, data) {
		var fila;

		if (elem) {
			tipo = ( tipo || "fx" ) + "fila";
			fila = dataPriv.get(elem, tipo);

			// Acelera o desenfileiramento saindo rapidamente se for apenas uma pesquisa
			if ( dados ) {
				if (!fila || Array.isArray( dados ) ) {
					fila = dataPriv.access(elem, tipo, jQuery.makeArray(dados));
				} outro {
					fila.push( dados );
				}
			}
			fila de retorno || [];
		}
	},

	desenfileirar: function(elem, type) {
		tipo = tipo || "fx";

		var fila = jQuery.queue(elem, tipo),
			startLength = fila.comprimento,
			fn = fila.shift(),
			ganchos = jQuery._queueHooks(elem, tipo),
			proximo = function() {
				jQuery.dequeue(elem, tipo);
			};

		// Se a fila fx for desenfileirada, sempre remova a sentinela de progresso
		if ( fn === "em andamento") {
			fn = fila.shift();
			comprimentoinício--;
		}

		se ( fn ) {

			// Adiciona uma sentinela de progresso para evitar que a fila fx seja
			// desenfileirado automaticamente
			if (digite === "fx") {
				fila.unshift("em andamento");
			}

			// Limpa a última função de parada da fila
			excluir hooks.stop;
			fn.call(elem, próximo, ganchos);
		}

		if (!startLength && ganchos) {
			hooks.empty.fire();
		}
	},

	// Não público - gera um objeto queueHooks ou retorna o atual
	_queueHooks: function(elem, type) {
		var chave = tipo + "queueHooks";
		return dataPriv.get(elem, chave) || dataPriv.access(elem, chave, {
			vazio: jQuery.Callbacks( "memória única" ).add( function() {
				dataPriv.remove(elem, [ tipo + "fila", chave ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	fila: function(tipo, dados) {
		var configurador = 2;

		if ( tipo do tipo !== "string" ) {
			dados = tipo;
			tipo = "fx";
			normatizador--;
		}

		if (argumentos.comprimento <setter) {
			return jQuery.queue( this[ 0 ], digite );
		}

		dados de retorno === indefinido?
			esse :
			this.each( função() {
				var fila = jQuery.queue( this, type, data );

				// Garante um gancho para esta fila
				jQuery._queueHooks( this, type );

				if ( digite === "fx" && fila[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	desenfileirar: function(tipo) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( tipo ) {
		return this.queue( type || "fx", [] );
	},

	// Obtém uma promessa resolvida quando filas de um determinado tipo
	// são esvaziados (fx é o tipo padrão)
	promessa: função (tipo, obj) {
		var tmp,
			contagem = 1,
			defer = jQuery.Deferred(),
			elementos = isso,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith(elementos, [elementos]);
				}
			};

		if ( tipo do tipo !== "string" ) {
			obj = tipo;
			tipo = indefinido;
		}
		tipo = tipo || "fx";

		enquanto eu-- ) {
			tmp = dataPriv.get(elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.vazio ) {
				contar++;
				tmp.empty.add( resolver );
			}
		}
		resolver();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([az%]*)$", "i" );


var cssExpand = ["Superior", "Direita", "Inferior", "Esquerda"];

var documentElement = document.documentElement;



	var isAttached = function(elem) {
			return jQuery.contains(elem.ownerDocument, elem);
		},
		composto = { composto: verdadeiro };

	// Suporte: IE 9 - 11+, Edge 12 - 18+, apenas iOS 10.0 - 10.2
	// Verifica o anexo nos limites do shadow DOM quando possível (gh-3504)
	// Suporte: apenas iOS 10.0-10.2
	// As primeiras versões do iOS 10 suportam `attachShadow`, mas não `getRootNode`,
	// levando a erros. Precisamos verificar `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function(elem) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composto ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function(elem, el) {

		// isHiddenWithinTree pode ser chamado da função jQuery#filter;
		// nesse caso, o elemento será o segundo argumento
		elem = el || elemento;

		// O estilo inline supera todos
		return elem.style.display === "nenhum" ||
			elem.style.display === "" &&

			// Caso contrário, verifica o estilo computado
			// Suporte: Firefox <=43 - 45
			// Elementos desconectados podem ter display calculado: nenhum, então primeiro confirme se elem é
			// no documento.
			isAttached(elem) &&

			jQuery.css( elem, "exibir" ) === "nenhum";
	};



function ajusteCSS(elem, prop, valueParts, tween) {
	var ajustado, escala,
		maxIterações = 20,
		valoratual = interpolação?
			função() {
				return tween.cur();
			} :
			função() {
				return jQuery.css(elem, prop, "" );
			},
		inicial = valoratual(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// O cálculo do valor inicial é necessário para possíveis incompatibilidades de unidades
		inicialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unidade !== "px" && +inicial ) &&
			rcssNum.exec(jQuery.css(elem, prop));

	if ( inicialInUnit && inicialInUnit[ 3 ] !== unidade ) {

		// Suporte: Firefox <=54
		// Reduzir pela metade o valor de destino da iteração para evitar interferência dos limites superiores do CSS (gh-2144)
		inicial = inicial / 2;

		// Unidades de confiança relatadas por jQuery.css
		unidade = unidade || inicialInUnit[ 3 ];

		// Aproxima iterativamente de um ponto inicial diferente de zero
		inicialInUnit = +inicial || 1;

		while ( maxIterations-- ) {

			// Avalia e atualiza nosso melhor palpite (duplicando palpites que zeram).
			// Termina se a escala for igual ou cruzada a 1 (tornando o produto antigo*novo não positivo).
			jQuery.style(elem, prop, initialInUnit + unidade);
			if ( (1 - escala ) * ( 1 - ( escala = currentValue() / inicial || 0,5 ) ) <= 0 ) {
				maxIterações = 0;
			}
			inicialInUnit = inicialInUnit / escala;

		}

		inicialInUnit = inicialInUnit * 2;
		jQuery.style(elem, prop, initialInUnit + unidade);

		// Certifique-se de atualizar as propriedades de interpolação mais tarde
		valueParts = valueParts || [];
	}

	if ( partes de valor ) {
		inicialInUnit = +inicialInUnit || +inicial || 0;

		// Aplicar deslocamento relativo (+=/-=) se especificado
		ajustado = valueParts[ 1 ] ?
			inicialInUnit + (valorParts[ 1 ] + 1 ) * valorParts[ 2 ] :
			+valorPartes[ 2 ];
		if (entre) {
			tween.unit = unidade;
			tween.start = inicialInUnit;
			tween.end = ajustado;
		}
	}
	retorno ajustado;
}


var defaultDisplayMap = {};

function getDefaultDisplay(elem) {
	temperatura variável,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if (exibir) {
		exibição de retorno;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if (exibir === "nenhum" ) {
		exibição = "bloco";
	}
	defaultDisplayMap[ nodeName ] = exibir;

	exibição de retorno;
}

função mostrarOcultar(elementos, mostrar) {
	exibição var, elem,
		valores = [],
		índice = 0,
		comprimento = elementos.comprimento;

	// Determina novo valor de exibição para elementos que precisam mudar
	for ( ; índice < comprimento; índice++ ) {
		elem = elementos[ índice ];
		if (!elem.style) {
			continuar;
		}

		display = elem.style.display;
		se ( mostrar ) {

			// Como forçamos a visibilidade sobre os elementos ocultos em cascata, um imediato (e lento)
			// a verificação é necessária neste primeiro loop, a menos que tenhamos um valor de exibição não vazio (seja
			// inline ou prestes a ser restaurado)
			if (exibir === "nenhum" ) {
				valores[ index ] = dataPriv.get( elem, "display" ) || nulo;
				if (!valores[ índice ] ) {
					elem.style.display = "";
				}
			}
			if (elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				valores[ index ] = getDefaultDisplay( elem );
			}
		} outro {
			if (display!== "nenhum") {
				valores[ índice ] = "nenhum";

				// Lembre-se do que estamos substituindo
				dataPriv.set(elem, "display", display);
			}
		}
	}

	// Define a exibição dos elementos em um segundo loop para evitar refluxo constante
	for (índice = 0; índice < comprimento; índice++) {
		if (valores[ índice ] != null ) {
			elementos[ índice ].estilo.display = valores[ índice ];
		}
	}

	elementos de retorno;
}

jQuery.fn.extend( {
	mostre: função() {
		return showHide( this, true );
	},
	ocultar: função() {
		return mostrarOcultar(este);
	},
	alternar: function(estado) {
		if (tipo de estado === "booleano" ) {
			estado de retorno? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery(este).show();
			} outro {
				jQuery(este).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([az][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( função() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Suporte: Android 4.0 - 4.3 apenas
	// Verifica o estado perdido se o nome estiver definido (trac-11217)
	// Suporte: Windows Web Apps (WWA)
	// `name` e `type` devem usar .setAttribute para WWA (trac-14901)
	input.setAttribute( "tipo", "radio" );
	input.setAttribute( "verificado", "verificado" );
	input.setAttribute( "nome", "t" );

	div.appendChild( entrada );

	// Suporte: Android <=4.1 apenas
	// O WebKit mais antigo não clona o estado verificado corretamente em fragmentos
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Suporte: IE <=11 somente
	// Certifique-se de que textarea (e caixa de seleção) defaultValue está clonado corretamente
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Suporte: IE <=9 apenas
	// IE <=9 substitui tags <option> por seus conteúdos quando inseridos fora de
	// o elemento selecionado.
	div.innerHTML = "<opção></opção>";
	support.option = !!div.lastChild;
} )();


// Temos que fechar essas tags para suportar XHTML (trac-13200)
var wrapMap = {

	// Analisadores XHTML não inserem magicamente elementos no
	// da mesma forma que os analisadores de sopa de tags fazem. Então não podemos encurtar
	// isso omitindo <tbody> ou outros elementos necessários.
	cabeçalho: [ 1, "<tabela>", "</tabela>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_padrão: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Suporte: IE <=9 apenas
if (!suporte.opção) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( contexto, tag ) {

	// Suporte: IE <=9 - 11 somente
	// Use typeof para evitar invocação de método de argumento zero em objetos de host (trac-15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "indefinido" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "indefinido" ) {
		ret = context.querySelectorAll( tag || "*" );

	} outro {
		ret = [];
	}

	if ( tag === indefinido || tag && nodeName( contexto, tag ) ) {
		return jQuery.merge( [ contexto ], ret );
	}

	retorno ret;
}


// Marca os scripts como já avaliados
function setGlobalEval(elems, refElements) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elementos[ i ],
			"globalEval",
			!refElementos || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

função buildFragment(elems, contexto, scripts, seleção, ignorados) {
	var elem, tmp, tag, embrulhar, anexado, j,
		fragmento = context.createDocumentFragment(),
		nós = [],
		eu = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[i];

		if (elem || elem === 0) {

			// Adiciona nós diretamente
			if (toType(elem) === "objeto" ) {

				// Suporte: Android <=4.0 apenas, PhantomJS 1 apenas
				// push.apply(_, arraylike) lança no antigo WebKit
				jQuery.merge( nós, elem.nodeType ? [ elem ] : elem );

			// Converte não-html em um nó de texto
			} else if (!rhtml.test(elem)) {
				nodes.push( context.createTextNode( elem ) );

			// Converte html em nós DOM
			} outro {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Desserializa uma representação padrão
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ marca ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Desce pelos wrappers até o conteúdo correto
				j = embrulhar[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Suporte: Android <=4.0 apenas, PhantomJS 1 apenas
				// push.apply(_, arraylike) lança no antigo WebKit
				jQuery.merge( nós, tmp.childNodes );

				// Lembre-se do contêiner de nível superior
				tmp = fragmento.firstChild;

				// Certifique-se de que os nós criados sejam órfãos (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper do fragmento
	fragmento.textContent = "";

	i = 0;
	while ((elem = nós[i++])) {

		// Ignora elementos já na coleção de contexto (trac-4087)
		if (seleção && jQuery.inArray(elem, seleção) > -1) {
			se (ignorado) {
				ignorado.push(elem);
			}
			continuar;
		}

		anexado = isAttached(elem);

		// Anexar ao fragmento
		tmp = getAll(fragment.appendChild(elem), "script");

		// Preserva o histórico de avaliação do script
		if ( anexado ) {
			setGlobalEval( tmp );
		}

		// Captura executáveis
		if (scripts) {
			j = 0;
			while ((elem = tmp[j++])){
				if ( rscriptType.test(elem.type || "" ) ) {
					scripts.push(elem);
				}
			}
		}
	}

	fragmento de retorno;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	retornar verdadeiro;
}

function returnFalse() {
	retorna falso;
}

função on(elem, tipos, seletor, dados, fn, um) {
	var origem, tipo;

	// Os tipos podem ser um mapa de tipos/manipuladores
	if (tipo de tipos === "objeto" ) {

		// (tipos-objeto, seletor, dados)
		if (tipo de seletor !== "string" ) {

			// (tipos-objeto, dados)
			dados = dados || seletor;
			seletor = indefinido;
		}
		for ( digite tipos ) {
			on(elem, type, selector, data, types[ type ], one );
		}
		elemento de retorno;
	}

	if ( dados == null && fn == null ) {

		// (tipos, fn)
		fn = seletor;
		dados = seletor = indefinido;
	} senão if ( fn == nulo ) {
		if (tipo de seletor === "string" ) {

			// (tipos, seletor, fn)
			fn = dados;
			dados = indefinido;
		} outro {

			// (tipos, dados, fn)
			fn = dados;
			dados = seletor;
			seletor = indefinido;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} senão if ( !fn ) {
		elemento de retorno;
	}

	if ( um === 1 ) {
		origemFn = fn;
		fn = função( evento ) {

			// Pode usar um conjunto vazio, pois o evento contém as informações
			jQuery().off( evento );
			return origFn.apply( isto, argumentos );
		};

		// Use o mesmo guid para que o chamador possa remover usando origFn
		fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
	}
	return elem.each( function() {
		jQuery.event.add(este, tipos, fn, dados, seletor);
	} );
}

/*
 * Funções auxiliares para gerenciamento de eventos -- não fazem parte da interface pública.
 * Adereços à biblioteca addEvent de Dean Edwards para muitas das ideias.
 */
jQuery.event = {

	globais: {},

	add: function(elem, types, handler, data, selector) {

		var handleObjIn, eventHandle, tmp,
			eventos, t, handleObj,
			especial, manipuladores, tipo, namespaces, origType,
			elemData = dataPriv.get(elem);

		// Apenas anexa eventos a objetos que aceitam dados
		if (!acceptData(elem)) {
			retornar;
		}

		// O chamador pode passar um objeto de dados personalizados no lugar do manipulador
		if (manipulador.manipulador) {
			handleObjIn = manipulador;
			manipulador = handleObjIn.handler;
			seletor = handleObjIn.seletor;
		}

		// Certifique-se de que seletores inválidos lancem exceções no tempo de anexação
		// Avalia contra documentElement no caso de elem ser um nó não-elemento (por exemplo, document)
		if (seletor) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Certifique-se de que o manipulador tenha um ID exclusivo, usado para localizá-lo/removê-lo posteriormente
		if (!handler.guid) {
			handler.guid = jQuery.guid++;
		}

		// Inicia a estrutura de eventos do elemento e o manipulador principal, se este for o primeiro
		if ( !( eventos = elemData.events ) ) {
			eventos = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Descarta o segundo evento de um jQuery.event.trigger() e
				// quando um evento é chamado depois que uma página foi descarregada
				return typeof jQuery !== "indefinido" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply(elem, argumentos): indefinido;
			};
		}

		// Trata vários eventos separados por um espaço
		tipos = ( tipos || "" ).match( rnothtmlwhite ) || [ "" ];
		t = tipos.comprimento;
		enquanto ( t-- ) {
			tmp = rtypenamespace.exec(tipos[t]) || [];
			tipo = tipo de origem = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// *deve* haver um tipo, sem anexar manipuladores somente de namespace
			if ( !tipo ) {
				continuar;
			}

			// Se o evento mudar de tipo, use os manipuladores de eventos especiais para o tipo alterado
			especial = jQuery.event.special[ tipo ] || {};

			// Se o seletor for definido, determina o tipo de API do evento especial, caso contrário, o tipo fornecido
			type = ( seletor ? special.delegateType : special.bindType ) || tipo;

			// Atualização especial com base no novo tipo de redefinição
			especial = jQuery.event.special[ tipo ] || {};

			// handleObj é passado para todos os manipuladores de eventos
			handleObj = jQuery.extend( {
				tipo: tipo,
				origType: origType,
				dados: dados,
				manipulador: manipulador,
				guid: handler.guid,
				seletor: seletor,
				needContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn);

			// Inicia a fila do manipulador de eventos se formos os primeiros
			if (!(manipuladores = eventos[tipo])){
				manipuladores = eventos[tipo] = [];
				manipuladores.delegateCount = 0;

				// Só use addEventListener se o manipulador de eventos especiais retornar false
				if (!special.set up ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if (elem.addEventListener) {
						elem.addEventListener( tipo, eventHandle );
					}
				}
			}

			if ( especial.add ) {
				special.add.call(elem, handleObj);

				if (!handleObj.handler.guid) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Adiciona à lista de manipuladores do elemento, delegados na frente
			if (seletor) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} outro {
				handlers.push( handleObj );
			}

			// Acompanhe quais eventos já foram usados, para otimização de eventos
			jQuery.event.global[tipo] = verdadeiro;
		}

	},

	// Desanexa um evento ou conjunto de eventos de um elemento
	remover: função(elem, tipos, manipulador, seletor, mappedTypes) {

		var j, origCount, tmp,
			eventos, t, handleObj,
			especial, manipuladores, tipo, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( eventos = elemData.events ) ) {
			retornar;
		}

		// Uma vez para cada type.namespace em tipos; tipo pode ser omitido
		tipos = ( tipos || "" ).match( rnothtmlwhite ) || [ "" ];
		t = tipos.comprimento;
		enquanto ( t-- ) {
			tmp = rtypenamespace.exec(tipos[t]) || [];
			tipo = tipo de origem = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Desvincula todos os eventos (neste namespace, se fornecido) para o elemento
			if ( !tipo ) {
				for ( digite eventos ) {
					jQuery.event.remove(elem, tipo + tipos[ t ], manipulador, seletor, true );
				}
				continuar;
			}

			especial = jQuery.event.special[ tipo ] || {};
			type = ( seletor ? special.delegateType : special.bindType ) || tipo;
			manipuladores = eventos[ tipo ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove eventos correspondentes
			origCount = j = manipuladores.comprimento;
			while ( j-- ) {
				handleObj = manipuladores[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					(! manipulador || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !seletor || seletor === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( especial.remove ) {
						special.remove.call(elem, handleObj);
					}
				}
			}

			// Remove o manipulador de eventos genérico se removemos algo e não existem mais manipuladores
			// (evita potencial para recursão sem fim durante a remoção de manipuladores de eventos especiais)
			if (origCount && !handlers.length) {
				if (!special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent(elem, type, elemData.handle);
				}

				excluir eventos[tipo];
			}
		}

		// Remove os dados e o expando se não for mais usado
		if (jQuery.isEmptyObject(eventos)) {
			dataPriv.remove( elem, "manipular eventos" );
		}
	},

	dispatch: function(nativeEvent) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array(argumentos.comprimento),

			// Cria um jQuery.Event gravável a partir do objeto de evento nativo
			evento = jQuery.event.fix(nativeEvent),

			manipuladores = (
				dataPriv.get( this, "eventos" ) || Object.create( null )
			)[ event.type ] || [],
			especial = jQuery.event.special[ event.type ] || {};

		// Use o jQuery.Event corrigido em vez do evento nativo (somente leitura)
		args[ 0 ] = evento;

		for ( i = 1; i < argumentos.comprimento; i++ ) {
			args[i] = argumentos[i];
		}

		event.delegateTarget = this;

		// Chame o gancho preDispatch para o tipo mapeado e deixe-o sair, se desejado
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			retornar;
		}

		// Determina os manipuladores
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Executa os delegados primeiro; eles podem querer parar a propagação abaixo de nós
		i = 0;
		while ( (matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Se o evento tiver namespace, cada manipulador só será invocado se for
				// especialmente universal ou seus namespaces são um superconjunto do evento.
				if (!event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply(matched.elem, args );

					if ( ret !== indefinido ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Chama o gancho postDispatch para o tipo mapeado
		if ( especial.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return evento.resultado;
	},

	manipuladores: função (evento, manipuladores) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegadoCount = manipuladores.delegateCount,
			cur = evento.destino;

		// Encontra manipuladores delegados
		if ( delegadoCount &&

			// Suporte: IE <=9
			// Árvores de instância SVG <use> de buraco negro (trac-13180)
			cur.nodeType &&

			// Suporte: Firefox <=42
			// Suprime cliques que violam especificações indicando um botão de ponteiro não primário (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Suporte: somente IE 11
			// ...mas não os "cliques" das teclas de seta das entradas de rádio, que podem ter `button` -1 (gh-2343)
			!( event.type === "clique" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Não verifica não-elementos (trac-13208)
				// Não processar cliques em elementos desabilitados (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegadoCount; i++ ) {
						handleObj = manipuladores[i];

						// Não entra em conflito com as propriedades Object.prototype (trac-13203)
						sel = handleObj.selector + " ";

						if (matchedSelectors[sel] === indefinido) {
							matchedSelectors[sel] = handleObj.needsContext ?
								jQuery(sel, this).index(cur) > -1:
								jQuery.find(sel, this, null, [ cur ] ).length;
						}
						if (matchedSelectors[sel]) {
							matchedHandlers.push( handleObj );
						}
					}
					if (matchedHandlers.length) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Adiciona os manipuladores restantes (ligados diretamente)
		cur = este;
		if ( delegadoCount < manipuladores.comprimento ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function(nome, gancho) {
		Object.defineProperty( jQuery.Event.prototype, nome, {
			enumerável: verdadeiro,
			configurável: verdadeiro,

			get: isFunction(gancho) ?
				função() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				função() {
					if ( this.originalEvent ) {
						return this.originalEvent[ nome ];
					}
				},

			definir: função( valor ) {
				Object.defineProperty( this, name, {
					enumerável: verdadeiro,
					configurável: verdadeiro,
					gravável: verdadeiro,
					valor: valor
				} );
			}
		} );
	},

	fix: function(originalEvent) {
		return originalEvent[ jQuery.expando ] ?
			evento original:
			novo jQuery.Event(originalEvent);
	},

	especial: {
		carregar: {

			// Evita que eventos image.load acionados borbulhem para window.load
			noBubble: true
		},
		clique: {

			// Utilize o evento nativo para garantir o estado correto para entradas verificáveis
			configuração: function( dados ) {

				// Para compressibilidade mútua com _default, substitua o acesso `this` por uma variável local.
				// `|| data` é um código morto destinado apenas a preservar a variável por meio da minificação.
				var el = this || dados;

				// Reivindica o primeiro manipulador
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "entrada") ) {

					// dataPriv.set( el, "clique", ... )
					alavancagemNative(el, "clique", true );
				}

				// Retorna false para permitir o processamento normal no chamador
				retorna falso;
			},
			gatilho: function( dados ) {

				// Para compressibilidade mútua com _default, substitua o acesso `this` por uma variável local.
				// `|| data` é um código morto destinado apenas a preservar a variável por meio da minificação.
				var el = this || dados;

				// Força a configuração antes de disparar um clique
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "entrada") ) {

					alavancagemNative(el, "clique");
				}

				// Retorna não falso para permitir a propagação normal do caminho do evento
				retornar verdadeiro;
			},

			// Para consistência entre navegadores, suprima .click() nativo nos links
			// Também evita isso se estivermos dentro de uma pilha de evento nativo alavancado
			_padrão: função( evento ) {
				var destino = evento.destino;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get(alvo, "clique" ) ||
					node(destino, "a");
			}
		},

		antes de descarregar: {
			postDispatch: function(evento) {

				// Suporte: Firefox 20+
				// O Firefox não alerta se o campo returnValue não estiver definido.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Assegure a presença de um ouvinte de evento que lida com eventos acionados manualmente
// eventos sintéticos interrompendo o progresso até serem invocados novamente em resposta a
// Eventos *nativos* que disparam diretamente, garantindo que as mudanças de estado tenham
// já ocorreu antes de outros ouvintes serem invocados.
função alavancagemNative( el, tipo, isSetup ) {

	// `isSetup` ausente indica uma chamada de gatilho, que deve forçar a configuração por meio de jQuery.event.add
	if (!isSetup) {
		if (dataPriv.get(el, type) === indefinido) {
			jQuery.event.add(el, tipo, returnTrue);
		}
		retornar;
	}

	// Registra o controlador como um manipulador universal especial para todos os namespaces de evento
	dataPriv.set(el, tipo, false);
	jQuery.event.add( el, tipo, {
		espaço de nomes: falso,
		manipulador: função (evento) {
			var resultado,
				salvo = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				if ( !saved ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					this[ type ]();
					result = dataPriv.get( this, type );
					dataPriv.set( this, type, false );

					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						return result;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering
				// the native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved ) {

				// ...and capture the result
				dataPriv.set( this, type, jQuery.event.trigger(
					saved[ 0 ],
					saved.slice( 1 ),
					this
				) );

				// Abort handling of the native event by all jQuery handlers while allowing
				// native handlers on the same element to run. On target, this is achieved
				// by stopping immediate propagation just on the jQuery event. However,
				// the native event is re-wrapped by a jQuery one on each level of the
				// propagation so the only way to stop it for jQuery is to stop it for
				// everyone via native `stopPropagation()`. This is not a problem for
				// focus/blur which don't bubble, but it does also stop click on checkboxes
				// and radios. We accept this limitation.
				event.stopPropagation();
				event.isImmediatePropagationStopped = returnTrue;
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {

	function focusMappedHandler( nativeEvent ) {
		if ( document.documentMode ) {

			// Support: IE 11+
			// Attach a single focusin/focusout handler on the document while someone wants
			// focus/blur. This is because the former are synchronous in IE while the latter
			// are async. In other browsers, all those handlers are invoked synchronously.

			// `handle` from private data would already wrap the event, but we need
			// to change the `type` here.
			var handle = dataPriv.get( this, "handle" ),
				event = jQuery.event.fix( nativeEvent );
			event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
			event.isSimulated = true;

			// First, handle focusin/focusout
			handle( nativeEvent );

			// ...then, handle focus/blur
			//
			// focus/blur don't bubble while focusin/focusout do; simulate the former by only
			// invoking the handler at the lower level.
			if ( event.target === event.currentTarget ) {

				// The setup part calls `leverageNative`, which, in turn, calls
				// `jQuery.event.add`, so event handle will already have been set
				// by this point.
				handle( event );
			}
		} else {

			// For non-IE browsers, attach a single capturing handler on the document
			// while someone wants focusin/focusout.
			jQuery.event.simulate( delegateType, nativeEvent.target,
				jQuery.event.fix( nativeEvent ) );
		}
	}

	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			var attaches;

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, true );

			if ( document.documentMode ) {

				// Support: IE 9 - 11+
				// We use the same native handler for focusin & focus (and focusout & blur)
				// so we need to coordinate setup & teardown parts between those events.
				// Use `delegateType` as the key as `type` is already used by `leverageNative`.
				attaches = dataPriv.get( this, delegateType );
				if ( !attaches ) {
					this.addEventListener( delegateType, focusMappedHandler );
				}
				dataPriv.set( this, delegateType, ( attaches || 0 ) + 1 );
			} else {

				// Return false to allow normal processing in the caller
				return false;
			}
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		teardown: function() {
			var attaches;

			if ( document.documentMode ) {
				attaches = dataPriv.get( this, delegateType ) - 1;
				if ( !attaches ) {
					this.removeEventListener( delegateType, focusMappedHandler );
					dataPriv.remove( this, delegateType );
				} else {
					dataPriv.set( this, delegateType, attaches );
				}
			} else {

				// Return false to indicate standard teardown should be applied
				return false;
			}
		},

		// Suppress native focus or blur if we're currently inside
		// a leveraged native-event stack
		_default: function( event ) {
			return dataPriv.get( event.target, type );
		},

		delegateType: delegateType
	};

	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	//
	// Support: IE 9 - 11+
	// To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
	// attach a single handler for both events in IE.
	jQuery.event.special[ delegateType ] = {
		setup: function() {

			// Handle: regular nodes (via `this.ownerDocument`), window
			// (via `this.document`) & document (via `this`).
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType );

			// Support: IE 9 - 11+
			// We use the same native handler for focusin & focus (and focusout & blur)
			// so we need to coordinate setup & teardown parts between those events.
			// Use `delegateType` as the key as `type` is already used by `leverageNative`.
			if ( !attaches ) {
				if ( document.documentMode ) {
					this.addEventListener( delegateType, focusMappedHandler );
				} else {
					doc.addEventListener( type, focusMappedHandler, true );
				}
			}
			dataPriv.set( dataHolder, delegateType, ( attaches || 0 ) + 1 );
		},
		teardown: function() {
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType ) - 1;

			if ( !attaches ) {
				if ( document.documentMode ) {
					this.removeEventListener( delegateType, focusMappedHandler );
				} else {
					doc.removeEventListener( type, focusMappedHandler, true );
				}
				dataPriv.remove( dataHolder, delegateType );
			} else {
				dataPriv.set( dataHolder, delegateType, attaches );
			}
		}
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (trac-8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {

							// Unwrap a CDATA section containing script contents. This shouldn't be
							// needed as in XML documents they're already not visible when
							// inspecting element contents and in HTML documents they have no
							// meaning but we're preserving that logic for backwards compatibility.
							// This will be removed completely in 4.0. See gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew jQuery#find here for performance reasons:
			// https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (trac-8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( name ),

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, trac-12537)
	//   .css('--customProperty) (gh-3144)
	if ( computed ) {

		// Support: IE <=9 - 11+
		// IE only supports `"float"` in `getPropertyValue`; in computed styles
		// it's only available as `"cssFloat"`. We no longer modify properties
		// sent to `.css()` apart from camelCasing, so we need to check both.
		// Normally, this would create difference in behavior: if
		// `getPropertyValue` returns an empty string, the value returned
		// by `.css()` would be `undefined`. This is usually the case for
		// disconnected elements. However, in IE even disconnected elements
		// with no styles return `"none"` for `getPropertyValue( "float" )`
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( isCustomProp && ret ) {

			// Support: Firefox 105+, Chrome <=105+
			// Spec requires trimming whitespace for custom properties (gh-4926).
			// Firefox only trims leading whitespace. Chrome just collapses
			// both leading & trailing whitespace to a single space.
			//
			// Fall back to `undefined` if empty string returned.
			// This collapses a missing definition with property defined
			// and set to an empty string but there's no standard API
			// allowing us to differentiate them without a performance penalty
			// and returning `undefined` aligns with older jQuery.
			//
			// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
			// as whitespace while CSS does not, but this is not a problem
			// because CSS preprocessing replaces them with U+000A LINE FEED
			// (which *is* CSS whitespace)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" ) || undefined;
		}

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0,
		marginDelta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		// Count margin delta separately to only add it after scroll gutter adjustment.
		// This is needed to make negative margins work with `outerHeight( true )` (gh-3982).
		if ( box === "margin" ) {
			marginDelta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta + marginDelta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		animationIterationCount: true,
		aspectRatio: true,
		borderImageSlice: true,
		columnCount: true,
		flexGrow: true,
		flexShrink: true,
		fontWeight: true,
		gridArea: true,
		gridColumn: true,
		gridColumnEnd: true,
		gridColumnStart: true,
		gridRow: true,
		gridRowEnd: true,
		gridRowStart: true,
		lineHeight: true,
		opacity: true,
		order: true,
		orphans: true,
		scale: true,
		widows: true,
		zIndex: true,
		zoom: true,

		// SVG-related
		fillOpacity: true,
		floodOpacity: true,
		stopOpacity: true,
		strokeMiterlimit: true,
		strokeOpacity: true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (trac-7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug trac-9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (trac-7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


// Based off of the plugin by Clint Helfers, with permission.
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// Use proper attribute retrieval (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += className + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );

				// This expression is here for better compressibility (see addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Remove *all* instances
						while ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + className + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var classNames, className, i, self,
			type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		classNames = classesToArray( value );

		return this.each( function() {
			if ( isValidValue ) {

				// Toggle individual class names
				self = jQuery( this );

				for ( i = 0; i < classNames.length; i++ ) {
					className = classNames[ i ];

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (trac-14686, trac-14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (trac-2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (trac-9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );