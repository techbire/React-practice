import React, { useState } from "react";

export default function Form() {
  const [f, sF] = useState({
    fname: "", lname: "", email: "", contact: "", gender: "",
    subject: [], resume: null, url: "", choice: "", about: ""
  });

  const ch = e => {
    const { name, value, type, files, checked } = e.target;
    if (type === "checkbox")
      sF({ ...f, subject: checked ? [...f.subject, value] : f.subject.filter(v => v !== value) });
    else sF({ ...f, [name]: type === "file" ? files[0] : value });
  };

  const sub = e => { e.preventDefault(); alert("Form Submitted!"); console.log(f); };
  const reset = () => sF({
    fname: "", lname: "", email: "", contact: "", gender: "",
    subject: [], resume: null, url: "", choice: "", about: ""
  });

  const box = {
    width: "320px",
    margin: "30px auto",
    padding: "20px",
    borderRadius: "10px",
    background: "#f8f0f0",
    boxShadow: "0 0 10px #653434",
    fontFamily: "Arial, sans-serif"
  };
  const text = {
    textAlign: "center",
    color: "#1f9d55",
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "10px"
  };
  const input = {
    width: "90%",
    padding: "8px",
    margin: "8px 0",
    border: "1px solid #333",
    borderRadius: "6px",
    outline: "none"
  };
  const btns = {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "15px"
  };
  const btn = {
    padding: "8px 20px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"
  };

  return (
    <div style={box}>
      <div style={text}>React Form</div>
      <form onSubmit={sub}>
        <input style={input} name="fname" placeholder="First Name" value={f.fname} onChange={ch} required />
        <input style={input} name="lname" placeholder="Last Name" value={f.lname} onChange={ch} required />
        <input style={input} name="email" type="email" placeholder="Email" value={f.email} onChange={ch} required />
        <input style={input} name="contact" type="tel" placeholder="Contact" value={f.contact} onChange={ch} />

        <div>
          <label style={{ fontWeight: "bold" }}>Gender: </label>
          <input type="radio" name="gender" value="Male" onChange={ch} /> Male
          <input type="radio" name="gender" value="Female" onChange={ch} /> Female
          <input type="radio" name="gender" value="Female" onChange={ch} /> LGTV+
        </div>

        <div>
          <label style={{ fontWeight: "bold" }}>Subjects: </label>
          <input type="checkbox" name="subject" value="English" onChange={ch} /> English
          <input type="checkbox" name="subject" value="Maths" onChange={ch} /> Maths
          <input type="checkbox" name="subject" value="Physics" onChange={ch} /> Physics
        </div>

        <input style={input} type="file" name="resume" onChange={ch} />
        <input style={input} type="url" name="url" placeholder="Portfolio URL" value={f.url} onChange={ch} />
        <select style={input} name="choice" value={f.choice} onChange={ch}>
          <option value="">Select Option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
        <textarea style={input} name="about" placeholder="About Yourself" value={f.about} onChange={ch}></textarea>

        <div style={btns}>
          <button
            type="button"
            onClick={reset}
            style={{ ...btn, backgroundColor: "#6bbf59", color: "white" }}
          >
            Reset
          </button>
          <button
            type="submit"
            style={{ ...btn, backgroundColor: "#1f9d55", color: "white" }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
