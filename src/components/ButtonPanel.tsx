"use client"
import { useEffect, useState } from "react"
import { ATTRIBUTE_MAP, ATTRIBUTES } from "@/constants/imageAttributes"

interface ButtonPanelProps {
    selectedStyles: { [key: string]: string };
    setSelectedStyles: (styles: { [key: string]: string }) => void;
}

export default function ButtonPanel({ selectedStyles, setSelectedStyles }: ButtonPanelProps) {
    const [selectedAttribute, setSelectedAttribute] = useState<string>(ATTRIBUTES[0]);
    const buttonClass = "mx-2 my-1 px-3 py-2 text-blue-600 border-2 border-blue-600 hover:border-3 rounded-full cursor-pointer shadow-md hover:shadow-lg transition-all";

    useEffect(() => {
        setSelectedStyles({
            ...selectedStyles,
            [selectedAttribute]: ATTRIBUTE_MAP[selectedAttribute].values[0]
        });
    }, [selectedAttribute]);

    return (
        <div className="px-5">
            <div>
                <h2 className="text-2xl mx-2 mb-1">ACCESSORIZE THE ALPACAS</h2>
                {ATTRIBUTES.map((attribute, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedAttribute(attribute)}
                        className={`${buttonClass} ${selectedAttribute === attribute ? "bg-blue-600 text-white" : ""}`}
                        title={attribute}
                    >
                        {ATTRIBUTE_MAP[attribute]?.text}
                    </button>
                ))}
            </div>
            {selectedAttribute && (
                <>
                    <h2 className="text-2xl mx-2 mb-1">STYLE</h2>
                    {ATTRIBUTE_MAP[selectedAttribute]?.values.map((value, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedStyles({
                                ...selectedStyles,
                                [selectedAttribute]: value
                            })}
                            className={`${buttonClass} ${selectedStyles[selectedAttribute] === value ? "bg-blue-600 text-white" : ""}`}
                        >
                            {value.replace(/-/g, ' ')}
                        </button>
                    ))}
                </>
            )}
        </div>
    );
}