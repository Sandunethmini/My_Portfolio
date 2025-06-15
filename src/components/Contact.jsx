import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data); // Replace with actual submission logic (e.g., API call)
    alert('Message sent! (Check console for form data)');
    reset();
  };

  return (
    <div
      id="contact" // Added id="contact" to the outer div
      className="min-h-screen flex items-center justify-center bg-[#96c6ea] relative overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 bg-indigo-400 rounded-full w-72 h-72 opacity-30 filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 bg-pink-300 rounded-full w-96 h-96 opacity-20 filter blur-3xl animate-pulse"></div>
      <section className="relative z-10 w-full max-w-lg p-10 mx-4 bg-white shadow-2xl bg-opacity-90 rounded-3xl backdrop-blur-md">
        <h2 className="mb-8 text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 drop-shadow-lg">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block mb-2 text-lg font-semibold text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-2 transition border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              type="text"
              id="name"
              placeholder="Your Name"
            />
            {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block mb-2 text-lg font-semibold text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address',
                },
              })}
              className="w-full px-4 py-2 transition border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              type="email"
              id="email"
              placeholder="you@example.com"
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block mb-2 text-lg font-semibold text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              className="w-full px-4 py-2 transition border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              id="message"
              rows="4"
              placeholder="Type your message here..."
            ></textarea>
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-3 text-lg font-bold text-white transition-all rounded-lg shadow-lg bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-indigo-600 hover:to-pink-600"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;