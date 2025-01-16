import Sekolah from "@/components/sekolah";

const Jenjang = () => {
  return (
    <div className="p-10 md:p-20 container">
    <div className="bg-white container px-12 md:px-20 py-14 rounded-lg shadow-md overscroll-contain">
      <div className="text-center mb-10">
        <h1 className="font-bold text-3xl mb-1">Silakan pilih jenjang yang ingin kamu masuki</h1>
        <span className="text-slate-500 text-base">Sebelum kamu memilih sekolah, pilih jenjangmu dulu, yuk!</span>
      </div>
      <div className="grid grid-cols-1 gap-y-4 md:gap-y-0 md:flex md:gap-8 overflow-auto">
        <Sekolah 
        title="TK"
        deskripsi="TK Telkom memberikan pengalaman pembelajaran yang seru dan menarik di masa usia dini 🌈"
        gambar="https://ppdb.telkomschools.sch.id/image/TK.png"
        />
        <Sekolah 
        title="SD"
        deskripsi="SD Telkom sebagai langkah awal dalam mengembangkan fondasi pendidikan yang kokoh 🌟"
        gambar="https://ppdb.telkomschools.sch.id/image/SD.png"
        />
        <Sekolah 
        title="SMP"
        deskripsi="Nikmati pengalaman belajar yang berkualitas di SMP Telkom dengan komunitas yang dinamis 🏃🏻"
        gambar="https://ppdb.telkomschools.sch.id/image/SMP.png"
        />
        <Sekolah 
        title="SMA"
        deskripsi="Dapatkan kesempatan untuk mengembangkan potensi akademik dan non-akademik di SMA Telkom 📖"
        gambar="https://ppdb.telkomschools.sch.id/image/sma-new.png"
        />
        <Sekolah 
        title="SMK"
        deskripsi="Dapatkan pendidikan kejuruan di SMK Telkom yang berfokus pada persiapan karir yang kokoh 💼"
        gambar="https://ppdb.telkomschools.sch.id/image/smk-img.png"
        />
      </div>
    </div>
    </div>
  );
};

export default Jenjang;
