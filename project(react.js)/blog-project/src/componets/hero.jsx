import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-blue-600 to-purple-700 pt-28 pb-16 px-4 md:pt-40 md:pb-28">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="mb-6 text-4xl font-black tracking-tight leading-tight text-white md:text-6xl lg:text-7xl">
          Welcome to your{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
            BlogHub
          </span>
        </h1>

        <p className="mb-10 text-lg font-normal text-blue-100 max-w-3xl mx-auto md:text-xl leading-relaxed">
          Discover the latest articles, tutorials, and insights about web
          development, React, and technology. Stay updated and keep learning
          with our community.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            to="/blog"
            className="w-full sm:w-auto inline-flex justify-center items-center py-3.5 px-8 text-base font-semibold text-center text-blue-600 rounded-xl bg-white shadow-lg hover:shadow-white/20 hover:-translate-y-0.5 transition duration-200 ease-in-out"
          >
            Read Latest Posts
            <span className="ml-2">→</span>
          </Link>

          <Link
            to="/addblog"
            className="w-full sm:w-auto inline-flex justify-center items-center py-3.5 px-8 text-base font-semibold text-center text-white border border-white/30 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white hover:text-blue-600 hover:-translate-y-0.5 transition duration-200 ease-in-out"
          >
            Create a Blog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
