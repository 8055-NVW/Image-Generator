"use client"
import RandomizerButton from "./RandomizerButton"
import DownloadButton from "./DownloadButton";

interface ButtonPanelProps {
    selectedStyles: { [key: string]: string };
    setSelectedStyles: (styles: { [key: string]: string }) => void;
}

export default function AlpacaPreviwer({ selectedStyles, setSelectedStyles }: ButtonPanelProps) {
    const imgPath = "/images/alpaca/";

    return (
            <div className=" w-96 min-w-96 mb-5">
                <div className="relative h-96 min-h-96">
                    <img
                        src={`${imgPath}backgrounds/${selectedStyles["background"]}.png`}
                        alt={selectedStyles["background"]}
                    />
                    <img
                        src={`/images/alpaca/ears/${selectedStyles["ears"]}.png`}
                        alt={selectedStyles["ears"]}
                    />
                    <img
                        src={`/images/alpaca/neck/${selectedStyles["neck"]}.png`}
                        alt={selectedStyles["neck"]}
                    />
                    <img
                        src="/images/alpaca/nose.png"
                        alt="nose"
                    />
                    <img
                        src={`/images/alpaca/mouth/${selectedStyles["mouth"]}.png`}
                        alt={selectedStyles["mouth"]}
                    />
                    <img
                        src={`/images/alpaca/leg/${selectedStyles["leg"]}.png`}
                        alt={selectedStyles["leg"]}
                    />
                    <img
                        src={`/images/alpaca/hair/${selectedStyles["hair"]}.png`}
                        alt={selectedStyles["hair"]}
                    />
                    <img
                        src={`/images/alpaca/eyes/${selectedStyles["eyes"]}.png`}
                        alt={selectedStyles["eyes"]}
                    />
                    {selectedStyles["accessories"] !== "None" &&
                        (
                            <img
                                src={`/images/alpaca/accessories/${selectedStyles["accessories"]}.png`}
                                alt={selectedStyles["accessories"]}
                            />
                        )}
                </div>
                <div className="flex justify-between">
                    <DownloadButton selectedStyles={selectedStyles}/>
                    <RandomizerButton setSelectedStyles={setSelectedStyles} />
                </div>
            </div>        
    )
}