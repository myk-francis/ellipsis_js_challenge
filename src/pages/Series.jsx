import React, { useState, useEffect } from "react";
import { Footer, ListItem, Header } from "../components";

const Series = () => {
  const [loading, setLoading] = useState(false);
  const [entries, setEntries] = useState(null);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/entries?programType=series&_start=0&_end=21")
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

export default Series;
