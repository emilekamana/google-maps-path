'use client'
import Map from "@/components/map";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="sticky min-h-[5vh] top-0 inset-x-0 flex flex-wrap items-center sm:justify-start sm:flex-nowrap z-50 w-full bg-gradient-to-r from-cyan-300 to-lime-500">
        <nav className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex flex-row-reverse sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
          <div className="flex flex-row-reverse items-center justify-between">
            <a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Startup</a>
            <div className="sm:hidden">
              <button type="button" className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                <svg className="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                <svg className="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </div>
          </div>
          <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-start sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
              <a className="font-medium text-blue-600 sm:py-6 dark:text-blue-500" href="#" aria-current="page">Home</a>
              <a className="font-medium text-gray-100  hover:text-white sm:py-6 " href="#">Option 1</a>
              <a className="font-medium text-gray-100 hover:text-white sm:py-6 " href="#">Option 2</a>
            </div>
          </div>
        </nav>
      </header>

      <main id="content" className="shrink-0 max-w-screen max-h-[90vh] min-h-[90vh] h-[20rem] my-auto mx-auto">
        <Map
          start={{ lat: -1.939826787816454, lng: 30.0445426438232 }}
          stops={[
            { lat: -1.9355377074007851, lng: 30.060163829002217 },
            { lat: -1.9358808342336546, lng: 30.08024820994666 },
            { lat: -1.9489196023037583, lng: 30.092607828989397 },
            { lat: -1.9592132952818164, lng: 30.106684061788073 },
            { lat: -1.9487480402200394, lng: 30.126596781356923 },
          ]}
          end={{ lat: -1.9365670876910166, lng: 30.13020167024439 }}
        />
      </main>

      <footer className="absolute min-h-[5vh] bottom-0 inset-x-0 mt-auto w-full flex justify-around items-center  bg-gradient-to-r from-cyan-300 to-lime-500">

        <a className="size-8 inline-flex justify-center items-center gap-x-2 text-xl font-semibold rounded-full border border-transparent text-gray-100 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none " href="#">
          <svg className="flex-shrink-0 size-8" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
          </svg>
        </a>

        <a className="size-8 inline-flex justify-center items-center gap-x-2 text-xl font-semibold rounded-full border border-transparent text-gray-100 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none " href="#">
          <svg className="flex-shrink-0 size-8" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg>
        </a>

        <a className="size-8 inline-flex justify-center items-center gap-x-2 text-xl font-semibold rounded-full border border-transparent text-gray-100 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none " href="#">
          <svg className="flex-shrink-0 size-8" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>

      </footer>

    </>
  );
}
