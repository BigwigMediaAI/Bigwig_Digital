import { useEffect, useRef, useState, createRef } from "react";
import gsap from "gsap";
import "../pages/CursorTrail.css";

const TRAIL_LENGTH = 10;

const CustomCursor = () => {
  const [isMoving, setIsMoving] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([]);
  const mousePosition = useRef({ x: -100, y: -100 });
  const movementTimeout = useRef<NodeJS.Timeout | null>(null);
  const animationFrameId = useRef<number | null>(null);

  const vibgyorColors = [
    "rgba(148, 0, 211, 0.6)", // Violet
    "rgba(75, 0, 130, 0.6)", // Indigo
    "rgba(0, 0, 255, 0.6)", // Blue
    "rgba(0, 255, 0, 0.6)", // Green
    "rgba(255, 255, 0, 0.6)", // Yellow
    "rgba(255, 127, 0, 0.6)", // Orange
    "rgba(255, 0, 0, 0.6)", // Red
  ];

  useEffect(() => {
    // Initialize trail segments
    trailRefs.current = Array.from({ length: TRAIL_LENGTH }, () =>
      createRef<HTMLDivElement>()
    );
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      mousePosition.current = { x, y };

      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x,
          y,
          duration: 0.8,
          ease: "power2.out",
        });
      }

      setIsMoving(true);
      if (movementTimeout.current) {
        clearTimeout(movementTimeout.current);
      }

      movementTimeout.current = setTimeout(() => {
        setIsMoving(false);
      }, 500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleMouseDown = () => {
    setIsMouseDown(true);
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        width: 50,
        height: 50,
        borderColor: "var(--green)",
        boxShadow: "0 0 25px rgba(255, 255, 255, 0.5)",
        duration: 0.2,
        ease: "power2.out",
      });
    }
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        width: 25,
        height: 25,
        borderColor: "var(--white)",
        boxShadow: "none",
        duration: 0.2,
        ease: "power2.out",
      });
    }
  };

  useEffect(() => {
    const updateTrail = () => {
      trailRefs.current.forEach((ref, index) => {
        const segment = ref.current;
        const delay = (index + 1) * 0.05;

        if (segment) {
          gsap.to(segment, {
            x: mousePosition.current.x,
            y: mousePosition.current.y,
            duration: 0.3,
            delay,
            opacity: isMoving || isMouseDown ? 1 - index / TRAIL_LENGTH : 0,
            ease: "power2.out",
            scale: 1 + index / TRAIL_LENGTH,
            boxShadow:
              isMoving || isMouseDown
                ? `0 0 10px rgba(255, 255, 255, ${0.2 + index / TRAIL_LENGTH})`
                : "none",
          });
        }
      });
    };

    const animateTrail = () => {
      updateTrail();
      animationFrameId.current = requestAnimationFrame(animateTrail);
    };

    animateTrail();
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isMoving, isMouseDown]);

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {trailRefs.current.map((ref, index) => (
        <div
          key={index}
          className="trail-segment"
          ref={ref}
          style={{
            background: `radial-gradient(circle, ${
              vibgyorColors[index % vibgyorColors.length]
            } 0%, rgba(255,255,255,0) 80%)`,
          }}
        ></div>
      ))}
      <div className="custom-cursor" ref={cursorRef}>
        <div className="cursor-dot" />
      </div>
    </>
  );
};

export default CustomCursor;
