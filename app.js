/**
 * E-PORTOFOLIO LK 3 PPG CALON GURU — SITI WAFIQ ALFIYATUN NURUR ROHMANA, S.Pd.
 * High-End Minimalist Editorial / Modern Framer Agency Style
 * Interactions & Academic Content Data
 */

// Academic Detailed Data for LK 3 Reflections
const reflectionData = {
  // REFLEKSI 01: ARAH PENDIDIKAN INDONESIA
  'refleksi-1': {
    number: '(1)',
    category: 'Indikator 01. / Refleksi Holistik',
    title: 'Menuntun Kodrat Anak',
    subtitle: 'Filosofi Ki Hadjar Dewantara: Menghargai Kodrat Alam & Zaman',
    image: 'images/ki-hadjar-dewantara.png',
    quote: 'Anak-anak hidup dan tumbuh sesuai kodratnya sendiri. Pendidik hanya dapat merawat dan menuntun tumbuhnya kodrat itu. — Ki Hadjar Dewantara',
    content: `
      <div class="space-y-6 text-zinc-700 leading-relaxed">
        <p class="text-lg font-medium text-zinc-900">
          Pendidikan di Indonesia seyogianya kembali pada esensi primordialnya, yaitu memerdekakan dan memanusiakan manusia seutuhnya. Berakar pada pemikiran Ki Hadjar Dewantara, proses pendidikan bukanlah penyeragaman kemampuan ataupun pabrikasi nilai numerik semu, melainkan proses "menuntun" (bukan menuntut).
        </p>
        
        <div class="p-6 bg-zinc-50 border-l-2 border-zinc-900 rounded-r-xl">
          <h4 class="font-bold text-zinc-900 mb-2 uppercase tracking-wider text-xs">Pijakan Filosofis</h4>
          <p class="text-sm">Setiap anak terlahir dengan kodrat alam (potensi fitrah, bakat, karakter bawaan, dan kearifan kultural lokalnya) serta berdialektika dengan kodrat zaman (tantangan global, literasi teknologi abad ke-21). Pendidik berperan sebagai pamong yang mengikis watak-watak rendah dan menebalkan laku budi pekerti luhur.</p>
        </div>

        <h4 class="text-base font-bold text-zinc-900">Refleksi Pengalaman Lapangan di SMP Negeri 8 Purwokerto</h4>
        <p>
          Selama pelaksanaan PPL II di SMP Negeri 8 Purwokerto, saya mengamati bahwa siswa kelas VII berasal dari latar belakang ekonomi, sosial, dan kapasitas kognitif yang sangat majemuk. Menyamaratakan tugas dan ritme belajar terbukti menciptakan frustrasi pada siswa yang butuh asistensi lebih, sekaligus membosankan bagi siswa yang sudah mahir.
        </p>
        <p>
          Solusi pedagogis yang saya terapkan adalah mengubah ruang kelas PPKn menjadi panggung eksplorasi: siswa bebas mengekspresikan pemahaman tentang norma dan hukum melalui media tulisan, infografis visual, role-play simulasi persidangan, maupun presentasi lisan. Hasilnya, kepercayaan diri murid melonjak tajam karena mereka merasa diakui eksistensinya.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-zinc-200">
          <div class="bg-white p-4 rounded-lg border border-zinc-200">
            <span class="text-xs font-bold text-zinc-400 block mb-1">PRAKTIK LAMA</span>
            <span class="text-sm text-zinc-600 line-through">Menuntut ketuntasan yang seragam; ranking kelas yang memicu persaingan tidak sehat.</span>
          </div>
          <div class="bg-zinc-900 text-white p-4 rounded-lg">
            <span class="text-xs font-bold text-zinc-400 block mb-1">PARADIGMA BARU GURU REFLEKTIF</span>
            <span class="text-sm">Menuntun setiap anak melampaui potensi terbaik dirinya sendiri tanpa dibanding-bandingkan.</span>
          </div>
        </div>
      </div>
    `
  },
  'refleksi-2': {
    number: '(2)',
    category: 'Indikator 01. / Refleksi Holistik',
    title: 'Keadilan Belajar & Berdiferensiasi',
    subtitle: 'Menjawab Keberagaman Kesiapan, Minat, dan Profil Belajar Murid',
    image: 'images/ppl-kelas.jpg',
    quote: 'Keadilan dalam pendidikan bukan berarti memberikan hal yang sama kepada setiap anak, melainkan memberikan apa yang mereka butuhkan untuk sukses.',
    content: `
      <div class="space-y-6 text-zinc-700 leading-relaxed">
        <p class="text-lg font-medium text-zinc-900">
          Keadilan belajar (educational equity) menuntut pendidik untuk meninggalkan doktrin <em>one-size-fits-all</em>. Pembelajaran berdiferensiasi adalah wujud nyata keberpihakan guru kepada murid, memastikan tidak ada anak yang merasa terabaikan di pojok kelas.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="p-4 bg-zinc-50 border border-zinc-200 rounded-xl">
            <span class="text-xs font-mono font-bold text-zinc-400 block mb-1">01 / KONTEN</span>
            <p class="text-xs text-zinc-700">Menyediakan ragam sumber ajar: video edukasi, komik PPKn, teks narasi, dan rekaman audio.</p>
          </div>
          <div class="p-4 bg-zinc-50 border border-zinc-200 rounded-xl">
            <span class="text-xs font-mono font-bold text-zinc-400 block mb-1">02 / PROSES</span>
            <p class="text-xs text-zinc-700">Scaffolding berjenjang: kelompok mandiri, kelompok bimbingan terbimbing, dan peer-tutoring.</p>
          </div>
          <div class="p-4 bg-zinc-50 border border-zinc-200 rounded-xl">
            <span class="text-xs font-mono font-bold text-zinc-400 block mb-1">03 / PRODUK</span>
            <p class="text-xs text-zinc-700">Tagihan asesmen formatif yang fleksibel (poster digital, podcast pendek, atau esai opini).</p>
          </div>
        </div>

        <h4 class="text-base font-bold text-zinc-900">Pemberantasan Labeling dan Penanaman Growth Mindset</h4>
        <p>
          Salah satu bahaya terbesar dalam kultur sekolah konvensional adalah pelabelan dini ("anak malas", "anak pintar", "anak pasif"). Dalam praktik PPL di SMPN 8 Purwokerto, saya konsisten menerapkan <em>growth mindset</em>: kesalahan berpikir dalam menganalisis pasal undang-undang bukanlah kegagalan, melainkan kesempatan belajar (learning moment) yang berharga.
        </p>
        <p>
          Melalui asesmen diagnostik non-kognitif di awal siklus, saya memetakan minat siswa terhadap isu sosial kemasyarakatan di Banyumas, sehingga modul ajar yang saya susun mampu memantik rasa ingin tahu autentik mereka.
        </p>
      </div>
    `
  },
  'refleksi-3': {
    number: '(3)',
    category: 'Indikator 01. / Refleksi Holistik',
    title: 'Pembelajaran Mendalam (Deep Learning)',
    subtitle: 'Konstruksi Makna: Mindful, Meaningful, dan Joyful Learning',
    image: 'images/ppl-mengajar.jpg',
    quote: 'Tell me and I forget, teach me and I may remember, involve me and I learn. — Benjamin Franklin',
    content: `
      <div class="space-y-6 text-zinc-700 leading-relaxed">
        <p class="text-lg font-medium text-zinc-900">
          Pembelajaran Pendidikan Pancasila dan Kewarganegaraan kerap disalahpahami sebagai mata pelajaran "hafalan pasal" yang menjemukan. Melalui paradigma <em>Deep Learning</em>, esensi PPKn dikembalikan sebagai laboratorium berpikir kritis dan laboratorium kewarganegaraan demokratis.
        </p>

        <div class="space-y-3">
          <div class="flex items-start gap-3 p-3 bg-zinc-50 rounded-lg">
            <span class="w-2 h-2 rounded-full bg-zinc-900 mt-2 flex-shrink-0"></span>
            <div>
              <strong class="text-zinc-900 text-sm">Mindful (Berkesadaran Penuh):</strong>
              <p class="text-xs text-zinc-600">Siswa hadir seutuhnya secara mental dan emosional, menyadari relevansi nilai Pancasila bagi kehidupannya sendiri.</p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-3 bg-zinc-50 rounded-lg">
            <span class="w-2 h-2 rounded-full bg-zinc-900 mt-2 flex-shrink-0"></span>
            <div>
              <strong class="text-zinc-900 text-sm">Meaningful (Bermakna):</strong>
              <p class="text-xs text-zinc-600">Materi dikaitkan langsung dengan problematika riil di lingkungan sekitar siswa (misal: perundungan siber, toleransi di lingkungan tempat tinggal, dan ketaatan hukum lalu lintas di Purwokerto).</p>
            </div>
          </div>
          <div class="flex items-start gap-3 p-3 bg-zinc-50 rounded-lg">
            <span class="w-2 h-2 rounded-full bg-zinc-900 mt-2 flex-shrink-0"></span>
            <div>
              <strong class="text-zinc-900 text-sm">Joyful (Menyenangkan):</strong>
              <p class="text-xs text-zinc-600">Mengintegrasikan gamifikasi edukasi kewarganegaraan, debat persahabatan, dan diskusi berbasis studi kasus kelompok.</p>
            </div>
          </div>
        </div>

        <h4 class="text-base font-bold text-zinc-900">Peran Asesmen Diagnostik & Formatif Berkelanjutan</h4>
        <p>
          Deep learning tidak dapat terjadi tanpa pemantauan pemahaman yang berkelanjutan. Di SMPN 8 Purwokerto, saya menggantikan tes tertulis yang kaku dengan pertanyaan pemantik di awal sesi (exit/entry tickets) dan refleksi metakognitif di akhir pertemuan: <em>"Apa satu prasangka yang runtuh setelah kita mendiskusikan pasal ini hari ini?"</em>
        </p>
      </div>
    `
  },
  'refleksi-4': {
    number: '(4)',
    category: 'Indikator 01. / Refleksi Holistik',
    title: 'Integrasi Moral, Emosional & Spiritual',
    subtitle: 'Sinergi Kompetensi CASEL dan Internalisasi Nilai Keislaman & Pancasila',
    image: 'images/sedekah-laut-ppkn.png',
    quote: 'Mendidik pikiran tanpa mendidik hati bukanlah pendidikan sama sekali. — Aristoteles',
    content: `
      <div class="space-y-6 text-zinc-700 leading-relaxed">
        <p class="text-lg font-medium text-zinc-900">
          Kecerdasan intelektual tanpa benteng moral dan kestabilan sosio-emosional melahirkan generasi yang rentan terjerumus pada krisis empati, korupsi, dan polarisasi sosial. Sebagai guru PPKn berlatar belakang Universitas Muhammadiyah Purwokerto, saya meletakkan integrasi moral dan spiritual sebagai jantung pembelajaran.
        </p>

        <div class="p-5 bg-zinc-900 text-white rounded-xl">
          <h4 class="text-xs uppercase tracking-widest text-zinc-400 font-mono mb-2">5 Kompetensi Sosial-Emosional (CASEL Framework)</h4>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-zinc-300">
            <li>• <strong>Self-Awareness:</strong> Mengenali emosi dan bias pribadi saat berdiskusi.</li>
            <li>• <strong>Self-Management:</strong> Mengendalikan amarah dan bersikap tertib dalam musyawarah.</li>
            <li>• <strong>Social Awareness:</strong> Berempati pada kelompok rentan dan menghormati perbedaan.</li>
            <li>• <strong>Relationship Skills:</strong> Komunikasi asertif tanpa melukai martabat orang lain.</li>
            <li>• <strong>Responsible Decision-Making:</strong> Menimbang konsekuensi moral dan hukum dari setiap tindakan.</li>
          </ul>
        </div>

        <h4 class="text-base font-bold text-zinc-900">Kontekstualisasi Budaya Lokal & Nilai Spiritual</h4>
        <p>
          Melalui eksplorasi budaya dan kearifan lokal (seperti tradisi gotong royong dan nilai keadilan sosial di Jawa Tengah), siswa diajak memahami bahwa Pancasila bukan sekadar dokumen historis, melainkan falsafah hidup yang bernafaskan nilai ketuhanan dan kemanusiaan universal.
        </p>
      </div>
    `
  },

  // REFLEKSI 02: PETA JALAN GURU PROFESIONAL (4 PILAR)
  'pilar-1': {
    number: '[ PILAR 01 ]',
    category: 'Indikator 02. / Kompetensi Guru',
    title: 'Keputusan Kelas Berbasis Data Murid',
    subtitle: 'Data-Driven Decision Making & Safe Learning Environment',
    image: 'images/ppl-kelas.jpg',
    quote: 'Data mengarahkan intuisi guru agar setiap intervensi tepat sasaran.',
    content: `
      <div class="space-y-6 text-zinc-700 leading-relaxed">
        <p class="text-lg font-medium text-zinc-900">
          Guru profesional tidak boleh mengajar semata berdasarkan asumsi sepihak. Setiap keputusan kurikuler dan pedagogis di kelas harus berakar pada data autentik tentang kebutuhan, kesiapan, dan kondisi sosio-emosional murid.
        </p>
        <div class="space-y-3">
          <div class="p-4 bg-zinc-50 border border-zinc-200 rounded-lg">
            <h5 class="font-bold text-zinc-900 text-sm mb-1">1. Asesmen Diagnostik Komprehensif</h5>
            <p class="text-xs text-zinc-600">Melakukan tes diagnostik kognitif berkala untuk mengidentifikasi miskonsepsi hukum/ketatanegaraan, serta survei profil belajar untuk memahami preferensi visual, auditori, atau kinestetik murid.</p>
          </div>
          <div class="p-4 bg-zinc-50 border border-zinc-200 rounded-lg">
            <h5 class="font-bold text-zinc-900 text-sm mb-1">2. Menciptakan Iklim Kelas yang Aman Secara Psikologis</h5>
            <p class="text-xs text-zinc-600">Menetapkan kesepakatan kelas demokratis di SMPN 8 Purwokerto di mana setiap siswa berhak berbicara tanpa takut ditertawakan, membangun budaya saling mendengarkan secara aktif.</p>
          </div>
          <div class="p-4 bg-zinc-50 border border-zinc-200 rounded-lg">
            <h5 class="font-bold text-zinc-900 text-sm mb-1">3. Diferensiasi Intervensi Terukur</h5>
            <p class="text-xs text-zinc-600">Memberikan pendampingan intensif bagi siswa yang tertinggal pada kompetensi dasar perumusan norma, serta menyediakan materi pengayaan berpikir tingkat tinggi (HOTS) bagi yang siap melangkah lebih jauh.</p>
          </div>
        </div>
      </div>
    `
  },
  'pilar-2': {
    number: '[ PILAR 02 ]',
    category: 'Indikator 02. / Kompetensi Guru',
    title: 'Asesmen Presisi & Umpan Balik Positif',
    subtitle: 'Assessment As, For, and Of Learning yang Membangun Karakter',
    image: 'images/catatan-refleksi.png',
    quote: 'Umpan balik yang efektif bukan menghakimi hasil, melainkan menerangi jalan menuju perbaikan.',
    content: `
      <div class="space-y-6 text-zinc-700 leading-relaxed">
        <p class="text-lg font-medium text-zinc-900">
          Transformasi paradigma asesmen adalah pilar kunci guru profesional PPG. Asesmen tidak lagi ditempatkan di akhir sebagai alat vonis nilai raport, melainkan sebagai instrumen navigasi belajar bersama murid.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-zinc-50 border border-zinc-200 rounded-xl">
            <h5 class="font-bold text-zinc-900 text-sm mb-1">Umpan Balik Deskriptif Kualitatif</h5>
            <p class="text-xs text-zinc-600">Menggantikan coretan angka merah dengan catatan deskriptif konkret: mengapresiasi argumentasi logis siswa dan memberi petunjuk jelas bagian mana yang butuh pendalaman bukti konstitusional.</p>
          </div>
          <div class="p-4 bg-zinc-50 border border-zinc-200 rounded-xl">
            <h5 class="font-bold text-zinc-900 text-sm mb-1">Penilaian Antarteman & Refleksi Mandiri</h5>
            <p class="text-xs text-zinc-600">Melatih siswa menjadi subjek evaluasi melalui rubrik asesmen antarteman, mengasah kejujuran intelektual, objektivitas, serta kemampuan memberi masukan yang membangun.</p>
          </div>
        </div>
        <p class="text-sm">
          Hasil nyata saat PPL di SMPN 8 Purwokerto: murid tidak lagi panik saat diadakan asesmen formatif, karena mereka memandangnya sebagai cermin untuk melihat kemajuan belajar diri sendiri.
        </p>
      </div>
    `
  },
  'pilar-3': {
    number: '[ PILAR 03 ]',
    category: 'Indikator 02. / Kompetensi Guru',
    title: 'Keteladanan Moral PPKn',
    subtitle: 'Ing Ngarso Sung Tulodo: Menyelaraskan Retorika dan Tindakan Nyata',
    image: 'images/profil-siti-wafiq.png',
    quote: 'Satu teladan nyata jauh lebih berharga daripada seribu khotbah moral di depan kelas.',
    content: `
      <div class="space-y-6 text-zinc-700 leading-relaxed">
        <p class="text-lg font-medium text-zinc-900">
          Mata pelajaran PPKn memiliki beban tanggung jawab etika yang jauh lebih besar dibanding disiplin ilmu lain. Seorang guru PPKn tidak akan pernah didengar apabila perilakunya bertolak belakang dengan nilai-nilai Pancasila yang ia ajarkan.
        </p>
        <div class="p-5 bg-zinc-900 text-white rounded-xl">
          <h5 class="text-xs uppercase tracking-widest text-zinc-400 font-mono mb-2">Tiga Dimensi Keteladanan Pendidik PPKn</h5>
          <ul class="space-y-2 text-xs text-zinc-300">
            <li><strong>1. Integritas Waktu & Kejujuran Akademik:</strong> Hadir tepat waktu, transparan dalam penilaian, dan memegang teguh kejujuran.</li>
            <li><strong>2. Regulasi Emosi & Keramahan Pendidik:</strong> Menunjukkan tutur kata yang santun, sabar menghadapi keunikan tingkah laku siswa, dan tidak menggunakan hukuman fisik/verbal.</li>
            <li><strong>3. Keadilan & Kesetaraan:</strong> Memperlakukan setiap murid dengan martabat yang setara tanpa memandang status sosial ekonomi atau latar belakang keluarga.</li>
          </ul>
        </div>
        <p class="text-sm">
          Keteladanan inilah yang membentuk ikatan kepercayaan (trust) yang kokoh antara guru dan murid, menjadi pondasi utama pendidikan karakter yang membekas seumur hidup.
        </p>
      </div>
    `
  },
  'pilar-4': {
    number: '[ PILAR 04 ]',
    category: 'Indikator 02. / Kompetensi Guru',
    title: 'Praktik Reflektif Berkelanjutan',
    subtitle: 'Siklus Plan-Do-See-Reflect untuk Pembaharuan Kompetensi Mandiri',
    image: 'images/ppl-bersama-siswa.jpg',
    quote: 'Guru yang hebat bukanlah guru yang tidak pernah gagal, melainkan guru yang tidak pernah berhenti belajar dari setiap pengalamannya.',
    content: `
      <div class="space-y-6 text-zinc-700 leading-relaxed">
        <p class="text-lg font-medium text-zinc-900">
          Refleksi adalah denyut nadi profesionalisme guru. Tanpa refleksi kritis, sepuluh tahun masa mengajar hanyalah satu tahun pengalaman yang diulang sepuluh kali tanpa perbaikan kualitas.
        </p>
        <div class="space-y-3">
          <div class="p-4 bg-zinc-50 border border-zinc-200 rounded-lg">
            <h5 class="font-bold text-zinc-900 text-sm mb-1">Jurnal Refleksi Harian (Daily Pedagogical Journal)</h5>
            <p class="text-xs text-zinc-600">Mencatat apa yang berjalan efektif, momen di mana murid kehilangan minat, dan faktor apa saja yang mempengaruhi dinamika kelas pada setiap pertemuan.</p>
          </div>
          <div class="p-4 bg-zinc-50 border border-zinc-200 rounded-lg">
            <h5 class="font-bold text-zinc-900 text-sm mb-1">Keterbukaan terhadap Peer-Observation & Supervisi</h5>
            <p class="text-xs text-zinc-600">Menyambut masukan konstruktif dari Guru Pamong SMPN 8 Purwokerto dan Dosen Pembimbing Lapangan UMP sebagai amunisi perbaikan RPP dan strategi instruksional.</p>
          </div>
          <div class="p-4 bg-zinc-50 border border-zinc-200 rounded-lg">
            <h5 class="font-bold text-zinc-900 text-sm mb-1">Riset Aksi Kelas (Classroom Action Research)</h5>
            <p class="text-xs text-zinc-600">Meneliti efektivitas model pembelajaran berbasis masalah (PBL) dalam mendongkrak partisipasi murid dalam menganalisis kasus pelanggaran hak asasi manusia.</p>
          </div>
        </div>
      </div>
    `
  },

  // REFLEKSI 03: RENCANA TINDAK LANJUT (3 HAL PENTING)
  'rtl-1': {
    number: '[ LANGKAH 01 ]',
    category: 'Indikator 03. / Rencana Aksi',
    title: 'Asesmen Awal & Pemetaan Sosio-Emosional Murid',
    subtitle: 'Mendiagnosis Kesiapan, Modalitas, dan Kesejahteraan Psikologis Anak',
    image: 'images/ppl-kelas.jpg',
    quote: 'Mengenali siapa yang kita ajar adalah langkah pertama sebelum memutuskan apa dan bagaimana kita mengajar.',
    content: `
      <div class="space-y-6 text-zinc-700 leading-relaxed">
        <p class="text-lg font-medium text-zinc-900">
          Pada bulan pertama memulai karir sebagai guru definitif, prioritas tertinggi saya bukan langsung menjejalkan materi kurikulum, melainkan membangun profil komprehensif dari setiap murid di kelas binaan saya.
        </p>
        <div class="p-5 bg-zinc-50 border border-zinc-200 rounded-xl space-y-3">
          <h5 class="font-bold text-zinc-900 text-sm uppercase tracking-wide">Rencana Operasional 30 Hari Pertama</h5>
          <ul class="space-y-2 text-xs text-zinc-700">
            <li>✓ <strong>Pekan 1:</strong> Distribusi angket digital & wawancara informal pemetaan gaya belajar (VARK: Visual, Auditory, Read/Write, Kinesthetic) dan minat sosial anak.</li>
            <li>✓ <strong>Pekan 2:</strong> Asesmen diagnostik non-kognitif untuk mendeteksi potensi kecemasan akademik, hambatan fasilitas gawai, serta iklim emosional di rumah.</li>
            <li>✓ <strong>Pekan 3:</strong> Penyusunan "Matriks Kesiapan Belajar" untuk memetakan kelompok murid yang membutuhkan pendampingan khusus, reguler, dan pengayaan.</li>
            <li>✓ <strong>Pekan 4:</strong> Perumusan Kesepakatan Kelas Demokratis bersama seluruh murid sebagai kontrak belajar yang menjunjung nilai saling menghargai.</li>
          </ul>
        </div>
        <p class="text-sm">
          <strong>Target Capaian:</strong> Terciptanya basis data siswa yang akurat untuk memastikan <em>Zero Student Left Behind</em> dalam pembelajaran Pendidikan Pancasila.
        </p>
      </div>
    `
  },
  'rtl-2': {
    number: '[ LANGKAH 02 ]',
    category: 'Indikator 03. / Rencana Aksi',
    title: 'Desain Modul PPKn Kontekstual & Mendalam',
    subtitle: 'Menghubungkan Teori Konstitusi dengan Isu Riil dan Aksi Nyata Murid',
    image: 'images/sedekah-laut-ppkn.png',
    quote: 'Pembelajaran kewarganegaraan harus hidup di jalanan, di keluarga, dan di komunitas tempat anak berpijak.',
    content: `
      <div class="space-y-6 text-zinc-700 leading-relaxed">
        <p class="text-lg font-medium text-zinc-900">
          Langkah penting kedua adalah menyusun perangkat ajar (Modul Ajar PPKn) yang berbasis pada <em>Deep Learning</em> dan kontekstualisasi kearifan lokal. Saya berkomitmen menghadirkan pembelajaran yang mengaktifkan nalar kritis dan jiwa kepedulian sosial anak.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 bg-zinc-50 border border-zinc-200 rounded-xl">
            <h5 class="font-bold text-zinc-900 text-sm mb-1">Studi Kasus Kontekstual Lokal</h5>
            <p class="text-xs text-zinc-600">Mengangkat isu nyata di lingkungan sekitar sekolah (misal: pengelolaan sampah pasar tradisional, pelestarian budaya lokal Banyumasan, dan etika bersosial media) sebagai studi kasus bedah pasal norma hukum.</p>
          </div>
          <div class="p-4 bg-zinc-50 border border-zinc-200 rounded-xl">
            <h5 class="font-bold text-zinc-900 text-sm mb-1">Proyek Aksi Kewarganegaraan (Civic Action)</h5>
            <p class="text-xs text-zinc-600">Menghadirkan tugas berbasis aksi kebajikan di mana siswa merancang inisiatif gotong royong kecil atau kampanye anti-bullying di lingkungan sekolah, mewujudkan Pancasila dalam perbuatan.</p>
          </div>
        </div>
        <p class="text-sm">
          <strong>Target Capaian:</strong> Siswa tidak sekadar menghafal butir-butir Pancasila, melainkan menjadikannya kompas moral dan pedoman perilaku dalam interaksi keseharian mereka.
        </p>
      </div>
    `
  },
  'rtl-3': {
    number: '[ LANGKAH 03 ]',
    category: 'Indikator 03. / Rencana Aksi',
    title: 'Budaya Evaluasi Diri & Kolaborasi Komunitas',
    subtitle: 'Menjaga Api Belajar Melalui MGMP, Kombel Sekolah, dan Publikasi Karya',
    image: 'images/ppl-bersama-siswa.jpg',
    quote: 'Pendidik yang berhenti belajar sejatinya telah berhenti menjadi pendidik.',
    content: `
      <div class="space-y-6 text-zinc-700 leading-relaxed">
        <p class="text-lg font-medium text-zinc-900">
          Langkah ketiga adalah membangun ekosistem pendukung karir profesional yang berkesinambungan. Menjadi guru bukanlah perjalanan soliter, melainkan kolaborasi kolegial di dalam komunitas praktisi.
        </p>
        <div class="space-y-3">
          <div class="p-4 bg-zinc-50 border border-zinc-200 rounded-lg">
            <h5 class="font-bold text-zinc-900 text-sm mb-1">1. Keaktifan di Komunitas Belajar (Kombel) & MGMP</h5>
            <p class="text-xs text-zinc-600">Berpartisipasi aktif dalam sesi Lesson Study, berbagi modul ajar berdiferensiasi di Platform Merdeka Mengajar (PMM), dan mendiskusikan pemecahan masalah pedagogis bersama guru PPKn lintas sekolah.</p>
          </div>
          <div class="p-4 bg-zinc-50 border border-zinc-200 rounded-lg">
            <h5 class="font-bold text-zinc-900 text-sm mb-1">2. Dokumentasi Praktik Baik Berkelanjutan</h5>
            <p class="text-xs text-zinc-600">Melanjutkan tradisi pembuatan e-portofolio dan publikasi video praktik baik pembelajaran untuk menginspirasi rekan sejawat dan menerima telaah sejawat secara terbuka.</p>
          </div>
          <div class="p-4 bg-zinc-50 border border-zinc-200 rounded-lg">
            <h5 class="font-bold text-zinc-900 text-sm mb-1">3. Kolaborasi Tri Sentra Pendidikan</h5>
            <p class="text-xs text-zinc-600">Menjalin sinergi erat dengan orang tua murid dan tokoh masyarakat dalam mengawal penanaman karakter dan budi pekerti anak di luar jam sekolah.</p>
          </div>
        </div>
        <p class="text-sm">
          <strong>Target Capaian:</strong> Menjadi pendidik yang terus bertumbuh (*lifelong learner*), berdaya lentur tinggi menghadapi perubahan kurikulum, serta berkontribusi nyata bagi kemajuan almamater dan pendidikan nasional.
        </p>
      </div>
    `
  }
};

// DOM Initializer
document.addEventListener('DOMContentLoaded', () => {
  initReadingProgress();
  initFloatingPreview();
  initReflectionModal();
  initTiltCards();
  initScrollSpy();
  initMobileNav();
  initLightbox();
});

// 1. Reading Progress Bar
function initReadingProgress() {
  const progressBar = document.getElementById('reading-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (totalScroll <= 0) return;
    const progress = window.scrollY / totalScroll;
    progressBar.style.transform = `scaleX(${progress})`;
  }, { passive: true });
}

// 2. Floating Preview Follower (Mary Holt Style)
function initFloatingPreview() {
  const previewCard = document.getElementById('floating-preview');
  const previewImg = document.getElementById('floating-preview-img');
  const previewTitle = document.getElementById('floating-preview-title');
  const previewTag = document.getElementById('floating-preview-tag');
  
  if (!previewCard || window.innerWidth < 1024) return;

  const items = document.querySelectorAll('.reflection-item');
  let currentX = window.innerWidth / 2;
  let currentY = window.innerHeight / 2;
  let targetX = currentX;
  let targetY = currentY;
  let isHovering = false;

  // Smooth lerp loop
  function updatePos() {
    currentX += (targetX - currentX) * 0.15;
    currentY += (targetY - currentY) * 0.15;
    
    // Slight offset so it sits elegantly next to the pointer
    previewCard.style.left = `${currentX + 24}px`;
    previewCard.style.top = `${currentY - 40}px`;

    if (isHovering || previewCard.classList.contains('active')) {
      requestAnimationFrame(updatePos);
    }
  }

  window.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
  }, { passive: true });

  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const imgSrc = item.getAttribute('data-preview-image');
      const title = item.getAttribute('data-preview-title');
      const tag = item.getAttribute('data-preview-tag');

      if (imgSrc) previewImg.src = imgSrc;
      if (title) previewTitle.textContent = title;
      if (tag) previewTag.textContent = tag;

      previewCard.classList.add('active');
      if (!isHovering) {
        isHovering = true;
        requestAnimationFrame(updatePos);
      }
    });

    item.addEventListener('mouseleave', () => {
      previewCard.classList.remove('active');
      isHovering = false;
    });
  });
}

// 3. Modal Reflection System
function initReflectionModal() {
  const modal = document.getElementById('reflection-modal');
  const backdrop = document.getElementById('modal-backdrop');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modal) return;

  window.openReflectionModal = function(id) {
    const data = reflectionData[id];
    if (!data) return;

    document.getElementById('modal-category').textContent = data.category;
    document.getElementById('modal-number').textContent = data.number;
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-subtitle').textContent = data.subtitle;
    document.getElementById('modal-image').src = data.image;
    document.getElementById('modal-image').alt = data.title;
    document.getElementById('modal-quote').textContent = data.quote;
    document.getElementById('modal-body').innerHTML = data.content;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Trigger animation
    setTimeout(() => {
      backdrop.classList.remove('opacity-0');
      document.getElementById('modal-panel').classList.remove('translate-y-8', 'opacity-0');
    }, 10);
  };

  window.closeReflectionModal = function() {
    backdrop.classList.add('opacity-0');
    document.getElementById('modal-panel').classList.add('translate-y-8', 'opacity-0');

    setTimeout(() => {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }, 300);
  };

  if (closeBtn) closeBtn.addEventListener('click', closeReflectionModal);
  if (backdrop) backdrop.addEventListener('click', closeReflectionModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeReflectionModal();
    }
  });
}

// 4. Subtle 3D Tilt Cards
function initTiltCards() {
  if (window.innerWidth < 768) return;

  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
}

// 5. Scrollspy Navigation
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('text-zinc-900', 'font-semibold');
          link.classList.add('text-zinc-500');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('text-zinc-900', 'font-semibold');
            link.classList.remove('text-zinc-500');
          }
        });
      }
    });
  }, { passive: true });
}

// 6. Mobile Drawer Navigation
function initMobileNav() {
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileClose = document.getElementById('mobile-drawer-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!mobileToggle || !mobileDrawer) return;

  function openDrawer() {
    mobileDrawer.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    mobileDrawer.classList.add('hidden');
    document.body.style.overflow = '';
  }

  mobileToggle.addEventListener('click', openDrawer);
  if (mobileClose) mobileClose.addEventListener('click', closeDrawer);
  mobileLinks.forEach(link => link.addEventListener('click', closeDrawer));
}

// 7. Lightbox for Classroom Polaroids
function initLightbox() {
  const lightbox = document.getElementById('image-lightbox');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  if (!lightbox) return;

  window.openLightbox = function(src, caption) {
    lightboxImg.src = src;
    lightboxCaption.textContent = caption || 'Dokumentasi PPL II — SMP Negeri 8 Purwokerto';
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  window.closeLightbox = function() {
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  };

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.id === 'lightbox-backdrop') {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
      closeLightbox();
    }
  });
}

// 8. Utility: Copy Link Toast
window.copyPortfolioLink = function() {
  navigator.clipboard.writeText(window.location.href).then(() => {
    showToast('Tautan Portofolio Berhasil Disalin!');
  }).catch(() => {
    showToast('Gagal menyalin tautan');
  });
};

function showToast(msg) {
  const toast = document.getElementById('copy-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.remove('opacity-0', 'translate-y-4');
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-4');
  }, 2500);
}
