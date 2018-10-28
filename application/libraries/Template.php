<?php
defined('BASEPATH') OR exit('No direct script access allowed');

Class Template {
	function __construct()
	{
		$this->ini =&get_instance();
		$this->ini->load->database();
	}

	public function set_template($isi='')
	{
		$this->layout = 'template/'.$isi;
		return $this;
	}
	public function render($isi='', $data=array())
	{
		$this->content = $this->ini->load->view($isi, $data, true);

		$data['content'] = $this->content;

		$this->ini->load->view($this->layout, $data);
	}

	public function css($css='')
	{
		echo "<link href='".site_url("dist/css/".$css.".css")."' rel='stylesheet' type='text/css'/>";
	}
	public function js($js='')
	{
		echo "<script src='".site_url("dist/js/".$js.".js")."'></script>";
	}
}