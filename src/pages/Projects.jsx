import React from 'react'

export default function Projects() {
    return (
        <div>
            <div id="main">

                <h2> Our Projects </h2>

                <p>

                    Members of our Student Branch are able to participate in projects in coorperation with ConSeRT lab of University of West Attica
                    to learn about new technologies. Below there is a list of our ongoing projects any member can participate.

                </p>


                <div class="project" id="chatbot-dataset">

                    <h3> Dataset creation for chatbot training </h3>

                    <p>

                        Creation of a dataset for intent classification and Named-Entity Recognition (NER) for training a BERT-based model.
                        It will be used for answering student or interested parties questions about the educational and research activities
                        of a research lab and student clubs of a University. The dataset will be used in order to prepare a prototype chatbot
                        for the CONCERT lab and the University of West Attica IEEE Student branch.

                    </p>

                    <img src="../images/projects/chatbot.png" alt="chatbot" />

                </div>


                <div class="project" id="digital-wardrobe">

                    <h3> Development of a "digital wardrobe" with the ability to suggest clothing </h3>

                    <p>

                        Creation of a digital wardrobe in which we can register metadata (descriptions) or photos of the objects it will contain.
                        Items will be stored in our digital wardrobe with a lot of detail but be distinct enough so that the app can display them
                        with a small range of search options. For the specific project, there is a specific usage scenario like selection of clothing
                        related to events, etc.


                    </p>

                    <img src="../images/projects/wardrobe.png" alt="wardrobe" />

                </div>


                <div class="project" id="animal-data">

                    <h3> Status survey and description of an animal activity data recording framework </h3>

                    <p>

                        In the context of the specific project, the literature and the existing situation regarding devices and platforms
                        for monitoring animal activity will be studied, while a platform will be designed that will use existing devices
                        (WAMPA, Digitanimal, web cams) to create a dataset with animal activity , for use in Deep Learning models.

                    </p>

                </div>


                <div class="project" id="social-network">

                    <h3> Installation and setup of a social networking platform for university students </h3>

                    <p>

                        Use of the MASTODON open source social network platform, to create a social network only for students of a specific department
                        with the aim of serving their communication needs, free from advertisements or messages from users unrelated to the University.

                    </p>

                    <img src="../images/projects/mastodon.png" alt="mastodon" />

                </div>


                <div class="project" id="treasure-hunt">

                    <h3> Designing a University introduction game using Scavify software </h3>

                    <p>

                        Creation of game scenarios through the Scavify app to get to know the University, its spaces and the services. It is intended
                        to be used by new students or Erasmus students.The games will be played on mobile, and will take the form of a treasure hunt.

                    </p>

                </div>


                <div class="project" id="rescuer-presentation">

                    <h3> Creating a 360° rescuer training presentation application </h3>

                    <p>

                        Creation of web pages or a mobile application through which you can present a rescue operation in a tunnel in the form of 360 videos,
                        using already available material.

                    </p>

                    <img src="../images/projects/rescuer_presentation.png" alt="rescuer" />

                </div>


                <div class="project" id="rescuer-comic">

                    <h3> Creation of comic strips on the topic of rescuer support technologies </h3>

                    <p>

                        Use of a special application (e.g. on ipad) to convert photos and presentations into comic strips that will present the results and
                        activities of the RESCUER research project.

                    </p>

                </div>


                <div class="project" id="uwb-radar">

                    <h3> Design a demonstration of UWB radar usage in rescue operations </h3>

                    <p>

                        Design of a UWB radar demonstration scenario for use in rescue operations, with the aim of presenting it at a technology fair.
                        Students participating in this project will be the ones presenting it at the fair.

                    </p>

                    <img src="../images/projects/radar.png" alt="radar" />

                </div>


                <div class="project" id="university-presentation">

                    <h3> Interactive presentation of the University and its premises using 360 video and images </h3>

                    <p>

                        Use of 360 camera to create an interactive presentation of the University on a website (or mobile application).

                    </p>

                </div>


                <div class="project" id="service-robot">

                    <h3> Design and 3D printing parts of a service robot </h3>

                    <p>

                        Design and print the body of a service robot (with the possibility of autonomous movement, communication with users),
                        which will combine existing hardware implementations in the CONSENT laboratory.

                    </p>

                </div>


                <div class="project" id="website">

                    <h3> Student Branch website creation </h3>

                    <p>

                        Ongoing work on the current website for the ieee Studen Branch of UniWA.

                    </p>

                </div>

            </div>
        </div>
    )
}