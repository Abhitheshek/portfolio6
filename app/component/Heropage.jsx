export default function Heropage () {
  return (
    <div className="overflow-x-hidden relative bg-white" style={{ width: '100%', height: '100%', padding: '10px' }}>
      <main>
        <div className="mx-auto w-full pt-4 pb-4 text-center">
          <div className="px-2">
            <div className='w-full mt-16 h-full mb-24'>
              <span className="text-orange-500 font-extrabold text-2xl " id="typed">
                Scroll the Laptop screen
              </span>
            </div>
            <h1 className="text-2xl tracking-tight font-extrabold text-gray-900">
              <span className="block">Hello everyone my self</span>
              <span className="block text-orange-600">Abhishek Yadav</span>
            </h1>
            <p className="mt-2 text-base text-gray-500">
              I'm from Bhadila Doyam, Mahen Deoria, UP, a small town that fuels my big dreams. 🚀
              Exploring new things and diving into the latest tech innovations is what keeps me inspired. 💡
              When I’m not geeking out over tech, you'll probably find me singing my heart out—it’s my happy place! 🎤✨
              Let’s connect and create something amazing together! 🌈
            </p>
            <div className="mt-4 flex justify-center gap-2">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700"
                >
                  Get started
                </a>
              </div>
              <div className="rounded-md shadow">
                <a
                  href="https://www.instagram.com/quantumabhishek?igsh=MXRpOHVndWJibWh3eA=="
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                >
                  Insta ID
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-32">
          <img
            className="absolute object-top inset-0 w-full h-screen object-cover"
            src="/my pic2.jpg"
            alt=""
          />
        </div>
      </main>
    </div>
  )
};