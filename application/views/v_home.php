<!DOCTYPE html>
<html>
<head>
	<link rel = "stylesheet" type = "text/css" href = "<?php echo base_url('assets/css/materialize.min.css'); ?>">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Login || Daryati Store</title>
</head>
<body>
	<div class="blue lighten-5">
		<form action="<?php echo base_url('login/aksi_login'); ?>" method="post" accept-charset="utf-8">

			<div class="container">
				<!-- Page Content goes here -->
				<div class="row">
					<div class="col s12 indigo darken-4 z-depth-2">
						<h1 align="center" class="white-text">LOGIN</h1>
					</div>
					<div class="col s12 indigo darken-4 z-depth-2">
						<h3 align="center" class="white-text">Daryati Store</h3>
					</div>
					<div class="col s6 offset-s3 purple lighten-4 z-depth-2">
						<div class="input-field col s12">
							<i class="material-icons prefix">account_box</i>
							<input name="username" type="text" class="autocomplete" >
							<label for="autocomplete-input">Username</label>
						</div>
					</div>
					<div class="col s6 offset-s3 purple lighten-4 z-depth-2">
						<div class="input-field col s12">
							<i class="material-icons prefix">lock_outline</i>
							<input name="password" type="password"   class="autocomplete" >
							<label for="autocomplete-input">Password</label>
						</div>
					</div>
					<div class="col s6 offset-s3">
						<button class="btn waves-effect waves-light" type="submit" name="action">Login
							<i class="material-icons right">send</i>
						</button>
						<a class="waves-effect waves-light btn">Register</a>

					</div>

				</div>
			</div>
		</form>
		</<div>

		</div>>
	</body>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.1/jquery.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js"></script>
	</html>