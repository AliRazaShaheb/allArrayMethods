export const myarr=[
  {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "your full name...",
      errorMessage:
          "Name should be 3-16 characters and shouldn't include any special character!",
      label: "Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
  },
  {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Please enter valid email address!",
      label: "E-mail",
      required: true,
  },
  {
      id: 3,
      name: "mobile",
      type: "number",
      placeholder: "your contact number...i.e.+91000000000",
      errorMessage:
          "Please enter valid Mobile Number address!",
      label: "Mobile",
      pattern: "^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$",
      required: true,
  }]