import { NavLinks } from "./utils/contants"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { SocialIcon } from "react-social-icons"

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  const sayHello = () => {
    alert("Hallo nama saya Putra senang belajar Web!")
  }

  return (
    <>
      {/* navbar */}
      <nav className="flex items-center justify-center px-28 py-4">
        <ul className="flex">
          {NavLinks.map((nav) => (
            <li
              key={nav.id}
              className="pr-6 hover:text-sky-300 ease-in-out duration-300"
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      {/* about */}
      <div
        id="about"
        data-aos="zoom-in"
        className="flex items-center justify-between px-20 h-[700px]"
      >
        <div className="flex-col w-4/12">
          <div className="font-bold text-6xl text-sky-300">Putra</div>
          <div className="mt-2 font-medium text-4xl">Anjelisna Syopandi</div>
          <div className="w-80 h-1 outline outline-offset-0 outline-1 rounded-full outline-sky-300 bg-sky-300 my-10"></div>
          <div
            href="#contact"
            className="outline outline-offset-0 outline-1 rounded-full outline-sky-300 text-sky-300 py-2 w-32 hover:bg-sky-300 hover:text-zinc-800 ease-in-out duration-300 text-center"
          >
            <a className="w-full h-full" href="#contact">
              Kontak Saya
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center w-4/12 p-8">
          <div className="w-auto p-2 rounded-full bg-zinc-900">
            <img
              onClick={sayHello}
              src={"./assets/img/pp.jpg"}
              alt="..."
              className="shadow rounded-full max-w-full h-auto align-middle cursor-pointer"
            />
          </div>
        </div>
        <div className="w-4/12">
          <div className="font-medium text-2xl text-sky-300">Tentang Saya</div>
          <div className="text-wrap text-justify mt-2">
            Saya Putra Anjelisna Syopandi mahasiswa semester 4 jurusan
            Komputerisasi Akuntansi, saya lahir di bandung, hobi saya futsal,
            saya memiliki kemampuan yaitu mudah berkomunikasi dengan anggota
            kelompok dan juga bisa mengerjakan ms word, dan juga excel
          </div>
        </div>
      </div>
      {/* pendidikan */}
      <div
        id="pendidikan"
        className="bg-zinc-700 py-16 flex flex-col items-center justify-center "
      >
        <div className="font-medium text-2xl">Riwayat Pendidikan</div>
        <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 mt-16 w-3/4">
          {/* <!-- left --> */}
          <div className="flex flex-row-reverse md:contents">
            <div
              data-aos="zoom-in"
              className="bg-zinc-700 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md outline outline-sky-300"
            >
              <h3 className="font-semibold text-xl mb-1">Masoem University</h3>
              <p className="leading-tight text-justify">
                Komputerisasi Akuntansi
              </p>
              <p>2022 - sekarang</p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-100 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-sky-300 shadow"></div>
            </div>
          </div>
          {/* <!-- right --> */}
          <div className="flex md:contents">
            <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-100 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-sky-300 shadow"></div>
            </div>
            <div
              data-aos="zoom-in"
              className="bg-zinc-700 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md outline outline-sky-300"
            >
              <h3 className="font-semibold text-xl mb-1">SMAN Tanjungsari</h3>
              <p className="leading-tight text-justify">2016 - 2019</p>
            </div>
          </div>
          {/* <!-- left --> */}
          <div className="flex flex-row-reverse md:contents">
            <div
              data-aos="zoom-in"
              className="bg-zinc-700 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md outline outline-sky-300"
            >
              <h3 className="font-semibold text-xl mb-1">SMPN 1 Tanjungsari</h3>
              <p className="leading-tight text-justify">2010 - 2016</p>
            </div>
            <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
              <div className="h-full w-6 flex items-center justify-center">
                <div className="h-full w-1 bg-gray-100 pointer-events-none"></div>
              </div>
              <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-sky-300 shadow"></div>
            </div>
          </div>
        </div>
      </div>
      {/* gellery */}
      <div
        id="gallery"
        className="px-20 py-20 flex flex-col items-center justify-center"
      >
        <div className="font-medium text-2xl">Gallery</div>
        <div className="grid grid-cols-3 gap-4 mt-10 w-3/4">
          <div className="grid gap-4">
            <div data-aos="zoom-in" className="bg-zinc-700 rounded-lg p-2">
              <img
                className="h-full max-w-full rounded-lg object-cover"
                src={"./assets/img/1.jpg"}
                alt=""
              />
            </div>
            <div data-aos="zoom-in" className="bg-zinc-700 rounded-lg p-2">
              <img
                className="h-full max-w-full rounded-lg object-cover"
                src={"./assets/img/4.jpg"}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div data-aos="zoom-in" className="bg-zinc-700 rounded-lg p-2">
              <img
                className="h-full max-w-full rounded-lg object-cover"
                src={"./assets/img/2.jpg"}
                alt=""
              />
            </div>
            <div data-aos="zoom-in" className="bg-zinc-700 rounded-lg p-2">
              <img
                className="h-full max-w-full rounded-lg object-cover"
                src={"./assets/img/5.jpg"}
                alt=""
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div data-aos="zoom-in" className="bg-zinc-700 rounded-lg p-2">
              <img
                className="h-full max-w-full rounded-lg object-cover"
                src={"./assets/img/3.jpg"}
                alt=""
              />
            </div>
            <div data-aos="zoom-in" className="bg-zinc-700 rounded-lg p-2">
              <img
                className="h-full max-w-full rounded-lg object-cover"
                src={"./assets/img/6.jpg"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* kontak */}
      <div
        id="contact"
        className="flex flex-col justify-center items-center bg-zinc-700 py-20"
      >
        <div className="font-medium text-2xl">Kontak</div>
        <div
          data-aos="zoom-in"
          className="mt-8 rounded-xl bg-zinc-800 p-2 text-xl w-72"
        >
          <SocialIcon url="web.whatsapp.com" /> +62 881 8128 1287
        </div>
        <div
          data-aos="zoom-in"
          className="mt-4 rounded-xl bg-zinc-800 p-2 text-xl w-72"
        >
          <SocialIcon url="www.google.com" /> putra1933@gmail.com
        </div>
        <div
          data-aos="zoom-in"
          className="mt-4 rounded-xl bg-zinc-800 p-2 text-xl w-72"
        >
          <SocialIcon url="www.instagram.com" /> Putra1933
        </div>
        <div
          data-aos="zoom-in"
          className="mt-4 rounded-xl bg-zinc-800 p-2 text-xl w-72"
        >
          <SocialIcon url="www.twitter.com" /> Putra1922
        </div>
      </div>
    </>
  )
}

export default App
