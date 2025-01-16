type props = {
    gambar: string
    title: string
    deskripsi: string
}

const Sekolah = (myProps: props) => {
    return (
        <div className="text-center container mx-auto">
            <img src={myProps.gambar} alt="gambar sekolah" className="w-full rounded-lg" />
            <h1 className="text-3xl font-bold my-5">{myProps.title}</h1>
            <p className="text-slate-700 text-sm font-thin">{myProps.deskripsi}</p>
            <button className="bg-blue-800 hover:bg-blue-900 transition-all text-sm duration-200 w-full text-white p-2 rounded-lg mt-10">
                Pilih
            </button>
        </div>
    )
}

export default Sekolah;