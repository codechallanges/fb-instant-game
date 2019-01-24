import React from 'react'
import './template.css'


function AppTemplate(props){
    return (
        <div className="template"  >
            <div className="header">
                <section className="hero is-primary" >
                    <div className="hero-body">
                        <p className="title header-font is-3" >Your React App</p>
                        <p className="sub-title header-font">Rating</p>
                    </div>
                </section>
            </div>
            <div className="body-content" >
                {props.children}
            </div>
        </div>
    )
}

export default AppTemplate