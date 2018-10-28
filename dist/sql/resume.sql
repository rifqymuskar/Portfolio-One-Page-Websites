-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 18, 2018 at 04:24 PM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `resume`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(15) NOT NULL,
  `email` text NOT NULL,
  `fullname` text NOT NULL,
  `message` text NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `email`, `fullname`, `message`, `date`) VALUES
(1, 'rifqymuskar@gmail.com', 'rifqi muskar', 'aa', '2018-10-14 12:18:05'),
(2, 'rifqymuskar@gmail.com', 'rifqi muskar', 'qq', '2018-10-14 12:18:35'),
(3, 'rifqymuskar@gmail.com', 'rifqi muskar', 'aaa', '2018-10-14 12:19:55'),
(4, 'rifqymuskar@gmail.com', 'rifqi muskar', 'a', '2018-10-14 12:20:26'),
(5, 'rifqymuskar@gmail.com', 'rifqi muskar', 'aa', '2018-10-14 12:20:46'),
(6, 'rifqymuskar@gmail.com', 'rifqi muskar', 'aa', '2018-10-14 12:22:51'),
(7, 'rifqymuskar@gmail.com', 'rifqi muskar', 'aaa', '2018-10-14 12:24:21'),
(8, 'rifqymuskar@gmail.com', 'rifqi muskar', 'aaa', '2018-10-14 12:25:28'),
(9, 'rifqymuskar@gmail.com', 'rifqi muskar', 'haha', '2018-10-15 17:54:10');

-- --------------------------------------------------------

--
-- Table structure for table `itproject_experience`
--

CREATE TABLE `itproject_experience` (
  `id` int(15) NOT NULL,
  `nama` text NOT NULL,
  `jabatan` varchar(50) NOT NULL,
  `jenis` varchar(50) NOT NULL,
  `deskripsi` text NOT NULL,
  `lokasi` text NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `itproject_experience`
--

INSERT INTO `itproject_experience` (`id`, `nama`, `jabatan`, `jenis`, `deskripsi`, `lokasi`, `date`) VALUES
(1, 'project 1', 'designer web', '', 'membangun website 1', 'Yogyakarta, Jawa Tengah', '2018-10-01 00:00:00'),
(2, 'project 1', 'designer web', '', 'membangun website 1', 'Yogyakarta, Jawa Tengah', '2018-10-01 00:00:00'),
(3, 'project 1', 'designer web', '', 'membangun website 1', 'Yogyakarta, Jawa Tengah', '2018-10-01 00:00:00'),
(4, 'project 1', 'designer web', '', 'membangun website 1', 'Yogyakarta, Jawa Tengah', '2018-10-01 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `quates`
--

CREATE TABLE `quates` (
  `id` int(15) NOT NULL,
  `fullname` text NOT NULL,
  `nickname` varchar(50) NOT NULL,
  `email` text NOT NULL,
  `message` text NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `quates`
--

INSERT INTO `quates` (`id`, `fullname`, `nickname`, `email`, `message`, `date`) VALUES
(1, 'haha', 'haha', 'rifqymuskar@gmail.com', 'aaaa', '2018-10-15 19:07:39'),
(2, 'rifqi muskar', 'aaaa', 'rifqymuskar@gmail.com', 'aaa', '2018-10-15 19:10:31');

-- --------------------------------------------------------

--
-- Table structure for table `work_experience`
--

CREATE TABLE `work_experience` (
  `id` int(15) NOT NULL,
  `nama` text NOT NULL,
  `jabatan` varchar(50) NOT NULL,
  `jenis` varchar(50) NOT NULL,
  `deskripsi` text NOT NULL,
  `lokasi` text NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `work_experience`
--

INSERT INTO `work_experience` (`id`, `nama`, `jabatan`, `jenis`, `deskripsi`, `lokasi`, `date`) VALUES
(1, 'work 1', 'Quality of service', 'PKL', 'melakukan . . . . . . . ', 'Yogyakarta, Jawa Tengah', '2018-10-14 00:00:00'),
(2, 'work 1', 'Quality of service', 'PKL', 'melakukan . . . . . . . ', 'Yogyakarta, Jawa Tengah', '2018-10-14 00:00:00'),
(3, 'work 1', 'Quality of service', 'PKL', 'melakukan . . . . . . . ', 'Yogyakarta, Jawa Tengah', '2018-10-14 00:00:00'),
(4, 'work 1', 'Quality of service', 'PKL', 'melakukan . . . . . . . ', 'Yogyakarta, Jawa Tengah', '2018-10-14 00:00:00'),
(5, 'work 1', 'Quality of service', 'PKL', 'melakukan . . . . . . . ', 'Yogyakarta, Jawa Tengah', '2018-10-14 00:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `itproject_experience`
--
ALTER TABLE `itproject_experience`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quates`
--
ALTER TABLE `quates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `work_experience`
--
ALTER TABLE `work_experience`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `itproject_experience`
--
ALTER TABLE `itproject_experience`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `quates`
--
ALTER TABLE `quates`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `work_experience`
--
ALTER TABLE `work_experience`
  MODIFY `id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
