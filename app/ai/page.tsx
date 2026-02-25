export default function AIPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">

      <h1 className="text-3xl font-semibold text-neutral-900 mb-6">
        AI Career Conversation
      </h1>

      <p className="text-neutral-600 mb-12 max-w-3xl">
        An interactive career chatbot tool built with Python and Gradio,
        deployed on Hugging Face Spaces.
      </p>
      <a
        href="https://driego-career-conversation.hf.space"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mb-8 px-5 py-2 bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-700 transition"
        >
        Open Full Screen
    </a>
      <div className="w-full h-[50vh] rounded-xl overflow-hidden border border-neutral-200">
        <iframe
          src="https://driego-career-conversation.hf.space"
          className="w-full h-full"
          title="Career Conversation AI"
          allow="clipboard-write; microphone;"
        />
      </div>


    </div>
  );
}