"use client";

const EmailForm = () => {
  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      email: formData.get("email"),
    };

    const res = await fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseJson = await res.json();
    console.log(responseJson);
  };

  return (
    <form onSubmit={sendEmail}>
      <input
        placeholder="Email Address"
        className="input input-bordered w-full pr-16"
        name="email"
        type="text"
      />
      <button className="btn btn-accent absolute top-0 right-0 rounded-l-none">
        Submit
      </button>
    </form>
  );
};

export default EmailForm;
