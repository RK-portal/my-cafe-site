const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-wider">
          古都茶房
        </h2>
        <p className="text-xl md:text-2xl font-serif mb-12 tracking-wide">
          古都の静寂に、一杯の安らぎを。
        </p>
        
        <div className="animate-bounce mt-20">
          <svg 
            className="w-6 h-6 mx-auto text-white"
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;