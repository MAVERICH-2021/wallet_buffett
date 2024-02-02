import TotalSection from "./TotalSection/TotalSection";

const mockData = {
  totalView: [
    {
      title: "Total Gains",
      amount: 34500,
      percentage: 5.5,
    },
    {
      title: "Total Sales",
      amount: 4500,
      percentage: 2.5,
    },
    {
      title: "Total Orders",
      amount: 1200,
      percentage: -3.5,
    },
    {
      title: "Total Revenue",
      amount: 10000,
      percentage: 0.3,
    },
    {
      title: "Total Revenue",
      amount: 10000,
      percentage: 0.3,
    },
  ],
  currency: "$",
};

interface ContentProps {
  title?: string;
}

export function OverviewBoard({ title }: ContentProps) {
  return (
    <div className="w-full h-full flex flex-col flex-wrap sm:flex-row mt-4 ">
      <div className="flex grow">
        {mockData.totalView.map((item, index) => (
          <TotalSection
            key={index}
            title={item.title}
            amount={item.amount}
            percentage={item.percentage}
          />
        ))}
      </div>
      <div className="flex">
        <div className="shadow-lg rounded-xl w-full md:w-3/12 p-4 md:mr-2 bg-white relative overflow-hidden mt-8">
          <p className="text-gray-600 font-light text-xl mb-6">
            Popular Investors
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center">
              <div className="relative">
                <a href="#" className="block relative">
                  <img
                    alt="Enoch Ndika"
                    src="/images/1.jpg"
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
                <svg
                  width="10"
                  height="10"
                  fill="currentColor"
                  className="fill-current text-white bg-blue-600 rounded-full p-1 absolute bottom-0 right-0 w-4 h-4 -mx-1 -my-1"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z" />
                </svg>
              </div>
              <span className="text-gray-600 text-xs mt-2">Enoch Ndika</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative">
                <a href="#" className="block relative">
                  <img
                    alt="Lionel Messi"
                    src="/images/2.jpg"
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
                <svg
                  width="10"
                  height="10"
                  fill="currentColor"
                  className="fill-current text-white bg-blue-600 rounded-full p-1 absolute bottom-0 right-0 w-4 h-4 -mx-1 -my-1"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z" />
                </svg>
              </div>
              <span className="text-gray-600 text-xs mt-2">Lionel Messi</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative">
                <a href="#" className="block relative">
                  <img
                    alt="Jonathan Ilunga"
                    src="/images/4.jpg"
                    className="mx4auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
                <svg
                  width="10"
                  height="10"
                  fill="currentColor"
                  className="fill-current text-white bg-blue-600 rounded-full p-1 absolute bottom-0 right-0 w-4 h-4 -mx-1 -my-1"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z" />
                </svg>
              </div>
              <span className="text-gray-600 text-xs mt-2">
                Jonathan Ilunga
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative">
                <a href="#" className="block relative">
                  <img
                    alt="Maurice Lokumba"
                    src="/images/5.jpg"
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
                <svg
                  width="10"
                  height="10"
                  fill="currentColor"
                  className="fill-current text-white bg-blue-600 rounded-full p-1 absolute bottom-0 right-0 w-4 h-4 -mx-1 -my-1"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z" />
                </svg>
              </div>
              <span className="text-gray-600 text-xs mt-2">
                Maurice Lokumba
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative">
                <a href="#" className="block relative">
                  <img
                    alt="CR7"
                    src="/images/3.png"
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
                <svg
                  width="10"
                  height="10"
                  fill="currentColor"
                  className="fill-current text-white bg-blue-600 rounded-full p-1 absolute bottom-0 right-0 w-4 h-4 -mx-1 -my-1"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z" />
                </svg>
              </div>
              <span className="text-gray-600 text-xs mt-2">
                Cristiano Ronaldo
              </span>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative">
                <a href="#" className="block relative">
                  <img
                    alt="Dave Glad"
                    src="/images/6.jpg"
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
                <svg
                  width="10"
                  height="10"
                  fill="currentColor"
                  className="fill-current text-white bg-blue-600 rounded-full p-1 absolute bottom-0 right-0 w-4 h-4 -mx-1 -my-1"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z" />
                </svg>
              </div>
              <span className="text-gray-600 text-xs mt-2">Dave Glad</span>
            </div>
          </div>
        </div>
        <div className="shadow-lg rounded-xl w-full md:w-4/12 mt-8 md:ml-2 p-4 bg-white text-gray-700 relative overflow-hidden">
          <a href="#" className="w-full h-full block">
            <div className="w-full">
              <p className="text-gray-700 text-2xl font-light mb-4">
                Task Progress
              </p>
              <div className="flex items-center justify-between text-gray-400 text-sm">
                <p>Design</p>
                <p>3/8</p>
              </div>
              <div className="w-full h-2 bg-green-100 rounded-full mb-4">
                <div className="w-1/3 h-full text-center text-xs text-white bg-green-400 rounded-full" />
              </div>
              <div className="flex items-center justify-between text-gray-400 text-sm">
                <p>Development</p>
                <p>6/10</p>
              </div>
              <div className="w-full h-2 bg-indigo-100 rounded-full mb-4">
                <div className="w-2/3 h-full text-center text-xs text-white bg-indigo-400 rounded-full" />
              </div>
              <div className="flex items-center justify-between text-gray-400 text-sm">
                <p>DevOps</p>
                <p>2/8</p>
              </div>
              <div className="w-full h-2 bg-blue-100 rounded-full mb-4">
                <div className="w-1/4 h-full text-center text-xs text-white bg-blue-400 rounded-full" />
              </div>
              <div className="flex items-center justify-between text-gray-400 text-sm">
                <p>Marketing</p>
                <p>8/8</p>
              </div>
              <div className="w-full h-2 bg-pink-100 rounded-full">
                <div className="w-full h-full text-center text-xs text-white bg-pink-400 rounded-full" />
              </div>
            </div>
          </a>
        </div>

        <div className="shadow-lg rounded-xl w-full md:w-4/12 md:ml-4 mt-8 p-4 bg-white relative overflow-hidden">
          <div className="w-full flex items-center justify-between mb-8">
            <p className="text-gray-800 text-xl">Account</p>
            <a
              href="#"
              className="flex items-center text-sm hover:text-gray-600 text-gray-300 border-0 focus:outline-none"
            >
              VIEW ALL
            </a>
          </div>
          <div className="flex items-center mb-6 rounded justify-between">
            <span className="rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                className="rounded"
                viewBox="0 0 192.756 192.756"
              >
                <g fillRule="evenodd" clipRule="evenodd">
                  <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
                  <path
                    d="M8.484 177.699h-.551c0-.275-.138-.689-.138-.828 0-.137 0-.412-.414-.412h-.828v1.24h-.414v-2.896h1.242c.552 0 .965.139.965.689 0 .414-.138.553-.275.689.138.139.275.277.275.553v.551c0 .139 0 .139.138.139v.275zm-.551-2.068c0-.414-.276-.414-.414-.414h-.966v.828h.828c.276 0 .552-.139.552-.414zm2.345.551c0-1.654-1.379-3.035-3.173-3.035-1.655 0-3.035 1.381-3.035 3.035 0 1.793 1.38 3.174 3.035 3.174 1.793-.001 3.173-1.381 3.173-3.174zm-.414 0c0 1.518-1.241 2.621-2.759 2.621s-2.621-1.104-2.621-2.621c0-1.379 1.104-2.621 2.621-2.621s2.759 1.242 2.759 2.621zM179.818 120.451c0 4.139-2.621 6.068-7.312 6.068h-8.965v-4.139h8.965c.828 0 1.518-.137 1.795-.412.275-.277.551-.691.551-1.242 0-.553-.275-1.104-.551-1.379-.277-.277-.828-.414-1.656-.414-4.275-.139-9.656.137-9.656-5.932 0-2.76 1.793-5.795 6.621-5.795h9.242v4.139h-8.553c-.826 0-1.379 0-1.793.275-.414.414-.689.828-.689 1.518s.414 1.104.965 1.381c.553.137 1.105.275 1.795.275h2.482c2.621 0 4.277.551 5.381 1.518.826.965 1.378 2.208 1.378 4.139zm-19.451-4.139c-1.104-.967-2.76-1.518-5.381-1.518h-2.482c-.689 0-1.242-.139-1.793-.275-.553-.277-.965-.691-.965-1.381s.137-1.104.689-1.518c.414-.275.965-.275 1.793-.275h8.553v-4.139h-9.242c-4.967 0-6.623 3.035-6.623 5.795 0 6.068 5.381 5.793 9.658 5.932.826 0 1.379.137 1.654.414.275.275.553.826.553 1.379 0 .551-.277.965-.553 1.242-.414.275-.965.412-1.793.412h-8.967v4.139h8.967c4.689 0 7.311-1.93 7.311-6.068 0-1.931-.551-3.174-1.379-4.139zm-17.658 6.208h-10.896v-3.863h10.621v-3.861h-10.621v-3.588h10.896v-4H127.26v19.312h15.449v-4zm-20.416-14.346c-1.518-.828-3.311-.967-5.656-.967h-10.621v19.312h4.689v-7.035h4.967c1.654 0 2.621.139 3.311.828.828.965.828 2.621.828 3.863v2.344h4.551v-3.725c0-1.793-.137-2.621-.689-3.586-.414-.553-1.24-1.242-2.344-1.656 1.24-.412 3.311-2.068 3.311-5.104-.001-2.206-.829-3.448-2.347-4.274zm-26.21-.967H81.322l-5.932 6.346-5.656-6.346H51.111v19.312h18.348l5.932-6.346 5.656 6.346h8.967v-6.482h5.794c4 0 8.002-1.104 8.002-6.484-.001-5.242-4.14-6.346-7.727-6.346zm22.485 8.002c-.689.275-1.379.275-2.207.275l-5.656.139v-4.416h5.656c.828 0 1.656 0 2.207.414.553.277.965.828.965 1.656s-.412 1.518-.965 1.932zm-22.485.965h-6.07v-4.967h6.07c1.656 0 2.759.691 2.759 2.346 0 1.656-1.104 2.621-2.759 2.621zm-17.796.689l7.173-7.586v15.588l-7.173-8.002zm-11.174 5.657h-11.45v-3.863h10.208v-3.861H55.663v-3.588h11.588l5.104 5.656-5.242 5.656zm99.875-29.246h-6.621l-8.691-14.485v14.485h-9.379l-1.795-4.277h-9.656l-1.793 4.277h-5.381c-2.207 0-5.104-.552-6.758-2.208-1.518-1.655-2.346-3.862-2.346-7.311 0-2.897.414-5.518 2.482-7.587 1.379-1.518 3.863-2.207 7.035-2.207h4.414V78.1h-4.414c-1.654 0-2.621.276-3.586 1.104-.828.828-1.242 2.345-1.242 4.414s.414 3.587 1.242 4.553c.689.689 1.932.965 3.172.965h2.07l6.621-15.174h6.898l7.725 18.209v-18.21h7.174l8.139 13.381V73.961h4.689v19.313h.001zm-54.765-19.313h-4.689v19.313h4.689V73.961zm-9.795.828c-1.518-.828-3.172-.828-5.517-.828H86.288v19.313h4.552v-7.036h4.966c1.656 0 2.76.138 3.449.828.828.966.689 2.622.689 3.725v2.483h4.689v-3.863c0-1.655-.137-2.483-.826-3.449-.414-.552-1.242-1.242-2.207-1.655 1.24-.552 3.311-2.069 3.311-5.104.001-2.207-.966-3.449-2.483-4.414zM82.977 89.274h-10.76v-3.863h10.622v-4H72.217v-3.449h10.76v-4h-15.45v19.313h15.45v-4.001zM64.078 73.961h-7.587l-5.656 13.105-6.07-13.105h-7.449V92.17l-7.863-18.209h-6.897l-8.277 19.313h4.966l1.793-4.277h9.656l1.793 4.277h9.381V78.1l6.759 15.174h4l6.76-15.174v15.174h4.69V73.961h.001zm74.77 10.898l-3.174-7.587-3.172 7.587h6.346zm-40.006-3.034c-.689.414-1.379.414-2.345.414H90.84v-4.276h5.656c.828 0 1.792 0 2.345.276.551.414.828.966.828 1.793s-.276 1.516-.827 1.793zm-76.149 3.034l3.173-7.587 3.173 7.587h-6.346zm156.022-71.458H14.14v69.527l5.656-12.829h12.001l1.656 3.173v-3.173h14.071l3.173 6.897 3.035-6.897h44.834c2.068 0 3.861.414 5.242 1.517v-1.517h12.277v1.517c2.068-1.104 4.689-1.517 7.725-1.517h17.795l1.656 3.173v-3.173h13.105l1.932 3.173v-3.173h12.828v27.038H158.16l-2.482-4.138v4.138h-16.141l-1.793-4.414h-4.002l-1.793 4.414h-8.414c-3.311 0-5.795-.828-7.449-1.655v1.655H96.083v-6.208c0-.828-.138-.966-.69-.966h-.689v7.173H56.077v-3.449l-1.379 3.449h-8.139l-1.379-3.311v3.311H29.591l-1.655-4.414h-4.001l-1.793 4.414H14.14v81.529h164.575V129.14c-1.793.828-4.277 1.242-6.76 1.242h-12.002v-1.656c-1.379 1.105-3.863 1.656-6.207 1.656h-37.799v-6.207c0-.828-.137-.828-.828-.828h-.689v7.035h-12.416v-7.311c-2.068.965-4.414.965-6.483.965h-1.38v6.346H78.977l-3.586-4.139-4 4.139H46.972v-27.037h24.831l3.587 4.137 3.863-4.137h16.692c1.93 0 5.104.275 6.483 1.654v-1.654h14.898c1.518 0 4.416.275 6.346 1.654v-1.654h22.486V105c1.242-1.104 3.588-1.654 5.656-1.654h12.553V105c1.381-.965 3.311-1.654 5.795-1.654h8.553V13.401z"
                    fill="#0077a6"
                  />
                </g>
              </svg>
            </span>
            <div className="flex items-center w-full justify-between">
              <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                <p>American Express</p>
                <p className="text-gray-300">Wallet deposit</p>
              </div>
              <span className="text-green-400">+$3,124</span>
            </div>
          </div>
          <div className="flex items-center mb-6 rounded justify-between">
            <span className="rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                className="rounded"
                viewBox="0 0 192.756 192.756"
              >
                <g fillRule="evenodd" clipRule="evenodd">
                  <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
                  <path
                    d="M189.922 50.809c0-8.986-4.67-13.444-13.729-13.444H16.562c-4.528 0-7.854 1.203-10.048 3.679-2.476 2.477-3.68 5.661-3.68 9.765v91.138c0 4.104 1.204 7.217 3.68 9.764 2.548 2.477 5.803 3.68 10.048 3.68h159.631c9.059 0 13.729-4.527 13.729-13.443V50.809zm-13.729-11.321c7.5 0 11.322 3.821 11.322 11.321v91.138c0 7.57-3.822 11.32-11.322 11.32H16.562c-3.609 0-6.368-1.061-8.42-3.184-2.123-2.053-3.184-4.883-3.184-8.137V50.809c0-7.5 3.75-11.321 11.604-11.321h159.631z"
                    fill="#315881"
                  />
                  <path
                    d="M17.835 44.724c-3.042 0-4.953.495-6.014 1.557-.92 1.203-1.344 3.184-1.344 6.085v19.741h171.802V52.366c0-5.165-2.549-7.642-7.643-7.642H17.835z"
                    fill="#315881"
                  />
                  <path
                    d="M10.477 140.107c0 5.234 2.476 7.924 7.358 7.924h156.801c5.094 0 7.643-2.689 7.643-7.924v-19.742H10.477v19.742z"
                    fill="#dfa43b"
                  />
                  <path
                    d="M67.367 80.528c0 .92-.142 1.627-.495 2.123l-12.383 21.582-.779-26.323H33.898l6.651 3.184c1.91 1.203 2.901 2.759 2.901 4.741l1.839 27.951h9.694l23.21-35.876H66.306c.707.637 1.061 1.627 1.061 2.618zM147.467 78.971l.777-1.062h-12.1c.424.424.566.637.566.778-.143.565-.426.92-.566 1.344l-17.619 32.124c-.424.566-.85 1.062-1.344 1.629h9.977l-.496-1.062c0-.92.496-2.617 1.557-5.023l2.123-3.963h10.26c.426 3.326.709 6.086.85 8.139l-.85 1.91h12.383l-1.84-2.689-3.678-32.125zm-7.36 19.742h-7.359l6.297-12.1 1.062 12.1zM109.539 76.07c-3.82 0-7.076 1.062-9.977 3.184-3.185 1.84-4.741 4.175-4.741 7.077 0 3.326 1.132 6.227 3.396 8.42l6.865 4.74c2.477 1.77 3.68 3.326 3.68 4.742 0 1.344-.639 2.547-1.84 3.467-1.203.92-2.549 1.344-4.246 1.344-2.477 0-6.722-1.768-12.595-5.023v6.58c4.599 2.76 9.058 4.176 13.373 4.176 4.105 0 7.572-1.133 10.545-3.68 3.184-2.336 4.74-5.094 4.74-8.137 0-2.549-1.133-4.883-3.68-7.36l-6.582-4.741c-2.191-1.769-3.395-3.326-3.395-4.528 0-2.759 1.627-4.175 4.953-4.175 2.264 0 5.59 1.274 10.047 3.963l1.346-6.864c-3.752-2.124-7.643-3.185-11.889-3.185zM83.217 113.785c-.142-1.486-.425-2.83-.567-4.246l8.987-29.011 2.123-2.618H80.811c.142.637.283 1.486.425 2.123 0 .637 0 1.416-.142 2.123l-8.986 28.728-1.84 2.902h12.949v-.001z"
                    fill="#315881"
                  />
                </g>
              </svg>
            </span>
            <div className="flex items-center w-full justify-between">
              <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                <p>Visa Premier</p>
                <p className="text-gray-300">Wallet deposit</p>
              </div>
              <span className="text-green-400">+$23,240</span>
            </div>
          </div>
          <div className="flex items-center mb-6 rounded justify-between">
            <span className="rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                className="rounded"
                viewBox="0 0 192.756 192.756"
              >
                <g fillRule="evenodd" clipRule="evenodd">
                  <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
                  <path
                    d="M96.42 133.041c8.667 7.986 20.306 12.83 32.966 12.83 27.189 0 49.195-22.176 49.195-49.451 0-27.358-22.006-49.535-49.195-49.535-12.66 0-24.299 4.843-32.966 12.83-9.941 9.091-16.229 22.176-16.229 36.705.001 14.529 6.288 27.615 16.229 36.621z"
                    fill="#e9b040"
                  />
                  <path
                    d="M172.041 123.949c0-.85.68-1.529 1.529-1.529.934 0 1.613.68 1.613 1.529 0 .936-.68 1.615-1.613 1.615-.849 0-1.529-.679-1.529-1.615zm1.529 1.276c.68 0 1.273-.596 1.273-1.275s-.594-1.189-1.273-1.189c-.596 0-1.189.51-1.189 1.189s.594 1.275 1.189 1.275zm-.17-.51h-.34v-1.445h.594c.086 0 .256 0 .34.086.17.084.17.17.17.34s-.084.34-.254.34l.34.68h-.426l-.17-.596h-.254v.595-.85h.34c.084 0 .084-.086.084-.17 0-.086 0-.086-.084-.17h-.34v1.19z"
                    fill="#e9b040"
                  />
                  <path
                    d="M112.309 91.153c-.17-1.784-.51-3.483-.85-5.268H81.381c.34-1.784.85-3.483 1.359-5.183h27.275a56.916 56.916 0 0 0-2.039-5.268H84.865a62.38 62.38 0 0 1 2.804-5.268h17.419a44.706 44.706 0 0 0-3.738-5.183h-9.942a48.87 48.87 0 0 1 5.013-5.268c-8.751-7.902-20.307-12.83-33.052-12.83-27.104 0-49.195 22.177-49.195 49.535 0 27.275 22.091 49.451 49.195 49.451 12.745 0 24.3-4.844 33.052-12.83a47.105 47.105 0 0 0 4.929-5.184h-9.942c-1.36-1.699-2.549-3.398-3.739-5.268h17.419a39.517 39.517 0 0 0 2.889-5.268H84.865c-.765-1.699-1.529-3.398-2.125-5.184h27.275c.594-1.699 1.02-3.482 1.443-5.268.34-1.699.68-3.482.85-5.268a51.61 51.61 0 0 0 .256-5.184c0-1.781-.085-3.565-.255-5.264z"
                    fill="#cc2131"
                  />
                  <path
                    d="M172.041 107.891c0-.934.68-1.613 1.529-1.613.934 0 1.613.68 1.613 1.613 0 .85-.68 1.615-1.613 1.615-.849 0-1.529-.766-1.529-1.615zm1.529 1.189c.68 0 1.273-.51 1.273-1.189s-.594-1.189-1.273-1.189c-.596 0-1.189.51-1.189 1.189s.594 1.189 1.189 1.189zm-.17-.51h-.34v-1.359H173.994c.17.086.17.256.17.426 0 .084-.084.254-.254.34l.34.594h-.426l-.17-.51h-.254v.509-.764h.17c.084 0 .17 0 .17-.086.084 0 .084-.084.084-.17 0 0 0-.084-.084-.084 0-.086-.086 0-.17 0h-.17v1.104z"
                    fill="#fff"
                  />
                  <path
                    d="M79.682 110.695c-1.614.424-2.804.68-3.993.68-2.549 0-4.079-1.615-4.079-4.504 0-.594.085-1.189.17-1.869l.34-1.953.255-1.615L74.669 87.5h5.098l-.595 3.059h3.229l-.765 5.098h-3.229l-1.359 8.326c-.085.426-.085.68-.085.85 0 1.105.51 1.529 1.784 1.529.595 0 1.104-.084 1.614-.17l-.679 4.503zM96.166 110.525c-1.869.51-3.568.764-5.438.764-5.778 0-9.092-3.059-9.092-9.09 0-7.053 3.909-12.151 9.346-12.151 4.333 0 7.137 2.889 7.137 7.391 0 1.531-.17 2.975-.594 5.014H86.904c-.085.34-.085.51-.085.68 0 2.379 1.614 3.568 4.673 3.568 1.954 0 3.653-.424 5.523-1.273l-.849 5.097zm-3.144-12.15v-1.02c0-1.699-.935-2.634-2.549-2.634-1.7 0-2.889 1.274-3.399 3.653h5.948v.001zM38.898 110.949H33.63l3.059-19.286-6.882 19.286h-3.653l-.425-19.201-3.229 19.201h-5.183l4.163-25.064h7.732l.17 15.465 5.183-15.465h8.497l-4.164 25.064zM51.729 101.859c-.51-.086-.68-.086-1.02-.086-3.059 0-4.588 1.189-4.588 3.059 0 1.275.765 2.125 1.954 2.125 2.549 0 3.568-2.125 3.654-5.098zm4.248 9.09h-4.588l.085-2.123c-1.19 1.613-2.804 2.463-5.608 2.463-2.549 0-4.758-2.293-4.758-5.607 0-.934.17-1.783.425-2.633.849-3.145 3.993-5.098 8.836-5.184.595 0 1.529 0 2.379.086.169-.68.169-.936.169-1.36 0-1.36-1.104-1.785-3.568-1.785-1.529 0-3.229.255-4.418.68l-.765.17-.34.084.765-4.588c2.464-.765 4.248-1.104 6.203-1.104 4.588 0 7.052 2.124 7.052 6.032 0 1.02.085 1.785-.255 3.994l-1.189 7.307-.17 1.275-.085 1.02-.085.68-.085.593zM121.826 90.728c1.529 0 2.889.425 4.758 1.359l.934-5.438c-.51-.255-.68-.255-1.359-.51l-2.123-.595c-.68-.17-1.529-.255-2.465-.255-2.635 0-4.164.085-5.777 1.02-.85.595-1.955 1.36-3.145 2.719l-.68-.17-5.438 3.823.256-2.124h-5.609l-3.312 20.391h5.354l1.953-10.959s.766-1.531 1.105-2.039c1.02-1.275 1.869-1.275 2.973-1.275h.426a27.428 27.428 0 0 0-.256 3.908c0 6.627 3.738 10.791 9.516 10.791 1.445 0 2.721-.17 4.674-.68l.936-5.777c-1.699.934-3.229 1.359-4.504 1.359-3.143 0-5.014-2.379-5.014-6.117-.002-5.523 2.803-9.431 6.797-9.431zM166.941 85.885l-1.188 7.137c-1.275-1.954-2.805-2.889-4.844-2.889-2.805 0-5.438 1.614-7.053 4.673v-.084l-3.398-2.04.34-2.124h-5.693l-3.229 20.391h5.268l1.785-10.959s1.359-1.531 1.699-2.039c.85-1.02 1.699-1.191 2.379-1.275-.594 1.699-.934 3.738-.934 6.033 0 5.098 2.633 8.496 6.541 8.496 1.955 0 3.484-.68 4.928-2.295l-.254 2.039h5.014l4.078-25.064h-5.439zm-6.541 20.222c-1.785 0-2.719-1.359-2.719-3.994 0-3.994 1.699-6.882 4.162-6.882 1.869 0 2.805 1.445 2.805 3.994 0 4.078-1.699 6.882-4.248 6.882zM135.846 101.859c-.51-.086-.68-.086-1.02-.086-3.061 0-4.59 1.189-4.59 3.059 0 1.275.766 2.125 1.955 2.125 2.549 0 3.569-2.125 3.655-5.098zm4.248 9.09h-4.674l.17-2.123c-1.189 1.613-2.805 2.463-5.607 2.463-2.635 0-4.928-2.209-4.928-5.607 0-4.842 3.652-7.816 9.43-7.816.596 0 1.529 0 2.295.086.17-.68.256-.936.256-1.36 0-1.36-1.105-1.785-3.654-1.785-1.445 0-3.229.255-4.418.68l-.68.17-.34.084.764-4.588c2.465-.765 4.25-1.104 6.203-1.104 4.588 0 6.967 2.124 6.967 6.032 0 1.02.17 1.785-.254 3.994l-1.105 7.307-.17 1.275-.17 1.02-.084.68v.592h-.001zM67.107 94.891c1.02 0 2.464.085 3.994.34l.765-4.758c-1.53-.17-3.569-.425-4.759-.425-5.947 0-7.901 3.229-7.901 6.967 0 2.465 1.104 4.248 3.993 5.607 2.124 1.02 2.464 1.189 2.464 2.125 0 1.273-1.104 2.039-3.144 2.039-1.614 0-3.144-.256-4.843-.85l-.595 4.672.084.086 1.02.17c.34.084.765.17 1.36.254 1.274.086 2.379.17 3.059.17 5.948 0 8.412-2.293 8.412-6.797 0-2.803-1.36-4.502-3.994-5.691-2.294-1.021-2.549-1.189-2.549-2.125 0-.934 1.02-1.784 2.634-1.784z"
                    fill="#1b3771"
                  />
                  <path
                    d="M128.963 85.035l-.936 5.438c-1.869-.935-3.229-1.359-4.758-1.359-3.994 0-6.797 3.908-6.797 9.431 0 3.824 1.869 6.117 5.014 6.117 1.273 0 2.803-.424 4.502-1.273l-.934 5.691c-1.955.51-3.229.766-4.674.766-5.777 0-9.346-4.164-9.346-10.875 0-8.922 4.928-15.21 11.98-15.21.934 0 1.783.085 2.463.255l2.125.51c.681.255.851.34 1.361.509zM111.799 88.774h-.51c-1.783 0-2.803.85-4.418 3.313l.51-3.144h-4.844l-3.312 20.392h5.354c1.953-12.49 2.463-14.614 5.012-14.614h.34c.51-2.464 1.189-4.249 2.039-5.863l-.171-.084zM81.042 109.08c-1.444.51-2.634.68-3.823.68-2.719 0-4.249-1.529-4.249-4.502 0-.51.085-1.189.17-1.785l.34-2.039.255-1.613 2.294-13.936h5.268l-.595 3.059h2.719l-.68 5.013h-2.719l-1.444 8.497c-.085.34-.085.596-.085.85 0 1.02.51 1.445 1.784 1.445.595 0 1.104 0 1.444-.17l-.679 4.501zM60.565 95.401c0 2.55 1.189 4.333 3.993 5.693 2.209 1.02 2.549 1.359 2.549 2.209 0 1.275-.935 1.869-3.059 1.869-1.614 0-3.059-.254-4.758-.764l-.765 4.672.255.086.935.17c.339.084.765.17 1.444.17 1.189.17 2.209.17 2.889.17 5.607 0 8.242-2.125 8.242-6.797 0-2.805-1.104-4.42-3.738-5.693-2.294-1.02-2.549-1.274-2.549-2.209 0-1.104.935-1.614 2.634-1.614 1.02 0 2.464.085 3.824.255l.764-4.673c-1.359-.255-3.483-.425-4.673-.425-5.948-.001-8.072 3.143-7.987 6.881zM169.662 109.336h-5.014l.256-1.955c-1.445 1.529-2.975 2.209-4.93 2.209-3.908 0-6.457-3.312-6.457-8.41 0-6.798 3.994-12.576 8.666-12.576 2.125 0 3.654.935 5.1 2.804l1.189-7.137h5.268l-4.078 25.065zm-7.818-4.758c2.465 0 4.164-2.889 4.164-6.883 0-2.634-.936-3.994-2.805-3.994-2.379 0-4.162 2.804-4.162 6.798 0 2.72.934 4.079 2.803 4.079zM97.355 108.91c-1.87.596-3.569.85-5.523.85-5.948 0-9.007-3.143-9.007-9.176 0-6.967 3.909-12.15 9.262-12.15 4.418 0 7.221 2.889 7.221 7.392 0 1.53-.17 2.975-.68 5.098H88.094c-.085.256-.085.426-.085.596 0 2.379 1.615 3.568 4.673 3.568 1.954 0 3.653-.34 5.523-1.275l-.85 5.097zm-2.974-12.15v-1.019c0-1.699-.935-2.634-2.549-2.634-1.699 0-2.889 1.275-3.399 3.653h5.948zM40.258 109.336H34.99l3.059-19.288-6.882 19.288h-3.654l-.425-19.118-3.228 19.118h-4.928l4.163-25.065h7.647l.255 15.549 5.097-15.549h8.327l-4.163 25.065zM53.428 100.244c-.51 0-.765-.084-1.19-.084-2.974 0-4.503 1.104-4.503 3.143 0 1.275.68 2.039 1.869 2.039 2.209 0 3.739-2.039 3.824-5.098zm3.908 9.092h-4.419l.085-2.125c-1.36 1.699-3.144 2.465-5.608 2.465-2.889 0-4.843-2.209-4.843-5.523 0-5.012 3.398-7.901 9.346-7.901.595 0 1.36.085 2.209.169.17-.679.17-.934.17-1.274 0-1.359-.935-1.869-3.399-1.869-1.529 0-3.229.17-4.418.51l-.765.255-.51.085.765-4.588c2.634-.765 4.418-1.02 6.373-1.02 4.588 0 7.052 2.039 7.052 5.947 0 1.02-.085 1.785-.425 4.079l-1.19 7.223-.17 1.273-.085 1.02-.085.766-.083.508zM137.545 100.244c-.596 0-.85-.084-1.189-.084-3.059 0-4.59 1.104-4.59 3.143 0 1.275.766 2.039 1.955 2.039 2.125 0 3.738-2.039 3.824-5.098zm3.908 9.092h-4.418l.084-2.125c-1.359 1.699-3.143 2.465-5.607 2.465-2.889 0-4.844-2.209-4.844-5.523 0-5.012 3.398-7.901 9.346-7.901.596 0 1.361.085 2.125.169.17-.679.256-.934.256-1.274 0-1.359-.936-1.869-3.398-1.869-1.531 0-3.314.17-4.504.51l-.68.255-.51.085.764-4.588c2.635-.765 4.418-1.02 6.373-1.02 4.588 0 6.967 2.039 6.967 5.947 0 1.02 0 1.785-.424 4.079l-1.105 7.223-.17 1.273-.17 1.02-.084.766v.508h-.001zM155.727 88.774h-.51c-1.783 0-2.803.85-4.418 3.313l.51-3.144h-4.844l-3.229 20.392h5.268c1.955-12.49 2.465-14.614 5.014-14.614h.34c.51-2.464 1.189-4.249 2.039-5.863l-.17-.084z"
                    fill="#fff"
                  />
                </g>
              </svg>
            </span>
            <div className="flex items-center w-full justify-between">
              <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                <p>MasterCard</p>
                <p className="text-gray-300">Wallet deposit</p>
              </div>
              <span className="text-red-400">-$1,904</span>
            </div>
          </div>
          <div className="flex items-center rounded justify-between">
            <span className="rounded-lg">
              <svg
                width="40"
                height="40"
                className="rounded"
                viewBox="-.09581478 0 123.74964463 30.22562129"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m46.211 6.749h-6.839a.95.95 0 0 0 -.939.802l-2.766 17.537a.57.57 0 0 0 .564.658h3.265a.95.95 0 0 0 .939-.803l.746-4.73a.95.95 0 0 1 .938-.803h2.165c4.505 0 7.105-2.18 7.784-6.5.306-1.89.013-3.375-.872-4.415-.972-1.142-2.696-1.746-4.985-1.746zm.789 6.405c-.374 2.454-2.249 2.454-4.062 2.454h-1.032l.724-4.583a.57.57 0 0 1 .563-.481h.473c1.235 0 2.4 0 3.002.704.359.42.469 1.044.332 1.906zm19.654-.079h-3.275a.57.57 0 0 0 -.563.481l-.145.916-.229-.332c-.709-1.029-2.29-1.373-3.868-1.373-3.619 0-6.71 2.741-7.312 6.586-.313 1.918.132 3.752 1.22 5.031.998 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .562.66h2.95a.95.95 0 0 0 .939-.803l1.77-11.209a.568.568 0 0 0 -.561-.658zm-4.565 6.374c-.316 1.871-1.801 3.127-3.695 3.127-.951 0-1.711-.305-2.199-.883-.484-.574-.668-1.391-.514-2.301.295-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.499.589.697 1.411.554 2.317zm22.007-6.374h-3.291a.954.954 0 0 0 -.787.417l-4.539 6.686-1.924-6.425a.953.953 0 0 0 -.912-.678h-3.234a.57.57 0 0 0 -.541.754l3.625 10.638-3.408 4.811a.57.57 0 0 0 .465.9h3.287a.949.949 0 0 0 .781-.408l10.946-15.8a.57.57 0 0 0 -.468-.895z"
                  fill="#253b80"
                />
                <path
                  d="m94.992 6.749h-6.84a.95.95 0 0 0 -.938.802l-2.766 17.537a.569.569 0 0 0 .562.658h3.51a.665.665 0 0 0 .656-.562l.785-4.971a.95.95 0 0 1 .938-.803h2.164c4.506 0 7.105-2.18 7.785-6.5.307-1.89.012-3.375-.873-4.415-.971-1.142-2.694-1.746-4.983-1.746zm.789 6.405c-.373 2.454-2.248 2.454-4.062 2.454h-1.031l.725-4.583a.568.568 0 0 1 .562-.481h.473c1.234 0 2.4 0 3.002.704.359.42.468 1.044.331 1.906zm19.653-.079h-3.273a.567.567 0 0 0 -.562.481l-.145.916-.23-.332c-.709-1.029-2.289-1.373-3.867-1.373-3.619 0-6.709 2.741-7.311 6.586-.312 1.918.131 3.752 1.219 5.031 1 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .564.66h2.949a.95.95 0 0 0 .938-.803l1.771-11.209a.571.571 0 0 0 -.565-.658zm-4.565 6.374c-.314 1.871-1.801 3.127-3.695 3.127-.949 0-1.711-.305-2.199-.883-.484-.574-.666-1.391-.514-2.301.297-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.501.589.699 1.411.554 2.317zm8.426-12.219-2.807 17.858a.569.569 0 0 0 .562.658h2.822c.469 0 .867-.34.939-.803l2.768-17.536a.57.57 0 0 0 -.562-.659h-3.16a.571.571 0 0 0 -.562.482z"
                  fill="#179bd7"
                />
                <path
                  d="m7.266 29.154.523-3.322-1.165-.027h-5.563l3.866-24.513a.316.316 0 0 1 .314-.268h9.38c3.114 0 5.263.648 6.385 1.927.526.6.861 1.227 1.023 1.917.17.724.173 1.589.007 2.644l-.012.077v.676l.526.298a3.69 3.69 0 0 1 1.065.812c.45.513.741 1.165.864 1.938.127.795.085 1.741-.123 2.812-.24 1.232-.628 2.305-1.152 3.183a6.547 6.547 0 0 1 -1.825 2c-.696.494-1.523.869-2.458 1.109-.906.236-1.939.355-3.072.355h-.73c-.522 0-1.029.188-1.427.525a2.21 2.21 0 0 0 -.744 1.328l-.055.299-.924 5.855-.042.215c-.011.068-.03.102-.058.125a.155.155 0 0 1 -.096.035z"
                  fill="#253b80"
                />
                <path
                  d="m23.048 7.667c-.028.179-.06.362-.096.55-1.237 6.351-5.469 8.545-10.874 8.545h-2.752c-.661 0-1.218.48-1.321 1.132l-1.409 8.936-.399 2.533a.704.704 0 0 0 .695.814h4.881c.578 0 1.069-.42 1.16-.99l.048-.248.919-5.832.059-.32c.09-.572.582-.992 1.16-.992h.73c4.729 0 8.431-1.92 9.513-7.476.452-2.321.218-4.259-.978-5.622a4.667 4.667 0 0 0 -1.336-1.03z"
                  fill="#179bd7"
                />
                <path
                  d="m21.754 7.151a9.757 9.757 0 0 0 -1.203-.267 15.284 15.284 0 0 0 -2.426-.177h-7.352a1.172 1.172 0 0 0 -1.159.992l-1.564 9.906-.045.289a1.336 1.336 0 0 1 1.321-1.132h2.752c5.405 0 9.637-2.195 10.874-8.545.037-.188.068-.371.096-.55a6.594 6.594 0 0 0 -1.017-.429 9.045 9.045 0 0 0 -.277-.087z"
                  fill="#222d65"
                />
                <path
                  d="m9.614 7.699a1.169 1.169 0 0 1 1.159-.991h7.352c.871 0 1.684.057 2.426.177a9.757 9.757 0 0 1 1.481.353c.365.121.704.264 1.017.429.368-2.347-.003-3.945-1.272-5.392-1.399-1.593-3.924-2.275-7.155-2.275h-9.38c-.66 0-1.223.48-1.325 1.133l-3.907 24.765a.806.806 0 0 0 .795.932h5.791l1.454-9.225z"
                  fill="#253b80"
                />
              </svg>
            </span>
            <div className="flex items-center w-full justify-between">
              <div className="flex text-sm flex-col w-full ml-2 items-start justify-between">
                <p>Paypal</p>
                <p className="text-gray-300">Wallet deposit</p>
              </div>
              <span className="text-green-400">+$904</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
