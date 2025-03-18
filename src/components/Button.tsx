"use client"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    active: boolean
}

export default function Button(props: ButtonProps) {
    const {active, ...restProps} = props

    return (
        <button
        onClick={restProps.onClick}
        className="p-2 text-blue-600 border-2 border-blue-600 hover:border-3 rounded-full cursor-pointer"
        />
    )
}