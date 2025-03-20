"use client";
import { ATTRIBUTES, ATTRIBUTE_MAP } from "@/constants/imageAttributes";
import ButtonPanel from "./ButtonPanel";
import AlpacaPreviwer from "./AlpacaPreviewer";
import RandomizerButton from "./RandomizerButton";
import DownloadButton from "./DownloadButton";
import { useState } from "react";

export default function AlpacaGenerator() {

    const [selectedStyles, setSelectedStyles] = useState<{ [key: string]: string }>(() => {
        return ATTRIBUTES.reduce((acc, attr) => {
            acc[attr] = ATTRIBUTE_MAP[attr].values[0];
            return acc;
        }, {} as { [key: string]: string });
    });

    return (
        <div className="flex flex-col h-screen max-h-[500px]">
            <h1 className="text-6xl pb-5">Alpaca Generator</h1>
            <div className="flex flex-col md:flex-row">
                <AlpacaPreviwer selectedStyles={selectedStyles} setSelectedStyles={setSelectedStyles} />
                <ButtonPanel selectedStyles={selectedStyles} setSelectedStyles={setSelectedStyles} />
            </div>
        </div>
    )
}