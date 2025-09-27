<template>
  <div
    class="min-h-screen relative overflow-hidden bg-[url('/images/Background/mobile/landing.png')] sm:bg-[url('~/assets/images/Background/KPOP.png')] bg-cover bg-no-repeat bg-fixed">
    <button
      @click="handleLogout"
      class=" absolute right-4 top-4 font-semibold py-2 px-4 rounded-sm bg-gradient-to-r from-brown-secondary to-brown-primary text-[#19303E] hover:bg-red-600 transition-colors hover:cursor-pointer">
      Logout
    </button>
    <main
      class="container mx-auto px-4 relative z-10 max-w-4xl text-center text-white">
      <section
        id="cta"
        class="hero min-h-screen flex flex-col items-center justify-center">
        <div class="flex items-center justify-center mb-8 mt-8">
          <div
            class="p-1 bg-brown-secondary rounded-full flex items-center justify-center mr-4">
            <img
              loading="lazy"
              src="/images/Orgs/PNBMINI.png"
              class="w-8 h-8 md:w-10 md:h-10 object-contain" />
          </div>
          <h1 class="text-md md:text-2xl font-bold">
            SMK PLUS PELITA NUSANTARA
          </h1>
        </div>
        <div class="mb-12 flex flex-col items-">
          <h2 class="text-5xl md:text-8xl font-bold mb-2 text-shadow-lg">
            PENUS
          </h2>
          <h2
            class="text-5xl md:text-8xl text-shadow-lg font-bold mb-4 px-3 rounded-sm bg-gradient-to-r from-brown-secondary to-brown-primary text-[#19303E]">
            E-VOTING
          </h2>
        </div>
        <div class="mb-8">
          <p class="text-md md:text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            Selamat datang ke dalam program
            <span class="font-semibold">E-voting Penus</span>. Silahkan geser
            kebawah untuk memilih kandidat MPK dan OSIS favorit anda atau klik
            tombol yang ada dibawah.
          </p>
          <NuxtLink
            to="#vote"
            class="bg-gradient-to-r from-purple-secondary to-purple-primary cursor-pointer text-white font-semibold py-2 px-10 rounded-full transition-all hover:shadow-lg hover:scale-105 mb-12">
            Saya Ingin Vote Sekarang
          </NuxtLink>
        </div>
      </section>

      <section
        id="advice"
        class="flex flex-col items-center justify-around mx-auto min-h-screen">
        <div>
          <h3 class="text-2xl font-bold mb-6">
            Tentukan Pilihan-Mu Dengan Bijak dan Cerdas
          </h3>
          <blockquote class="italic text-md md:text-lg mb-4 leading-relaxed">
            "Setiap suara adalah kekuatan, sekecil apapun ia tetap memberi
            dampak besar. Gunakan hak pilih Anda dengan penuh tanggung jawab,
            karena dari pilihan itu akan lahir pemimpin yang akan membawa
            perubahan bagi bangsa dan generasi mendatang."
          </blockquote>
          <p class="text-md md:text-xl font-semibold">~ Nelsoun Mandela</p>
        </div>
      </section>

      <section
        id="vote"
        class="flex flex-col items-center justify-around mx-auto mb-32">
        <h2 class="text-xl md:text-2xl font-bold mb-10">
          Silahkan Klik Gambar Dibawah Ini Untuk Voting
        </h2>

        <div class="flex gap-8">
          <div class="relative hover:scale-105 transition-all cursor-pointer">
            <div
              class="relative bg-mpk flex flex-col items-center p-4 rounded-lg shadow-mpk w-64 h-80 duration-300 hover:drop-shadow-biru-mpk hover:scale-105 cursor-pointer max-md:w-36 max-md:h-52">
              <NuxtLink to="/paslon/mpk" class="p-2">
                <h2 class="text-4xl font-bold text-gray-800 mb-2">MPK</h2>
                <img loading="lazy" class="w-40" src="/images/Orgs/MPK.png" />
              </NuxtLink>
            </div>
          </div>

          <div class="relative hover:scale-105 transition-all cursor-pointer">
            <div
              class="relative bg-osis flex flex-col items-center p-4 rounded-lg shadow-osis w-64 h-80 duration-300 hover:drop-shadow-kuning-osis hover:scale-105 cursor-pointer max-md:w-36 max-md:h-52">
              <NuxtLink to="/paslon/osis" class="p-2">
                <h2 class="text-4xl font-bold text-gray-800 mb-2">OSIS</h2>
                <img
                  loading="lazy"
                  class="w-full"
                  src="/images/Orgs/OSIS.png" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
const { logout } = useAuth();

const handleLogout = async () => {
  await logout();
};
</script>
