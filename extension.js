Array.prototype.findIndexArray = function(findKey, findValue) {
	var result = [];

	for (var i = this.length - 1; i >= 0; i--) {
	  if( this[i][findKey] == findValue )
	  	result.unshift(i);
	};

	return result;
};
Array.prototype.findIndex = function(findKey, findValue) {
	var i = 0,
			length = this.length;

	for (var i = 0; i < length; i++) {
	  if( this[i][findKey] == findValue )
	  	return i;
	};

	return -1;
};
Array.prototype.fetchArray = function(findKey, findValue) {
	var result = [];

	for (var i = this.length - 1; i >= 0; i--) {
	  if( this[i][findKey] == findValue )
	  	result.concat(this.splice(i, 1));
	};

	return result.reverse();
};
Array.prototype.fetch = function(findKey, findValue) {
	var i = 0,
			length = this.length;

	for (var i = 0; i < length; i++) {
	  if( this[i][findKey] == findValue )
	  	return this.splice(i, 1);
	};
};
Array.prototype.findArray = function(findKey, findValue) {
	var result = [];

	for (var i = this.length - 1; i >= 0; i--) {
	  if( this[i][findKey] == findValue )
	  	result.unshift(this[i]);
	};

	return result;
};
Array.prototype.find = function(findKey, findValue) {
	var i = 0,
			length = this.length;

	for (var i = 0; i < length; i++) {
	  if( this[i][findKey] == findValue )
	  	return this[i];
	};
};
Array.prototype.nestwalk = function(callback, childName, layer) {
  var l = layer || 0,
  		childName = childName || 'children';

	for(var i=0 ; i < this.length ; i++ )
	{
		if( callback instanceof Function )
			callback(this[i], i, l);

		if( childName && this[i][childName] instanceof Array )
			this[i][childName].nestwalk(callback, childName, l + 1);
	}
};