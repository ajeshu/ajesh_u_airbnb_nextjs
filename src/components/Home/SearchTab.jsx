'use client';
import { Search } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const SearchTab = () => {
  const [activeTab, setActiveTab] = useState('stays');
  const [searchInput, setSearchInput] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const calendarRef = useRef(null);
const guestRef = useRef(null);


  const [showGuests, setShowGuests] = useState(false);
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target) &&
        showCalendar
      ) {
        setShowCalendar(false);
      }
  
      if (
        guestRef.current &&
        !guestRef.current.contains(event.target) &&
        showGuests
      ) {
        setShowGuests(false);
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showCalendar, showGuests]);
  

  return (
    <section className="relative bg-gradient-to-r from-rose-500 to-pink-600 text-white pt-10 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Find your next adventure</h1>
          <p className="text-xl">Discover unique places to stay and experiences around the world</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-t-xl max-w-4xl mx-auto">
          <div className="flex">
            {['stays', 'experiences', 'online experiences'].map((tab) => (
              <button
                key={tab}
                className={`flex-1 py-4 px-2 text-sm font-medium capitalize ${activeTab === tab ? 'text-rose-500 border-b-2 border-rose-500' : 'text-gray-500'
                  }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2 p-4 relative">
            <div className="relative rounded-lg border border-gray-300 p-3 hover:shadow-md">
              <label className="block text-xs font-bold text-gray-700">Where</label>
              <input
                type="text"
                placeholder="Search destinations"
                className="w-full outline-none text-gray-900"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>

            {/* Date Picker Toggle */}
            <div
              className="rounded-lg border border-gray-300 p-3 hover:shadow-md cursor-pointer"
              onClick={() => setShowCalendar(!showCalendar)}
            >
              <label className="block text-xs font-bold text-gray-700">Check in</label>
              <div className="text-gray-900">
                {format(dateRange[0].startDate, 'MMM d, yyyy')}
              </div>
            </div>

            <div
              className="rounded-lg border border-gray-300 p-3 hover:shadow-md cursor-pointer"
              onClick={() => setShowCalendar(!showCalendar)}
            >
              <label className="block text-xs font-bold text-gray-700">Check out</label>
              <div className="text-gray-900">
                {format(dateRange[0].endDate, 'MMM d, yyyy')}
              </div>
            </div>

            <div className="relative" ref={guestRef}>
              <div
                onClick={() => setShowGuests(!showGuests)}
                className="rounded-lg border border-gray-300 p-3 hover:shadow-md cursor-pointer"
              >
                <label className="block text-xs font-bold text-gray-700">Who</label>
                <div className="text-gray-900">
                  {guests.adults + guests.children > 0
                    ? `${guests.adults + guests.children} guest${guests.adults + guests.children > 1 ? 's' : ''}`
                    : 'Add guests'}
                  {guests.infants > 0 && ` · ${guests.infants} infant`}
                  {guests.pets > 0 && ` · ${guests.pets} pet`}
                </div>
              </div>

              {showGuests && (
                <div className="absolute z-50 bg-white shadow-xl rounded-xl p-4 mt-2 w-72 space-y-4">
                  {['adults', 'children', 'infants', 'pets'].map((type) => (
                    <div key={type} className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-semibold capitalize">{type}</p>
                        <p className="text-sm text-gray-500">
                          {type === 'adults' && 'Ages 13 or above'}
                          {type === 'children' && 'Ages 2–12'}
                          {type === 'infants' && 'Under 2'}
                          {type === 'pets' && (
                            <a href="#" className="underline text-gray-500 text-xs">Bringing a service animal?</a>
                          )}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          className="rounded-full border w-6 h-6 text-center text-lg text-gray-600 cursor-pointer inline-flex items-center justify-center"
                          onClick={() =>
                            setGuests((prev) => ({
                              ...prev,
                              [type]: Math.max(prev[type] - 1, 0),
                            }))
                          }
                        >
                          −
                        </button>
                        <span>{guests[type]}</span>
                        <button
                          className="rounded-full border w-6 h-6 text-center text-lg text-gray-600 cursor-pointer inline-flex items-center justify-center"
                          onClick={() =>
                            setGuests((prev) => ({
                              ...prev,
                              [type]: prev[type] + 1,
                            }))
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="text-right pt-2">
                    <button
                      onClick={() => setShowGuests(false)}
                      className="text-rose-500 font-medium hover:underline text-sm cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
            </div>


            {/* Calendar Component */}
            {showCalendar && (
              <div     ref={calendarRef}
              className="absolute left-0 right-0 top-[100%] mt-2 z-50 p-4 bg-white rounded-lg shadow-xl w-fit mx-auto">
                <DateRange
                  ranges={dateRange}
                  onChange={handleSelect}
                  moveRangeOnFirstSelection={false}
                  editableDateInputs={true}
                  rangeColors={['#f43f5e']}
                  minDate={new Date()}
                />

                <div className="flex justify-end gap-3 mt-4">
                  <button
                    onClick={() => {
                      setShowCalendar(false);
                    }}
                    className="px-4 py-2 bg-rose-500 text-white text-sm rounded hover:bg-rose-600 transition"
                  >
                    OK
                  </button>
                  <button
                    onClick={() => {
                      const today = new Date();
                      setDateRange([
                        {
                          startDate: today,
                          endDate: today,
                          key: 'selection',
                        },
                      ]);
                    }}
                    className="px-4 py-2 bg-gray-200 text-gray-800 text-sm rounded hover:bg-gray-300 transition"
                  >
                    Clear
                  </button>
                </div>
              </div>
            )}

          </div>

          <div className="px-4 pb-4 flex justify-end">
            <button className="bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-shadow flex items-center">
              <Search className="h-4 w-4 mr-2" />
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchTab;
