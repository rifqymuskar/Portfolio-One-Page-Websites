<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Ajaxsend extends CI_controller {
	function __construct()
	{
		parent::__construct();
		//...
	}

	public function send_contact()
	{
		$data = $this->input->post(NULL, TRUE);
		date_default_timezone_set("Asia/Bangkok");
		$data["date"] = date("Y-m-d H:i:s");
		$this->db->insert("contact", $data);
		if($this->db->affected_rows() == 1){
			echo "sukses";
		}else{
			echo "gagal";
		}
	}
	public function send_quates()
	{
		$data = $this->input->post(NULL, TRUE);
		date_default_timezone_set("Asia/Bangkok");
		$data["date"] = date("Y-m-d H:i:s");
		$this->db->insert("quates", $data);
		if($this->db->affected_rows() == 1){
			echo "sukses";
		}else{
			echo "gagal";
		}		
	}
}