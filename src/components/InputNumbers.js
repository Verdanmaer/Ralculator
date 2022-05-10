const InputNumbers = ({ setValue }) => {
  const valueHandler = (e) => {
    setValue((number) => {
      return (number += e.target.value);
    });
  };
  return (
    <div>
      <button onClick={valueHandler} value=".">
        .
      </button>
      <button onClick={valueHandler} value="1">
        1
      </button>
      <button onClick={valueHandler} value="2">
        2
      </button>
      <button onClick={valueHandler} value="3">
        3
      </button>
      <button onClick={valueHandler} value="4">
        4
      </button>
      <button onClick={valueHandler} value="5">
        5
      </button>
      <button onClick={valueHandler} value="6">
        6
      </button>
      <button onClick={valueHandler} value="7">
        7
      </button>
      <button onClick={valueHandler} value="8">
        8
      </button>
      <button onClick={valueHandler} value="9">
        9
      </button>
    </div>
  );
};

export default InputNumbers;
