import { Children } from "react";

export default function Tabs({Children,buttons}){
    return(
        <>
        <menu>
          {buttons}
        </menu>
        {Children}
        </>
    );
}