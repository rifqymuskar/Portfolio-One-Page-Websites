<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Landing_page extends CI_controller {
	function __construct()
	{
		parent::__construct();
		$this->load->library('template');
		$this->template->set_template('landing_page');
		$this->method = $this->router->fetch_method();
		$this->class = $this->router->fetch_class();
	}

	public function index()
	{
		$this->template->render($this->class.'/'.$this->method);
	}
}