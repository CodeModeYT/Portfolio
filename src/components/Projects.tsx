import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView, useAnimation } from "framer-motion";

const Projects: React.FC = () => {
    // Translation & Animation
    const { t, i18n } = useTranslation("global");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView]);

    //Horizontal scroll with drag n drop:
    const scrollingWrapperRef = useRef<HTMLDivElement>(null);
  
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const handleMouseDown = (e: React.MouseEvent) => {
        isDown = true;
        if (scrollingWrapperRef.current) {
            scrollingWrapperRef.current.classList.add('active');
            startX = e.pageX - scrollingWrapperRef.current.offsetLeft;
            scrollLeft = scrollingWrapperRef.current.scrollLeft;
        }
    };

    const handleMouseLeaveOrUp = () => {
        isDown = false;
        if (scrollingWrapperRef.current) {
            scrollingWrapperRef.current.classList.remove('active');
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDown) return;
        e.preventDefault();
        if (scrollingWrapperRef.current) {
            const x = e.pageX - scrollingWrapperRef.current.offsetLeft;
            const walk = (x - startX) * 2; // Scroll-fast
            scrollingWrapperRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 0.25 }}
            className='projects'
        >            
            <h1>{t("projects.title")}</h1>
            <p>In my freetime, I love working on tech projects to improve my skills and ideally create a positive impact. Here’s a small selection of them:</p>
            <div 
                className="scrolling-wrapper"
                ref={scrollingWrapperRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeaveOrUp}
                onMouseUp={handleMouseLeaveOrUp}
                onMouseMove={handleMouseMove}
            >
                <div className="card">
                    <div className="card-content">
                        <h2>Fanny-WP</h2>
                        <p>PHP | CSS | JS</p>
                        <p>The Wordpress theme for the official website of my school (created with two other fellow students)</p>
                        <div className="card-icons">
                            <a href="https://github.com/Mr-comand/fanny-wp" target="blank">
                                <img src="/gh_icon.png" alt="GitHub" height="40px" width="40px"/>
                            </a>
                            <a href="https://www.fanny-leicht.de" target="blank">
                                <img src="/web_icon.png" alt="Web" height="40px" width="40px"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2>Notion WebUntis</h2>
                        <p>Python</p>
                        <p>Easily synchronise your WebUntis timetable to Notion! Using the Notion- and the WebUntis API</p>
                        <div className="card-icons">
                            <a href="https://github.com/CodeModeYT/Notion-WebUntis" target="blank">
                                <img src="/gh_icon.png" alt="GitHub" height="40px" width="40px"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                    <h2>DLS Player Search</h2>
                        <p>HTML/CSS | JS</p>
                        <p>A website to search the unofficial database of the popular mobile game Dream League Soccer by FirstTouchGames</p>
                        <div className="card-icons">
                            <a href="https://github.com/CodeModeYT/DLS-Player-search" target="blank">
                                <img src="/gh_icon.png" alt="GitHub" height="40px" width="40px"/>
                            </a>
                            <a href="https://codemodeyt.github.io/DLS-Player-search/" target="blank">
                                <img src="/web_icon.png" alt="Web" height="40px" width="40px"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2>EURO24 - CGA</h2>
                        <p>HTML/CSS | JS | Python</p>
                        <p>A website to that played the song 'Major Tom' by Peter Schilling whenever Germany scored during the EUROs 2024</p>
                        <div className="card-icons">
                            <a href="https://github.com/CodeModeYT/DLS-Player-search" target="blank">
                                <img src="/gh_icon.png" alt="GitHub" height="40px" width="40px"/>
                            </a>
                            <a href="https://codemodeyt.github.io/DLS-Player-search/" target="blank">
                                <img src="/web_icon.png" alt="Web" height="40px" width="40px"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2>Personal Portfolio</h2>
                        <p>React | TS | HTML</p>
                        <p>The crazy website that you're currently visiting ;) Built and designed completely from scratch</p>
                        <div className="card-icons">
                            <a href="https://github.com/CodeModeYT/Portfolio" target="blank">
                                <img src="/gh_icon.png" alt="GitHub" height="40px" width="40px"/>
                            </a>
                            {/* Idea: add easter egg when user clicks on the web icon */}
                            <a href="." target="blank">
                                <img src="/web_icon.png" alt="Web" height="40px" width="40px"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2>ToDo</h2>
                        <p>Svelte | TS</p>
                        <p>A rather simple ToDo-App that I built during my internship at sprinteins (more info above)</p>
                        <div className="card-icons">
                            <a href="https://github.com/CodeModeYT/ToDo" target="blank">
                                <img src="/gh_icon.png" alt="GitHub" height="40px" width="40px"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2>Spotify2mp3</h2>
                        <p>Python</p>
                        <p>A set of Python scripts that automatically convert entire Spotify playlists into mp3 files at once</p>
                        <div className="card-icons">
                            <a href="https://github.com/CodeModeYT/spotify2mp3" target="blank">
                                <img src="/gh_icon.png" alt="GitHub" height="40px" width="40px"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Projects;
