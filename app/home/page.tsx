import Amount from "@/components/amount"

const HomePage = () => {
    return (
        <div className="container p-5">
            <h1 id="judul" className="text-2xl">
                Home Page
            </h1>
            <div className="flex flex-wrap w-full">
                <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                    <Amount 
                    title="Total Income"
                    icon="&#8645;"
                    value={900000}
                    color="bg-orange-400"
                    />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                    <Amount 
                    title="Total Purchase"
                    icon="&#8645;"
                    value={233000}
                    color="bg-red-400"
                    />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                    <Amount 
                    title="Total Balance"
                    icon="&#8645;"
                    value={779222}
                    color="bg-blue-400"
                    />
                </div>
                <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                    <Amount 
                    title="Total Utang"
                    icon="&#8645;"
                    value={779222}
                    color="bg-yellow-400"
                    />
                </div>
            </div>
        </div>
    )
}

export default HomePage
