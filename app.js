/*!
 * vue.js clone
 * A lightweight fast and intuitive JavaScript library like Vue.JS
 * (c) 2020 Liongram Inc
 * MIT License
 * http://github.com/vue.js%20clone
 */
 function cloneApp() {
 class newApp extends HTMLElement {
	 constructor() {
		 super();
		 this.innerHTML = '<div style="background-color:black;"><center><img src="applogo.png"></img><br><p style="color:white; font-family:Billabong; font-size:29px;">Edit app.js and save and refresh to reload</p></center></div>';
	 }
 }
 
 window.customElements.define('app-clone', newApp);
 }
 
  function cloneInstagramProfile() {
 class cloneigprofile extends HTMLElement {
	 constructor() {
		 super();
		 this.innerHTML = '<img src="cat.jpg" style="border-radius:50%; border:3px #DD2A7B solid; width:90px; height:90px;"></img>';
	 }
 }
 
 window.customElements.define('instagram-profile', cloneigprofile);
 }
 
 function cloneHelloWorld() {
 class clonehw extends HTMLElement {
	 constructor() {
		 super();
		 this.innerHTML = 'Hello World';
	 }
 }
 
 window.customElements.define('hello-world', clonehw);
 }
 
cloneApp();