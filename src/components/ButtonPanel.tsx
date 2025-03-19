"use client"
import { useEffect, useState } from "react"
import { ATTRIBUTE_MAP, ATTRIBUTES } from "@/constants/imageAttributes"

interface ButtonPanelProps {
    selectedStyles: { [key: string]: string };
    setSelectedStyles: (styles: { [key: string]: string }) => void;
}

export default function ButtonPanel({ selectedStyles, setSelectedStyles }: ButtonPanelProps) {
    const [selectedAttribute, setSelectedAttribute] = useState<string>(ATTRIBUTES[0]);

    useEffect(() => {
        setSelectedStyles({
            ...selectedStyles,
            [selectedAttribute]: ATTRIBUTE_MAP[selectedAttribute].values[0]
        });
    }, [selectedAttribute]);

    return (
        <div>
            <div>
                <h2 className="text-2xl">ACCESSORIZE THE ALPACAS</h2>
                {ATTRIBUTES.map((attribute, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedAttribute(attribute)}
                        className={`p-2 text-lg text-blue-600 border-2 border-blue-600 hover:border-3 rounded-full cursor-pointer 
                                ${selectedAttribute === attribute ? "bg-blue-600 text-white" : ""}`}
                        title={attribute}
                    >
                        {ATTRIBUTE_MAP[attribute]?.text}
                    </button>
                ))}
            </div>
            {selectedAttribute && (
                <div>
                    <h2 className="text-2xl">STYLE</h2>
                    {ATTRIBUTE_MAP[selectedAttribute]?.values.map((value, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedStyles({ 
                                ...selectedStyles, 
                                [selectedAttribute]: value 
                            })}
                            className={`p-2 text-blue-600 border-2 border-blue-600 hover:border-3 rounded-full cursor-pointer 
                            ${selectedStyles[selectedAttribute] === value ? "bg-blue-200" : ""}`}
                        >
                            {value.replace(/-/g, ' ')}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
