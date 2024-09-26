CREATE DATABASE  IF NOT EXISTS `feira_tecnica` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `feira_tecnica`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: feira_tecnica
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cursos`
--

DROP TABLE IF EXISTS `cursos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cursos` (
  `ID_Curso` int NOT NULL AUTO_INCREMENT,
  `Nome_Curso` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID_Curso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cursos`
--

LOCK TABLES `cursos` WRITE;
/*!40000 ALTER TABLE `cursos` DISABLE KEYS */;
/*!40000 ALTER TABLE `cursos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questoes_cursos`
--

DROP TABLE IF EXISTS `questoes_cursos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questoes_cursos` (
  `ID_Questao` int NOT NULL AUTO_INCREMENT,
  `ID_Curso_Ref` int DEFAULT NULL,
  `Posicao` int DEFAULT NULL,
  `Questao` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ID_Questao`),
  KEY `ID_Curso_Ref` (`ID_Curso_Ref`),
  CONSTRAINT `questoes_cursos_ibfk_1` FOREIGN KEY (`ID_Curso_Ref`) REFERENCES `cursos` (`ID_Curso`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questoes_cursos`
--

LOCK TABLES `questoes_cursos` WRITE;
/*!40000 ALTER TABLE `questoes_cursos` DISABLE KEYS */;
/*!40000 ALTER TABLE `questoes_cursos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `respostas_questoes`
--

DROP TABLE IF EXISTS `respostas_questoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `respostas_questoes` (
  `ID_Questao_Ref` int DEFAULT NULL,
  `Valor` int DEFAULT NULL,
  `Resposta` varchar(100) DEFAULT NULL,
  KEY `ID_Questao_Ref` (`ID_Questao_Ref`),
  CONSTRAINT `respostas_questoes_ibfk_1` FOREIGN KEY (`ID_Questao_Ref`) REFERENCES `questoes_cursos` (`ID_Questao`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `respostas_questoes`
--

LOCK TABLES `respostas_questoes` WRITE;
/*!40000 ALTER TABLE `respostas_questoes` DISABLE KEYS */;
/*!40000 ALTER TABLE `respostas_questoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `respostas_usuarios`
--

DROP TABLE IF EXISTS `respostas_usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `respostas_usuarios` (
  `Respostas_idUsuario` int NOT NULL,
  `Data_Teste` varchar(36) NOT NULL,
  `Pontos_Informatica` int NOT NULL,
  `Pontos_Eletronica` int NOT NULL,
  `Pontos_Publicidade` int NOT NULL,
  `Pontos_Administracao` int NOT NULL,
  `Pontos_Quimica` int NOT NULL,
  `Pontos_Analises` int NOT NULL,
  KEY `Respostas_idUsuario` (`Respostas_idUsuario`),
  CONSTRAINT `respostas_usuarios_ibfk_1` FOREIGN KEY (`Respostas_idUsuario`) REFERENCES `usuarios` (`idUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `respostas_usuarios`
--

LOCK TABLES `respostas_usuarios` WRITE;
/*!40000 ALTER TABLE `respostas_usuarios` DISABLE KEYS */;
INSERT INTO `respostas_usuarios` VALUES (1,'22/09/2024',80,54,23,43,5,0),(2,'22/09/2024',70,51,24,26,5,4),(1,'22/09/2024',70,51,24,26,54,40);
/*!40000 ALTER TABLE `respostas_usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `nomeUsuario` varchar(100) NOT NULL,
  `emailUsuario` varchar(100) NOT NULL,
  `senhaUsuario` varchar(100) NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'thiago','thiago@example','202cb962ac59075b964b07152d234b70'),(2,'thiago','thiago@','202cb962ac59075b964b07152d234b70'),(3,'heitor','heitor@gmail','827ccb0eea8a706c4c34a16891f84e7b'),(16,'heitor','heitor@gmail1','827ccb0eea8a706c4c34a16891f84e7b'),(17,'dawdaw','dawdaw','99914b932bd37a50b983c5e7c90ae93b'),(18,'nicolas','nicolas@gmail.com','99914b932bd37a50b983c5e7c90ae93b'),(19,'heitor','nicolas@gmail.com1','827ccb0eea8a706c4c34a16891f84e7b'),(20,'thiago','nicolas@gmail.com123','827ccb0eea8a706c4c34a16891f84e7b'),(21,'eduard','eduard@gmail.com','827ccb0eea8a706c4c34a16891f84e7b'),(22,'ana','ana@gmail.com','827ccb0eea8a706c4c34a16891f84e7b'),(23,'thiago','thiago','827ccb0eea8a706c4c34a16891f84e7b'),(24,'thiago','thiago222','120705de7e61c5b322ad798b8ef225a7'),(25,'jaoao','jaoao@gmail.com','6b554a4666fd31133d8c9a6188f55e46'),(26,'albert','123@gmail/.com','827ccb0eea8a706c4c34a16891f84e7b'),(27,'thiago','anaa123@gmail.com','827ccb0eea8a706c4c34a16891f84e7b'),(28,'helio','ana123@gmail.com','827ccb0eea8a706c4c34a16891f84e7b'),(29,'12334','tt@gmail.com','827ccb0eea8a706c4c34a16891f84e7b'),(30,'DUDU','eduardo@gmail.com','827ccb0eea8a706c4c34a16891f84e7b');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-25 21:24:13
