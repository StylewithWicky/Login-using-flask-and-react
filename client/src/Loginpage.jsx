
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function Loginpage() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required")
      })}
      onSubmit={(values, { setSubmitting, setStatus }) => {
        fetch("http://localhost:5000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        })
          .then((res) =>
            res.json().then((data) => ({ ok: res.ok, data }))
          )
          .then(({ ok, data }) => {
            if (ok) {
              setStatus({ success: data.message });
              // Optional: store token or redirect
            } else {
              setStatus({ error: data.message });
            }
            setSubmitting(false);
          })
          .catch(() => {
            setStatus({ error: "Server error. Please try again." });
            setSubmitting(false);
          });
      }}
    >
      {({ isSubmitting, status }) => (
        <Form className="login-form">
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" className="error" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" className="error" />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </button>

          {status?.success && <div className="success">{status.success}</div>}
          {status?.error && <div className="error">{status.error}</div>}
        </Form>
      )}
    </Formik>
  );
}

export default Loginpage;
