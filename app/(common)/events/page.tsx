import EventCard from "./components/EventCard";

export default async function Page() {
  return (
    <div className="pt-24 text-center">
      <h1 className="text-7xl font-bold">EVENTS</h1>
      <div className="container mx-auto grid grid-cols-1 gap-4 py-4">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}
