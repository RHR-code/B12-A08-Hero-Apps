import React, { useEffect, useState } from "react";

const useAppData = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [apps, setApps] = useState([]);
  useEffect(() => {
    fetch("/app.json")
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch((err) => setError(err))
      .finally((load) => setLoading(load));
  }, []);
  return { loading, error, apps };
};

export default useAppData;
