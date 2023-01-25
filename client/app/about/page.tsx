export default function About() {
  return (
    <section className="text-gray-400 body-font pt-10">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="/teamsvg.svg"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300">
            About RustFlix
          </h1>
          <p className="mb-8 leading-relaxed">
            Meet RustFlix, the newest player in the streaming world. We're a
            movie startup that aims to bring the best of Hollywood straight to
            your screens. From blockbuster hits to indie gems, we've got
            something for everyone. Our platform is user-friendly and easy to
            navigate, making it simple for you to find your next favorite film.
            With a growing library of titles and new releases added every week,
            you'll never run out of options. Our goal is to provide a seamless
            streaming experience, with high-quality video and audio and no
            buffering. So why not give us a try and see what we have to offer?
            Sign up today and start your movie marathon!
          </p>
          <div className="flex justify-center">
            <button className="btn btn-primary mx-2">Contact</button>
            <button className="btn btn-outline mx-2">Home</button>
          </div>
        </div>
      </div>
    </section>
  );
}
