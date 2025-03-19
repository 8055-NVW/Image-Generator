"use client";
import ButtonPanel from "./ButtonPanel";

export default function AlpacaGenerator() {


    return (
        <div className="flex flex-col m-10 w-screen h-screen">
            <div>
                <h1 className="text-4xl">Alpaca Generator</h1>
            </div>
            <div className="flex ">
                <div>
                    <div id="image-container" className="relative w-96">
                        {/* alpaca image will go here */}

                        {/* Background */}
                        <img
                            src="/images/alpaca/backgrounds/blue50.png"
                            alt="blue-50"
                            className="absolute"
                        />
                        {/* Ears */}
                        <img
                            src="/images/alpaca/ears/default.png"
                            alt="ears"
                            className="absolute"
                        />
                        {/* Neck */}
                        <img
                            src="/images/alpaca/neck/default.png"
                            alt="neck-default"
                            className="absolute"
                        />
                        {/* Nose */}
                        <img
                            src="/images/alpaca/nose.png"
                            alt="nose"
                            className="absolute"
                        />
                        {/* Mouth */}
                        <img
                            src="/images/alpaca/mouth/default.png"
                            alt="mouth"
                            className="absolute"
                        />
                        {/* Leg */}
                        <img
                            src="images/alpaca/leg/default.png"
                            alt="leg"
                            className="absolute"
                        />
                        {/* Hair */}
                        <img
                            src="/images/alpaca/hair/default.png"
                            alt="hair"
                            className="absolute"
                        />
                        {/* Eyes */}
                        <img
                            src="/images/alpaca/eyes/default.png"
                            alt="eyes"
                            className="absolute"
                        />
                    </div>
                    <div >
                        {/* alpaca image will go here */}
                    </div>
                </div>
                <ButtonPanel />
            </div>
        </div>

    )

}