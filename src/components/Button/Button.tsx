interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export default function Button({ children, ...attributes }: IButtonProps) {
    return (
        <button type='button' className='button' {...attributes}>
            {children}
        </button>
    )
}
