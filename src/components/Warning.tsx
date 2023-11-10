interface WarningProps {
  text: string;
}

const Warning = ({ text }: WarningProps) => {
  return (
    <div className="w-100 h-12 bg-yellow-200 rounded-md mb-5 flex justify-center items-center">
      <p className="text-yellow-800 font-bold text-sm">{text}</p>
      <span className="ml-1 text-md">⚠️</span>
    </div>
  );
};

export default Warning;
