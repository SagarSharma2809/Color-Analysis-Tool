import Divider from "./Divider"
import Option from "./Option"

interface PreferenceDivProps {
    heading: string,
    desc: string,
    options: string[]
}

export default function PreferenceDiv({ heading, desc, options }: PreferenceDivProps) {
    return (
        <>
            <div className="font-inter flex flex-col gap-2">
                <h2 className="text-lg text-[#101828] font-[600]">{heading}</h2>
                <p className="text-gray-500 text-sm">{desc}</p>
                <Divider />
                <div className="flex gap-2">
                    {
                        options.map((item) => {
                            return <Option text={item} />
                        })
                    }
                </div>

            </div>
        </>
    )
}