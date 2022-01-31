import React from "react";
import Button from '@mui/material/Button';
import UseStore from "../../store/Home";

const index = () => {
  const increaseBear = UseStore((state) => state.increasePopulation);
  const resetBears = UseStore((state) => state.removeAllBears);
  const bears = UseStore((state) => state.bears);
  return (
    <div>
      <p>Ini Home Index</p>
      <p>Bears: {bears}</p>
      <Button onClick={increaseBear} variant="contained">Tambah Bears</Button>
      <Button onClick={resetBears} variant="contained">Reset Bears</Button>
    </div>
  );
};

export default index;
