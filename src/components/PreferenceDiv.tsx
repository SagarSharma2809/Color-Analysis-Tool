import Divider from "./Divider"
import Option from "./Option"
import { useState } from "react"

interface PreferenceDivProps {
    heading: string,
    desc: string,
    options: string[]
    handleClick: (preferences: string[]) => void
}


export default function PreferenceDiv({ heading, desc, options, handleClick }: PreferenceDivProps) {

    const [values, setValues] = useState<boolean[]>(new Array(options.length).fill(false));

    const manageOption = (index: number, value: boolean) => {

        setValues((prevValues) => {
            return prevValues.map((val, i) => {
                if (i == index) {
                    return value;
                }
                else {
                    return val;
                }
            })

        })

        let preferences: string[] = [];
        values.map((value, index) => {
            if (value) {
                preferences.push(options[index]);
            }
        })

        handleClick(preferences)

    }


    return (
        <>
            <div className="font-inter flex flex-col gap-2">
                <h2 className="text-lg text-[#101828] font-[600]">{heading}</h2>
                <p className="text-gray-500 text-sm">{desc}</p>
                <Divider />
                <div className="flex gap-2">
                    {
                        options.map((item, index) => {
                            return <Option key={index} text={item} buttonClick={manageOption} isActive={values[index]} index={index} />
                        })
                    }
                </div>

            </div>
        </>
    )
}