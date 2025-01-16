"use client"
import { ReactNode, useState } from "react";

type props = {
    children: React.ReactNode,
}

const Box = (myProps: props) => {
    const [color, setColor] = useState<string>('#FF0000');
    const [size, setSize] = useState<number>(12);
    const [align, setAlign] = useState<string>('left');

    return (
        <div className={`w-full p-3 border`}>
            <div className="bg-slate-100 p-3 rounded-md" style={{color: color, fontSize: size, textAlign: align as 'left' | 'center' | 'right'}}>
                {myProps.children}
            </div>

            <div className="mt-5 bg-slate-200">
                <h1 className="font-semibold">Control</h1>
                <div className="mb-3">
                    <small className="text-sm">
                        Color
                    </small>
                    <input 
                    type="color" 
                    id="color" 
                    className="w-full rounded-md"
                    value={color}
                    onChange={event => setColor(event.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <small className="text-sm">
                        Size
                    </small>
                    <input 
                    type="number" 
                    id="size" 
                    className="w-full rounded-md"
                    value={size.toString()}
                    onChange={event => setSize(Number(event.target.value))}
                    />
                </div>
                <div className="mb-3">
                    <small className="text-sm">
                        Align
                    </small>
                    <select 
                    id="align" 
                    className="w-full rounded-md"
                    value={align}
                    onChange={event => setAlign(event.target.value)}
                    >
                        <option value="left">Left</option>
                        <option value="center">Center</option>
                        <option value="right">Right</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Box;