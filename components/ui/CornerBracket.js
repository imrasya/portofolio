export const CornerBracket = ({ position = "top-left", size = "w-4 h-4", color = "border-primary", strokeWidth = "border-t-[2px] border-l-[2px]" }) => {
    const styles = {
        "top-left": "top-0 left-0 border-t-2 border-l-2 rounded-tl-sm",
        "top-right": "top-0 right-0 border-t-2 border-r-2 rounded-tr-sm",
        "bottom-left": "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-sm",
        "bottom-right": "bottom-0 right-0 border-b-2 border-r-2 rounded-br-sm",
    };

    return (
        <div className={`absolute ${styles[position]} ${size} ${color} pointer-events-none z-10`} />
    );
};

export const BracketSet = () => (
    <>
        <CornerBracket position="top-left" />
        <CornerBracket position="top-right" />
        <CornerBracket position="bottom-left" />
        <CornerBracket position="bottom-right" />
    </>
);
