interface resultItemProps {
  label: string;
  result: number;
}
const ResultItem = ({ label, result }: resultItemProps) => {
  return (
    <div className=" flex mt-2 items-center">
      <label htmlFor="result" className=" label">
        {label}
      </label>
      <p>
        <span className=" text-2xl ">{result.toFixed(8)}</span>
      </p>
    </div>
  );
};

export default ResultItem;
