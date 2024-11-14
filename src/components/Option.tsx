interface OptionProps {
    text: string,
    buttonClick: (index: number, value: boolean) => void,
    isActive: boolean
    index: number
}

export default function Option({ text, buttonClick, isActive, index }: OptionProps) {

    const toggleActive = () => {

        buttonClick(index, !isActive);
    }

    const conditionalClass = isActive ? 'bg-[#FFF1F3] text-[#F63D68] border-[#FECDD6]' : 'bg-[#F9FAFB] text-[#344054] border-[#EAECF0]'

    return (
        <>
            <button className={` ${conditionalClass} px-3 py-1 rounded-2xl border  text-sm font-medium hover:text-[#F63D68] hover:border-[#FECDD6]`} onClick={toggleActive}> {text} </button>
        </>
    )
}