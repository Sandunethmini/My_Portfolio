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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-700 relative overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-400 opacity-30 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-300 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
      <section className="relative w-full max-w-lg mx-4 bg-white bg-opacity-90 rounded-3xl shadow-2xl p-10 backdrop-blur-md z-10">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700 mb-8 drop-shadow-lg">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-2 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              type="text"
              id="name"
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="email">
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
              className="w-full px-4 py-2 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              type="email"
              id="email"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              className="w-full px-4 py-2 rounded-lg border border-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              id="message"
              rows="4"
              placeholder="Type your message here..."
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-600 to-indigo-600 text-white font-bold text-lg shadow-lg hover:from-indigo-600 hover:to-pink-600 transition-all"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;