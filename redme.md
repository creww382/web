<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Madrasah Aliyah Tarbiyatushibyan Plus Keterampilan</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Header -->
    <header>
        <div class="container">
            <nav class="navbar">
                <div class="logo">
                    <img src="images\logo MA yatashi blue.jpg" alt="Logo Madrasah">
                    <div class="logo-text">
                        <h1>Madrasah Aliyah</h1>
                        <h2>Tarbiyatushibyan Plus Keterampilan</h2>
                    </div>
                </div>
                <ul class="nav-links">
                    <li><a href="index.html">Beranda</a></li>
                    <li><a href="profil.html">Profil</a></li>
                    <li><a href="berita.html">Berita</a></li>
                    <li><a href="galeri.html">Galeri</a></li>
                    <li><a href="guru.html">Guru</a></li>
                    <li><a href="kontak.html">Kontak</a></li>
                     <li><a href="keterampilan.html">keterampilan</a></li>
                </ul>
                <div class="hamburger">
                    <i class="fas fa-bars"></i>
                </div>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero" id="home">
        <div class="hero-content">
            <h2>Membentuk Generasi Qur'ani dan Terampil</h2>
            <p>Madrasah Aliyah Tarbiyatushibyan Plus Keterampilan berkomitmen memberikan pendidikan berbasis keislaman dan keterampilan untuk membentuk siswa-siswi yang unggul dalam akademik, akhlak, dan keterampilan praktis.</p>
            <a href="profil.html" class="btn">Pelajari Lebih Lanjut</a>
            <a href="berita.html" class="btn btn-outline">Lihat Berita Terkini</a>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
        <div class="container">
            <div class="section-title">
                <h2>Statistik Madrasah</h2>
                <p>Data terkini tentang kondisi madrasah kami</p>
            </div>
            <div class="stats-container">
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="stat-number" id="student-count">40</div>
                    <div class="stat-text">Jumlah Siswa</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-chalkboard-teacher"></i>
                    </div>
                    <div class="stat-number" id="teacher-count">19</div>
                    <div class="stat-text">Jumlah Guru</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-trophy"></i>
                    </div>
                    <div class="stat-number" id="achievement-count">32</div>
                    <div class="stat-text">Prestasi Tercapai</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">
                        <i class="fas fa-school"></i>
                    </div>
                    <div class="stat-number" id="year-count">1981</div>
                    <div class="stat-text">Tahun Berdiri</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Welcome Section -->
    <section class="welcome">
        <div class="container">
            <div class="section-title">
                <h2>Profil Madrasah</h2>
                <p>Sejarah, visi, dan misi Madrasah Aliyah Tarbiyatushibyan Plus Keterampilan</p>
            </div>
            <div class="welcome-content">
                <div class="welcome-text">
                    <h2>Sambutan Kepala Madrasah</h2>
                    <p>Dengan hormat, saya menyambut hangat kunjungan Bapak/Ibu ke website Madrasah Aliyah Tarbiyatushibyan Plus Keterampilan. Di era digital ini, keterbukaan informasi menjadi sangat penting untuk menjalin komunikasi yang baik antara madrasah, siswa, orang tua, dan masyarakat.</p>
                    
                    <p>Madrasah ini berdiri sejak 17 maret 1941 dengan komitmen memberikan pendidikan berkualitas yang tidak hanya mengejar nilai akademik semata, tetapi juga membangun akhlak siswa yang beriman, bertaqwa, jujur, disiplin, dan bertanggung jawab.</p>
                    
                    <p>Sebagai madrasah plus keterampilan, kami menyediakan program-program keterampilan seperti menjahit, tata boga, tata rias, dan teknik komputer untuk menyiapkan siswa menjadi insan yang beriman dan terampil.</p>
                    <a href="profil.html" class="btn">Selengkapnya</a>
                </div>
                <div class="welcome-image">
                    <img src="images\banner.jpg" alt="Gedung Madrasah">
                </div>
            </div>
        </div>
    </section>

    <!-- News Section -->
    <section class="news">
        <div class="container">
            <div class="section-title">
                <h2>Berita & Kegiatan Terkini</h2>
                <p>Update terbaru dari kegiatan madrasah dan dunia pendidikan</p>
            </div>
            <div class="carousel-container">
                <div class="carousel-wrapper">
                    <div class="carousel-track">
                        <div class="news-card">
                            <div class="news-img">
                                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Lomba MTQ">
                            </div>
                            <div class="news-content">
                                <div class="news-category">Prestasi</div>
                                <div class="news-date">15 Desember 2025</div>
                                <h3>MTQ Tingkat Kota, Siswa MA Tarbiyatushibyan Meraih Juara 1</h3>
                                <p>Siswa MA Tarbiyatushibyan meraih juara 1 dalam MTQ tingkat kota tahun 2025...</p>
                                <a href="berita-detail.html?id=1" class="btn">Baca Selengkapnya</a>
                            </div>
                        </div>
                        <div class="news-card">
                            <div class="news-img">
                                <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Tahfidz">
                            </div>
                            <div class="news-content">
                                <div class="news-category">Kegiatan</div>
                                <div class="news-date">10 Desember 2025</div>
                                <h3>Penyerahan Sertifikat Tahfidz 30 Juz</h3>
                                <p>Sebanyak 15 siswa menerima sertifikat Tahfidz 30 Juz dari Kementerian Agama...</p>
                                <a href="berita-detail.html?id=2" class="btn">Baca Selengkapnya</a>
                            </div>
                        </div>
                        <div class="news-card">
                            <div class="news-img">
                                <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Keterampilan">
                            </div>
                            <div class="news-content">
                                <div class="news-category">Keterampilan</div>
                                <div class="news-date">5 Desember 2025</div>
                                <h3>Workshop Menjahit untuk Siswa Kelas XI</h3>
                                <p>Kelas XI mengikuti workshop menjahit sebagai bagian dari program keterampilan...</p>
                                <a href="berita-detail.html?id=3" class="btn">Baca Selengkapnya</a>
                            </div>
                        </div>
                        <div class="news-card">
                            <div class="news-img">
                                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Kegiatan Belajar">
                            </div>
                            <div class="news-content">
                                <div class="news-category">Pendidikan</div>
                                <div class="news-date">1 Desember 2025</div>
                                <h3>Pembelajaran Daring Berjalan Lancar</h3>
                                <p>Sistem pembelajaran daring berjalan lancar dengan partisipasi siswa yang tinggi...</p>
                                <a href="berita-detail.html?id=4" class="btn">Baca Selengkapnya</a>
                            </div>
                        </div>
                        <div class="news-card">
                            <div class="news-img">
                                <img src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Olahraga">
                            </div>
                            <div class="news-content">
                                <div class="news-category">Olahraga</div>
                                <div class="news-date">28 November 2025</div>
                                <h3>Tim Basket Raih Juara Turnamen Sekolah</h3>
                                <p>Tim basket MA Tarbiyatushibyan berhasil meraih juara dalam turnamen antar sekolah...</p>
                                <a href="berita-detail.html?id=5" class="btn">Baca Selengkapnya</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-btn carousel-prev" aria-label="Previous news">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <button class="carousel-btn carousel-next" aria-label="Next news">
                    <i class="fas fa-chevron-right"></i>
                </button>
                <div class="carousel-indicators">
                    <span class="indicator active" data-slide="0"></span>
                    <span class="indicator" data-slide="1"></span>
                    <span class="indicator" data-slide="2"></span>
                    <span class="indicator" data-slide="3"></span>
                    <span class="indicator" data-slide="4"></span>
                </div>
            </div>
            <div style="text-align: center; margin-top: 2rem;">
                <a href="berita.html" class="btn">Lihat Semua Berita</a>
            </div>
        </div>
    </section>

    <!-- Programs Section -->
    <section class="programs">
        <div class="container">
            <div class="section-title">
                <h2>Program Unggulan</h2>
                <p>Program-program yang menjadi keunggulan Madrasah Aliyah Tarbiyatushibyan</p>
            </div>
            <div class="programs-grid">
                <div class="program-card">
                    <div class="program-icon">
                        <i class="fas fa-quran"></i>
                    </div>
                    <h3>Pendidikan Qur'ani</h3>
                    <p>Program tahsin dan tahfidz untuk membentuk generasi yang menghafal Al-Qur'an</p>
                </div>
                <div class="program-card">
                    <div class="program-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <h3>Pendidikan Akademik</h3>
                    <p>Kurikulum unggulan untuk mencetak siswa yang cerdas dan berprestasi</p>
                </div>
                <div class="program-card">
                    <div class="program-icon">
                        <i class="fas fa-tools"></i>
                    </div>
                    <h3>Program Keterampilan</h3>
                    <p>Pelatihan keterampilan untuk menyiapkan siswa menjadi tenaga kerja yang terampil</p>
                </div>
                <div class="program-card">
                    <div class="program-icon">
                        <i class="fas fa-pray"></i>
                    </div>
                    <h3>Akhlak Mulia</h3>
                    <p>Pembentukan karakter dan akhlak mulia melalui pembiasaan sehari-hari</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>Tentang Kami</h3>
                    <p>Madrasah Aliyah Tarbiyatushibyan Plus Keterampilan berkomitmen memberikan pendidikan berbasis keislaman dan keterampilan untuk membentuk generasi Qur'ani dan terampil.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="footer-column">
                    <h3>Tautan Cepat</h3>
                    <ul class="footer-links">
                        <li><a href="index.html" class="active"></i> Beranda </a></li>
                        <li><a href="profil.html">Profil Madrasah</a></li>
                        <li><a href="berita.html">Berita</a></li>
                        <li><a href="galeri.html">Galeri</a></li>
                        <li><a href="guru.html">Guru & Staff</a></li>
                        <li><a href="kontak.html">Kontak</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Informasi Kontak</h3>
                    <p><i class="fas fa-map-marker-alt"></i> jln. Bondol Kayumanis kel. Kayumanis Kec. Tanah sareal Kota BOGOR </p>
                    <p><i class="fas fa-phone"></i> +62 812-8843-0812</p>
                    <p><i class="fas fa-envelope"></i> http://ma-yatashi.blogspot.co.id</p>
                    <p><i class="fas fa-clock"></i> Senin - Jumat: 07:00 - 16:00</p>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2025 Madrasah Aliyah Tarbiyatushibyan Plus Keterampilan. Hak Cipta Dilindungi.</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js"></script>
</body>
</html>


<!DOCTYPE html>
<html lang="en">

<head>
    <!-- ========== Meta Tags ========== -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="description" content="SMA Negeri 1 Yogyakarta telah menjadi bagian tak terpisahkan dari perjalanan Yogyakarta sebagai kota pendidikan sejak tahun 1957. Dijiwai motto Teladan Jayamahe, Sekolah ini mengantar keluarga besarnya untuk berjaya di manapun dan kapanpun.">
    <meta name="keywords" content="SMA Negeri 1 Yogyakarta, SMAN 1 Yogyakarta, SMA Negeri 1 Teladan Yogyakarta, SMAN 1 Teladan Yogyakarta, SMA Negeri 1 Teladan, SMAN 1 Teladan, SMA 1 Teladan, Teladan Jayamahe, Teladan, Sekolah Teladan, Yogyakarta, Jogja, DIY, Daerah Istimewa Yogyakarta, Kota Pelajar">
    <meta name="developed by" content="ICT Teladan">

    <!-- ========== Page Title ========== -->
    <title>SMA Negeri 1 Yogyakarta - Teladan Jayamahe</title>

    <!-- ========== Favicon Icon ========== -->
    <link rel="shortcut icon" href="https://www.sman1yogya.sch.id/assets/images/favicon.png" type="image/x-icon">

    <!-- ========== Start Stylesheet ========== -->
    <link href="https://www.sman1yogya.sch.id/assets/css/bootstrap.min.css" rel="stylesheet" />
    <link href="https://www.sman1yogya.sch.id/assets/css/font-awesome.min.css" rel="stylesheet" />
    <link href="https://www.sman1yogya.sch.id/assets/css/flaticon-set.css" rel="stylesheet" />
    <link href="https://www.sman1yogya.sch.id/assets/css/magnific-popup.css" rel="stylesheet" />
    <link href="https://www.sman1yogya.sch.id/assets/css/owl.carousel.min.css" rel="stylesheet" />
    <link href="https://www.sman1yogya.sch.id/assets/css/owl.theme.default.min.css" rel="stylesheet" />
    <link href="https://www.sman1yogya.sch.id/assets/css/animate.css" rel="stylesheet" />
    <link href="https://www.sman1yogya.sch.id/assets/css/bootsnav.css" rel="stylesheet" />
    <link href="https://www.sman1yogya.sch.id/assets/css/style.css" rel="stylesheet">
    <link href="https://www.sman1yogya.sch.id/assets/css/responsive.css" rel="stylesheet" />
    <link href="https://www.sman1yogya.sch.id/assets/css/style2.css" rel="stylesheet">
    <!-- ========== End Stylesheet ========== -->

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://www.sman1yogya.sch.id/assets/js/html5/html5shiv.min.js"></script>
      <script src="https://www.sman1yogya.sch.id/assets/js/html5/respond.min.js"></script>
    <![endif]-->

    <!-- ========== Google Fonts ========== -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
    
    <style>
        .popupSaran {
            right: 0;
            bottom: 0;
            display: block;
            position: fixed;
            z-index: 100;
            padding: 20px;
        }
        
        .popupSaran .item-saran {
            border-radius: 100%;
            height: 110px;
            width: 110px;
        }
        .popupSaran .item-saran a {
            display: block;
        }
        
        .popupSaran .item-saran img {
            margin: auto;
        }
    </style>

</head>

<body>
    <div class="popupSaran">
        <div class="item-saran text-center"><a href="https://www.sman1yogya.sch.id/id#kotaksaran" class="btn btn-link btn-small" title="Kotak Saran"><img src="https://www.sman1yogya.sch.id/assets/images/mail-icon4.png" class="logo logo-scrolled img-responsive" alt="Logo"></a></div>
    </div>

    <!-- Preloader Start -->
    <div class="se-pre-con"></div>
    <!-- Preloader Ends -->
	
		<!-- <div class="modal fade" id="infoModal" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title" id="staticBackdropLabel"></h2>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body modal-home-info">
                    <h3></h3>                
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div> -->
    
    <!-- Header 
    ============================================= -->
    <header id="home">

        <!-- Start Navigation -->
        <nav class="navbar navbar-default navbar-fixed navbar-transparent white bootsnav">

            <div class="container">

                <!-- Start Header Navigation -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                        <i class="fa fa-bars"></i>
                    </button>
                    <a class="navbar-brand" href="https://www.sman1yogya.sch.id/id">
                        <img src="https://www.sman1yogya.sch.id/assets/images/logo_putih.png" class="logo logo-display img-responsive" alt="Logo">
                        <img src="https://www.sman1yogya.sch.id/assets/images/logo_biru.png" class="logo logo-scrolled img-responsive" alt="Logo">
                    </a>
                </div>
                <!-- End Header Navigation -->

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="navbar-menu">
                    <ul class="nav navbar-nav navbar-right" data-in="#" data-out="#">

                        <!-- <li>
                            <a class="smooth-menu" href="">Home</a>
                        </li> -->
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle active" data-toggle="dropdown" >Profil Sekolah</a>
                            <ul class="dropdown-menu">
                                <li><a href="https://www.sman1yogya.sch.id/id/page/sambutan">Sambutan Kepala Sekolah</a></li>
                                <li><a href="https://www.sman1yogya.sch.id/id/page/sejarah">Sejarah</a></li>
                                <li><a href="https://www.sman1yogya.sch.id/id/page/visimisi">Visi & Misi</a></li>
                                <li><a href="https://www.sman1yogya.sch.id/id/page/kondisisekolah">Kondisi Sekolah</a></li>
                                <li><a href="https://sarpra.sman1yogya.sch.id" target="_blank">Sarana Prasarana</a></li>
                                <li><a href="https://adiwiyata.sman1yogya.sch.id" target="_blank">Adiwiyata</a></li>
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle active" data-toggle="dropdown" >Struktur Organisasi</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="https://www.sman1yogya.sch.id/id/strukturorganisasi/sekolah">Sekolah</a></li>
                                        <li><a href="https://www.sman1yogya.sch.id/id/strukturorganisasi/komite">Komite Sekolah</a></li>
                                        <li><a href="https://www.sman1yogya.sch.id/id/strukturorganisasi/osis">Osis</a></li>
                                        <li><a href="https://www.sman1yogya.sch.id/id/strukturorganisasi/mpk">MPK</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <a href="#guru" class="smooth-menu dropdown-toggle active" data-toggle="dropdown" >Staff</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="https://www.sman1yogya.sch.id/id/staff/guru">Tenaga Pendidik</a></li>
                                        <li><a href="https://www.sman1yogya.sch.id/id/staff/karyawan">Tenaga Kependidikan</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle active" data-toggle="dropdown" >Berita</a>
                            <ul class="dropdown-menu">
                                <li><a class="smooth-menu" href="https://www.sman1yogya.sch.id/id/news">Berita Terbaru</a></li>
                                <li><a href="https://www.sman1yogya.sch.id/id/info">Info Sekolah</a></li>
                                <li><a href="https://www.sman1yogya.sch.id/id/agenda">Agenda</a></li>
                                <li><a href="https://www.sman1yogya.sch.id/id/galery">Galery</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle active" data-toggle="dropdown" >Keuangan</a>
                            <ul class="dropdown-menu">
                                <li><a href="https://www.sman1yogya.sch.id/id/keuangan/bos">BOS</a></li>
                                <li><a href="https://www.sman1yogya.sch.id/id/keuangan/apbd">APBD</a></li>
                                <li><a href="https://www.sman1yogya.sch.id/id/keuangan/komite">Komite</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle active" data-toggle="dropdown" >Layanan</a>
                            <ul class="dropdown-menu">
                                <li><a href="#ekstrakurikuler">Ekstrakurikuler</a></li>
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle active" data-toggle="dropdown" >Kelas Layanan</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="http://cambridge.sman1yogya.sch.id" target="_blank">Cambridge</a></li>
                                        <li><a href="http://osn.sman1yogya.sch.id" target="_blank">OSN</a></li>
                                        <li><a href="http://riset.sman1yogya.sch.id" target="_blank">Riset</a></li>
                                    </ul>
                                </li>
                                <li><a href="https://laboratorium.sman1yogya.sch.id/" target="_blank">Laboratorium</a></li>
                                <li><a href="https://lib.sman1yogya.sch.id/index.php/katalog_con" target="_blank">Perpustakaan</a></li>
                                <li><a href="http://bit.ly/SKPtatausahaTeladan" target="_blank">Survey Kualitas Pelayanan</a></li>
                                <li><a href="http://bit.ly/PersuratanKesiswaanTeladan" target="_blank">Layanan Kesiswaan</a></li>
                                <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdMbFEbsKBnlsnAJ3J1in7yB4wD60q9wNRM_VEfKlQfx1hDCg/viewform?usp=sf_link" target="_blank">Form Pembimbingan Ekstrakurikuler</a></li>
                            </ul>
                        </li>
                        <li>
                            <a class="smooth-menu" href="#prestasi">Prestasi</a>
                        </li>
                        <li>
                            <a class="smooth-menu" href="#alumni">Profil Alumni</a>
                        </li>
                        <li>
                            <a class="smooth-menu" href="#contact">Kontak</a>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle active" data-toggle="dropdown" >
                                                                    <img width="20" src="https://www.sman1yogya.sch.id/assets/images/id.png"> ID
                                
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="https://www.sman1yogya.sch.id/id"><img width="20" src="https://www.sman1yogya.sch.id/assets/images/id.png"> Indonesia</a></li>
                                <li><a href="https://www.sman1yogya.sch.id/en"><img width="20" src="https://www.sman1yogya.sch.id/assets/images/en.png"> English</a></li>
                                <li><a href="https://www.sman1yogya.sch.id/jw"><img width="20" src="https://www.sman1yogya.sch.id/assets/images/jogja.png"> Jawa</a></li>
                            </ul>
                        </li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div>

        </nav>
        <!-- End Navigation -->

    </header>
    <!-- End Header -->

    <!-- Start Banner 
    ============================================= -->
        
    <div class="banner-area transparent-nav banner-search content-top-heading bg-fixed text-light text-normal text-center" style="background-image: url('https://www.sman1yogya.sch.id/assets/images/gedung_induk.jpg')">
        <!-- <video autoplay muted loop class="video-fix">
            <source src="https://www.sman1yogya.sch.id/assets/images/videosma1.mp4" type="video/mp4">
        </video> -->
        <div class="item">
            <div class="box-table shadow dark bg-home">
                <div class="box-cell">
                    <div class="container">

                        <div class="row">
                            <div class="col-md-10 col-md-offset-1">
                                <div class="content">
                                    <h1 class="sma1">SMA NEGERI 1 YOGYAKARTA</h1>
                                    <form action="https://www.sman1yogya.sch.id/id/search" method="POST">
                                        <input type="text" placeholder="Apa yang ingin anda cari?" class="form-control" name="kunci">
                                        <button type="submit">
                                            Cari
                                        </button>  
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>

        <!-- <div class="bg-fixed default-padding bg-dark text-light pengumuman">
        <div class="container">
            <div class="row">
                <div class="site-heading text-center">
                    <div class="col-md-8 col-md-offset-2">
                        <h2>Pengumuman</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="f-item recent-post">
                        <h3 class="pengumuman-title"></h3>
                                            </div>
                </div>
            </div>
        </div>
    </div> -->
        
     <!-- Start Our Features Latest Post
    ============================================= -->
    <section id="box-pengumuman" class="advisor-area default-padding">
        <div class="container">
            <div class="row">
                                <div class="col-sm-6 col-md-3 col-xl-5">
                    <div class="advisor-carousel owl-carousel owl-theme text-center text-light carousel-poster">
                                            <div class="advisor-item">
                            <div class="info-box">
                                <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/galery/87502156cbf6437e9de9f595cf5608d4.jpeg" alt="Thumb">  
                            </div>    
                        </div>
                                                <div class="advisor-item">
                            <div class="info-box">
                                <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/galery/5f9788c92fb82a5f7de66d1f55e65b59.jpg" alt="Thumb">  
                            </div>    
                        </div>
                                                <div class="advisor-item">
                            <div class="info-box">
                                <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/galery/3335cdab3039364ae7f89f911042e946.jpg" alt="Thumb">  
                            </div>    
                        </div>
                                                <div class="advisor-item">
                            <div class="info-box">
                                <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/galery/4a873f0a6b8bf1ae79cd9f64b315b211.jpg" alt="Thumb">  
                            </div>    
                        </div>
                                                <div class="advisor-item">
                            <div class="info-box">
                                <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/galery/27e1f324fced9719c639f44c923e3bcb.jpg" alt="Thumb">  
                            </div>    
                        </div>
                                                <div class="advisor-item">
                            <div class="info-box">
                                <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/galery/03e9d1d04bb10383a06ee43a635e8eb0.jpg" alt="Thumb">  
                            </div>    
                        </div>
                                                <div class="advisor-item">
                            <div class="info-box">
                                <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/galery/8c9566a5ee9a2f3a9c6c342ea396dc17.jpg" alt="Thumb">  
                            </div>    
                        </div>
                                                <div class="advisor-item">
                            <div class="info-box">
                                <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/galery/ef7d222d2bd60b1e4e036675791e25da.jpeg" alt="Thumb">  
                            </div>    
                        </div>
                                                
                    </div>
                </div>
                                                    <div class="col-sm-6 col-md-4 col-xl-3 home-sidebar">
                                    <!-- Start Latest Post -->
                    <div class="sidebar-item latest-posts trending-courses-box">
                        <h4>Pengumuman</h4>
                        <div class="trending-courses-items">
                                                        <div class="item item-pengumuman">
                                <div class="content">
                                    <div class="thumb">
                                        <a href="#">
                                            <img src="https://www.sman1yogya.sch.id/assets/images/uploads/info/bff6d51c9183c8d80c9a403cc597a9e6-70x70.jpg" alt="Thumb">
                                        </a>
                                    </div>
                                    <div class="info">
                                        <h4>
                                            <a href="https://www.sman1yogya.sch.id/id/info/detail/79">ASESMEN SUMATIF TENGAH SEMESTER GANJIL TAHUN 2025</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                                                        <div class="item item-pengumuman">
                                <div class="content">
                                    <div class="thumb">
                                        <a href="#">
                                            <img src="https://www.sman1yogya.sch.id/assets/images/uploads/info/3dd1012e789fcd2b9df57f06febf141e-70x70.jpg" alt="Thumb">
                                        </a>
                                    </div>
                                    <div class="info">
                                        <h4>
                                            <a href="https://www.sman1yogya.sch.id/id/info/detail/78">Pembagian Ruang Seleksi Mata Pelajaran Pilihan Coding dan&#8230;</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                                                        <div class="item item-pengumuman">
                                <div class="content">
                                    <div class="thumb">
                                        <a href="#">
                                            <img src="https://www.sman1yogya.sch.id/assets/images/uploads/info/0b92a118cd95211e95ee0fc8965ef2d8-70x70.jpg" alt="Thumb">
                                        </a>
                                    </div>
                                    <div class="info">
                                        <h4>
                                            <a href="https://www.sman1yogya.sch.id/id/info/detail/77">Pengaturan Waktu KBM dan Daftar Guru Tahun Pelajaran 2025/2026</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                                                        <div class="item item-pengumuman">
                                <div class="content">
                                    <div class="thumb">
                                        <a href="#">
                                            <img src="https://www.sman1yogya.sch.id/assets/images/uploads/info/1bef3dcd783ad1ea53f548980aad207f-70x70.jpg" alt="Thumb">
                                        </a>
                                    </div>
                                    <div class="info">
                                        <h4>
                                            <a href="https://www.sman1yogya.sch.id/id/info/detail/76">Pengumuman Susunan Kelas X/ Fase E</a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                                                        
                            <a href="https://www.sman1yogya.sch.id/id/info" class="more">Read More <i class="fas fa-angle-double-right"></i></a>
                        </div>
                    </div>
                    <!-- End Latest Posts -->

                </div>
                                    <div class="col-sm-12 col-md-5 col-xl-4 our-feature-items sambutan">
                                    <div class="row">

                        <div class="col-md-12 info less-bar">
                            <h4>Sambutan Kepala Sekolah</h4>
                                                            <video width="100%" controls muted>
                					<source src="https://www.sman1yogya.sch.id/assets/videos/Sambutan_Pak_Kepsek.mp4">
                				</video>
                				<p><em>Bismillahirrohmanirrahim</em></p> <p><em>Assalamu&lsquo;alaikum Wr. Wb.</em></p> <p>&nbsp;Segala puji hanya untuk Allah SWT dan shalawat serta salam semoga tercurah atas nabi yang terakhir, yaitu nabi kita Muhammad SAW, begitu pula atas keluarga,&#8230;                                <a href="https://www.sman1yogya.sch.id/id/page/sambutan">Read More <i class="fas fa-angle-double-right"></i></a>
                                                        
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- End Our Features & Latest Post -->

    <!-- Start Blog 
    ============================================= -->
    <div id="berita" class="blog-area bg-dark circle default-padding bottom-less">
        <div class="container">
            <div class="row">
                <div class="site-heading text-center">
                    <div class="col-md-8 col-md-offset-2">
                        <h2>Berita Terbaru</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="blog-items">
                                        <!-- Single Item -->
                    <div class="col-xs-6 col-md-4 single-item">
                        <div class="item">
                            <div class="thumb news-thumb">
                                <a href="#"><img class="img-responsive" src="https://www.sman1yogya.sch.id/assets/images/uploads/news/1c46b16a55c2d114b4a82e6b437235ee-800x600.jpg" alt="Thumb"></a>
                                <div class="date">
                                    <h4><span>10</span>Nov, 2025</h4>
                                </div>
                            </div>
                            <div class="info">
                                <div class="main-info">
                                    <h4>
                                        <a class="hidden-xs" href="https://www.sman1yogya.sch.id/id/news/detail/191">DI HARI PAHLAWAN, SMAN 1 YOGYAKARTA LANTIK PENGURUS OSIS&#8230;</a>
                                        <a class="visible-xs" href="https://www.sman1yogya.sch.id/id/news/detail/191">DI HARI PAHLAWAN, SMAN 1 YOGYAKARTA LANTIK&#8230;</a>
                                    </h4>
                                    <div class="hidden-xs">
                                    <p>Yogyakarta, 10 November 2025 - SMAN 1 Yogyakarta melantik pengurus OSIS 2025/2026 dalam sebuah upacara&#8230;</p>
                                    <a href="https://www.sman1yogya.sch.id/id/news/detail/191">Read More <i class="fas fa-angle-double-right"></i></a>
                                    </div>
                                </div>
                                <div class="meta">
                                    <span><i class="fas fa-user"></i> admin</span>
                                    
                                    <!-- <ul>
                                        <li>
                                            <a href="#"><i class="fas fa-user"></i> </a>
                                        </li>
                                    </ul> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Single Item -->
                                        <!-- Single Item -->
                    <div class="col-xs-6 col-md-4 single-item">
                        <div class="item">
                            <div class="thumb news-thumb">
                                <a href="#"><img class="img-responsive" src="https://www.sman1yogya.sch.id/assets/images/uploads/news/a10e70964286426530bb8e9c6d29956b-800x600.jpg" alt="Thumb"></a>
                                <div class="date">
                                    <h4><span>28</span>Oct, 2025</h4>
                                </div>
                            </div>
                            <div class="info">
                                <div class="main-info">
                                    <h4>
                                        <a class="hidden-xs" href="https://www.sman1yogya.sch.id/id/news/detail/190">Upacara Peringatan Hari Sumpah Pemuda ke-97 Penuh Khidmat. </a>
                                        <a class="visible-xs" href="https://www.sman1yogya.sch.id/id/news/detail/190">Upacara Peringatan Hari Sumpah Pemuda ke-97&#8230;</a>
                                    </h4>
                                    <div class="hidden-xs">
                                    <p>Selasa pagi, 28 Oktober 2025. Upacara bendera diikuti oleh Bapak Ibu Guru Karyawan dan siswa SMAN 1&#8230;</p>
                                    <a href="https://www.sman1yogya.sch.id/id/news/detail/190">Read More <i class="fas fa-angle-double-right"></i></a>
                                    </div>
                                </div>
                                <div class="meta">
                                    <span><i class="fas fa-user"></i> admin</span>
                                    
                                    <!-- <ul>
                                        <li>
                                            <a href="#"><i class="fas fa-user"></i> </a>
                                        </li>
                                    </ul> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Single Item -->
                                        <!-- Single Item -->
                    <div class="col-xs-6 col-md-4 single-item">
                        <div class="item">
                            <div class="thumb news-thumb">
                                <a href="#"><img class="img-responsive" src="https://www.sman1yogya.sch.id/assets/images/uploads/news/7b93634917cff22ab30d2fd315c2e362-800x600.jpg" alt="Thumb"></a>
                                <div class="date">
                                    <h4><span>21</span>Oct, 2025</h4>
                                </div>
                            </div>
                            <div class="info">
                                <div class="main-info">
                                    <h4>
                                        <a class="hidden-xs" href="https://www.sman1yogya.sch.id/id/news/detail/189">Dua Siswi SMA Negeri 1 Yogyakarta Ciptakan Aplikasi Bahasa&#8230;</a>
                                        <a class="visible-xs" href="https://www.sman1yogya.sch.id/id/news/detail/189">Dua Siswi SMA Negeri 1 Yogyakarta Ciptakan&#8230;</a>
                                    </h4>
                                    <div class="hidden-xs">
                                    <p>Yogyakarta, 21 Oktober 2025, Di tengah tantangan komunikasi antara teman dengar dan teman tuli, dua&#8230;</p>
                                    <a href="https://www.sman1yogya.sch.id/id/news/detail/189">Read More <i class="fas fa-angle-double-right"></i></a>
                                    </div>
                                </div>
                                <div class="meta">
                                    <span><i class="fas fa-user"></i> admin</span>
                                    
                                    <!-- <ul>
                                        <li>
                                            <a href="#"><i class="fas fa-user"></i> </a>
                                        </li>
                                    </ul> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Single Item -->
                                        <!-- Single Item -->
                    <div class="col-xs-6 col-md-4 single-item">
                        <div class="item">
                            <div class="thumb news-thumb">
                                <a href="#"><img class="img-responsive" src="https://www.sman1yogya.sch.id/assets/images/uploads/news/3d9bfeb700c18a0b93b9bab382229da1-800x600.jpg" alt="Thumb"></a>
                                <div class="date">
                                    <h4><span>15</span>Oct, 2025</h4>
                                </div>
                            </div>
                            <div class="info">
                                <div class="main-info">
                                    <h4>
                                        <a class="hidden-xs" href="https://www.sman1yogya.sch.id/id/news/detail/188">SMAN 1 YOGYAKARTA PEDULI LINGKUNGAN: SISWA KELAS X LAKSANAKAN&#8230;</a>
                                        <a class="visible-xs" href="https://www.sman1yogya.sch.id/id/news/detail/188">SMAN 1 YOGYAKARTA PEDULI LINGKUNGAN: SISWA&#8230;</a>
                                    </h4>
                                    <div class="hidden-xs">
                                    <p>Yogyakarta, 15 Oktober 2025 - Siswa kelas X SMAN 1 Yogyakarta menunjukkan kepedulian mereka terhadap&#8230;</p>
                                    <a href="https://www.sman1yogya.sch.id/id/news/detail/188">Read More <i class="fas fa-angle-double-right"></i></a>
                                    </div>
                                </div>
                                <div class="meta">
                                    <span><i class="fas fa-user"></i> admin</span>
                                    
                                    <!-- <ul>
                                        <li>
                                            <a href="#"><i class="fas fa-user"></i> </a>
                                        </li>
                                    </ul> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Single Item -->
                                        <!-- Single Item -->
                    <div class="col-xs-6 col-md-4 single-item">
                        <div class="item">
                            <div class="thumb news-thumb">
                                <a href="#"><img class="img-responsive" src="https://www.sman1yogya.sch.id/assets/images/uploads/news/1ad4098c824b666d48ad066e8f71cf88-800x600.jpg" alt="Thumb"></a>
                                <div class="date">
                                    <h4><span>15</span>Oct, 2025</h4>
                                </div>
                            </div>
                            <div class="info">
                                <div class="main-info">
                                    <h4>
                                        <a class="hidden-xs" href="https://www.sman1yogya.sch.id/id/news/detail/187">SISWA SMAN 1 YOGYAKARTA PEDULI LINGKUNGAN: BERSIH-BERSIH&#8230;</a>
                                        <a class="visible-xs" href="https://www.sman1yogya.sch.id/id/news/detail/187">SISWA SMAN 1 YOGYAKARTA PEDULI LINGKUNGAN:&#8230;</a>
                                    </h4>
                                    <div class="hidden-xs">
                                    <p>Yogyakarta, 15 Oktober 2025 - Siswa kelas X SMAN 1 Yogyakarta menunjukkan kepedulian mereka terhadap&#8230;</p>
                                    <a href="https://www.sman1yogya.sch.id/id/news/detail/187">Read More <i class="fas fa-angle-double-right"></i></a>
                                    </div>
                                </div>
                                <div class="meta">
                                    <span><i class="fas fa-user"></i> admin</span>
                                    
                                    <!-- <ul>
                                        <li>
                                            <a href="#"><i class="fas fa-user"></i> </a>
                                        </li>
                                    </ul> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Single Item -->
                                        <!-- Single Item -->
                    <div class="col-xs-6 col-md-4 single-item">
                        <div class="item">
                            <div class="thumb news-thumb">
                                <a href="#"><img class="img-responsive" src="https://www.sman1yogya.sch.id/assets/images/uploads/news/46f830bf2a46dcec8603c1428a0c1895-800x600.jpg" alt="Thumb"></a>
                                <div class="date">
                                    <h4><span>15</span>Oct, 2025</h4>
                                </div>
                            </div>
                            <div class="info">
                                <div class="main-info">
                                    <h4>
                                        <a class="hidden-xs" href="https://www.sman1yogya.sch.id/id/news/detail/186">SISWA KELAS X SMAN 1 YOGYAKARTA LAKSANAKAN KUNJUNGAN KOKULIKULER&#8230;</a>
                                        <a class="visible-xs" href="https://www.sman1yogya.sch.id/id/news/detail/186">SISWA KELAS X SMAN 1 YOGYAKARTA LAKSANAKAN&#8230;</a>
                                    </h4>
                                    <div class="hidden-xs">
                                    <p>Yogyakarta, 15 Oktober 2025 - Siswa kelas X SMAN 1 YOGYAKARTA melaksanakan kegiatan kokurikuler dengan&#8230;</p>
                                    <a href="https://www.sman1yogya.sch.id/id/news/detail/186">Read More <i class="fas fa-angle-double-right"></i></a>
                                    </div>
                                </div>
                                <div class="meta">
                                    <span><i class="fas fa-user"></i> admin</span>
                                    
                                    <!-- <ul>
                                        <li>
                                            <a href="#"><i class="fas fa-user"></i> </a>
                                        </li>
                                    </ul> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Single Item -->
                    
                </div>
            </div>
            <div class="row">
                <div class="more-btn col-md-12 text-center">
                    <a href="https://www.sman1yogya.sch.id/id/news" class="btn btn-theme border btn-md">Tampilkan Semua Berita</a>
                </div>
            </div>
        </div>
    </div>
    <!-- End Blog -->

    <!-- Start Event
    ============================================= -->
    <section id="prestasi" class="event-area default-padding">
        <div class="container">
            <div class="row">
                <div class="site-heading text-center">
                    <div class="col-md-8 col-md-offset-2">
                        <h2>Prestasi Terbaru</h2>
                    </div>
                </div>
            </div>



            <div class="row">
                <div class="event-items">
                                        <!-- Single Item -->
                     <div class="item horizontal col-md-12">
                        <div class="col-md-6 thumb bg-cover" style="background-image: url(https://www.sman1yogya.sch.id/assets/images/uploads/prestasi/729da06f0d8773580c514244bd259f04.jpg);">
                            <!-- <div class="date">
                                <h4><span>12</span> Dec, 2018</h4>
                            </div> -->
                        </div>
                        <div class="col-md-6 info">
                            <h4>
                                <a href="https://www.sman1yogya.sch.id/id/prestasi/detail/152">Juara 1 Lomba Cerdas Cermat Pancasila dan UUD NRI 1945 </a>
                            </h4>
                            <div class="meta">
                                                                <ul>
                                    <li><i class="fas fa-calendar-alt"></i>31 Oct, 2025</li>
                                    <li><i class="fas fa-map"></i>  </li>
                                </ul>
                            </div>
                            <p><strong>Skala Nasional</strong></p>
                                                            <p><strong><i class="fas fa-users"></i> : Muhammad Imtihan Syamsul/XII FL9 
Langit Ar Abrar Rafa Kurniawan/XE2 
Wijaya Prana/XE2</strong></p>
                                                        <p>
                                <p>Penyelenggara UNY</p>
                            </p>
                        </div>
                    </div> 
                                        <!-- Single Item -->
                     <div class="item horizontal col-md-12">
                        <div class="col-md-6 thumb bg-cover" style="background-image: url(https://www.sman1yogya.sch.id/assets/images/uploads/prestasi/8247b4930713cd84db54df2077549562.jpg);">
                            <!-- <div class="date">
                                <h4><span>12</span> Dec, 2018</h4>
                            </div> -->
                        </div>
                        <div class="col-md-6 info">
                            <h4>
                                <a href="https://www.sman1yogya.sch.id/id/prestasi/detail/156">JUARA 2 FIKSI NASIONAL 2025</a>
                            </h4>
                            <div class="meta">
                                                                <ul>
                                    <li><i class="fas fa-calendar-alt"></i>30 Oct, 2025</li>
                                    <li><i class="fas fa-map"></i>  </li>
                                </ul>
                            </div>
                            <p><strong>Skala Nasional</strong></p>
                                                            <p><strong><i class="fas fa-users"></i> : Hanif Fatih Ma'arif (XI F5)
Ahmad Fajri (XI F5)
</strong></p>
                                                        <p>
                                <p>KATEGORI RENCANA USAHA CABANG AJANG KESEHATAN&nbsp;</p>
                            </p>
                        </div>
                    </div> 
                                        <!-- Single Item -->
                     <div class="item horizontal col-md-12">
                        <div class="col-md-6 thumb bg-cover" style="background-image: url(https://www.sman1yogya.sch.id/assets/images/uploads/prestasi/929a7a5db8f4fb72c08d6e0ad9894535.jpg);">
                            <!-- <div class="date">
                                <h4><span>12</span> Dec, 2018</h4>
                            </div> -->
                        </div>
                        <div class="col-md-6 info">
                            <h4>
                                <a href="https://www.sman1yogya.sch.id/id/prestasi/detail/153">JUARA 1 FIKSI NASIONAL 2025</a>
                            </h4>
                            <div class="meta">
                                                                <ul>
                                    <li><i class="fas fa-calendar-alt"></i>30 Oct, 2025</li>
                                    <li><i class="fas fa-map"></i>  </li>
                                </ul>
                            </div>
                            <p><strong>Skala Nasional</strong></p>
                                                            <p><strong><i class="fas fa-users"></i> : Harisa Alya Prawitowati (XII FL2)
Grace Natalia Putri Sinulingga (XII FL 7)

</strong></p>
                                                        <p>
                                <p>KATEGORI PENGEMBANGAN USAHA CABANG AJANG GAMES (PERMAINAN)&nbsp;</p>
                            </p>
                        </div>
                    </div> 
                                        <!-- Single Item -->
                     <div class="item horizontal col-md-12">
                        <div class="col-md-6 thumb bg-cover" style="background-image: url(https://www.sman1yogya.sch.id/assets/images/uploads/prestasi/9b97627ecb0ce769fb48c92ee06eff6d.jpg);">
                            <!-- <div class="date">
                                <h4><span>12</span> Dec, 2018</h4>
                            </div> -->
                        </div>
                        <div class="col-md-6 info">
                            <h4>
                                <a href="https://www.sman1yogya.sch.id/id/prestasi/detail/149">JUARA 1 lomba Kalijaga Physics Olympiad UIN Sunan Kalijaga.</a>
                            </h4>
                            <div class="meta">
                                                                <ul>
                                    <li><i class="fas fa-calendar-alt"></i>06 Oct, 2025</li>
                                    <li><i class="fas fa-map"></i>  </li>
                                </ul>
                            </div>
                            <p><strong>Skala Nasional</strong></p>
                                                            <p><strong><i class="fas fa-user"></i> : Azam Musyafa XII FL2</strong></p>
                                                        <p>
                                                            </p>
                        </div>
                    </div> 
                                        <!-- Single Item -->
                     <div class="item horizontal col-md-12">
                        <div class="col-md-6 thumb bg-cover" style="background-image: url(https://www.sman1yogya.sch.id/assets/images/uploads/prestasi/b013521a4402cd95ccdee8804e76c7bb.jpg);">
                            <!-- <div class="date">
                                <h4><span>12</span> Dec, 2018</h4>
                            </div> -->
                        </div>
                        <div class="col-md-6 info">
                            <h4>
                                <a href="https://www.sman1yogya.sch.id/id/prestasi/detail/148">JUARA 1 LOMBA MURAL PELAJAR HUT KOTA YOGYAKARTA KE-269</a>
                            </h4>
                            <div class="meta">
                                                                <ul>
                                    <li><i class="fas fa-calendar-alt"></i>06 Oct, 2025 - 16 Oct, 2025</li>
                                    <li><i class="fas fa-map"></i>  </li>
                                </ul>
                            </div>
                            <p><strong>Skala Kota</strong></p>
                                                            <p><strong><i class="fas fa-users"></i> : Arline Kania Harry/05/FL2, Axel Hamasya Arya Birawa/06/FL2, Habibulloh Al Fatah/16/FL2, Maura Sekar Cantya/24/FL2, dan Jaisyul Ismail/21/FL5</strong></p>
                                                        <p>
                                                            </p>
                        </div>
                    </div> 
                                        <!-- Single Item -->
                     <div class="item horizontal col-md-12">
                        <div class="col-md-6 thumb bg-cover" style="background-image: url(https://www.sman1yogya.sch.id/assets/images/uploads/prestasi/2553593263ac202262adcb471ec517bf.jpg);">
                            <!-- <div class="date">
                                <h4><span>12</span> Dec, 2018</h4>
                            </div> -->
                        </div>
                        <div class="col-md-6 info">
                            <h4>
                                <a href="https://www.sman1yogya.sch.id/id/prestasi/detail/150">JUARA 1 MIX TEAM dan JUARA 3 BEREGU KEJURDA SENIOR</a>
                            </h4>
                            <div class="meta">
                                                                <ul>
                                    <li><i class="fas fa-calendar-alt"></i>05 Oct, 2025</li>
                                    <li><i class="fas fa-map"></i>  </li>
                                </ul>
                            </div>
                            <p><strong>Skala Kota</strong></p>
                                                            <p><strong><i class="fas fa-user"></i> : Ahmad Fatihuddin XI F6</strong></p>
                                                        <p>
                                                            </p>
                        </div>
                    </div> 
                    
                    <div class="more-btn col-md-12 text-center">
                        <a href="https://www.sman1yogya.sch.id/id/prestasi" class="btn btn-dark border btn-md">Tampilkan semua prestasi</a>
                    </div>

                </div>
            </div>
        </div>
    </section>
    <!-- End Event -->

    <!-- Start Top Categories 
    ============================================= -->
    <div id="ekstrakurikuler" class="our-featues-area inc-trending-courses about-area default-padding bg-dark">
        <div class="container">
            <div class="col-lg-12 our-feature-items">
                <div class="row">
                    <div class="site-heading text-center text-light">
                        <div class="col-md-8 col-md-offset-2">
                            <h2>Ekstrakurikuler</h2>
                            
                        </div>
                    </div>
                </div>
                <div class="row">

                    <!-- Start Fatures -->
                    <div class="our-features ekstra-items">
                        <div class="col-md-3 col-xs-6 equal-height">
                            <div class="item mariner">
                                <a href="#" title="Tonti">
                                    <div class="icon">
                                        <i class="flaticon-manager"></i>
                                    </div>
                                    <div class="info">
                                        <h4>Pleton Inti (TONTI)</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6 equal-height">
                            <div class="item cinnabar">
                                <a href="#" title="TJRC (PMR)">
                                    <div class="icon">
                                        <i class="flaticon-medal"></i>
                                    </div>
                                    <div class="info">
                                        <h4>Teladan Junior Red Cross (TJRC)</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6 equal-height">
                            <div class="item casablanca">
                                <a href="https://tsc.sman1yogya.sch.id/" title="TSC (KIR)">
                                    <div class="icon">
                                        <i class="flaticon-training"></i>
                                    </div>
                                    <div class="info">
                                        <h4>Teladan Science Club (TSC)</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6 equal-height">
                            <div class="item malachite">
                                <a href="#" title="TRC">
                                    <div class="icon">
                                        <i class="flaticon-conveyor"></i>
                                    </div>
                                    <div class="info">
                                        <h4>Teladan Robotic Club (TRC)</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6 equal-height">
                            <div class="item java">
                                <a href="#" title="SIGMA (Jurnalistik)">
                                    <div class="icon">
                                        <i class="flaticon-online-course"></i>
                                    </div>
                                    <div class="info">
                                        <h4>SIGMA (Jurnalistik)</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6 equal-height">
                            <div class="item plum">
                                <a href="#" title="Nila Pangkaja (Teater)">
                                    <div class="icon">
                                        <i class="flaticon-teacher-lecture-in-front-an-auditory"></i>
                                    </div>
                                    <div class="info">
                                        <h4>Nila Pangkaja (Teater)</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6 equal-height">
                            <div class="item emerald">
                                <a href="#" title="THA (Pecinta Alam)">
                                    <div class="icon">
                                        <i class="flaticon-education"></i>
                                    </div>
                                    <div class="info">
                                        <h4>Teladan Hiking Association (THA)</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-md-3 col-xs-6 equal-height">
                            <div class="item brilliantrose">
                                <a href="#" title="ANT (Debat Multibahasa)">
                                    <div class="icon">
                                        <i class="flaticon-translator"></i>
                                    </div>
                                    <div class="info">
                                        <h4>All Nation Teenagers</h4>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            <!-- End Our Features -->
        </div>
    </div>
    <!-- End Top Categories -->
   

    <!-- Start Advisor Area
    ============================================= -->
    <section id="guru" class="advisor-area bg-gray default-padding">
        <div class="container">
            <div class="row">
                <div class="site-heading text-center">
                    <div class="col-md-8 col-md-offset-2">
                        <h2>Guru dan Tenaga Kependidikan</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="advisor-carousel owl-carousel owl-theme text-center text-light carousel-pendidik">
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/6784be6b1692c.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Ngadiya, S.Pd., M.M.</h4>
                                    <p>Kepala Sekolah</p>
                                </div>
                            </div>    
                        </div>
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/guru.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Caecillia Esti Prastiwi, S.Pd.</h4>
                                    <p>Pendidikan Agama dan Budi Pekerti</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/guru.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Muhammad Anas, S.Pd.I</h4>
                                    <p>Pendidikan Agama dan Budi Pekerti</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/guru.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Nurul Yaqin, S.Ag., M.Si.</h4>
                                    <p>Pendidikan Agama dan Budi Pekerti</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/guru.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>WINANTI UNTUNG SUMARYONO, S.Th.</h4>
                                    <p>Pendidikan Agama dan Budi Pekerti</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/64a3c599a0e78.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Yekti Nugroho, M.Pd.</h4>
                                    <p>Pendidikan Agama dan Budi Pekerti</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78cba3cb2.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Didit Waluyono, S.Pd., M.Pd.</h4>
                                    <p>Pendidikan Pancasila dan Kewarganegaraan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78cbb2194.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Dr. Trisna Widyana, S.Pd., M.Pd.</h4>
                                    <p>Pendidikan Pancasila dan Kewarganegaraan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/guru.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>ARDA SEDYOKO, S.Pd.,M.Pd.Gr</h4>
                                    <p>Bahasa Indonesia</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/guru.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>NUR RIDWAN, S.Pd</h4>
                                    <p>Bahasa Indonesia</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/guru.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Puji Utami, S.Pd.</h4>
                                    <p>Bahasa Indonesia</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78cbad178.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Siti Purnaningsih, S.S., M.Pd.</h4>
                                    <p>Bahasa Indonesia</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78cba5f07.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Haryani, S.Pd., M.Pd.</h4>
                                    <p>Matematika</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/guru.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Maria Ernawati Millatana, S.Pd.</h4>
                                    <p>Matematika</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/guru.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>RIDHO YUWONO, S.Si.,M.T</h4>
                                    <p>Matematika</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78cbb030f.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Sunarwanta, S.Pd.</h4>
                                    <p>Matematika</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/62f9e0285caec.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Erwin Syahril Mubarok, M.Pd.</h4>
                                    <p>Bahasa Inggris</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78cbad548.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Slamet Marmono, S.Pd.</h4>
                                    <p>Bahasa Inggris</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/612d98fce8b0e.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Utami Soifah, S.Pd., M.Pd.</h4>
                                    <p>Bahasa Inggris</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78cba79bb.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Drs. Marmayadi</h4>
                                    <p>Sejarah Indonesia</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/guru.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Prawhita Adi Putri, S.Pd.</h4>
                                    <p>Seni Budaya</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/guru.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Ryan Kristianto, S.Pd.</h4>
                                    <p>Seni Budaya</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78cbb30d6.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Wiwit Yulian Ismail, S.Pd.</h4>
                                    <p>Seni Budaya</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5c74f72d66f1f.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Andri Kretanto, S.Pd.</h4>
                                    <p>Pendidikan Jasmani, Olah Raga dan Kesehatan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78cba3511.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Bambang Kusnanto, S.Pd.</h4>
                                    <p>Pendidikan Jasmani, Olah Raga dan Kesehatan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5c74f72d6a248.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Djoko Sutrisno, S.Pd.</h4>
                                    <p>Pendidikan Jasmani, Olah Raga dan Kesehatan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/guru.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Ratri Ismarmiyati, S.Pd.</h4>
                                    <p>Prakarya dan Kewirausahaan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78cbb2564.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Triwik Damarjati, S.S., M.Pd.</h4>
                                    <p>Bahasa Jawa</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/guru.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Yuni Her Utami, S.Pd.</h4>
                                    <p>Bahasa Jawa</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78cba4453.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Dra. Indah Prihati</h4>
                                    <p>Matematika</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5c74f72d75b2b.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Dra. SRI WAHYUNI</h4>
                                    <p>Matematika</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78cba66a8.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Kusyanto, S.Pd.</h4>
                                    <p>Matematika</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/guru.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Ainun Rubi Faradilla, S.Pd.</h4>
                                    <p>Biologi</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/guru.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Dr. Sri Utari, S.Pd., M.Pd.Si.</h4>
                                    <p>Biologi</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78cba7d8c.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Menik Remen Lestari, S.Pd.</h4>
                                    <p>Biologi</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78cba946f.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Nur Rosyidah, S.Pd.</h4>
                                    <p>Biologi</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/guru.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>PUNGKI FARIDATUL KHASANAH, S.Pd.</h4>
                                    <p>Biologi</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5c74f72d6c228.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Dra. Enik Sri Agustini</h4>
                                    <p>Fisika</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78cbae48b.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Sri Lestari, S.Pd., M.Pd.Si.</h4>
                                    <p>Fisika</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78cbb06e0.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Suparyono, S.Pd.</h4>
                                    <p>Fisika</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5e9fbe78b2ec0.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Agrib Nur Ayubi, S.Pd.</h4>
                                    <p>Kimia</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78cba1a5d.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Askariyah Dasa Novembriyati, S.Pd.</h4>
                                    <p>Kimia</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/guru.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Febri Saputri, S.Pd., M.Pd</h4>
                                    <p>Kimia</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/guru.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>SUPRIYANTO, S.T</h4>
                                    <p>Kimia</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78cba38e1.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Damar Widiyani, S.Pd.</h4>
                                    <p>Geografi</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/guru.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>NUR INDAH ASTUTI, S.Pd</h4>
                                    <p>Geografi</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5ddb5e5e2a823.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Dian Hikmah Ismarini, S.Pd., M.Pd.</h4>
                                    <p>Sosiologi</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78cbaff3f.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Sunarno, S.Pd.</h4>
                                    <p>Ekonomi</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/guru.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Mukhtar, M.Pd</h4>
                                    <p>Sejarah</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78cba21fe.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Astuti Andriyani, M.Pd.</h4>
                                    <p>Bahasa dan Sastra Inggris</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/guru.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Lussy Novarida Ridwan, S.S., M.Pd.</h4>
                                    <p>Bahasa Jepang</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5ddb5e60c6a6c.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Sigit Tri Upoyo, S.Pd.</h4>
                                    <p>Bahasa Jerman</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/guru.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>SITI MUTIA SURYANI, S.Pd.</h4>
                                    <p>Informatika</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78cbad919.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Sopan Setiawan, S.Kom.</h4>
                                    <p>Informatika</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/guru.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Ismi Uswatun Khasanah, S.Pd.</h4>
                                    <p>Bimbingan Konseling</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5e9fbce7e2498.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Lintang Robbani, S.Pd.</h4>
                                    <p>Bimbingan Konseling</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/634381d4bbc1d.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Liza Wirattriana, S.Pd.</h4>
                                    <p>Bimbingan Konseling</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/602390d1441f9.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Nur Yono, S.Pd.</h4>
                                    <p>Bimbingan Konseling</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/612d9933220ff.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Prashanti Ashtriyani, S.Pd.</h4>
                                    <p>Bimbingan Konseling</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                                        <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/60518a86eac0f.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Cut Madinna Tiraya, S.Si.</h4>
                                    <!--<p></p>-->
                                    <p>Tenaga Kependidikan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78d973650.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Desi Nur Wijayanti, S.Si.</h4>
                                    <!--<p></p>-->
                                    <p>Tenaga Kependidikan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5bc93fa1c7a2b.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Dian Untoro</h4>
                                    <!--<p></p>-->
                                    <p>Tenaga Kependidikan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78d973a20.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Dwi Aprilianingsih, A.Mk.</h4>
                                    <!--<p></p>-->
                                    <p>Tenaga Kependidikan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/6784c90fcee19.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Fitri Trisnawati, S.Pd., M.I.Kom</h4>
                                    <!--<p></p>-->
                                    <p>Tenaga Kependidikan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78cba909e.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Heri</h4>
                                    <!--<p></p>-->
                                    <p>Tenaga Kependidikan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/641907681a75a.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>HERNANDA RESTU BUWONO, S.IP.</h4>
                                    <!--<p></p>-->
                                    <p>Tenaga Kependidikan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5c74f72d78eac.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Heru Budiyanto</h4>
                                    <!--<p></p>-->
                                    <p>Tenaga Kependidikan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78d974963.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Istiani, S.Pd.</h4>
                                    <!--<p></p>-->
                                    <p>Tenaga Kependidikan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/60518a491577f.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Khusna Nur Hidayati, A.Md.</h4>
                                    <!--<p></p>-->
                                    <p>Tenaga Kependidikan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78d974d33.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Kustriyanto, S.T.</h4>
                                    <!--<p></p>-->
                                    <p>Tenaga Kependidikan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78d975104.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Muhammad Hanna</h4>
                                    <!--<p></p>-->
                                    <p>Tenaga Kependidikan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5c74f72d7ae72.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Mukminati</h4>
                                    <!--<p></p>-->
                                    <p>Tenaga Kependidikan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/61d2b21554a86.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Nungky Puspita, S.E.</h4>
                                    <!--<p></p>-->
                                    <p>Tenaga Kependidikan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78d976417.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Nur Widi Prihatma, S.S.</h4>
                                    <!--<p></p>-->
                                    <p>Tenaga Kependidikan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/guru.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Nuriah Indrarini, S.T., M.Eng.</h4>
                                    <!--<p></p>-->
                                    <p>Tenaga Kependidikan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a546b069a7ec.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>PRADHITA KIRTIKA YUDHA, A.Md</h4>
                                    <!--<p></p>-->
                                    <p>Tenaga Kependidikan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78d976f88.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Prasetiyo</h4>
                                    <!--<p></p>-->
                                    <p>Tenaga Kependidikan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78d977359.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Ridwan Apriandi, A.Md.</h4>
                                    <!--<p></p>-->
                                    <p>Tenaga Kependidikan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5a8a78d977afa.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Riyadi Widodo</h4>
                                    <!--<p></p>-->
                                    <p>Tenaga Kependidikan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5ce369fabbeff.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Untung Suharso</h4>
                                    <!--<p></p>-->
                                    <p>Tenaga Kependidikan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                <!-- Single Item -->
                        <div class="advisor-item">
                            <div class="info-box">
                                                                    <img class="img-responsive" width="100%" src="https://www.sman1yogya.sch.id/assets/images/uploads/gtk/5ce369e27d896.jpg" alt="Thumb">  
                                                                
                                <div class="info-title">
                                    <h4>Surya Jatmika, S.S., M.Pd.</h4>
                                    <!--<p></p>-->
                                    <p>Tenaga Kependidikan</p>
                                </div>
                            </div>    
                        </div> 
                        <!-- Single Item -->
                                                
                    </div>
                    <div class="more-btn col-md-12 text-center">
                        <a href="https://www.sman1yogya.sch.id/id/staff/guru" class="btn btn-dark border btn-md">Guru</a>
                        <a href="https://www.sman1yogya.sch.id/id/staff/karyawan" class="btn btn-dark border btn-md">Karyawan</a>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
    <!--End Advisor Area -->

    <!-- Start Testimonials 
    ============================================= -->
    <div id="alumni" class="testimonials-area carousel-shadow default-padding bg-dark text-light">
        <div class="container">
            <div class="row">
                <div class="site-heading text-center">
                    <div class="col-md-8 col-md-offset-2">
                        <h2>Profil Alumni</h2>
                        <!-- <p>
                            Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy. Without farther she exposed saw man led. Along on happy could cease green oh. 
                        </p> -->
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="clients-review-carousel owl-carousel owl-theme">
                                                    <!-- Single Item -->
                        <div class="item">
                            <div class="col-md-5 thumb">
                                <img src="https://www.sman1yogya.sch.id/assets/images/uploads/alumni/fd7ca6e9d4476fbbabdfbcbe7907019a-800x1000.jpeg" alt="Thumb">
                            </div>
                            <div class="col-md-7 info">
                                <h4><a href="https://www.sman1yogya.sch.id/id/alumni/detail/1"><span>Kanjeng Gusti Pangeran Adipati Aryo (KGPAA) Paku Alam X</span></a></h4>
                                <p>Kanjeng Gusti Pangeran Adipati Aryo (KGPAA) Paku Alam X (dengan nama lahir Raden Mas Wijoseno Hario Bimo lahir di Yogyakarta, 15 Desember 1962; umur 56 tahun). Ibundanya bernama BRAy Koesoemarini. Pada tahun 2012, ia ditunjuk sebagai Putera Mahkota dengan&#8230;</p>
                            </div>
                        </div>
                        <!-- Single Item -->
                                                    <!-- Single Item -->
                        <div class="item">
                            <div class="col-md-5 thumb">
                                <img src="https://www.sman1yogya.sch.id/assets/images/uploads/alumni/c7bcce53fc81ef3294e10bd5b0bfde44-800x1000.jpg" alt="Thumb">
                            </div>
                            <div class="col-md-7 info">
                                <h4><a href="https://www.sman1yogya.sch.id/id/alumni/detail/2"><span>Drs. H. Haryadi Suyuti</span></a></h4>
                                <p>Drs. H. Haryadi Suyuti adalah Wali Kota Yogyakarta yang menjabat sejak 20 Desember 2011. Haryadi Suyuti menikah dengan Hj. Tri Kirana Muslidatun, S.Psi yang banyak aktif di berbagai kegiatan social. Saat ini dikaruniai 2 orang anak, Karina Arifiani anak&#8230;</p>
                            </div>
                        </div>
                        <!-- Single Item -->
                                                    <!-- Single Item -->
                        <div class="item">
                            <div class="col-md-5 thumb">
                                <img src="https://www.sman1yogya.sch.id/assets/images/uploads/alumni/9d5de310d3685b5a882d3132d4de6b4c-800x1000.jpeg" alt="Thumb">
                            </div>
                            <div class="col-md-7 info">
                                <h4><a href="https://www.sman1yogya.sch.id/id/alumni/detail/3"><span>Prof. Ir. Dwikorita Karnawati, M.Sc. Ph.D</span></a></h4>
                                <p>Prof. Ir.&nbsp;Dwikorita Karnawati, M.Sc. Ph.D. (lahir 6 Juni 1964) adalah akademisi dan teknokrat Indonesia yang menjabat sebagai Kepala&nbsp;Badan Meteorologi, Klimatologi, dan Geofisika&nbsp;Indonesia (BMKG), sejak November 2017, setelah selesai menjabat&#8230;</p>
                            </div>
                        </div>
                        <!-- Single Item -->
                                                    <!-- Single Item -->
                        <div class="item">
                            <div class="col-md-5 thumb">
                                <img src="https://www.sman1yogya.sch.id/assets/images/uploads/alumni/07189a3a74baf5fd2f7f0ccfcd18284b-800x1000.jpg" alt="Thumb">
                            </div>
                            <div class="col-md-7 info">
                                <h4><a href="https://www.sman1yogya.sch.id/id/alumni/detail/4"><span>Ririek Adriansyah</span></a></h4>
                                <p>Direktur Utama (CEO) Telkom Indonesia. Beliau diangkat sebagai Direktur Utama melalui Rapat Umum Pemegang Saham pada tanggal 24 Mei 2019. Ririek Adriansyah merupakan lulusan dari Institut Teknologi Bandung pada tahun 1989, dengan gelar sarjana Teknik&#8230;</p>
                            </div>
                        </div>
                        <!-- Single Item -->
                                                    <!-- Single Item -->
                        <div class="item">
                            <div class="col-md-5 thumb">
                                <img src="https://www.sman1yogya.sch.id/assets/images/uploads/alumni/40c07ce10951eb7d7b5deb2645172f56-800x1000.jpg" alt="Thumb">
                            </div>
                            <div class="col-md-7 info">
                                <h4><a href="https://www.sman1yogya.sch.id/id/alumni/detail/5"><span>Dr. (HC) Susi Pudjiastuti</span></a></h4>
                                <p>Menteri Kelautan dan Perikanan dari Kabinet Kerja 2014-2019 yang juga pengusaha pemilik dan Presdir PT ASI Pudjiastuti Marine Product, eksportir hasil-hasil perikanan dan PT ASI Pudjiastuti Aviation atau penerbangan Susi Air dari Jawa Barat.
</p>
                            </div>
                        </div>
                        <!-- Single Item -->
                                                    <!-- Single Item -->
                        <div class="item">
                            <div class="col-md-5 thumb">
                                <img src="https://www.sman1yogya.sch.id/assets/images/uploads/alumni/e8e110fb53612d2f492dba5bace4f489-800x1000.jpg" alt="Thumb">
                            </div>
                            <div class="col-md-7 info">
                                <h4><a href="https://www.sman1yogya.sch.id/id/alumni/detail/6"><span>K.H. Yahya Cholil Staquf</span></a></h4>
                                <p>K.H. Yahya Cholil Staquf&nbsp;dikenal juga dengan sapaan&nbsp;Gus Yahya&nbsp;(lahir 16 Februari 1966 di&nbsp;Rembang, Jawa Tengah) adalah ulama yang saat ini menjabat sebagai&nbsp;Ketua Umum&nbsp;Pengurus Besar Nahdlatul Ulama&nbsp;(PBNU) masa khidmat&#8230;</p>
                            </div>
                        </div>
                        <!-- Single Item -->
                                                    <!-- Single Item -->
                        <div class="item">
                            <div class="col-md-5 thumb">
                                <img src="https://www.sman1yogya.sch.id/assets/images/uploads/alumni/e4fe4c8224b2c08015212e79691ee50b-800x1000.jpeg" alt="Thumb">
                            </div>
                            <div class="col-md-7 info">
                                <h4><a href="https://www.sman1yogya.sch.id/id/alumni/detail/9"><span>Prof. dr. Ova Emilia, M.Med.Ed., Sp.OG(K), Ph.D.</span></a></h4>
                                <p>Prof. dr. Ova Emilia, M.Med.Ed., Sp.OG(K)., Ph.D adalah&nbsp;seorang guru besar ilmu Pendidikan Kedokteran pada Fakultas Kedokteran, Kesehatan Masyarakat, dan Keperawatan UGM. Beliau terpilih dan dilantik menjadi Rektor Universitas Gadjah Mada (UGM)&#8230;</p>
                            </div>
                        </div>
                        <!-- Single Item -->
                                            </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Testimonials -->

    <!-- Start Contact Info
    ============================================= -->
    <div id="contact" class="contact-info-area bg-gray default-padding">
        <div class="container">
            <div class="row">
                <div class="site-heading text-center">
                    <div class="col-md-8 col-md-offset-2">
                        <h2>Hubungi Kami</h2>
                        <!-- <p>
                            Able an hope of body. Any nay shyness article matters own removal nothing his forming. Gay own additions education satisfied the perpetual. If he cause manor happy. Without farther she exposed saw man led. Along on happy could cease green oh. 
                        </p> -->
                    </div>
                </div>
            </div>
            <div class="row">


                <!-- Start Maps & Contact Form -->
                <div class="maps-form">
                    <div class="col-md-6 maps">
                        <h3>Denah Lokasi</h3>
                        <div class="google-maps">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9061351041387!2d110.35039961432655!3d-7.799761879583066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a57f4fa62fdab%3A0x4d7d92f9032750f0!2sSMA+Negeri+1+Teladan+Yogyakarta!5e0!3m2!1sid!2sid!4v1553142191227" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="col-md-6 form">
                        <div class="heading f-item address">
                            <h3>Kontak</h3>
                            <!-- <p>
                                Occasional terminated insensible and inhabiting gay. So know do fond to half on. Now who promise was justice new winding
                            </p> -->
                            <ul>
                                <li>
                                    <i class="fas fa-envelope"></i> 
                                    <p>Email <br><span><a href="mailto:humas@sman1yogya.sch.id">humas@sman1yogya.sch.id</a></span></p>
                                </li>
                                <li>
                                    <i class="fas fa-map"></i> 
                                    <p>Address <br><span>Jl. HOS Cokroaminoto No.10, Pakuncen, Wirobrajan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55253</span></p>
                                </li>
                                <li>
                                    <i class="fas fa-phone"></i> 
                                    <p>Phone <br><span>0274 - 513454</span></p>
                                </li>
                                <li>
                                    <i class="fas fa-fax"></i> 
                                    <p>Fax <br><span>0274 - 542604</span></p>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <!-- End Maps & Contact Form -->

            </div>
        	<div class="row">
                <div class="maps-form" id="kotaksaran">
                    <div class="col-md-12 form">
                        <br><br>
                        <div class="heading">
                            <h3>Kotak Saran</h3>
                        </div>
                        <div class="uk-form-row">
                                                                                    
                        </div>
                        <form action="https://www.sman1yogya.sch.id/id/mail" method="POST">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="form-group">
                                        <input class="form-control" id="name" name="name" placeholder="Nama" type="text">
                                        <span class="alert-error"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="form-group">
                                        <input class="form-control" id="email" name="email" placeholder="Email*" type="email">
                                        <span class="alert-error"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="form-group">
                                        <input class="form-control" id="phone" name="phone" placeholder="Nomor Telephone" type="text">
                                        <span class="alert-error"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="form-group comments">
                                        <textarea class="form-control" id="comments" name="comments" placeholder="Pesan *"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="row">
                                    <button type="submit" name="submit" id="submit">
                                        Kirim Pesan <i class="fa fa-paper-plane"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Contact Info -->

<!-- Start Footer 
    ============================================= -->
    <footer class="bg-fixed default-padding-top bg-dark text-light">
        <div class="container">
            <div class="row">
                <div class="f-items">
                    <div class="col-md-4 item">
                        <div class="f-item">
                            <img class="img-responsive" src="https://www.sman1yogya.sch.id/assets/images/logo_putih_besar.png" alt="Logo">
                            <p>
                                SMA Negeri 1 Yogyakarta telah menjadi bagian tak terpisahkan dari perjalanan Yogyakarta sebagai kota pendidikan sejak tahun 1957. 
                             Dijiwai motto Teladan Jayamahe, Sekolah ini mengantar keluarga besarnya untuk berjaya di manapun dan kapanpun.
                            </p>
                            <div class="social">
                                <ul>
                                    <li>
                                        <a target="_blank" href="https://www.facebook.com/smanegeri1yogyakarta"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="https://www.instagram.com/sman1yogyakarta"><i class="fab fa-instagram"></i></a>
                                    </li>
                                	<li>
                                        <a target="_blank" href="https://www.youtube.com/c/smanegeri1yogyakarta"><i class="fab fa-youtube"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 item">
                        <div class="f-item recent-post">
                            <h4>Info Sekolah</h4>
                            <ul>
                                                                    <li>
                                        <div class="thumb">
                                            <a href="#">
                                                <img class="img-responsive" src="https://www.sman1yogya.sch.id/assets/images/uploads/info/8308cb59512df51e41854762366bbd7a-100x100.jpg" alt="Thumb">
                                            </a>
                                        </div>
                                        <div class="info">
                                            <a href="https://www.sman1yogya.sch.id/id/info/detail/80">INFO PELAYANAN SMAN&#8230;</a>
                                            <div class="meta-title">
                                                <span class="post-date">05 Nov, 2025</span>
                                                <p>Dengan hormat, kami sampaikan beberapa informasi terkait Informasi&nbsp;Pelayanan&#8230;</p>
                                            </div>
                                        </div>
                                    </li>
                                                                    <li>
                                        <div class="thumb">
                                            <a href="#">
                                                <img class="img-responsive" src="https://www.sman1yogya.sch.id/assets/images/uploads/info/bff6d51c9183c8d80c9a403cc597a9e6-100x100.jpg" alt="Thumb">
                                            </a>
                                        </div>
                                        <div class="info">
                                            <a href="https://www.sman1yogya.sch.id/id/info/detail/79">ASESMEN SUMATIF TENGAH&#8230;</a>
                                            <div class="meta-title">
                                                <span class="post-date">22 Sep, 2025</span>
                                                <p>Dengan hormat, kami beri tahukan bahwa berdasarkan Kalender&#8230;</p>
                                            </div>
                                        </div>
                                    </li>
                                                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4 item">
                        <div class="f-item recent-post">
                            <h4>Agenda Sekolah</h4>
                            <ul>
                                                                    <li>
                                        <div class="thumb">
                                            <a href="#">
                                                <img class="img-responsive" src="https://www.sman1yogya.sch.id/assets/images/uploads/agenda/f7a13cee2339c4604fe49f9e12f69c36-100x100.jpg" alt="Thumb">
                                            </a>
                                        </div>
                                        <div class="info">
                                            <a href="https://www.sman1yogya.sch.id/id/agenda/detail/3">Surat Edaran Kelulusan&#8230;</a>
                                            <div class="meta-title">
                                                <span class="post-date">18 Apr, 2020</span>
                                                <p>Surat Edaran Kelulusan Siswa Kelas XII Tahun Ajaran 2019/2020&#8230;</p>
                                            </div>
                                        </div>
                                    </li>
                                                                    <li>
                                        <div class="thumb">
                                            <a href="#">
                                                <img class="img-responsive" src="https://www.sman1yogya.sch.id/assets/images/uploads/agenda/6c1da5caa5caf36956b66a1aa6c5c928-100x100.jpg" alt="Thumb">
                                            </a>
                                        </div>
                                        <div class="info">
                                            <a href="https://www.sman1yogya.sch.id/id/agenda/detail/2">Pembagian Laporan Hasil&#8230;</a>
                                            <div class="meta-title">
                                                <span class="post-date">13 May, 2019</span>
                                                <p>Pembagian laporan hasil belajar siswa akan dilaksanakan pada&#8230;</p>
                                            </div>
                                        </div>
                                    </li>
                                                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Start Footer Bottom -->
        <div class="footer-bottom bg-transparent">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="col-md-6">
                            <p>&copy; Copyright 2019. All Rights Reserved by <a href="#">ICT Teladan</a></p>
                        </div>
                        <div class="col-md-6 text-right link">
                            <ul>
                                <li>
                                    <a href="#">Terms of user</a>
                                </li>
                                <li>
                                    <a href="#">License</a>
                                </li>
                                <li>
                                    <a href="#">Support</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Footer Bottom -->
    </footer>
    <!-- End Footer -->

    <!-- jQuery Frameworks
    ============================================= -->
    <script src="https://www.sman1yogya.sch.id/assets/js/jquery-1.12.4.min.js"></script>
    <script src="https://www.sman1yogya.sch.id/assets/js/bootstrap.min.js"></script>
    <script src="https://www.sman1yogya.sch.id/assets/js/equal-height.min.js"></script>
    <script src="https://www.sman1yogya.sch.id/assets/js/jquery.appear.js"></script>
    <script src="https://www.sman1yogya.sch.id/assets/js/jquery.easing.min.js"></script>
    <script src="https://www.sman1yogya.sch.id/assets/js/jquery.magnific-popup.min.js"></script>
    <script src="https://www.sman1yogya.sch.id/assets/js/modernizr.custom.13711.js"></script>
    <script src="https://www.sman1yogya.sch.id/assets/js/owl.carousel.min.js"></script>
    <script src="https://www.sman1yogya.sch.id/assets/js/wow.min.js"></script>
    <script src="https://www.sman1yogya.sch.id/assets/js/isotope.pkgd.min.js"></script>
    <script src="https://www.sman1yogya.sch.id/assets/js/imagesloaded.pkgd.min.js"></script>
    <script src="https://www.sman1yogya.sch.id/assets/js/count-to.js"></script>
    <script src="https://www.sman1yogya.sch.id/assets/js/bootsnav.js"></script>
	<script src="https://www.sman1yogya.sch.id/assets/js/masonry-docs.min.js?2"></script>
    <script src="https://www.sman1yogya.sch.id/assets/js/main.js"></script>
	
	<script type="text/javascript">
        $(window).on('load',function(){
            $('#infoModal').modal('show');
        });
        
        $('.carousel-pendidik').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            dots: false,
            autoplay: true,
            smartSpeed:500,
            // autoplayTimeout:1000,
            // autoplayHoverPause:true
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                },
                1500: {
                    items: 5
                }
            }
        });
        
        $('.carousel-poster').owlCarousel({
            items: 1,
            loop: true,
            margin: 30,
            nav: true,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            dots: false,
            autoplay: true,
            // autoplayTimeout:1000,
            smartSpeed:500,
            // responsive: {
            //     0: {
            //         items: 1
            //     },
            //     2000: {
            //         items: 2
            //     }
            // }
        });
        
        $('.gallery-teladan').each(function() { // the containers for all your galleries
            $(this).magnificPopup({
                delegate: 'a', // the selector for gallery item
                image: {
                    titleSrc: function(item) {
                        return item.el.attr('title');
                    }
                },
                
            });
        });
    </script>
</body>
</html>