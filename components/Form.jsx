import Link from "next/link";

const Form = ({ type, post, setPost, submiting, handleSubmit }) => {
  return (
    <section className=" w-full max-w-full flex-start flex-col">
      <h1 className=" head_text test-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className=" desc text-left max-w-md">
        {type} and Share amazing prompts with the orld, and let your imagination
        run wild with any AI-powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className=" mt-10 w-full max-w-2xl glassmorphism flex flex-col gap-7"
      >
        <label>
          <span className=" font-satoshi font-semibold text-gray-700 text-base">
            Your AI Prompt
          </span>
        </label>

        <textarea
          value={post.prompt}
          onChange={(e) => setPost({ ...post, prompt: e.target.value })}
          className="form_textarea"
        />
        <label>
          <span className=" font-satoshi font-semibold text-gray-700 text-base">
            Tag
            <span className=" font-normal">
              (#product,#webdeveloppement,#idea)
            </span>
          </span>
        </label>

        <input
          value={post.tag}
          placeholder="#tag"
          onChange={(e) => setPost({ ...post, tag: e.target.value })}
          className="form_input"
        />

        <div className="flex-end mx-3 mt-5 gap-4">
          <Link href={"/"} className=" text-gray-500 text-sm">
            Cancel
          </Link>

          <button type="submit" disabled={submiting}
          className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submiting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};
export default Form;
