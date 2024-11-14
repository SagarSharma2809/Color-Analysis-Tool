import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

export default function Home() {

    const navigate = useNavigate();

    const imageUpload = () => {
        alert("file upload");
    }

    return (
        <>
            <div className="flex">
                <div className="w-1/2 flex justify-center items-center bg-[#F8F7F4]">

                    <div className="w-5/6 flex items-center justify-center">

                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-12">

                                <h1 className="text-[4.1rem] text-[#0C111D] font-playfair font-[400] h-[60px]">Personal Color Analysis</h1>


                                <div className="flex flex-col gap-6 text-[#475467] text-2xl">
                                    <div className="">
                                        Our <span className="text-[#F63D68]">AI-powered color analysis tool</span> helps you discover the colors that enhance your natural beauty, match your unique features, and fit your personal style.
                                    </div>
                                    <div className="">
                                        Upload your photo get instant recommendations for your perfect color palette.
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="bg-white rounded-md flex items-center justify-center">
                                    <div className="flex flex-col items-center justify-center gap-2 m-4">
                                        <img src="/img/upload cloud.jpg" className="w-12" alt="" />
                                        <div className="flex gap-2">
                                            <div className="font-medium text-[#F63D68] cursor-pointer" onClick={imageUpload}>
                                                Click to upload
                                            </div>
                                            <div className="text-[#475467]">
                                                or drag and drop
                                            </div>
                                        </div>
                                        <div className="text-[#475467] text-sm">
                                            SVG, PNG, JPG or GIF
                                        </div>
                                    </div>

                                </div>
                                <Button text="Create your Palette" handleClick={() => { navigate('/inputColors') }} />
                            </div>
                        </div>


                    </div>


                </div>
                <div className="w-1/2">
                    <img src="/img/hero bg.jpeg" alt="" />
                </div>

            </div>

        </>
    )
}