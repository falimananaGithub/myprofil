import React, { useEffect, useRef, useState, useMemo } from "react";
import './HomeAnnimate.css'; // Assurez-vous de créer et d'importer ce fichier CSS

const HomeAnnimate = () => {
    const texts = useMemo(() => [
        "If",
        "You",
        "Like",
        "It",
        "Please",
        "Give",
        "a Love",
        ":)",
        "by @DotOnion"
    ], []);

    const morphTime = 1.5; // Temps de morphing
    const cooldownTime = 1; // Temps de cooldown

    const [textIndex, setTextIndex] = useState(texts.length - 1);

    const text1Ref = useRef(null);
    const text2Ref = useRef(null);
    const morphRef = useRef(0);
    const cooldownRef = useRef(cooldownTime);
    const requestRef = useRef(null);

    useEffect(() => {
        const elts = {
            text1: text1Ref.current,
            text2: text2Ref.current,
        };

        let time = new Date();

        const doMorph = () => {
            morphRef.current -= cooldownRef.current;
            cooldownRef.current = 0;

            let fraction = morphRef.current / morphTime;

            if (fraction > 1) {
                cooldownRef.current = cooldownTime;
                fraction = 1;
            }

            setMorphStyle(fraction);
        };

        const setMorphStyle = (fraction) => {
            if (elts.text2) {
                elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
                elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
                elts.text2.style.transition = `filter ${cooldownRef.current}s, opacity ${cooldownRef.current}s`;
            }

            fraction = 1 - fraction;

            if (elts.text1) {
                elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
                elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
                elts.text1.style.transition = `filter ${cooldownRef.current}s, opacity ${cooldownRef.current}s`;
            }

            if (elts.text1) {
                elts.text1.textContent = texts[textIndex % texts.length];
            }
            if (elts.text2) {
                elts.text2.textContent = texts[(textIndex + 1) % texts.length];
            }
        };

        const doCooldown = () => {
            morphRef.current = 0;

            if (elts.text2) {
                elts.text2.style.filter = "";
                elts.text2.style.opacity = "100%";
            }

            if (elts.text1) {
                elts.text1.style.filter = "";
                elts.text1.style.opacity = "0%";
            }
        };

        const animate = () => {
            requestRef.current = requestAnimationFrame(animate);

            let newTime = new Date();
            let shouldIncrementIndex = cooldownRef.current > 0;
            let dt = (newTime - time) / 1000;
            time = newTime;

            cooldownRef.current -= dt;

            if (cooldownRef.current <= 0) {
                if (shouldIncrementIndex) {
                    setTextIndex((prevIndex) => prevIndex + 1);
                }

                doMorph();
            } else {
                doCooldown();
            }
        };

        animate();
        return () => {
            cancelAnimationFrame(requestRef.current);
        };
    }, [morphTime, cooldownTime, texts, textIndex]);

    return (
        <div className="container">
            <span id="text1" ref={text1Ref} className="text text-primary"></span>
            <span id="text2" ref={text2Ref} className="text d-none"></span>

            <svg id="filters">
                <defs>
                    <filter id="threshold">
                        <feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
};

export default HomeAnnimate;
