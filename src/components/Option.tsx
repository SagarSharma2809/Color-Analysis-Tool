interface OptionProps {
    text: string
}

export default function Option({ text }: OptionProps) {
    return (
        <>
            <button className="px-3 py-1 rounded-2xl bg-[#F9FAFB] text-[#344054] border border-[#EAECF0] text-sm font-medium hover:bg-[#FFF1F3] hover:text-[#F63D68] hover:border-[#FECDD6]"> {text} </button>
        </>
    )
}