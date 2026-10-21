import { MapPin, Search } from "lucide-react";
import { useState } from "react";

function SearchSection() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    console.log("Search:", search);
    console.log("Location:", location);

    alert(
      `Searching for "${search}" in "${location || "all locations"}"`
    );
  };

  return (
    <section className="bg-white px-6 py-14">
      <div className="mx-auto max-w-6xl">

        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            Find a Hospital or Doctor
          </h2>

          <p className="mt-3 text-slate-500">
            Search hospitals, doctors, departments and locations.
          </p>
        </div>

        <form
          onSubmit={handleSearch}
          className="mx-auto mt-8 flex max-w-4xl flex-col gap-3 rounded-2xl border bg-white p-3 shadow-lg md:flex-row"
        >

          {/* Search Input */}
          <div className="flex flex-1 items-center gap-3 rounded-xl bg-slate-50 px-4">
            <Search
              size={20}
              className="text-slate-400"
            />

            <input
              type="text"
              placeholder="Hospital, doctor or department"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent py-3 outline-none"
            />
          </div>

          {/* Location */}
          <div className="flex flex-1 items-center gap-3 rounded-xl bg-slate-50 px-4">
            <MapPin
              size={20}
              className="text-slate-400"
            />

            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-transparent py-3 outline-none"
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Search
          </button>

        </form>

      </div>
    </section>
  );
}

export default SearchSection;