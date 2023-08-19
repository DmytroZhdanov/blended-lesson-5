import React from 'react';

const FormConverter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { currency } = e.currentTarget.elements;
    const [ammount, from, to] = currency.value.split(' ');
    console.log(ammount, from, to);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Convert
        <input
          type="text"
          placeholder="15 USD in UAH"
          name="currency"
          required
        />
      </label>
      <button type="submit">Convert</button>
    </form>
  );
};

export default FormConverter;
