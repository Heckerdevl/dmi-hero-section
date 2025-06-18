import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 z-[-1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      >
        <div className="absolute w-[200%] h-[200%] bg-gradient-to-br from-pink-300 via-red-500 to-yellow-500 blur-3xl opacity-40 -z-10" />
      </motion.div>

      {/* Middle Content */}
      <div className="max-w-3xl text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-6"
        >
          <div className="text-white bg-red-600 font-bold px-4 py-2.5 rounded-md text-lg shadow-lg h-12 w-[4.5rem] flex items-center justify-center">
            DMI
          </div>
          <div className="flex gap-1 mt-2">
            {[1, 2, 3].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-red-500 rounded-full"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-gray-900"
        >
          Design Made <span className="text-red-600">Intelligent</span>
        </motion.h1>

        {/* Subheadings */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.25, delay: 0.4 }}
          className="mt-4 text-lg font-medium text-gray-700"
        >
          From brand kit to launch-ready content, websites & apps — powered by AI.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.25, delay: 0.6 }}
          className="mt-2 text-sm text-gray-500"
        >
          Join 500+ funded startups using DMI to create professional brand identities, social
          content, and app interfaces in minutes, not months.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="mt-6 flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="bg-white text-black px-6 py-3 rounded-md font-semibold shadow-lg hover:shadow-2xl hover:shadow-black hover:bg-red-700 hover:text-white hover:rounded-2xl transition-all duration-500"
            aria-label="Join Waitlist"
          >
            Join Waitlist
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="bg-white text-black px-6 py-3 rounded-md font-semibold shadow-lg hover:shadow-2xl hover:shadow-black hover:bg-red-700 hover:text-white hover:rounded-2xl transition-all duration-500"
            aria-label="Try the Demo"
          >
            Try the Demo →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
