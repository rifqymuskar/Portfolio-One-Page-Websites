<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class M_login extends CI_Model {
	function cek_login($table,$where){		
			return $this->db->get_where($table,$where);
		}
	

}

/* End of file m_login.php */
/* Location: ./application/models/m_login.php */