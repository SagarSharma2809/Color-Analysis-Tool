import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";

interface HomeProps {
    uploadFile: (file: string) => void
}
export default function Home({ uploadFile }: HomeProps) {

    const [isDragOver, setIsDragOver] = useState(false);
    const [droppedFileName, setDroppedFileName] = useState('');
    const [file, setFile] = useState('');

    const navigate = useNavigate();

    const handleChange = (e: any) => {
        setFile(URL.createObjectURL(e.target.files[0]));
        setDroppedFileName(e.target.files[0].name);
    }

    const handleDragOver = (event: any) => {
        event.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = () => {
        setIsDragOver(false);
    };

    const handleDrop = (event: any) => {
        event.preventDefault();
        setIsDragOver(false);
        const droppedFile = event.dataTransfer.files[0];
        setFile(droppedFile)
        setDroppedFileName(droppedFile.name);
    };

    const createPalette = () => {
        if (file) {
            uploadFile(file);
            navigate('/inputColors')
        }
        else {
            alert("Please upload a file")
        }

    }
    return (
        <>
            <div className=" flex flex-col xl:flex-row">
                <div className="w-full xl:w-1/2 flex justify-center items-center bg-[#F8F7F4] pb-12 pt-24 xl:pt-4 xl:pb-4">

                    <div className="w-5/6 flex items-center justify-center">

                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-16 md:gap-12">

                                <h1 className="text-5xl lg:text-[3.1rem] xl:text-[4.1rem] text-[#0C111D] font-playfair font-[600] lg:font-[400] h-[60px]">Personal Color Analysis</h1>


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
                                <div
                                    className="bg-white rounded-md flex items-center justify-center"
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                >
                                    <div className="flex flex-col items-center justify-center gap-2 m-4">
                                        {droppedFileName ? (
                                            <div className="font-medium text-[#475467]">{droppedFileName}</div>
                                        ) : (
                                            <>
                                                <img src="/img/upload cloud.jpg" className="w-12" alt="" />
                                                <div className="flex gap-2">
                                                    <div className="">
                                                        <input type="file" id="fileUpload" className="hidden" onChange={handleChange} />
                                                        <label
                                                            htmlFor="fileUpload"
                                                            className="font-medium text-[#F63D68] cursor-pointer"
                                                        >
                                                            Click to upload
                                                        </label>
                                                    </div>
                                                    <div className="text-[#475467]">or drag and drop</div>
                                                </div>
                                                <div className="text-[#475467] text-sm">SVG, PNG, JPG or GIF</div>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <Button text="Create your Palette" handleClick={createPalette} />
                            </div>
                        </div>


                    </div>


                </div>
                <div className="xl:w-1/2">
                    <img src="/img/hero bg.jpeg" alt="" />
                </div>

            </div>

        </>
    )
}