window.onload = function () {
	init();

	function init() {
		renderSignUpPage();
		registerEventHandlers();
	}

	function registerEventHandlers() {
		var signUpButton = document.getElementById("btnSignUp");
		signUpButton.addEventListener("click", successfulRegistration);

	}

	function renderSignUpPage() {
		var html = `<form>
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
				<a>or log in instead</a>
			</div>
		</div>
	</form>`;

		var div = document.getElementById("content");
		div.innerHTML = html;
	}

	function successfulRegistration() {
		var html = `
			<div class="row">
				<div class="col 12 s12">
					<i class="material-icons prefix">check_cirle</i>

					<h2>Thank you!</h2>

					<h4>You have successfully registered with NeighbourCall, please log in</h4>
				</div>
			</div>
		`;

		var div = document.getElementById("content");
		div.innerHTML = html;
	}

};