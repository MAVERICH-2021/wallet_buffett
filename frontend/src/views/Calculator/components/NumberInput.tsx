interface NumberInputProps {
  label: string;
  id: string;
  data: any;
  dataAttribute: string;
  setData: any;
}
const NumberInput = ({
  label,
  id,
  data,
  dataAttribute,
  setData,
}: NumberInputProps) => {
  return (
    <div className=" inline-block">
      <label htmlFor={id} className=" label">
        <p>{label}</p>
      </label>
      <input
        id={id}
        type="number"
        className=" input input-secondary input-sm"
        value={data[dataAttribute]}
        onChange={(e) => {
          setData((draft: any) => {
            draft[dataAttribute] = parseFloat(e.target.value);
          });
        }}
        placeholder="单位%"
      />
    </div>
  );
};

export default NumberInput;
