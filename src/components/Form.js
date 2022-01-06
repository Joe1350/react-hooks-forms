import React, { useState } from "react";

function Form(props) {
  const [newsletter, setNewsletter] = useState(false);

  function handleNewsletterChange(event) {
    setNewsletter(event.target.checked);
  }

  return (
    <form>
      <input type="text" onChange={props.handleFirstNameChange} value={props.firstName} />
      <input type="text" onChange={props.handleLastNameChange} value={props.lastName} />
      <br></br>
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={handleNewsletterChange}
        checked={newsletter}
      />
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
