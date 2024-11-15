import ColorBox from "../components/ColorBox";

interface OutputColorsProps {
    colorData: any
}

export default function OutputColors({ colorData }: OutputColorsProps) {

    return (
        <>
            <div className="flex justify-center items-center bg-[#F8F7F4]">
                <div className="w-3/4 m-2 flex flex-col gap-8">
                    <div className="flex flex-col gap-12">
                        <h1 className="font-playfair text-4xl font-[600] text-[#0C111D]">Your Personalized Palette</h1>
                        <div className="flex flex-col gap-6">
                            <h1 className="font-inter font-[600] text-4xl text-[#F63D68]">{colorData.palette_Name}</h1>
                            <p className="text-lg font-inter text-[#475467] font-[400]">{colorData.palette_Description}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <h2 className="font-playfair font-semibold leading-5 text-2xl">Recommended Colors</h2>
                            <div className="flex gap-5 flex-wrap">
                                {/* color palette */}
                                {colorData.recommended_colors.map((color: any) => {
                                    return <ColorBox colorData={color} />
                                })}
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h2 className="font-playfair font-semibold leading-5 text-2xl">Colors to Avoid</h2>
                            <div>
                                <div className="flex gap-5 flex-wrap">
                                    {/* color palette */}
                                    {colorData.colors_to_avoid.map((color: any) => {
                                        return <ColorBox colorData={color} />
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}