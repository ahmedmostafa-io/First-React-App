import Star from "./../Star";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  return (
    <div className="container mx-auto">
      <div className="flex-col space-y-1.5 pt-28 flex lg:pt-14 items-center justify-center">
        <h2 className="text-3xl text-second lg:text-[40px] pt-20 uppercase font-bold">
          Contact Section
        </h2>

        <Star
          className="relative *:text-second 
            before:w-20 before:absolute before:-left-24 before:top-[50%] before:-translate-y-1/2 before:h-1 before:bg-second 
            after:w-20 after:absolute after:-right-24 after:top-[50%] after:-translate-y-1/2 after:h-1 after:bg-second"
        />

        <Form />
        <ToastContainer />
      </div>
    </div>
  );
}

function InputField({ label, name, type = "text", formik }) {
  const hasError = Boolean(formik.errors[name] && formik.values[name]);
  const isValid = Boolean(!formik.errors[name] && formik.values[name]);

  return (
    <div className="w-full mt-4">
      <div className="w-full relative h-10 overflow-hidden">
        <label
          htmlFor={name}
          className={`block absolute transition-all duration-500 text-cyan-500 ${
            formik.values[name] ? "bottom-1" : "-bottom-5"
          }`}
        >
          {label}
        </label>
      </div>

      <input
        id={name}
        name={name}
        type={type}
        value={formik.values[name]}
        placeholder={label}
        onChange={(e) =>
          formik.setFieldValue(
            name,
            type === "number" ? Number(e.target.value) : e.target.value
          )
        }
        className={`w-full focus:outline-0 placeholder:text-gray-600 border-b p-2 rounded transition duration-300 
          ${
            hasError
              ? "border-red-500"
              : isValid
              ? "border-green-500"
              : "border-gray-300"
          }`}
      />

      {hasError && (
        <div className="text-red-500 text-sm mt-1">{formik.errors[name]}</div>
      )}
    </div>
  );
}

function Form() {
  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .matches(
        /^[A-Z][a-zA-Z0-9_-]{2,14}$/,
        "Username must start with an uppercase letter and be 3–15 characters long"
      ),
    age: Yup.number()
      .typeError("Age must be a number")
      .integer("Age must be a whole number")
      .required("Age is required")
      .min(18, "Age must be at least 18")
      .max(100, "Age must be less than or equal to 100"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Must include at least one uppercase letter")
      .matches(/[0-9]/, "Must include at least one number")
      .matches(/[\W_]/, "Must include at least one special character"),
  });

  const initialData = {
    name: "",
    age: "",
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialData,
    validationSchema: formSchema,
    onSubmit: (values, actions) => {
      toast.success("Form submitted successfully!");
      actions.resetForm();
    },
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: false,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="mt-20 flex flex-col items-center w-full max-w-2xl mx-auto"
    >
      <InputField label="User Name" name="name" formik={formik} />
      <InputField label="User Age" name="age" type="number" formik={formik} />
      <InputField
        label="User Email"
        name="email"
        type="email"
        formik={formik}
      />
      <InputField
        label="User Password"
        name="password"
        type="password"
        formik={formik}
      />

      <div className="w-full mb-8">
        <button
          type="submit"
          className="mt-6 bg-main cursor-pointer text-white px-4 py-2 rounded hover:bg-opacity-90 transition duration-300"
          disabled={!formik.isValid}
        >
          Send Message <FontAwesomeIcon icon={faMessage} className="ml-2" />
        </button>
      </div>
    </form>
  );
}
