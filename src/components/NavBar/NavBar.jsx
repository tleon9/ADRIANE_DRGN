import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react';
import { Link } from 'react-router-dom';
import { Searcher } from '../Searcher/Searcher';



export const NavBar = () =>{
    return(
        
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
        <Link class="navbar-brand" to="/">DRGN</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <Link class="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/dictation">Dictation</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/basicscommands">Basics Commands</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to="/multistep">Multistep Commands</Link>
                </li>    
            </ul>
            <Searcher/>
            
            
        </div>
    </div>
    </nav>

    )
}