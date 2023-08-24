-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 08 Mar 2023 pada 11.54
-- Versi server: 10.4.24-MariaDB
-- Versi PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `university_exam`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `answers`
--

CREATE TABLE `answers` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `explanation` longtext DEFAULT NULL,
  `is_right` bit(1) DEFAULT NULL,
  `question_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `appraisal_forms`
--

CREATE TABLE `appraisal_forms` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `chapters`
--

CREATE TABLE `chapters` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `title` varchar(150) DEFAULT NULL,
  `subject_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `departments`
--

CREATE TABLE `departments` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `departments`
--

INSERT INTO `departments` (`id`, `created_at`, `updated_at`, `created_by`, `updated_by`, `description`, `name`) VALUES
(1, '2023-03-07 15:30:01', '2023-03-07 15:37:56', 1, 1, 'test', 'test1'),
(2, '2023-03-07 15:38:00', '2023-03-07 15:38:05', 1, 1, '3', '2');

-- --------------------------------------------------------

--
-- Struktur dari tabel `detail_rps`
--

CREATE TABLE `detail_rps` (
  `rps_id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `assessment_indicators` longtext DEFAULT NULL,
  `criteria` longtext DEFAULT NULL,
  `estimated_time` varchar(255) DEFAULT NULL,
  `learning_experience` longtext DEFAULT NULL,
  `rating_weight` double NOT NULL,
  `week` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `detail_rps_appraisal_forms`
--

CREATE TABLE `detail_rps_appraisal_forms` (
  `rps_id` bigint(20) NOT NULL,
  `appraisal_form_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `detail_rps_sub_cp_subjects`
--

CREATE TABLE `detail_rps_sub_cp_subjects` (
  `rps_id` bigint(20) NOT NULL,
  `sub_cp_subject_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `detail_rps_sub_learning_materials`
--

CREATE TABLE `detail_rps_sub_learning_materials` (
  `rps_id` bigint(20) NOT NULL,
  `sub_learning_material_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `exams`
--

CREATE TABLE `exams` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `jml` int(11) DEFAULT NULL,
  `nama` varchar(150) DEFAULT NULL,
  `rps_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `learning_form_methods`
--

CREATE TABLE `learning_form_methods` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `type` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `learning_materials`
--

CREATE TABLE `learning_materials` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `learning_medias`
--

CREATE TABLE `learning_medias` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `type` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `lectures`
--

CREATE TABLE `lectures` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `address` longtext DEFAULT NULL,
  `date_born` datetime DEFAULT NULL,
  `gender` bit(1) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `nidn` bigint(20) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `place_born` varchar(50) DEFAULT NULL,
  `status` bit(1) DEFAULT NULL,
  `religion_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `questions`
--

CREATE TABLE `questions` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `answer_type` int(11) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `name` varchar(150) DEFAULT NULL,
  `question_type` int(11) DEFAULT NULL,
  `chapter_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `religions`
--

CREATE TABLE `religions` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) NOT NULL,
  `name` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'ROLE_ADMINISTRATOR'),
(2, 'ROLE_LECTURE'),
(3, 'ROLE_STUDENT');

-- --------------------------------------------------------

--
-- Struktur dari tabel `rps`
--

CREATE TABLE `rps` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `build_date` datetime NOT NULL,
  `cpl_study_program` longtext DEFAULT NULL,
  `cpl_subject` longtext DEFAULT NULL,
  `semester` int(11) NOT NULL,
  `subject_description` longtext DEFAULT NULL,
  `coordinator` bigint(20) NOT NULL,
  `ka_study_program` bigint(20) NOT NULL,
  `subject_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `rps_dev_lectures`
--

CREATE TABLE `rps_dev_lectures` (
  `rps_id` bigint(20) NOT NULL,
  `lecture_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `rps_learning_materials`
--

CREATE TABLE `rps_learning_materials` (
  `rps_id` bigint(20) NOT NULL,
  `learning_material_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `rps_learning_medias`
--

CREATE TABLE `rps_learning_medias` (
  `rps_id` bigint(20) NOT NULL,
  `learning_media_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `rps_references`
--

CREATE TABLE `rps_references` (
  `rps_id` bigint(20) NOT NULL,
  `reference_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `rps_requirement_subjects`
--

CREATE TABLE `rps_requirement_subjects` (
  `rps_id` bigint(20) NOT NULL,
  `subject_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `rps_support_lectures`
--

CREATE TABLE `rps_support_lectures` (
  `rps_id` bigint(20) NOT NULL,
  `lecture_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `students`
--

CREATE TABLE `students` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `address` longtext DEFAULT NULL,
  `date_born` datetime DEFAULT NULL,
  `gender` bit(1) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `nim` bigint(20) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `place_born` varchar(50) DEFAULT NULL,
  `status` bit(1) DEFAULT NULL,
  `religion_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `study_programs`
--

CREATE TABLE `study_programs` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `department_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `subjects`
--

CREATE TABLE `subjects` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `name` varchar(150) DEFAULT NULL,
  `study_program_id` bigint(20) NOT NULL,
  `subject_group_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `subject_groups`
--

CREATE TABLE `subject_groups` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `description` longtext DEFAULT NULL,
  `name` varchar(150) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `sub_cp_subjects`
--

CREATE TABLE `sub_cp_subjects` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `sub_learning_materials`
--

CREATE TABLE `sub_learning_materials` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_by` bigint(20) DEFAULT NULL,
  `updated_by` bigint(20) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `name` varchar(40) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `photo` varchar(100) DEFAULT NULL,
  `username` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `created_at`, `updated_at`, `email`, `name`, `password`, `photo`, `username`) VALUES
(1, '2023-03-07 14:19:30', '2023-03-07 14:19:30', 'dito@gmail.com', 'Dito Cahya Pratama', '$2a$10$YB8CbrDpgML/lyqh0GgKbeOlvD8yi2PkcOYe6hCT6RPftoBTv.WhC', 'C:/Users/Doyatama/Videos/f5e47199-abf0-4437-a5b0-78068b4d8061.jpeg', 'Dito');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `role_id`) VALUES
(1, 1);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK3erw1a3t0r78st8ty27x6v3g1` (`question_id`);

--
-- Indeks untuk tabel `appraisal_forms`
--
ALTER TABLE `appraisal_forms`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `chapters`
--
ALTER TABLE `chapters`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK3rm6snrkx0k8xyqn7017b0v41` (`subject_id`);

--
-- Indeks untuk tabel `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `detail_rps`
--
ALTER TABLE `detail_rps`
  ADD PRIMARY KEY (`rps_id`);

--
-- Indeks untuk tabel `detail_rps_appraisal_forms`
--
ALTER TABLE `detail_rps_appraisal_forms`
  ADD PRIMARY KEY (`rps_id`,`appraisal_form_id`),
  ADD KEY `FKrpu91mbq97drb7j4dely55wic` (`appraisal_form_id`);

--
-- Indeks untuk tabel `detail_rps_sub_cp_subjects`
--
ALTER TABLE `detail_rps_sub_cp_subjects`
  ADD PRIMARY KEY (`rps_id`,`sub_cp_subject_id`),
  ADD KEY `FKboxo5yicwdfd1mtl1igdsxqko` (`sub_cp_subject_id`);

--
-- Indeks untuk tabel `detail_rps_sub_learning_materials`
--
ALTER TABLE `detail_rps_sub_learning_materials`
  ADD PRIMARY KEY (`rps_id`,`sub_learning_material_id`),
  ADD KEY `FK6rgqg53p0n5yxx0awfjgkeaye` (`sub_learning_material_id`);

--
-- Indeks untuk tabel `exams`
--
ALTER TABLE `exams`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKkh0g0jdeb3tim59evr48pyoi8` (`rps_id`);

--
-- Indeks untuk tabel `learning_form_methods`
--
ALTER TABLE `learning_form_methods`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `learning_materials`
--
ALTER TABLE `learning_materials`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `learning_medias`
--
ALTER TABLE `learning_medias`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `lectures`
--
ALTER TABLE `lectures`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKrh7kbi03gebu9hp9o542ro841` (`religion_id`),
  ADD KEY `FK2p6fn5t757wjgdpskia7t3l24` (`user_id`);

--
-- Indeks untuk tabel `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKd1wulherkir0s9abbqr195fr4` (`chapter_id`);

--
-- Indeks untuk tabel `religions`
--
ALTER TABLE `religions`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_nb4h0p6txrmfc0xbrd1kglp9t` (`name`);

--
-- Indeks untuk tabel `rps`
--
ALTER TABLE `rps`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK1p6omctbiw489vsggvxmb8nu` (`coordinator`),
  ADD KEY `FK3rpnkm4f8o2icj305l312k5v0` (`ka_study_program`),
  ADD KEY `FKano73d525kkl07285e8xwv3eb` (`subject_id`);

--
-- Indeks untuk tabel `rps_dev_lectures`
--
ALTER TABLE `rps_dev_lectures`
  ADD PRIMARY KEY (`rps_id`,`lecture_id`),
  ADD KEY `FKgtgviah2ul8lvva6aqrqvgqf5` (`lecture_id`);

--
-- Indeks untuk tabel `rps_learning_materials`
--
ALTER TABLE `rps_learning_materials`
  ADD PRIMARY KEY (`rps_id`,`learning_material_id`),
  ADD KEY `FKls2bd6mfvd2d09rowcal8mt73` (`learning_material_id`);

--
-- Indeks untuk tabel `rps_learning_medias`
--
ALTER TABLE `rps_learning_medias`
  ADD PRIMARY KEY (`rps_id`,`learning_media_id`),
  ADD KEY `FKl0tj7fl8wutrgsenkav0ycxgr` (`learning_media_id`);

--
-- Indeks untuk tabel `rps_references`
--
ALTER TABLE `rps_references`
  ADD PRIMARY KEY (`rps_id`,`reference_id`);

--
-- Indeks untuk tabel `rps_requirement_subjects`
--
ALTER TABLE `rps_requirement_subjects`
  ADD PRIMARY KEY (`rps_id`,`subject_id`),
  ADD KEY `FK19tvs4nkegbiiuwfcy9hlol9r` (`subject_id`);

--
-- Indeks untuk tabel `rps_support_lectures`
--
ALTER TABLE `rps_support_lectures`
  ADD PRIMARY KEY (`rps_id`,`lecture_id`),
  ADD KEY `FK60aaouh96to2umv9cse3h07tt` (`lecture_id`);

--
-- Indeks untuk tabel `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKflk4k5yn1nu833xm96vb7l5ey` (`religion_id`),
  ADD KEY `FKdt1cjx5ve5bdabmuuf3ibrwaq` (`user_id`);

--
-- Indeks untuk tabel `study_programs`
--
ALTER TABLE `study_programs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK6ltjx8n7xgi6v892n1mp1res0` (`department_id`);

--
-- Indeks untuk tabel `subjects`
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKfqfsu1deb869fsu1vpl2yb9ah` (`study_program_id`),
  ADD KEY `FKf3iitb7yw9k676hqcchyxkenw` (`subject_group_id`);

--
-- Indeks untuk tabel `subject_groups`
--
ALTER TABLE `subject_groups`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `sub_cp_subjects`
--
ALTER TABLE `sub_cp_subjects`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `sub_learning_materials`
--
ALTER TABLE `sub_learning_materials`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`),
  ADD UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`);

--
-- Indeks untuk tabel `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `FKh8ciramu9cc9q3qcqiv4ue8a6` (`role_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `answers`
--
ALTER TABLE `answers`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `appraisal_forms`
--
ALTER TABLE `appraisal_forms`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `chapters`
--
ALTER TABLE `chapters`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `departments`
--
ALTER TABLE `departments`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `exams`
--
ALTER TABLE `exams`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `learning_form_methods`
--
ALTER TABLE `learning_form_methods`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `learning_materials`
--
ALTER TABLE `learning_materials`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `learning_medias`
--
ALTER TABLE `learning_medias`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `lectures`
--
ALTER TABLE `lectures`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `questions`
--
ALTER TABLE `questions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `religions`
--
ALTER TABLE `religions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT untuk tabel `rps`
--
ALTER TABLE `rps`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `students`
--
ALTER TABLE `students`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `study_programs`
--
ALTER TABLE `study_programs`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `subjects`
--
ALTER TABLE `subjects`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `subject_groups`
--
ALTER TABLE `subject_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `sub_cp_subjects`
--
ALTER TABLE `sub_cp_subjects`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `sub_learning_materials`
--
ALTER TABLE `sub_learning_materials`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `answers`
--
ALTER TABLE `answers`
  ADD CONSTRAINT `FK3erw1a3t0r78st8ty27x6v3g1` FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `chapters`
--
ALTER TABLE `chapters`
  ADD CONSTRAINT `FK3rm6snrkx0k8xyqn7017b0v41` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `detail_rps`
--
ALTER TABLE `detail_rps`
  ADD CONSTRAINT `FK2t2dd60empg52p7vx7bk1fh7i` FOREIGN KEY (`rps_id`) REFERENCES `rps` (`id`);

--
-- Ketidakleluasaan untuk tabel `detail_rps_appraisal_forms`
--
ALTER TABLE `detail_rps_appraisal_forms`
  ADD CONSTRAINT `FKbvwdhiqdqcq9y8whflj5bflhv` FOREIGN KEY (`rps_id`) REFERENCES `detail_rps` (`rps_id`),
  ADD CONSTRAINT `FKrpu91mbq97drb7j4dely55wic` FOREIGN KEY (`appraisal_form_id`) REFERENCES `appraisal_forms` (`id`);

--
-- Ketidakleluasaan untuk tabel `detail_rps_sub_cp_subjects`
--
ALTER TABLE `detail_rps_sub_cp_subjects`
  ADD CONSTRAINT `FKboxo5yicwdfd1mtl1igdsxqko` FOREIGN KEY (`sub_cp_subject_id`) REFERENCES `sub_cp_subjects` (`id`),
  ADD CONSTRAINT `FKbuf45nghawywts5l3647psj3k` FOREIGN KEY (`rps_id`) REFERENCES `detail_rps` (`rps_id`);

--
-- Ketidakleluasaan untuk tabel `detail_rps_sub_learning_materials`
--
ALTER TABLE `detail_rps_sub_learning_materials`
  ADD CONSTRAINT `FK6rgqg53p0n5yxx0awfjgkeaye` FOREIGN KEY (`sub_learning_material_id`) REFERENCES `sub_learning_materials` (`id`),
  ADD CONSTRAINT `FKnuvtxkit9ow448ruwqxtd655o` FOREIGN KEY (`rps_id`) REFERENCES `detail_rps` (`rps_id`);

--
-- Ketidakleluasaan untuk tabel `exams`
--
ALTER TABLE `exams`
  ADD CONSTRAINT `FKkh0g0jdeb3tim59evr48pyoi8` FOREIGN KEY (`rps_id`) REFERENCES `subjects` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `lectures`
--
ALTER TABLE `lectures`
  ADD CONSTRAINT `FK2p6fn5t757wjgdpskia7t3l24` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FKrh7kbi03gebu9hp9o542ro841` FOREIGN KEY (`religion_id`) REFERENCES `religions` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `FKd1wulherkir0s9abbqr195fr4` FOREIGN KEY (`chapter_id`) REFERENCES `chapters` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `rps`
--
ALTER TABLE `rps`
  ADD CONSTRAINT `FK1p6omctbiw489vsggvxmb8nu` FOREIGN KEY (`coordinator`) REFERENCES `lectures` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK3rpnkm4f8o2icj305l312k5v0` FOREIGN KEY (`ka_study_program`) REFERENCES `lectures` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FKano73d525kkl07285e8xwv3eb` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `rps_dev_lectures`
--
ALTER TABLE `rps_dev_lectures`
  ADD CONSTRAINT `FK7hmfmnskyon7kunac64iqsrr0` FOREIGN KEY (`rps_id`) REFERENCES `rps` (`id`),
  ADD CONSTRAINT `FKgtgviah2ul8lvva6aqrqvgqf5` FOREIGN KEY (`lecture_id`) REFERENCES `lectures` (`id`);

--
-- Ketidakleluasaan untuk tabel `rps_learning_materials`
--
ALTER TABLE `rps_learning_materials`
  ADD CONSTRAINT `FKls2bd6mfvd2d09rowcal8mt73` FOREIGN KEY (`learning_material_id`) REFERENCES `learning_materials` (`id`),
  ADD CONSTRAINT `FKtmgh39vpfoveriwoci0ua5qmp` FOREIGN KEY (`rps_id`) REFERENCES `rps` (`id`);

--
-- Ketidakleluasaan untuk tabel `rps_learning_medias`
--
ALTER TABLE `rps_learning_medias`
  ADD CONSTRAINT `FK94rhmnrh44htqqqutmxt9x43h` FOREIGN KEY (`rps_id`) REFERENCES `rps` (`id`),
  ADD CONSTRAINT `FKl0tj7fl8wutrgsenkav0ycxgr` FOREIGN KEY (`learning_media_id`) REFERENCES `learning_medias` (`id`);

--
-- Ketidakleluasaan untuk tabel `rps_references`
--
ALTER TABLE `rps_references`
  ADD CONSTRAINT `FKrby8prl8eyaxqh9pksp0lp9pe` FOREIGN KEY (`rps_id`) REFERENCES `rps` (`id`);

--
-- Ketidakleluasaan untuk tabel `rps_requirement_subjects`
--
ALTER TABLE `rps_requirement_subjects`
  ADD CONSTRAINT `FK19tvs4nkegbiiuwfcy9hlol9r` FOREIGN KEY (`subject_id`) REFERENCES `subjects` (`id`),
  ADD CONSTRAINT `FKa52sadxjou1oyupwl04c23w1n` FOREIGN KEY (`rps_id`) REFERENCES `rps` (`id`);

--
-- Ketidakleluasaan untuk tabel `rps_support_lectures`
--
ALTER TABLE `rps_support_lectures`
  ADD CONSTRAINT `FK60aaouh96to2umv9cse3h07tt` FOREIGN KEY (`lecture_id`) REFERENCES `lectures` (`id`),
  ADD CONSTRAINT `FKaq0d43lftv4pneayqf01i38k` FOREIGN KEY (`rps_id`) REFERENCES `rps` (`id`);

--
-- Ketidakleluasaan untuk tabel `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `FKdt1cjx5ve5bdabmuuf3ibrwaq` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FKflk4k5yn1nu833xm96vb7l5ey` FOREIGN KEY (`religion_id`) REFERENCES `religions` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `study_programs`
--
ALTER TABLE `study_programs`
  ADD CONSTRAINT `FK6ltjx8n7xgi6v892n1mp1res0` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `subjects`
--
ALTER TABLE `subjects`
  ADD CONSTRAINT `FKf3iitb7yw9k676hqcchyxkenw` FOREIGN KEY (`subject_group_id`) REFERENCES `subject_groups` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FKfqfsu1deb869fsu1vpl2yb9ah` FOREIGN KEY (`study_program_id`) REFERENCES `study_programs` (`id`) ON DELETE CASCADE;

--
-- Ketidakleluasaan untuk tabel `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `FKh8ciramu9cc9q3qcqiv4ue8a6` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `FKhfh9dx7w3ubf1co1vdev94g3f` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
