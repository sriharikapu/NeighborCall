window.onload = function () {
	init();

	function init() {
		renderSignUpPage();
		registerEventHandlers();
	}

	function registerEventHandlers() {
		var signUpNav = document.getElementById("btnSignUpNav");
		var signUpButton = document.getElementById("btnSignUp");
		var logInNav = document.getElementById("btnLogInNav");
		var logInButton = document.getElementById("btnLogIn");


		if (signUpNav) {
			signUpNav.addEventListener("click", renderSignUpPage);
		}

		if (signUpButton) {
			signUpButton.addEventListener("click", successfulRegistration);
		}

		if (logInNav) {
			logInNav.addEventListener("click", renderLogInPage);
		}

		if (logInButton) {
			logInButton.addEventListener("click", renderHomePage);
		}
	}

	function renderSignUpPage() {
		var html = `
		<div class="section">
			<h5>Sign Up</h5>
		 </div>
		<div class="divider"></div>
		<form>
			<div class="input-field col s6">
				<i class="material-icons prefix">account_circle</i>
				<input id="name" type="text" class="validate" required>
				<label for="name">My name is</label>
			</div>

			<div id="divAddressInputs" class="row no-margin">
				<!--<div class="input-field col s3">
					<i class="material-icons prefix">home</i>
					<input id="home" type="text" class="validate" required>
					<label for="home">I live at </label>
				</div>-->
		
				<div class="input-field col l4 s12">
					<i class="material-icons prefix">home</i>
					<input id="suburb" type="text" class="validate" required>
					<label for="suburb">My suburb is </label>
				</div>

				<div class="input-field col l4 s12">
					<i class="material-icons prefix">home</i>
					<input id="state" type="text" class="validate" required>
					<label for="state">My state/region is </label>
				</div>

				<div class="input-field col l4 s12">
					<i class="material-icons prefix">home</i>
					<input id="country" type="text" class="validate" required>
					<label for="country">My country is </label>
				</div>

			</div>

			<div class="input-field col s6">
				<i class="material-icons prefix">phone</i>
				<input id="telephone" type="tel" class="validate" required>
				<label for="telephone">Contact me on</label>
			</div>

			<div id="divTimeInput" class="input-field col s6">
				<i class="material-icons prefix">schedule</i>
				<input id="time" type="time" class="validate" required>
				<label for="time">Contact me around</label>
			</div>

			<div class="row">
				<div class="input-field col s12">
					<input id="btnSignUp" class="waves-effect waves-light btn-large" type="submit" value="Sign me up" />
				</div>
				<div class="no-margin input-field col s12">
					<a id="btnLogInNav">or log in instead</a>
				</div>
			</div>
		</form>`;

		var div = document.getElementById("content");
		div.innerHTML = html;
		registerEventHandlers();
	}

	function successfulRegistration() {
		var html = `
		<div class="section">
			<h5>Registration Complete</h5>
		 </div>
		<div class="divider"></div>
		<div class="row content-middle">
			<div class="col s12">
				<h2 class="success-title teal-text">Thank you!</h2>
				<i class="material-icons large success-icon">check_circle</i>
				<p>You have successfully registered with NeighbourCall, please <a id="btnLogInNav" class="teal-text">log in</a></p>
			</div>
		</div>
		`;

		var div = document.getElementById("content");
		div.innerHTML = html;
		registerEventHandlers();

	}

	function renderLogInPage() {
		var html = `
		<div class="section">
			<h5>Log In</h5>
		 </div>
		<div class="divider"></div>
		<form>
			<div class="input-field col s6">
				<i class="material-icons prefix">phone</i>
				<input id="telephone" type="tel" class="validate" required>
				<label for="telephone">Phone Number</label>
			</div>

			<div id="divTimeInput" class="input-field col s6">
				<i class="material-icons prefix">lock</i>
				<input id="password" type="password" class="validate" required>
				<label for="password">Password</label>
			</div>

			<div class="row">
				<div class="input-field col s12">
					<input id="btnLogIn" class="waves-effect waves-light btn-large" type="submit" value="Log in" />
				</div>
				<div class="no-margin input-field col s12">
					<a id="btnSignUpNav">or sign up instead</a>
				</div>
			</div>
		</form>`;

		var div = document.getElementById("content");
		div.innerHTML = html;
		registerEventHandlers();
	}

	function renderHomePage() {
		var html = `<div class="section">
			<h5>Registration Complete</h5>
		</div>
		<div class="divider"></div>`;
	}

};