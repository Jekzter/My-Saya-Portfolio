import { useCustomCursor } from "../helper/CustomCursor";

export function CustomCursor() {
    const { position } = useCustomCursor();

    return (
        <div
            className="custom-cursor sm:flex hidden"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                position: 'fixed',
                pointerEvents: 'none',
                backgroundColor: 'rgba(60, 99, 0, 0.5)',
                zIndex: 9999,
                transform: 'translate(-50%, -50%)',
            }}
        />
    )
}
