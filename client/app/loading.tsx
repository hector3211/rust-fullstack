export default function Loading() {
  return (
    <div className="animate-pulse min-h-screen max-w-full">
      <div className="h-screen w-full flex justify-center items-center mx-5 rounded-md">
        <div className="flex flex-col justify-center items-center">
          <div
            className="radial-progress animate-spin"
            // @ts-ignore
            style={{ "--value": 25 }}
          ></div>
          <p>Refresh a couple times!</p>
        </div>
      </div>
    </div>
  );
}
