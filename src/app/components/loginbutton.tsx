import React from "react";

import Link from "next/link";

function LinkButton({name, rota}: any){
    return(
        <Link href={rota}>
            <button className="font-sans text-xl text-blue-700">{name}</button>
        </Link>
    );

}
export default LinkButton



