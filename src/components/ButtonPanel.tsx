"use client"
import { useEffect, useState } from "react"
import { ATTRIBUTE_MAP, ATTRIBUTES } from "@/constants/imageAttributes"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    active: boolean
}

export default function ButtonPanel(props: ButtonProps) {
    const { ...restProps } = props
    const [selectedAttribute, setSelectedAttribute] = useState<string>(ATTRIBUTES[0]);
    const [selectedStyle, setSelectedStyle] = useState<string>(ATTRIBUTE_MAP[ATTRIBUTES[0]].values[0])

    useEffect(() => {
        setSelectedStyle(ATTRIBUTE_MAP[selectedAttribute]?.values[0] || "");
    }, [selectedAttribute])

    return (
        <div>
            <div>
                <h2>ACCESSORIZE THE ALPACAS</h2>
                {ATTRIBUTES.map((attribute, index) => (
                    <button
                        onClick={() => setSelectedAttribute(attribute)}
                        className={`p-2 text-blue-600 border-2 border-blue-600 hover:border-3 rounded-full cursor-pointer 
                                ${selectedAttribute === attribute ? "bg-blue-200" : ""}`}
                        key={index}
                        title={attribute}>
                        {ATTRIBUTE_MAP[attribute]?.text}
                    </button>
                ))}
            </div>
            {selectedAttribute && (
                <div>
                    <h2>STYLE</h2>
                    {ATTRIBUTE_MAP[selectedAttribute]?.values.map((value, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedStyle(value)}
                            className={`p-2 text-blue-600 border-2 border-blue-600 hover:border-3 rounded-full cursor-pointer 
                            ${selectedStyle === value ? "bg-blue-200" : ""}`}>
                            {value}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}


