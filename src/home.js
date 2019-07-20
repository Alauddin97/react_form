import React from 'react'
import './component/des.css'
import hacker from './component/hacker.png'
import { tsNamespaceExportDeclaration } from '@babel/types';

function Home() {
    return (
        <div class="des">
            <img src={hacker} alt="error"/>
            <h1>Lorem</h1>
            <p>&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    )
}

export default Home
