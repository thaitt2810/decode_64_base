import { Copy } from "lucide-react";
import React from "react";

interface props {
    className: string,
    onClick: () => void
}

const ICopy: React.FC<props> = (props) => {
    const { className, onClick } = props;
    return (
        <button className={className} onClick={onClick}>
            <Copy />
        </button>
    )
}

export default ICopy;