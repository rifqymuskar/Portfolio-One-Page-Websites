<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Ajaxget extends CI_controller {
	function __construct()
	{
		parent::__construct();
		$this->method = $this->router->fetch_method();
	}

	public function itproject_experience($length="0")
	{
		$data = $this->db->limit(3, $length)->get($this->method)->result();
		echo json_encode($data);
	}
	public function work_experience($length="0")
	{
		$data = $this->db->limit(4, $length)->get($this->method)->result();
		echo json_encode($data);
	}
}