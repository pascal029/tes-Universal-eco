import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Formik, Field, Form } from "formik";

export default function Edit() {
  const { id } = useParams();
  const { users } = useSelector((state) => state);
  const [user, setUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    address: [],
  });

  useEffect(() => {
    const data = users.filter((user) => user._id == id);
    setUser({
      id: data[0]._id,
      firstName: data[0].firstName,
      lastName: data[0].lastName,
      email: data[0].email,
      gender: data[0].gender,
      address: data[0].addr,
    });
  }, []);
  console.log(user);
  return (
    <>
      <h1>Edit Detail Customer</h1>
      <Formik
        initialValues={user}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="Jane" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}
