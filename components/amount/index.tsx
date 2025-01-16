type props = {
    icon: string | "&#8645;",
    color: string | "bg-lime-500",
    title: string | "Total Balance",
    value: number | 598754
}

const Amount = (myProp: props) => {
    return (
        <div className="w-full border p-5">
            <div className="flex items-center justify-center gap-3">
                {/* left */}
                <div className={`size-10 rounded-full ${myProp.color} flex items-center justify-center`}>
                    {myProp.icon}
                </div>
                {/* right */}
                <div>
                    <span className="text-slate-500 text-sm">{myProp.title}</span>
                    <h1 className="text-2xl font-bold">{myProp.value}</h1>
                </div>
            </div>
        </div>
    )
}

export default Amount