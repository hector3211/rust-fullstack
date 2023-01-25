export default function Team() {
  return (
    <section className="text-gray-400 body-font pt-10">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src="/teamtwosvg.svg"
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300">
            The RustFlix team
          </h1>
          <p className="mb-8 leading-relaxed">
            Our team is made up of highly dedicated and passionate individuals
            who are committed to bringing the best streaming experience to our
            customers. From our customer service representatives to our
            developers, each member of our team plays a vital role in making
            RustFlix a success. Our customer service team is dedicated to
            ensuring that every customer has a positive experience with us. They
            are available 24/7 to answer any questions and resolve any issues
            that may arise. They are passionate about helping our customers and
            are always willing to go the extra mile to make sure that everyone
            is happy. Our developers are some of the most highly skilled and
            experienced in the industry. They work tirelessly to ensure that our
            platform is reliable, user-friendly, and always up-to-date. They are
            constantly looking for ways to improve our service and make it even
            better for our customers. In short, our team is composed of highly
            motivated and skilled individuals who are dedicated to delivering
            the best streaming experience possible. We are always working to
            improve and innovate, and we are committed to providing our
            customers with the best service possible.
          </p>
          <div className="flex justify-center">
            <button className="btn btn-primary mx-2">Contact</button>
            <button className="btn bg-orange-500 mx-2">Home</button>
          </div>
        </div>
      </div>
    </section>
  );
}
