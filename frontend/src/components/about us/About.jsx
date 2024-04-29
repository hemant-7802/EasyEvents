export default function About({className}) {
  return (
    <div className={`${className} py-12 px-10`}>
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-20 sm:py-40 lg:px-8 rounded-3xl">
        <img
          src="https://i.postimg.cc/V6KGS11q/fireworks-4768501-1920.jpg"
          alt=""
          className="absolute inset-0 opacity-40 -z-10 h-full w-full object-cover" />

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">Here we are providing you a greate way to communicate all tha necessary informations about your wedding or other events . Our website acts as a dedicated online plateform that serves as the center hub of information about your events . So that you can save your precious hours.</p>
        </div>
      </div>
    </div>
  )
}
