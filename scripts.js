// replace value below with your Account ID //
var dsAccountId = '7f400d1a-a306-4ce2-ae02-92c2da43a79e';
//  replace value below with your Clickwrap ID //
var dsClickwrapId = '9e54245b-9960-444e-8287-a1d01e249ffc';
// replace value below with modal or inline depending on your clickwrap type //
var clickDisplayType = 'modal';
// replace logo URL below with your customers logo url.  transparent works best //
var logoUrl = 'https://www.innov8ive.app/LOGO.png';
// replace with your brand hex code.  changes color of header text and button background //
var fontColor = '#3d00b2';
// replace with a hex code of your liking.  changes text color on the submit button //
var buttonTextColor = '#ffffff';

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
 }

function loadImage() {
  document.getElementById ("customerLogo").src = logoUrl;
  document.getElementById ("jtHeader").style.color = fontColor;
  document.getElementById ("signInText").style.color = fontColor;
  document.getElementById ("loginButton").style.background = fontColor;
  document.getElementById ("loginButton").style.color = buttonTextColor;
}

function showClickWrapper() {
  document.getElementById ("loginButton").style.display = "none";
  document.getElementById ("spinner").style.display = "block";
  var x = makeid(12) + '-' + document.getElementById ("email").value;
  document.getElementById ("userId").value = x;
  docuSignClick.Clickwrap.render({
      environment: 'https://demo.docusign.net',
      accountId: dsAccountId,
      clickwrapId: dsClickwrapId,
      clientUserId: x,
      format: clickDisplayType,
      onAgreed: callbackFnAgreed,
			onMustAgree: callbackFnMustAgree,
      onDeclined: callbackFnDeclined,
			onError: callbackFnError
    }, '#ds-terms-of-service');
  }

function callbackFnAgreed(){
		console.log ("callbackFnAgreed");
		document.getElementById ('signUpForm').style.display = "none";
		document.getElementById ('ds-terms-of-service').style.display = "none";
		document.getElementById ('signUpFormAgreed').style.display = "block";
		document.getElementById ('cochref').href = "https://appdemo.docusign.com/documents?view=active&type=clickwraps";
	}

	function callbackFnMustAgree(e){
		console.log ("callbackFnMustAgree");
		document.getElementById ("spinner").style.display = "none";
    document.getElementById ("signUpForm").style.display = "none";
	}

	function callbackFnError(e){
		console.log ("callbackFnError");
	}

  function callbackFnDeclined(){
    console.log ("callbackFnDeclined");
    document.getElementById ('signUpForm').style.display = "none";
		document.getElementById ('ds-terms-of-service').style.display = "none";
		document.getElementById ('signUpDeclined').style.display = "block";
  }
