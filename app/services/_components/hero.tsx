export const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-white relative overflow-hidden">
      <div className="absolute top-10 right-10 w-32 h-32 bg-orange-200/30 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-orange-300/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium animate-bounce-subtle">
            ✨ Professional Services
          </div>
          <h1 className="text-5xl font-bold text-gray-900 animate-fade-in-up">
            Our Core Services
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed animate-fade-in-up">
            We offer a wide range of professional property and facility
            management services designed to keep your buildings functional,
            secure, and efficient.
          </p>
        </div>
      </div>
    </section>
  );
};
