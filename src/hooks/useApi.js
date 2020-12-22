import React, { useState } from "react";

const useApi = apiFunc => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const request = async (...args) => {
    setIsLoading(true);
    setError(false);
    setSuccess(false);
    const response = await apiFunc(...args);
    setIsLoading(false);

    if (!response.ok) {
      setError(true);
    } else {
      setData(response.data);
      setSuccess(true);
    }

    return response;
  };

  return { data, error, isLoading, request, success };
};

export default useApi;
