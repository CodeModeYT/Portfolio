import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView, useAnimation } from 'framer-motion';

const Projects: React.FC = () => {
    // Translation & Animation
    const { t } = useTranslation('global');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
            slideControls.start('visible');
        }
    }, [isInView]);

    // Horizontal scroll with drag n drop:
    const scrollingWrapperRef = useRef<HTMLDivElement>(null);
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDown(true);
        if (scrollingWrapperRef.current) {
            scrollingWrapperRef.current.classList.add('active');
            setStartX(e.pageX - scrollingWrapperRef.current.offsetLeft);
            setScrollLeft(scrollingWrapperRef.current.scrollLeft);
        }
    };

    const handleMouseLeaveOrUp = () => {
        setIsDown(false);
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
            className="projects"
        >
            <h1>{t('projects.title')}</h1>
            <p>{t('projects.description')}</p>
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
                        <h2>{t('projects.fanny-wp.title')}</h2>
                        <p>{t('projects.fanny-wp.lang')}</p>
                        <p>{t('projects.fanny-wp.desc')}</p>
                        <div className="card-icons">
                            <a href="https://github.com/Mr-comand/fanny-wp" target="blank">
                                <img src="/gh_icon.png" alt="GitHub" height="40px" width="40px" />
                            </a>
                            <a href="https://www.fanny-leicht.de" target="blank">
                                <img src="/web_icon.png" alt="Web" height="40px" width="40px" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2>{t('projects.notion-webuntis.title')}</h2>
                        <p>{t('projects.notion-webuntis.lang')}</p>
                        <p>{t('projects.notion-webuntis.desc')}</p>
                        <div className="card-icons">
                            <a href="https://github.com/CodeModeYT/Notion-WebUntis" target="blank">
                                <img src="/gh_icon.png" alt="GitHub" height="40px" width="40px" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2>{t('projects.dls-playersearch.title')}</h2>
                        <p>{t('projects.dls-playersearch.lang')}</p>
                        <p>{t('projects.dls-playersearch.desc')}</p>
                        <div className="card-icons">
                            <a href="https://github.com/CodeModeYT/DLS-Player-search" target="blank">
                                <img src="/gh_icon.png" alt="GitHub" height="40px" width="40px" />
                            </a>
                            <a href="https://codemodeyt.github.io/DLS-Player-search/" target="blank">
                                <img src="/web_icon.png" alt="Web" height="40px" width="40px" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2>{t('projects.euro-cga.title')}</h2>
                        <p>{t('projects.euro-cga.lang')}</p>
                        <p>{t('projects.euro-cga.desc')}</p>
                        <div className="card-icons">
                            <a href="https://github.com/CodeModeYT/DLS-Player-search" target="blank">
                                <img src="/gh_icon.png" alt="GitHub" height="40px" width="40px" />
                            </a>
                            <a href="https://codemodeyt.github.io/DLS-Player-search/" target="blank">
                                <img src="/web_icon.png" alt="Web" height="40px" width="40px" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2>{t('projects.portfolio.title')}</h2>
                        <p>{t('projects.portfolio.lang')}</p>
                        <p>{t('projects.portfolio.desc')}</p>
                        <div className="card-icons">
                            <a href="https://github.com/CodeModeYT/Portfolio" target="blank">
                                <img src="/gh_icon.png" alt="GitHub" height="40px" width="40px" />
                            </a>
                            {/* Idea: add easter egg when user clicks on the web icon */}
                            <a href="." target="blank">
                                <img src="/web_icon.png" alt="Web" height="40px" width="40px" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2>{t('projects.todo.title')}</h2>
                        <p>{t('projects.todo.lang')}</p>
                        <p>{t('projects.todo.desc')}</p>
                        <div className="card-icons">
                            <a href="https://github.com/CodeModeYT/ToDo" target="blank">
                                <img src="/gh_icon.png" alt="GitHub" height="40px" width="40px" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <h2>{t('projects.spotify2mp3.title')}</h2>
                        <p>{t('projects.spotify2mp3.lang')}</p>
                        <p>{t('projects.spotify2mp3.desc')}</p>
                        <div className="card-icons">
                            <a href="https://github.com/CodeModeYT/spotify2mp3" target="blank">
                                <img src="/gh_icon.png" alt="GitHub" height="40px" width="40px" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content-last">
                        <h2>{t('projects.more.title')}</h2>
                        <div className="card-icons">
                            <a href="https://github.com/CodeModeYT/" target="blank">
                                <img src="/gh_icon.png" alt="GitHub" height="70px" width="70px" />
                                <h2>@CodeModeYT</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
