import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useInView, useAnimation } from 'framer-motion';

    const Resume: React.FC = () => {
    const { t, i18n } = useTranslation("global");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();
    const timelineControls = useAnimation();

    useEffect(() => {
        if (isInView) {
        mainControls.start("visible");
        const timeoutId = setTimeout(() => {
            timelineControls.start((i: number) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.3 }
            }));
        }, 900); // delay before the points animate in
        // clean up timeout on component unmount
        return () => clearTimeout(timeoutId);
        }
    }, [isInView, mainControls, timelineControls]);

    const timelineVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 }
    };

    const timelineEvents = [
        {
        date: t("resume.pesta.date"), 
        content: (
            <>
            <p className='p_highlight'>{t("resume.pesta.title")}</p>
            <br/>
            <p>{t("resume.pesta.desc")}</p>
            </>
        ) 
        },
        {
        date: t("resume.fanny.date"),
        content: (
            <>
            <p className='p_highlight'>{t("resume.fanny.title")}</p>
            <ul>
                <br/>
                <li>{t("resume.fanny.desc")}</li>
                <i>
                    <li>{t("resume.fanny.subdesc.web")}</li>
                    <li>{t("resume.fanny.subdesc.rewr")}</li>
                    <li>{t("resume.fanny.subdesc.roborace23")}</li>
                    <li>{t("resume.fanny.subdesc.roborace24")}</li>
                </i>
            </ul>
            </>
        )
        },
        {
        date: t("resume.bogy.date"),
        content: (
            <>
            <p className='p_highlight'>{t("resume.bogy.title")}</p>
            <br/>
            <p>{t("resume.bogy.desc")}</p>
            </>
        )
        }
    ];

    return (
        <div className='resume'>
        <motion.h1
            ref={ref}
            initial="hidden"
            animate={mainControls}
            variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 1, delay: 0.25 }}
        >
            Resumé
        </motion.h1>
        <div className="timeline">
            {
            timelineEvents.map((event, i) => (
                <motion.div
                className="timeline-event"
                key={i}
                custom={i}
                initial="hidden"
                animate={timelineControls}
                variants={timelineVariants}
                transition={{ duration: 1, delay: 1 }}
                >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <h3>{event.date}</h3>
                    <div>{event.content}</div>
                </div>
                </motion.div>
            ))
            }
        </div>
        </div>
    );
}

export default Resume;
