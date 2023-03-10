import React from 'react'

export default function Contests(props) {
    return (
        <div className={`contests-${props.darkMode ? "dark" : ""}`}>
            <h2> IEEE Contests </h2>
            <p>
                Members of our Student Branch are able to participate in IEEE contests. Below are contests we have participated.
                We are open to join any other competition that IEEE is hosting.
            </p>
            <img src="./images/undraw/undraw_Freelancer_re_irh4.png" alt="contest" />
            <div class="project" id="chatbot-dataset">
                <h3> IEEEXtreme  </h3>
                <p>
                    IEEEXtreme is a global challenge in which teams of IEEE Student members – advised and proctored by an IEEE member,
                    and often supported by an IEEE Student Branch – compete in a 24-hour time span against each other to solve
                    a set of programming problems. 
                    <br></br>Competition website :
                    <a href="https://ieeextreme.org/" target="_blank" rel="noreferrer">
                        <button>
                             https://ieeextreme.org/ 
                        </button>
                    </a>
                    <br></br>Practice now :
                    <a href="https://csacademy.com/ieeextreme-practice/" target="_blank" rel="noreferrer">
                        <button>
                             https://csacademy.com/ieeextreme-practice/ 
                        </button>
                    </a>
                </p>
                <img src="../images/contests/xtreme-logo.png" alt="xtreme-logo" />
            </div>
        </div>
    )
}
