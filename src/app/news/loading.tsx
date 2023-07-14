const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-gray-400 h-12 w-12"></div>
        <div className="rounded-full bg-gray-400 h-12 w-12"></div>
        <div className="rounded-full bg-gray-400 h-12 w-12"></div>
      </div>
    </div>
  );
};

export default Loading;
