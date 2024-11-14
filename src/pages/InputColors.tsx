import axios from "axios"
import { useState } from "react";
import Button from "../components/Button";
import PreferenceDiv from "../components/PreferenceDiv";

export default function InputColors() {

    const [skinColor, setSkinColor] = useState<string | undefined>('');
    const [hairColor, setHairColor] = useState<string | undefined>('');
    const [eyeColor, setEyeColor] = useState<string | undefined>('');
    const [preference, setPreference] = useState<string[]>([]);



    const generatePalette = async () => {


        //form validation by me
        if (skinColor === '' || hairColor === '' || eyeColor === '') {
            alert("Please enter the skin, hair and eye colors")
            return
        }

        //add color inputs
        const data: Record<string, any> = {
            "skin-color": skinColor,
            "eye-color": eyeColor,
            "hair-color": hairColor,
        }

        if (preference.length > 0) {
            //if preference and undertones are there, add them 
            data["preference"] = preference;
        }

        const response = await axios.post('https://807l4.wiremockapi.cloud/thing/8/color-analysis', data);

        if (response) {
            console.log(response.data);
        }
        else {
            console.log("error in submitting data to api");
        }
    }

    const getPreference = (preferences: string[]) => {
        setPreference((prevArr) => {
            return [...prevArr, ...preferences]
        })
    }

    return (
        <div>
            <div className="flex flex-col items-center bg-[#F8F7F4]">
                <div className="flex flex-col w-1/2 my-8">
                    <div>
                        <h1 className="text-4xl font-bold text-[#0C111D] font-playfair my-4">Select Your Colors</h1>
                        <p className="font-inter text-[#475467]">Use the color picker tool to identify your hair, skin, and eye colors. For hair and skin, choose the primary tones without focusing on highlights or shadows. For eyes, select the most prominent color, typically found in the center of the iris.</p>
                    </div>

                    <div className="flex flex-col items-center" onSubmit={generatePalette}>

                        <div className="my-4 flex items-center w-full relative">
                            <img src="/img/input image.jpeg" className="w-[40rem] h-[28rem] object-cover" alt="" />
                            <div className="absolute right-0">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col items-center relative">
                                        <div
                                            className="relative w-14 h-14 rounded-full border-2 border-black overflow-hidden m-4"
                                            style={{ backgroundColor: skinColor }}
                                        >
                                            <input
                                                type="color"
                                                className="absolute inset-0 w-full h-full p-0 border-none cursor-pointer opacity-0"
                                                value={skinColor || ''}
                                                name="skinColor"
                                                onChange={(e) => setSkinColor(e.target.value)}
                                                required
                                            />

                                        </div>
                                        <label htmlFor="skinColor" className="absolute top-[4.7rem]">Skin</label>
                                    </div>

                                    <div className="flex flex-col items-center relative">
                                        <div
                                            className="relative w-14 h-14 rounded-full border-2 border-black overflow-hidden m-4"
                                            style={{ backgroundColor: hairColor }}
                                        >
                                            <input
                                                type="color"
                                                className="absolute inset-0 w-full h-full p-0 border-none cursor-pointer opacity-0"
                                                value={hairColor || ''}
                                                name="hairColor"
                                                onChange={(e) => setHairColor(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <label htmlFor="hairColor" className="absolute top-[4.7rem]">Hair</label>
                                    </div>


                                    <div className="flex flex-col items-center relative">
                                        <div
                                            className="relative w-14 h-14 rounded-full border-2 border-black overflow-hidden m-4"
                                            style={{ backgroundColor: eyeColor }}
                                        >
                                            <input
                                                type="color"
                                                className="absolute inset-0 w-full h-full p-0 border-none cursor-pointer opacity-0"
                                                value={eyeColor || ''}
                                                name="eyeColor"
                                                onChange={(e) => setEyeColor(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <label htmlFor="eyeColor" className="absolute top-[4.7rem]">Eye</label>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className="w-1/2">
                            <Button text="Generate Palette" handleClick={generatePalette} />
                        </div>


                    </div>

                </div>


            </div>


            <div className="flex flex-col items-center">
                <div className="flex flex-col w-1/2 mb-8">
                    <h1 className="text-3xl font-playfair font-medium my-8 text-[#344054]">Advanced Preferences - Optional</h1>

                    <div className="flex flex-col gap-8 items-center">

                        <div className="flex flex-col self-start gap-10">
                            <PreferenceDiv heading="Color Intensity Preference" desc="Defines the intensity and vibrancy of the colors in the palette." options={["Bold", "Vibrant", "Muted", "Pastel", "Soft", "Neutral", "Classic", "Dark", "Earthy", "Warm"]} handleClick={getPreference} />


                            <PreferenceDiv heading="Seasonal Preferences" desc="Colors inspired by the mood and feel of each season." options={["Winter", "Spring", "Summer", "Autumn"]} handleClick={getPreference} />

                            <PreferenceDiv heading="Occasion-Based Preferences" desc="Find colors that fit the occasion, from casual to formal." options={["Casual", "Everyday", "Work", "Formal", "Vacation", "Festive", "Sports"]} handleClick={getPreference} />

                            <PreferenceDiv heading="Personal Style Preferences" desc="Match colors to your unique style, whether minimal or bold." options={["Minimalist", "Maximalist", "Modern", "Edgy", "Vintage", "Bohemian", "Classic", "Street"]} handleClick={getPreference} />
                        </div>


                        <div className="w-1/2">
                            <Button text="Generate Palette" handleClick={generatePalette} />
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}