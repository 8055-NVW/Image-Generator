"use client";
import { ATTRIBUTE_MAP, ATTRIBUTES } from "@/constants/imageAttributes";

interface RandomizerButtonProps {
    setSelectedStyles: (styles: { [key: string]: string }) => void;
}

export default function RandomizerButton({ setSelectedStyles }: RandomizerButtonProps) {
    const getRandomValue = (attribute: string) => {
        const values = ATTRIBUTE_MAP[attribute].values;
        return values[Math.floor(Math.random() * values.length)];
    };

    const randomizeStyles = () => {
        const newStyles = ATTRIBUTES.reduce((acc, attr) => {
            acc[attr] = getRandomValue(attr);
            return acc;
        }, {} as { [key: string]: string });

        setSelectedStyles(newStyles);
    };

    return (
        <button
            onClick={randomizeStyles}
            className="p-3 mt-4 bg-green-500 text-white rounded-lg hover:bg-green-700 cursor-pointer"
        >
            Randomize 🎲
        </button>
    )
}