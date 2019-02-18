# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.21)
# Database: employee_feedback
# Generation Time: 2019-02-18 07:06:20 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table Users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `Users`;

CREATE TABLE `Users` (
  `userID` int(11) NOT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `isAdmin` tinyint(1) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `feedback` varchar(255) DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;

INSERT INTO `Users` (`userID`, `lastName`, `firstName`, `isAdmin`, `avatar`, `feedback`, `comment`)
VALUES
	(1,'Smith','Jeff',0,'https://s3.amazonaws.com/uifaces/faces/twitter/alxndrustinov/128.jpg',NULL,NULL),
	(2,'Samuel','Jesus',0,'https://s3.amazonaws.com/uifaces/faces/twitter/victorquinn/128.jpg',NULL,NULL),
	(3,'Jones','Frank',0,'https://s3.amazonaws.com/uifaces/faces/twitter/arashmanteghi/128.jpg','happy',NULL),
	(4,'Williams','Sarah',0,'https://s3.amazonaws.com/uifaces/faces/twitter/deeenright/128.jpg',NULL,NULL),
	(182,'gwerg','ergwer',0,'https://s3.amazonaws.com/uifaces/faces/twitter/llun/128.jpg',NULL,'gergewg'),
	(604,'zzzzz','zzzz',0,'https://s3.amazonaws.com/uifaces/faces/twitter/benefritz/128.jpg',NULL,'wqefqwef');

/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
