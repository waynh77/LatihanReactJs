-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2022 at 05:48 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbtestapi`
--

-- --------------------------------------------------------

--
-- Table structure for table `tabel_karyawan`
--

CREATE TABLE `tabel_karyawan` (
  `karyawan_id` int(11) NOT NULL,
  `karyawan_nama` varchar(100) DEFAULT NULL,
  `karyawan_umur` char(10) DEFAULT NULL,
  `karyawan_alamat` text DEFAULT NULL,
  `karyawan_jabatan` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tabel_karyawan`
--

INSERT INTO `tabel_karyawan` (`karyawan_id`, `karyawan_nama`, `karyawan_umur`, `karyawan_alamat`, `karyawan_jabatan`) VALUES
(1, 'xxx123', '25', 'bandung', 'QA'),
(3, 'Rasuna Said', '49', 'Alahan Panjang', 'Manager'),
(4, 'Soetan Sjahrir', '67', 'Padang Pariaman', 'Staf'),
(5, 'karyawan 2', '25', 'jakarta', 'akunting'),
(6, 'karyawan 3', '22', 'jakarta', 'akunting'),
(7, 'peg 1', '23', 'jl x', 'FE'),
(8, 'test', '20', 'jalan', 'direktur'),
(9, 'test lagi', '25', 'jalan', 'direktur'),
(12, 'Karyawan baru', '24', 'aaaxxx', 'Akunting');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tabel_karyawan`
--
ALTER TABLE `tabel_karyawan`
  ADD PRIMARY KEY (`karyawan_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tabel_karyawan`
--
ALTER TABLE `tabel_karyawan`
  MODIFY `karyawan_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
