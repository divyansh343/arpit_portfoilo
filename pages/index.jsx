import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Nav from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Nav />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto max-w-7x1">
          <div class="flex flex-wrap w-full mb-4 p-4">
            <div class="w-full mb-6 lg:mb-0">
              <h1 class="sm:text-4xl text-5xl font-bold title-font mb-2 text-white">Work</h1>
              <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div class="flex flex-wrap -m-4">

            <div class="xl:w-1/3 md:w-1/2 p-10">
              <div class="bg-gray-900 opacity-85  border-1   rounded-lg">

                <Image class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
                  height={720}
                  width={1200}
                  src="https://images.unsplash.com/photo-1580746353748-e7b3febae39a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZpbG0lMjBwcm9kdWN0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Image Size 720x400" />
                {/* <h2 class="text-lg text-white font-medium title-font mb-4">Chichen Itza</h2> */}
                <p class="leading-relaxed mx-3 pb-2 text-white text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-10">
              <div class="bg-gray-900 opacity-85  border-1   rounded-lg">

                <Image class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
                  height={720}
                  width={1200}
                  src="https://images.unsplash.com/photo-1580746353748-e7b3febae39a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZpbG0lMjBwcm9kdWN0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Image Size 720x400" />
                {/* <h2 class="text-lg text-white font-medium title-font mb-4">Chichen Itza</h2> */}
                <p class="leading-relaxed mx-3 pb-2 text-white text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-10">
              <div class="bg-gray-900 opacity-85  border-1   rounded-lg">

                <Image class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
                  height={720}
                  width={1200}
                  src="https://images.unsplash.com/photo-1580746353748-e7b3febae39a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZpbG0lMjBwcm9kdWN0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Image Size 720x400" />
                {/* <h2 class="text-lg text-white font-medium title-font mb-4">Chichen Itza</h2> */}
                <p class="leading-relaxed mx-3 pb-2 text-white text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-10">
              <div class="bg-gray-900 opacity-85  border-1   rounded-lg">

                <Image class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
                  height={720}
                  width={1200}
                  src="https://images.unsplash.com/photo-1580746353748-e7b3febae39a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZpbG0lMjBwcm9kdWN0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Image Size 720x400" />
                {/* <h2 class="text-lg text-white font-medium title-font mb-4">Chichen Itza</h2> */}
                <p class="leading-relaxed mx-3 pb-2 text-white text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-10">
              <div class="bg-gray-900 opacity-85  border-1   rounded-lg">

                <Image class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
                  height={720}
                  width={1200}
                  src="https://images.unsplash.com/photo-1580746353748-e7b3febae39a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZpbG0lMjBwcm9kdWN0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Image Size 720x400" />
                {/* <h2 class="text-lg text-white font-medium title-font mb-4">Chichen Itza</h2> */}
                <p class="leading-relaxed mx-3 pb-2 text-white text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
            <div class="xl:w-1/3 md:w-1/2 p-10">
              <div class="bg-gray-900 opacity-85  border-1   rounded-lg">

                <Image class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
                  height={720}
                  width={1200}
                  src="https://images.unsplash.com/photo-1580746353748-e7b3febae39a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZpbG0lMjBwcm9kdWN0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Image Size 720x400" />
                {/* <h2 class="text-lg text-white font-medium title-font mb-4">Chichen Itza</h2> */}
                <p class="leading-relaxed mx-3 pb-2 text-white text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />

    </>
  )
}
