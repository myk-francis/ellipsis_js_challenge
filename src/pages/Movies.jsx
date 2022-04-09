import React, { useState, useEffect } from "react";
import { Footer, ListItem, Header } from "../components";

const Movies = () => {
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState(null);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/entries?programType=movie&_start=0&_end=21")
      .then((response) => response.json())
      .then((data) => setEntries(data))
      .catch((error) => {
        setErrors(true);
      });
    setLoading(false);
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <ListItem errors={errors} loading={loading} entries={entries} />
      <Footer />
    </>
  );
};

export default Movies;
