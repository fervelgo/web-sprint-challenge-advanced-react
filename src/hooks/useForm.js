// write your custom hook here to control your checkout form

import { useState, useEffect } from "react";

const useForm = () => {
    
    const initialValue = {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
      };

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(initialValue);

    const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

    return[handleSubmit, handleChanges, values, setValues,showSuccessMessage, setShowSuccessMessage];
};

export default useForm;