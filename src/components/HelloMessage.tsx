//Create a type for the Hello Message to be a string only
type HelloMessageProps = {
    name: string
}

//The component that will display the greeting with set name in App.tsx
export default function HelloMessage({ name }: HelloMessageProps) {
    return (
        <div>
            <h1>Hello {name}</h1>
            <h2>Welcome to Figma 2</h2>
        </div>
    )
}