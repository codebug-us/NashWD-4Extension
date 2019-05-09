// pig latin

document.addEventListener('DOMContentLoaded', function(){
	
	function englishToPigLatin(str){	
		
		var pigLatin = "";
		str = str.toLowerCase();
		var first = str.charAt(0);
		console.log(first);

		var ch = (first == "a" || first == "e" || first == "i" 
		|| first == "o" || first == "u");
		console.log(ch);

		if(ch){
			pigLatin = str + "yay";
		}else{
			var cons = first;
			var fHalf = "";
			for(var i = 1; i<str.length; ++i){
				first = str.charAt(i);
				if(!(first == "a" || first == "e" || first == "i" 
					|| first == "o" || first == "u")){
					cons = cons + first;
				}else{
					fHalf = str.substring(i, (str.length));
					pigLatin = fHalf + cons + "ay";
					return pigLatin;
				}
			}
		}
		return pigLatin;
	}

	var english = "string";
	console.log(englishToPigLatin(english));


	//piglatin to english
	//to be called igpayAtinlayOtayEnglishyay

	pigLatin="enoughyay";

	function igpayAtinlayOtayEnglishyay(pigLatin){
		var lastThree = pigLatin.substring(pigLatin.length-3,pigLatin.length);
		if(lastThree=="yay"){
			return pigLatin.substring(0,pigLatin.length-3);
		}else{
			//handle cons
			//istanceday
			var firstPart= lastThree.charAt(0);
			return firstPart+pigLatin.substring(0,pigLatin.length-3);

		}
		
	}

	console.log(igpayAtinlayOtayEnglishyay(pigLatin));













});