// JavaScript Document
function trimAll( strValue ) {
/************************************************
DESCRIPTION: Removes leading and trailing spaces.

PARAMETERS: Source string from which spaces will
  be removed;

RETURNS: Source string with whitespaces removed.
*************************************************/
 var objRegExp = /^(\s*)$/;

	//check for all spaces
	if(objRegExp.test(strValue)) {
	   strValue = strValue.replace(objRegExp, '');
	   if( strValue.length == 0)
		  return strValue;
	}

   //check for leading & trailing spaces
   objRegExp = /^(\s*)([\W\w]*)(\b\s*$)/;
   if(objRegExp.test(strValue)) {
	   //remove leading and trailing whitespace characters
	   strValue = strValue.replace(objRegExp, '$2');
	}
  return strValue;
}

function validateNotEmpty(strValue) {
/************************************************
DESCRIPTION: Validates that a string is not all
  blank (whitespace) characters.

PARAMETERS:
   strValue - String to be tested for validity

RETURNS:
   True if valid, otherwise false.
*************************************************/
   var strTemp = strValue;
   strTemp = trimAll(strTemp);
   if(strTemp.length > 0){
	 return true;
   }
   return false;
}

function validateEmail(strValue) {
/************************************************
DESCRIPTION: Validates that a string contains a
  valid email pattern.

 PARAMETERS:
   strValue - String to be tested for validity

RETURNS:
   True if valid, otherwise false.

REMARKS: Accounts for email with country appended
  does not validate that email contains valid URL
  type (.com, .gov, etc.) or valid country suffix.
*************************************************/

	//var emailReg = "^[\\w-_\.]*[\\w-_\.]\@[\\w]\.+[\\w]+[\\w]$";
	//var regex = new RegExp(emailReg);
	//return regex.test(src);


	//var objRegExp  = /(^[a-z]([a-z_\.]*)@([a-z_\.]*)([.][a-z]{3})$)|(^[a-z]([a-z_\.]*)@([a-z_\.]*)(\.[a-z]{3})(\.[a-z]{2})*$)/i;
	//var objRegExp = /^\w[-.\w]*\@[-a-b0-9]+(?:\.[-a-b0-9]+)*\.(?:com|edu|biz|org|gov|int|info|mil|net|name|museum|coop|aero|[a-z][a-z])\b/;
	//from M. Bati 07/17/2006
	//var objRegExp  = /^[\w][\w\.-]*[\w]@[\w][\w\.-]*[\w]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$/;
	var objRegExp  = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*\.(\w{2}|(com|net|org|edu|int|mil|gov|arpa|biz|aero|name|coop|info|pro|museum))$/;

	//check for valid email
	if(!objRegExp.test(strValue))
		return false;
	else
		return true;

}

function validateSubmitEmail(value){
	if(!validateNotEmpty(value)){
		alert("Your email address is empty!");
		return false;
	}
	else if(!validateEmail(value)){
		alert("The email address you entered does not have a valid \n syntax.  Please re-enter the address and try again.");
		return false;
	}
	return true;
}

function toggleDisplay(mainCat, subCat) {

    sub = document.getElementById(subCat);
    main = document.getElementById(mainCat);

    if (sub.style.display == "none") {
        sub.style.display = "block";

        var divs = main.getElementsByTagName("div");
        if (divs.length > 0)
            main.getElementsByTagName("div")[1].firstChild.nodeValue = '-';
    }
    else {
        sub.style.display = "none";

        var divs = main.getElementsByTagName("div");
        if (divs.length > 0)
            main.getElementsByTagName("div")[1].firstChild.nodeValue = '+';
    }
}