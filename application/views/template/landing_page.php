<!DOCTYPE html>
<html lang="id-ID">
<head>
	<title>Andi Muh. Rifqi Muskar</title>
	<link rel="icon" href="<?=site_url("dist/img/3.png")?>">
	<meta name="viewport" content="initial-scale=1, maximum-scale=1">
	<!-- css -->
	<?= $this->template->css('materialize.min') ?>
	<?= $this->template->css('uikit.min') ?>
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
	<?= $this->template->css('custom') ?>

</head>
<body data-url="<?=site_url()?>">
 <div id="loading">
  <div class="preloader-wrapper big active">
    <div class="spinner-layer spinner-blue-only">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div><div class="gap-patch">
        <div class="circle"></div>
      </div><div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
 </div>
	<div class="navbar-fixed">
	  <nav>
	  	<div class="container">
		    <div class="nav-wrapper">
		      <a href="https://www.google.co.id/search?q=makassar&safe=strict&source=lnms&tbm=isch&sa=X&ved=0ahUKEwid4bXnhIXeAhVVfSsKHYSNCAgQ_AUIECgD" target="_blank" class="brand-logo left"><img src="<?=site_url('dist/img/makassar-putih.png')?>" class="responsive-img imgnya"></a>
		      <ul id="nav-mobile" class="right hide-on-med-and-down">
		        <li><a href="#itproject">IT Project Experience</a></li>
		        <li><a href="#aboutme">About me</a></li>
		        <li><a href="#workexperience">Work Experience</a></li>
		        <li><a href="#education">Education</a></li>
		        <li><a href="#skills">Skills</a></li>
		        <li><a href="#contact">Contact</a></li>
		        <li><a href="#myresume" class="btn modal-trigger">MY Resume</a></li>
		        
		      </ul>
		      <ul class="right show-on-med-and-down hide-on-large-only">
		      	<li data-target="menunya" class="sidenav-trigger capedeh-1"><i class="material-icons">menu</i></li>
		      </ul>
		    </div>
	    </div>
	  </nav>
	</div>
	  <ul id="menunya" class="sidenav">
		<li class="sidenav-1"><img src="<?=site_url("dist/img/makassar.png")?>" class="responsive-img"></li>	  	
        <li><a href="#itproject">IT Project Experience</a></li>
        <li><a href="#aboutme">About me</a></li>
        <li><a href="#workexperience">Work Experience</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
	  </ul>
	<?= $content ?>

	<!-- javascript -->
	<?=$this->template->js('jquery-3.3.1.min')?>
	<?=$this->template->js('materialize.min')?>
	<?=$this->template->js('uikit.min')?>
	<?=$this->template->js('custom')?>

</body>
</html>