const ValidInput = ({ props }) => {
  const { label, register, errors } = props;

  const validationRules = {
    Name: {
      validate: (value) => {
        if (!value) {
          return "Name required";
        }
        return;
      },
    },
    "Email Address": {
      pattern: {
        value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
        message: "enter a valid email",
      },
      validate: (value) => {
        if (!value) {
          return "Email is required";
        }
        return;
      },
    },
    "Phone Number": {
      pattern: {
        value: /^[6-9]\d{9}$/,
        message: "Please enter a valid phone number",
      },
      validate: (value) => {
        if (!value) {
          return "phone number is required";
        }
        return;
      },
    },
  };

  return (
    <div className="relative flex flex-col gap-1">
      <label htmlFor="">{label}</label>
      <input
        type="text"
        className={`border px-4 rounded-md py-2  border-gray-500 ${
          errors[label] && "border-red-600"
        }`}
        {...register(label, validationRules[label])}
      />
      <p className="absolute top-1 right-2 text-xs text-red-600 font-semibold">
        {errors && errors[label]?.message}
      </p>
    </div>
  );
};

export { ValidInput };
