export default function ColorBox({ colorData }: any) {
    return (
        <>
            <div className="flex flex-col w-1/6 mr-3 mb-6">
                <div
                    style={{
                        backgroundColor: colorData.hex_code
                    }}
                    className="h-[200px] w-[188.8px]"
                >
                </div>
                <div className="flex flex-col gap-2">
                    <div className="my-1">
                        <h3 className="text-lg text-[#0C111D] font-bold font-inter">{colorData.color_name}</h3>
                        {colorData.usage &&
                            <p className="font-inter text-sm font-[500] text-[#344054]">{colorData.usage.charAt(0).toUpperCase() + colorData.usage.slice(1)}</p>
                        }
                    </div>
                    {colorData.description &&
                        <div className="text-sm font-inter text-[#475467]">
                            {colorData.description}
                        </div>
                    }
                    {colorData.reason &&
                        <div className="text-sm font-inter text-[#475467]">
                            {colorData.reason}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}