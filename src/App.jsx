import { useState } from "react";
export default function Accordion()
{
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <h2 style={{textAlign:"center"}}>Hello Akash</h2>
            <Panel
                title="About"
                isActive={activeIndex === 0}
                onShow={() => setActiveIndex(0)}
                >
                lorem ipsum lorem ipsum
            </Panel>
            <Panel title="Etymology" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
                lorem ipsum lorem ipsum ipsum true false line first
            </Panel>
        </>
    )
}

function Panel({title, children, isActive, onShow})
{
    return (
        <section style={{borderStyle:'groove', display:'block', marginLeft: 'auto', marginRight: 'auto', width:'40%'}}>
            <h3>{title}</h3>
            {isActive ? ( <p>{children}</p>) : (<button style={{marginBottom:'10px', marginLeft: '10px'}} onClick={onShow}>show</button>)}
        </section>
    )
}