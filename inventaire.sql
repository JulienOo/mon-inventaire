-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : dim. 19 juin 2022 à 20:54
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `gestion_app`
--
DROP DATABASE IF EXISTS `gestion_app`;
CREATE DATABASE IF NOT EXISTS `gestion_app` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `gestion_app`;

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `nomCategorie` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `colonnes`
--

DROP TABLE IF EXISTS `colonnes`;
CREATE TABLE `colonnes` (
  `id` int(11) NOT NULL,
  `idSousCategorie` int(11) NOT NULL,
  `nomColonne` varchar(50) NOT NULL,
  `format` varchar(50) NOT NULL,
  `ordre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `erreur_connexion`
--

DROP TABLE IF EXISTS `erreur_connexion`;
CREATE TABLE `erreur_connexion` (
  `id` int(11) NOT NULL,
  `ip` varchar(11) NOT NULL,
  `quand` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `sous_categories`
--

DROP TABLE IF EXISTS `sous_categories`;
CREATE TABLE `sous_categories` (
  `id` int(11) NOT NULL,
  `idCategorie` int(11) NOT NULL,
  `nomSousCategorie` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

DROP TABLE IF EXISTS `utilisateurs`;
CREATE TABLE `utilisateurs` (
  `id` int(11) NOT NULL,
  `pseudo` varchar(50) NOT NULL,
  `adresseMail` varchar(255) NOT NULL,
  `motDePasse` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `pseudo`, `adresseMail`, `motDePasse`) VALUES
(1, 'JulienOo', 'j.j@j.j', '23b2d65b60feb911e4db5a554f7b93607e521295');

-- --------------------------------------------------------

--
-- Structure de la table `valeur_colonne`
--

DROP TABLE IF EXISTS `valeur_colonne`;
CREATE TABLE `valeur_colonne` (
  `id` int(11) NOT NULL,
  `id_colonne` int(11) NOT NULL,
  `ligne` int(11) NOT NULL,
  `valeur` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `colonnes`
--
ALTER TABLE `colonnes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sous categorie` (`idSousCategorie`);

--
-- Index pour la table `erreur_connexion`
--
ALTER TABLE `erreur_connexion`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `sous_categories`
--
ALTER TABLE `sous_categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categorie` (`idCategorie`);

--
-- Index pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `valeur_colonne`
--
ALTER TABLE `valeur_colonne`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_colonne` (`id_colonne`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT pour la table `colonnes`
--
ALTER TABLE `colonnes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=391;

--
-- AUTO_INCREMENT pour la table `erreur_connexion`
--
ALTER TABLE `erreur_connexion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT pour la table `sous_categories`
--
ALTER TABLE `sous_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT pour la table `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `valeur_colonne`
--
ALTER TABLE `valeur_colonne`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=361;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `colonnes`
--
ALTER TABLE `colonnes`
  ADD CONSTRAINT `sous categorie` FOREIGN KEY (`idSousCategorie`) REFERENCES `sous_categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `sous_categories`
--
ALTER TABLE `sous_categories`
  ADD CONSTRAINT `categorie` FOREIGN KEY (`idCategorie`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `valeur_colonne`
--
ALTER TABLE `valeur_colonne`
  ADD CONSTRAINT `id_colonne` FOREIGN KEY (`id_colonne`) REFERENCES `colonnes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
