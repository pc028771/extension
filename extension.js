Array.prototype.find = function(findKey, findValue) {
  var result = [];

  for(var i=this.length-1 ; i>=0 ; i--)
  {
	  if( this[i][findKey] == findValue )
	  	result.unshift(this[i]);
  }

  return result;
};
Array.prototype.walk = function(callback, childName, layer) {
  var l = layer || 0;

	for(var i=0 ; i < this.length ; i++ )
	{
		if( callback instanceof Function )
			callback(this[i], i, l);

		if( childName && this[i][childName] instanceof Array )
			this[i][childName].walk(callback, childName, l + 1);
	}
};

