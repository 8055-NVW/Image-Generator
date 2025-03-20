"use client";
import { saveAs } from 'file-saver';
import mergeImages from 'merge-images';

interface DownloadButtonProps {
    selectedStyles: { [key: string]: string };
}

export default function DownloadButton({ selectedStyles }: DownloadButtonProps) {
    const imgPath = "/images/alpaca/";
    const downloadBtnClass = "mt-4 px-4 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 cursor-pointer"

    const handleDownload = async () => {
        const images = [
            `${imgPath}neck/${selectedStyles["neck"]}.png`,
            `${imgPath}backgrounds/${selectedStyles["background"]}.png`,
            `${imgPath}ears/${selectedStyles["ears"]}.png`,
            `${imgPath}neck/${selectedStyles["neck"]}.png`,
            `${imgPath}mouth/${selectedStyles["mouth"]}.png`,
            `${imgPath}leg/${selectedStyles["leg"]}.png`,
            `${imgPath}hair/${selectedStyles["hair"]}.png`,
            `${imgPath}eyes/${selectedStyles["eyes"]}.png`,
            selectedStyles["accessories"] !== "None"
                ? `${imgPath}accessories/${selectedStyles["accessories"]}.png`
                : null,
            `${imgPath}nose.png`,
        ].filter(Boolean) as string[];
        try {
            const mergedImage = await mergeImages(images);
            const blob = await fetch(mergedImage).then((res) => res.blob());
            saveAs(blob, "alpaca.png");
        } catch (error) {
            console.error("Error merging images:", error);
        }
    };

    return (
        <button
            onClick={handleDownload}
            className={downloadBtnClass}>
            Download 🖼️
        </button>
    );
}
