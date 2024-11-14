interface ButtonProps {
    text: string,
    handleClick?: () => void
}

export default function Button({ text, handleClick }: ButtonProps) {
    return (
        <>
            <button type="submit" className="bg-[#F63D68] text-white py-2 px-4 w-full font-semibold rounded-md hover:bg-[#D3365E]" onClick={handleClick}>{text}</button>
        </>
    )
}