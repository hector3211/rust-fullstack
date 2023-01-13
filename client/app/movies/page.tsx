import AllMoives from "./MoivesList";
export default function Moives() {
  return (
    <div>
      {/* @ts-expect-error Server Component */}
      <AllMoives />
    </div>
  );
}
