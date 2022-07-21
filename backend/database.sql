-- MySQL Script generated by MySQL Workbench

-- Tue Jul 19 20:28:06 2022

-- Model: New Model    Version: 1.0

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;

SET FOREIGN_KEY_CHECKS = 0;

SET
    SQL_MODE = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------

-- Schema mydb

-- -----------------------------------------------------

-- -----------------------------------------------------

-- Schema mydb

-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `checkpoint_4` DEFAULT CHARACTER SET utf8;

USE `checkpoint_4` ;

DROP TABLE IF EXISTS `checkpoint_4`.`personality` ;

DROP TABLE IF EXISTS `checkpoint_4`.`user` ;

DROP TABLE IF EXISTS `checkpoint_4`.`language` ;

DROP TABLE IF EXISTS `checkpoint_4`.`Experience` ;

DROP TABLE IF EXISTS `checkpoint_4`.`techno` ;

DROP TABLE IF EXISTS `checkpoint_4`.`Projet` ;

DROP TABLE IF EXISTS `checkpoint_4`.`Projet_has_techno` ;

DROP TABLE IF EXISTS `checkpoint_4`.`personality_has_Projet` ;

-- -----------------------------------------------------

-- Table `mydb`.`personality`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `checkpoint_4`.`personality` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `Nom` VARCHAR(50) NOT NULL,
        `Prenom` VARCHAR(45) NOT NULL,
        `lien_git` VARCHAR(255) NOT NULL,
        `lien_linkedin` VARCHAR(255) NOT NULL,
        `img_link` VARCHAR(400) NOT NULL,
        `img_alt` VARCHAR(255) NOT NULL,
        PRIMARY KEY (`id`),
        UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `mydb`.`user`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `checkpoint_4`.`user` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `email` VARCHAR(255) NOT NULL,
        `hashed_password` VARCHAR(255) NOT NULL,
        PRIMARY KEY (`id`),
        UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `mydb`.`language`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `checkpoint_4`.`language` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `language` VARCHAR(2) NOT NULL,
        PRIMARY KEY (`id`),
        UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `mydb`.`Experience`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `checkpoint_4`.`Experience` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `titre` VARCHAR(100) NOT NULL,
        `description` LONGTEXT NOT NULL,
        `language_id` INT NOT NULL,
        PRIMARY KEY (`id`, `language_id`),
        UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
        INDEX `fk_Experience_language1_idx` (`language_id` ASC) VISIBLE,
        CONSTRAINT `fk_Experience_language1` FOREIGN KEY (`language_id`) REFERENCES `mydb`.`language` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `mydb`.`techno`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `checkpoint_4`.`techno` (
        `id` INT NOT NULL AUTO_INCREMENT,
        `titre` VARCHAR(100) NOT NULL,
        `img_link` LONGTEXT NOT NULL,
        `img_alt` VARCHAR(255) NOT NULL,
        PRIMARY KEY (`id`),
        UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `mydb`.`Projet`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `checkpoint_4`.`Projet` (
        `id` INT NOT NULL,
        `titre` VARCHAR(100) NOT NULL,
        `description` LONGTEXT NOT NULL,
        `repo_link` VARCHAR(255) NOT NULL,
        `img_link` LONGTEXT NOT NULL,
        `img_alt` VARCHAR(100) NOT NULL,
        `language_id` INT NOT NULL,
        PRIMARY KEY (`id`, `language_id`),
        INDEX `fk_Projet_language1_idx` (`language_id` ASC) VISIBLE,
        CONSTRAINT `fk_Projet_language1` FOREIGN KEY (`language_id`) REFERENCES `mydb`.`language` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `mydb`.`Projet_has_techno`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `checkpoint_4`.`Projet_has_techno` (
        `Projet_id` INT NOT NULL,
        `techno_id` INT NOT NULL,
        PRIMARY KEY (`Projet_id`, `techno_id`),
        INDEX `fk_Projet_has_techno_techno1_idx` (`techno_id` ASC) VISIBLE,
        INDEX `fk_Projet_has_techno_Projet_idx` (`Projet_id` ASC) VISIBLE,
        CONSTRAINT `fk_Projet_has_techno_Projet` FOREIGN KEY (`Projet_id`) REFERENCES `mydb`.`Projet` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_Projet_has_techno_techno1` FOREIGN KEY (`techno_id`) REFERENCES `mydb`.`techno` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

-- -----------------------------------------------------

-- Table `mydb`.`personality_has_Projet`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `checkpoint_4`.`personality_has_Projet` (
        `Projet_id` INT NOT NULL,
        `personality_id` INT NOT NULL,
        PRIMARY KEY (`personality_id`, `Projet_id`),
        INDEX `fk_personality_has_Projet_Projet1_idx` (`Projet_id` ASC) VISIBLE,
        INDEX `fk_personality_has_Projet_personality1_idx` (`personality_id` ASC) VISIBLE,
        CONSTRAINT `fk_personality_has_Projet_personality1` FOREIGN KEY (`personality_id`) REFERENCES `mydb`.`personality` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_personality_has_Projet_Projet1` FOREIGN KEY (`Projet_id`) REFERENCES `mydb`.`Projet` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

INSERT INTO
    `checkpoint_4`.`personality` (
        id,
        Nom,
        prenom,
        lien_git,
        lien_linkedin,
        img_link,
        img_alt
    )
VALUES (
        1,
        "Lavigne",
        "Kévin",
        "https://github.com/KevinLavigne",
        "https://www.linkedin.com/in/lavignekevin/",
        "https://media-exp2.licdn.com/dms/image/C5603AQH9JerhMKAFog/profile-displayphoto-shrink_100_100/0/1649544967936?e=1663804800&v=beta&t=NuwPJztjyo8pZThm7Xme5svOkSecLU5V5-5LWXNuYY4",
        "photo de profile linkedin de Kévin"
    ), (
        2,
        "Grimoire",
        "Terry",
        "https://github.com/TerryGrimoire",
        "https://www.linkedin.com/in/terry-grimoire/",
        "https://media-exp2.licdn.com/dms/image/C4E03AQF1ZAlDGLNZSQ/profile-displayphoto-shrink_200_200/0/1583959105228?e=1663804800&v=beta&t=DMNYIJvrYXKBiFGiT9-fzacVBB4nV7PyqFdCfrVxLec",
        "photo de profile linkedin de Terry"
    ), (
        3,
        "Tignol",
        "Marie",
        "https://github.com/marietignol",
        "https://www.linkedin.com/in/marietignol/",
        "https://media-exp2.licdn.com/dms/image/D4E35AQG4WlihrxKsgw/profile-framedphoto-shrink_200_200/0/1649760057954?e=1658930400&v=beta&t=iJEAAc80nrM1YzQJm34JZvrIoHTSe9Te7PKol16SWCo",
        "photo de profile linkedin de Marie"
    ), (
        4,
        "Randrianantenaina",
        "Calvin",
        "https://github.com/randricalvin",
        "https://www.linkedin.com/in/calvin-randrianantenaina-26986a118/",
        "https://media-exp2.licdn.com/dms/image/D4E35AQGlWi3XxJlgcw/profile-framedphoto-shrink_400_400/0/1655136945239?e=1658930400&v=beta&t=Se5DL1GNHyFmn_-3DlC-i4YQ2V3QMfe6TxR_XelPGQA",
        "photo de profile linkedin de Calvin"
    ), (
        5,
        "Genin",
        "Alexandre",
        "https://github.com/Disrupt3d",
        "https://www.linkedin.com/in/alexandre-genin/",
        "https://media-exp2.licdn.com/dms/image/D4E35AQE2MHdzsYSK7Q/profile-framedphoto-shrink_400_400/0/1653835658858?e=1658930400&v=beta&t=rYk2u0A9sdfCdx2K6E2Jn6tMLNzM98nEoaTTpHI4Kww",
        "photo de profile linkedin de Alexandre"
    ), (
        6,
        "Nikobahoze",
        "Marie-Claire",
        "https://github.com/Mariakarara",
        "https://www.linkedin.com/in/marie-claire-nikobahoze-506854ab/",
        "https://media-exp2.licdn.com/dms/image/C5603AQF5z7Gw1q1kRg/profile-displayphoto-shrink_400_400/0/1649428018755?e=1663804800&v=beta&t=bFC89JTYsEpZUvc-KAiMbi8xMpFW5Gv7snJ_ABqjBzk",
        "photo de profile linkedin de Marie-Claire"
    ), (
        7,
        "Lim",
        "Christian",
        "https://github.com/Christian-81",
        "https://www.linkedin.com/in/christianlimdev/",
        "https://media-exp2.licdn.com/dms/image/D4D03AQFKM3LXMzHBew/profile-displayphoto-shrink_400_400/0/1646743674025?e=1663804800&v=beta&t=9rLkRwA9zuF2EEBt7z12pCBD0RBh-z-pDAca41vg5yc",
        "photo de profile linkedin de Christian"
    ), (
        8,
        "Saucy",
        "Corentin",
        "https://github.com/SCYCorentin",
        "https://www.linkedin.com/in/corentin-saucy-41b534137/",
        "https://media-exp2.licdn.com/dms/image/C4E03AQEbAvPWvtGRcQ/profile-displayphoto-shrink_400_400/0/1652260527272?e=1663804800&v=beta&t=Fmki9boyhCYl6hJqm4RrxH4KFFsvSBmI8BbM0utt5lE",
        "photo de profile linkedin de Corentin"
    ), (
        9,
        "Guerit",
        "Guillaume",
        "https://github.com/Guillaume-Guerit",
        "https://www.linkedin.com/in/guillaume-guerit-07894616a/",
        "https://media-exp2.licdn.com/dms/image/D4E35AQF-WTr_bh2Ukw/profile-framedphoto-shrink_400_400/0/1648728772947?e=1658930400&v=beta&t=Woq6RAoAK_NzkveGhxFXiuS2UHVQWk2qpM64KQ-lNVQ",
        "photo de profile linkedin de Guillaume"
    ), (
        10,
        "Guerin",
        "Fabienne",
        "https://github.com/Fabienne-Guerin",
        "https://www.linkedin.com/in/fabienne-guerin-b8639622b/",
        " ",
        "Fabienne"
    ), (
        11,
        "Mathieu",
        "Basile",
        "https://github.com/Baasile",
        "https://www.linkedin.com/in/basile-mathieu/",
        "https://media-exp2.licdn.com/dms/image/C4E03AQGYJ-ARTXaWOw/profile-displayphoto-shrink_400_400/0/1646995531056?e=1663804800&v=beta&t=csGgaORZtvlkYMrlz6AVafP-VzQ_B_sJuutA4Bdeuws",
        "image de profile linkedin de basile"
    );

INSERT INTO
    `checkpoint_4`.`language` (id, language)
VALUES (1, "FR"), (2, "EN");

INSERT INTO
    `checkpoint_4`.`Experience` (
        id,
        titre,
        description,
        language_id
    )
VALUES (
        1,
        "Serveur en restauration",
        "5 ans de travail en tant que serveur dans diverse restaurant ces experiences m'on apporté beaucoup de soft skils comme la gestion d'une equipe, la répartion des taches, l'adaptabilité et plein d'autres.",
        1
    ), (
        2,
        "Formation développeur web by WildCodeSchool",
        "Durant les 6 mois de formation intense j'ai pu apprendre a maîtriser les différentes technos citéz plus bas et j'ai pus realiser diverse projet listez sur ce site en compagnie de mes colègues de formation. Le fin mots de c'ette formation est qu'on apprendre a apprendre est le secret qui ouvre les clé de ce domaine",
        1
    ), (
        3,
        "Assistant formateur développeur web",
        "A partir du 1 septembre 2022, j'aurai le plaisir de pouvoir transmettre cette passion qui est la mienne ainsi que le savoir que j'ai aquérie lors de ma session de formation, a des personnes qui comme moi a l'époque ou j'ai commencer ma formation n'avait pas la moindre idée de l'étendue de connaissance qu'est la programmation. Cela me permetra pars la même occasion de continuer a approfondir mes connaissance sur les techno que j'utilise actuellement et de commencer a en utiliser de nouvelles.",
        1
    );

INSERT INTO
    `checkpoint_4`.`techno`(id, titre, img_link, img_alt)
VALUES (
        1,
        "javascript",
        "https://brandeps.com/logo-download/O/Ottawa-JS-logo-vector-01.svg",
        "logo javascript"
    ), (
        2,
        "html",
        "https://cdn-icons-png.flaticon.com/512/174/174854.png",
        "logo html"
    ), (
        3,
        "CSS",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817",
        "logo CSS"
    ), (
        4,
        "TailwindCss",
        "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
        "logo TailwindCss"
    ), (
        5,
        "NodeJS",
        "https://mpng.subpng.com/20180425/jrw/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e2a4242.1423638015246930701731.jpg",
        "logo NodeJS"
    ), (
        6,
        "Express JS",
        "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
        "logo Express JS"
    ), (
        7,
        "MySQL",
        "https://img1.freepng.fr/20180803/bx/kisspng-mysql-database-image-vector-graphics-integrations-opsview-5b648f451747c6.6957402115333169330954.jpg",
        "logo Mysql"
    ), (
        8,
        "React",
        "https://www.datocms-assets.com/45470/1631110818-logo-react-js.png",
        "logo React"
    );

INSERT INTO
    `checkpoint_4`.`Projet`(
        id,
        titre,
        description,
        repo_link,
        img_link,
        img_alt,
        language_id
    )
VALUES (
        1,
        "Error404",
        "1er project qui a eu lieu 2 semaines après le debut de notre formation et as durée 2 semaine nous étions en equipe de 4. Nous n'avions pas envore commencer le javascript ceci est donc un site html css basique.",
        "https://github.com/KevinLavigne/projet1-error404",
        "https://i.ibb.co/DV3g0ZP/Fire-Shot-Capture-003-Page-d-accueil-127-0-0-1.png",
        "image de la page d'accueil du projet 1",
        1
    ), (
        2,
        "Team Rocket",
        "2ème projet celui-ci a eu lieu 1 mois et demi après le début de la fomation. Ce projet aura durée 1 mois et étais la marque du début de notre apprentisage de React et la 1er exploatation du des méthode Ajax avec le fetch et la consomation d'api. Il c'est réaliser en équipe de 5." "",
        "https://github.com/WildCodeSchool/2022-03-RemoteJS-Erreur404-teamrocket",
        "https://i.ibb.co/VJbVFcK/Fire-Shot-Capture-005-Team-Rocket-localhost.png",
        "image de la page d'accueil du projet 2",
        1
    ), (
        3,
        "RookiesCMS",
        "3ème et dernier projet de groupe de cette formation de 6 mois. Il aura durée 2 mois et as été réaliser pour une entreprise externe à la Wild Code School. Notre objectif etais de créer de toute piece un site vitrine avec un éspace administrateur de type CMS. Cela aura été un excelent challenge technique metant en place une consomation de notre db pour tous les affichages et contenu du front-end. le 2ème challenge etais de pouvoir gérér de multiple language et d'en ajouté si necsessaire. P.S.: Une grande source d'inspiration pour ce PortFolio qui dispose d'un CMS. ",
        "https://github.com/WildCodeSchool/2022-03-JS-Remote-404-Rookies-CMS",
        "https://i.ibb.co/XVPRSQw/Fire-Shot-Capture-006-Rookies-Company-localhost.png",
        "image de la page d'accueil du projet 2",
        1
    );

INSERT INTO
    `checkpoint_4`.`Projet_has_techno`(projet_id, techno_id)
VALUES (1, 2), (1, 3), (2, 1), (2, 2), (2, 3), (2, 5), (2, 8), (3, 1), (3, 2), (3, 3), (3, 4), (3, 5), (3, 6), (3, 7), (3, 8), (3, 9);

INSERT INTO
    `checkpoint_4`.`personality_has_Projet`(projet_id, personality_id)
VALUES (1, 1), (1, 2), (1, 3), (1, 4), (2, 1), (2, 5), (2, 6), (2, 7), (2, 8), (3, 1), (3, 9), (3, 10), (3, 11);