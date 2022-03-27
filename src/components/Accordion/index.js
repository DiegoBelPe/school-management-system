import React,{ useState } from 'react';
import Accordion from './Accordion';
import "./Accordion.css"


function Index() {
    const [active ,setActive]= useState("Title1");
    return (
    <div className="App">
        <Accordion title="Title1" active={active} setActive={setActive}/>
        <Accordion title="Title2" active={active} setActive={setActive}/>
        <Accordion title="Title3" active={active} setActive={setActive}/>
        <Accordion title="Title4" active={active} setActive={setActive}/>
    </div>
    );
}
export default Index;