import Box from "@/components/box"

const StatePage = () => {
    return (
        <div className="w-full flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                <Box>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, tempore!
                </Box>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 p-3">
                <Box>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, tempore!
                </Box>
            </div>
        </div>
    )
}

export default StatePage