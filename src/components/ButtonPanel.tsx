"use client"
import { ATTRIBUTE_MAP, ATTRIBUTES } from "@/constants/imageAttributes"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

export default function ButtonPanel(props: ButtonProps) {
    const { ...restProps } = props

    const arr1 = ATTRIBUTES

    const arr2 = ATTRIBUTE_MAP.map(obj => obj.values)

    const test = arr1.map((item, index) => {
        console.log(`${index}. ${item} `)
    })

    console.log('arr2--->', arr2)
    console.log(test)

    return (
        <div>
            <div>
                <h2>ACCESSORIZE THE ALPACAS</h2>
                {ATTRIBUTES.map((attribute, index) => 
                    
                     (                   
                            <button
                                onClick={restProps.onClick}
                                className="p-2 text-blue-600 border-2 border-blue-600 hover:border-3 rounded-full cursor-pointer"
                                value={index}
                                key={index}
                                title={attribute}
                            >
                                {attribute}
                            </button>                        
                    )
                )}
            </div>
            <div>
                <h2>STYLE</h2>
                <button>styles</button>
            </div>
        </div>
    )
}


