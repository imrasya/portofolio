import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
    const containerRef = useRef(null);

    // The numbers to display in the stack
    const numbers = [99, 75, 56, 33, 0]; // Reversed for column-reverse map or standard map? 
    // We want 0 at bottom, 33 above it.
    // So if we use flex-col-reverse, visual order is Bottom->Top.
    // So DOM order [0, 33, 56...] with flex-col-reverse puts 0 at bottom.
    // Let's use flex-col-reverse and array [0, 33, 56, 75, 99].

    useEffect(() => {
        let ctx = gsap.context(() => {


            // Animate the numbers revealing one by one from bottom up
            // 0 Bawah -> 33 -> 56 -> 75 -> 99
            // Logic: Show new number, Hide previous number (optional) or Keep stacked?
            // Request: "0 dibawah 0 hilang jadi 33..." -> Sounds like "0 disappears, becomes 33". 
            // BUT "Stacking" context was "0 Bawah 33 Agak atas".
            // "0 di bawah, 0 hilang, jadi 33" could mean:
            // 1. 0 appears at bottom.
            // 2. 0 disappears? Or stays?
            // 3. 33 appears ABOVE 0 position.
            // "5 elemen tersebut bagi rata dengan 1 HV" -> Divide 100vh by 5 elements. Even spacing.

            const tl = gsap.timeline({
                onComplete: () => {
                    if (onComplete) onComplete();
                },
            });

            // 1. Reveal All Sequence
            // We want to simulate a loader going UP the screen.
            // 0% at bottom (first).
            // Then 33% above it.
            // Sequence:
            // - 0 Visible. Active.
            // - Then 0 Dim/Hide? 33 Visible.
            // Let's interpret "0 hilang jadi 33" as: The previous number fades out as the new one fades in ABOVE it.

            // Let's use staggering to Fade In NEW and Fade Out OLD.
            const items = gsap.utils.toArray('.counter-item'); // [0, 33, 56, 75, 99] (DOM order bottom to top?)
            // DOM Order in map is [0, 33, 56, 75, 99].
            // flex-col-reverse puts 0 at BOTTOM. Correct.
            // So items[0] is "0", visual bottom.

            items.forEach((item, index) => {
                // Entrance
                tl.to(item, {
                    opacity: 1,
                    y: 0,
                    duration: 0.05, // Snap in or quick fade
                    ease: "power2.out"
                }, index * 0.3); // Stagger start time

                // Exit previous number (if requested "0 hilang")
                // If we want stack to build, we keep them.
                // If "0 hilang jadi 33", maybe we fade out the previous one?
                // Let's try: Fade out previous one slightly later.
                if (index > 0) {
                    tl.to(items[index - 1], {
                        opacity: 0.2, // Dim it, don't fully hide so user sees the path? Or fully hide?
                        // Request says "0 hilang", implying gone.
                        // Let's try fully hiding (opacity 0) for strict "replaced" feel but varying position.
                        opacity: 0,
                        duration: 0.2
                    }, index * 0.3); // Start fading out as next one enters
                }
            });

            // Ensure last one (99) stays for a bit
            tl.to({}, { duration: 0.5 });

            // Then Layers Exit
            tl.to('.preloader-layer', {
                scaleY: 0,
                ease: 'power4.inOut',
                duration: 1.0, // Slow smooth peel
                delay: 0.2, // Wait a bit after 99 appears
                stagger: {
                    amount: 0.6,
                    from: "end"
                }
            });

            // Extra delay to keep isLoading=true (blocking scroll) until Hero animation finishes
            // Hero animation waits roughly 3.8s to start, then runs 1s.
            // This timeline ends at ~3.5s without this delay.
            // We add 1.5s buffer.
            tl.to({}, {
                duration: 1.5,
                onComplete: () => {
                    // This triggers the unmount and unlock
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <div ref={containerRef} className="fixed inset-0 z-[9999] pointer-events-none flex flex-col items-center justify-center">

            {/* Layer 4: Light */}
            <div className="preloader-layer fixed inset-0 bg-[#F3E8FF] z-[9995]" style={{ transformOrigin: 'top' }} />
            {/* Layer 3: Primary */}
            <div className="preloader-layer fixed inset-0 bg-primary z-[9996]" style={{ transformOrigin: 'top' }} />
            {/* Layer 2: Secondary */}
            <div className="preloader-layer fixed inset-0 bg-[#2d1b4e] z-[9997]" style={{ transformOrigin: 'top' }} />

            {/* Layer 1: Main Background */}
            <div className="preloader-layer fixed inset-0 bg-background z-[9999]" style={{ transformOrigin: 'top' }}>

                {/* Stack of numbers positioned BOTTOM LEFT */}
                {/* flex-col-reverse means first DOM element is at BOTTOM */}
                <div className="absolute bottom-10 left-10 z-10 flex flex-col-reverse gap-0">
                    {[0, 33, 56, 75, 99].map((num) => (
                        <span key={num} className="counter-item text-6xl md:text-8xl font-bold font-mono text-white tracking-tighter leading-[0.8] opacity-0 block">
                            {num}%
                        </span>
                    ))}
                </div>

                {/* Scanlines */}
                <div className="absolute inset-0 bg-scanlines opacity-5 pointer-events-none" />
            </div>

        </div>
    );
};

export default Preloader;
