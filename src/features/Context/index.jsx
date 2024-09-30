import { useContext } from "react";
import Content from "./content";
import { ThemeContext } from "./ThemeContext";
function Context() {
    const context = useContext(ThemeContext)
    console.log(context)
    return (
        <div className="container">
            <div className="box">
                <button onClick={context.handleToggle}>Toggle theme</button>
                <Content />
            </div>
        </div>
    );
}

export default Context;