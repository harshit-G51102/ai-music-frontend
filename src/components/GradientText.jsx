export default function GradientText({
    children,
    className = "",
    colors = ["#ffff33", "#f1b433", "#d1f133"],
    animationSpeed = 8,
    showBorder = false,
  }) {
    const gradientStyle = {
      backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
      animationDuration: `${animationSpeed}s`,
      backgroundSize: "300% 100%",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      color: "transparent",
      animation: `gradient ${animationSpeed}s linear infinite`
    };
  
    const keyframes = `
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `;
  
    return (
      <>
        <style>{keyframes}</style>
        <div
          className={`relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${className}`}
        >
          {showBorder && (
            <div
              className="absolute inset-0 bg-cover z-0 pointer-events-none"
              style={gradientStyle}
            >
              <div
                className="absolute inset-0 bg-black rounded-[1.25rem] z-[-1]"
                style={{
                  width: "calc(100% - 2px)",
                  height: "calc(100% - 2px)",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
            </div>
          )}
          <div
            className="inline-block relative z-2"
            style={gradientStyle}
          >
            {children}
          </div>
        </div>
      </>
    );
  }
