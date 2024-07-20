import data from "../data/clients.json";
import { truncateText } from "../helpers/function";

export default function Client() {
  return (
    <>
      <div
        className="w-full md:max-w-3xl lg:max-w-6xl mx-auto px-5 text-white my-40 lg:my-40"
        id="client"
        data-aos="fade-up"
      >
        <div className="text-slate-200 font-semibold text-center text-2xl mb-10">
          Clients
        </div>
        <div className="max-w-3xl m-auto overflow-hidden">
          <div className="flex space-x-16 group">
            <div className="flex gap-16 group-hover:paused animate-loop-scroll">
              {data.map((client, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center w-[60px] lg:w-[80px]"
                >
                  <img
                    loading="lazy"
                    src={client.photo}
                    alt={"client-" + index}
                    className="w-16 mb-2"
                  />
                  <p className="text-sm text-slate-300">
                    {truncateText(client.name, 6)}
                  </p>
                </div>
              ))}
            </div>
            <div
              className="flex gap-16 group-hover:paused animate-loop-scroll"
              aria-hidden="true"
            >
              {data.map((client, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center w-[60px] lg:w-[80px]"
                >
                  <img
                    loading="lazy"
                    src={client.photo}
                    alt={"client-" + index}
                    className="w-16 mb-2"
                  />
                  <p className="text-sm text-slate-300">
                    {truncateText(client.name, 6)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
