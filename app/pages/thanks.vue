<template>
  <div
    class="min-h-screen relative overflow-hidden bg-[url('/images/Background/mobile/landing.png')] sm:bg-[url('~/assets/images/Background/KPOP.png')] bg-cover bg-no-repeat bg-fixed">
    <main
      class="container mx-auto px-4 relative z-10 max-w-4xl text-center text-white flex flex-col items-center justify-center min-h-screen">
      
      <div class="flex items-center justify-center mb-8">
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
      
      <div class="mb-8">
        <h2 class="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg">
          TERIMA KASIH!
        </h2>
        <div class="bg-gradient-to-r from-brown-secondary to-brown-primary p-1 mb-8 rounded-sm">
          <div class="bg-[#19303E] p-4 rounded-sm">
            <p class="text-md md:text-xl mb-6 max-w-2xl mx-auto leading-relaxed">
              Terima kasih telah berpartisipasi dalam voting ini! Suara Anda sangat berharga bagi kami. Kami sedang memproses hasil perhitungan suara dan akan mengumumkannya sesegera mungkin. Silakan pantau terus untuk informasi lebih lanjut.
            </p>
          </div>
        </div>
        
        <div class="mt-8">
          <button
            @click="handleLogout"
            class="bg-gradient-to-r from-purple-secondary to-purple-primary cursor-pointer text-white font-semibold py-2 px-10 rounded-full transition-all hover:shadow-lg hover:scale-105">
            Kembali ke Halaman Login
          </button>
        </div>
      </div>
      
      <div class="text-center pb-6 md:pb-8">
        <p class="text-white/60 text-xs md:text-sm tracking-wide">
          Powered by
          <span
            class="font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-brown-secondary to-brown-primary"
            >DEVACCTO IT</span
          >
        </p>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { useAuth } from '~/composables/Auth';

const { logout } = useAuth();

const handleLogout = async () => {
  await logout();
};

definePageMeta({
  path: "/",
});

useHead({
  title: "PENUS E-Voting - Terima Kasih",
});
</script>
