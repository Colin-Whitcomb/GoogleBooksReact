import React from 'react';
import { useBookContext } from "../../utils/GlobalState"

function Navbar() {

    const [state, dispatch] = useBookContext()

    return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Search</a>
        <a class="navbar-brand" href="#">Saved</a>
        </nav>
      </div>
    )
}

export default Navbar


