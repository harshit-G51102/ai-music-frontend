const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
    const animationDuration = `${speed}s`;
   
    return (
      <div
        className={`text-[#b5b5b5a4] bg-clip-text inline-block ${disabled ? '' : 'animate-[shine_5s_linear_infinite]'} ${className}`}
        style={{
          backgroundImage: 'linear-gradient(120deg,#86858600 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          animationDuration: animationDuration,
          animationName: disabled ? 'none' : 'shine',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite'
        }}
      >
        {text}
      </div>
    );
  };
  
  export default ShinyText;
