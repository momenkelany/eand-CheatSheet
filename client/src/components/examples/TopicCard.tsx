import DeviceCareCard from "../DeviceCareCard";

export default function TopicCardExample() {
  return (
    <div className="p-8 max-w-2xl">
      <DeviceCareCard
        title="NBA Pitching"
        content={[
          "1- Pich/ Open: -",
          "- TS/ problem solved",
          "- Any scenario that doesn't include an issue",
          "2- Open/ Don't pich: -",
          "- Angry CST",
          "- Open or long-opened complaints"
        ]}
      />
    </div>
  );
}
