<template>
  <div
    class="min-h-screen relative overflow-hidden bg-[url('/images/Background/mobile/landing.png')] sm:bg-[url('~/assets/images/Background/KPOP.png')] bg-cover bg-no-repeat bg-fixed flex flex-col justify-around">
    <div
      class="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start p-6 px-0 gap-4 md:gap-0">
      <div
        class="flex space-x-2 md:space-x-2 rounded-full md:rounded-none md:rounded-r-full p-2 bg-gradient-to-r from-purple-primary to-purple-secondary">
        <img
          loading="lazy"
          src="/images/Orgs/PNBMINI.png"
          class="w-10 h-10 md:w-12 md:h-12 object-contain" />
        <img
          loading="lazy"
          src="/images/Orgs/MPKMINI.png"
          class="w-10 h-10 md:w-12 md:h-12 object-contain" />
        <img
          loading="lazy"
          src="/images/Orgs/OSISMINI.png"
          class="w-10 h-10 md:w-12 md:h-12 object-contain" />
        <img
          loading="lazy"
          src="/images/Orgs/KPUMINI.png"
          class="w-10 h-10 md:w-12 md:h-12 object-contain" />
      </div>

      <div
        class="hidden md:flex space-x-2 md:space-x-2 rounded-full md:rounded-none md:rounded-l-full p-2 bg-gradient-to-r from-purple-secondary to-purple-primary">
        <img
          loading="lazy"
          src="/images/Divisi/MM.png"
          class="w-10 h-10 md:w-12 md:h-12 object-contain" />
        <img
          loading="lazy"
          src="/images/Divisi/RPL.png"
          class="w-10 h-10 md:w-12 md:h-12 object-contain" />
        <img
          loading="lazy"
          src="/images/Divisi/TKJ.png"
          class="w-10 h-10 md:w-12 md:h-12 object-contain" />
      </div>
    </div>

    <main class="relative z-10 flex flex-col items-center justify-center px-6">
      <div class="mb-8 md:mb-12 text-center">
        <div
          class="bg-gradient-to-tr from-brown-secondary to-brown-primary px-4 py-2 md:px-6 md:py-2 rounded-sm shadow-2xl">
          <h1
            class="flex items-end justify-center gap-2 text-2xl md:text-5xl text-shadow-lg">
            <span class="font-extrabold text-title-primary">PENUS</span>
            <span class="text-white italic font-bold">E-voting</span>
          </h1>
        </div>
      </div>

      <div class="w-full max-w-sm md:max-w-md">
        <form @submit.prevent="handleSubmit" class="space-y-6 md:space-y-10">
          <div class="text-center mb-4 md:mb-8">
            <h2
              class="text-lg md:text-2xl font-semibold text-white tracking-wide">
              Masukan Data Diri Anda
            </h2>
          </div>

          <div class="flex flex-col items-center justify-center">
            <label
              class="text-transparent bg-clip-text bg-gradient-to-r from-purple-secondary to-purple-primary text-base md:text-xl font-bold italic tracking-wide text-center">
              NOMOR INDUK
            </label>
            <input
              v-model="formData.nomorinduk"
              type="text"
              class="w-full px-4 py-2 rounded-full bg-white/90 md:bg-white/95 border-2 border-white/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300/50 text-gray-800 placeholder-gray-400 text-base md:text-lg shadow-lg transition-all duration-300"
              placeholder="Masukkan nomor induk"
              required />
          </div>

          <div class="flex flex-col items-center justify-center">
            <label
              class="text-transparent bg-clip-text bg-gradient-to-r from-purple-secondary to-purple-primary text-base md:text-xl font-bold italic tracking-wide text-center">
              PASSWORD
            </label>
            <input
              v-model="formData.password"
              type="text"
              class="w-full px-4 py-2 rounded-full bg-white/90 md:bg-white/95 border-2 border-white/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300/50 text-gray-800 placeholder-gray-400 text-base md:text-lg shadow-lg transition-all duration-300"
              placeholder="Masukkan password"
              required />
          </div>

          <div v-if="errorMessage" class="text-red-500 text-center mb-4">
            {{ errorMessage }}
          </div>

          <div class="mb-6 md:mb-10 w-full flex justify-center">
            <button
              type="submit"
              class="bg-gradient-to-r from-purple-secondary to-purple-primary text-white font-bold py-2 px-6 md:px-8 rounded-full text-base md:text-xl tracking-wide shadow-2xl transform hover:scale-105 transition-all duration-300 active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-300/50 cursor-pointer">
              MASUK
            </button>
          </div>
        </form>
      </div>
    </main>

    <div class="relative z-10 text-center pb-6 md:pb-8">
      <p class="text-white/60 text-xs md:text-sm tracking-wide">
        Powered by
        <span
          class="font-semibold text-transparent bg-clip-text bg-gradient-to-tr from-brown-secondary to-brown-primary"
          >DEVACCTO IT</span
        >
      </p>
    </div>

    <div
      class="self-center md:hidden flex items-center justify-center space-x-2 md:space-x-2 rounded-full md:rounded-l-full w-44 p-2 bg-gradient-to-r from-purple-secondary to-purple-primary">
      <img
        loading="lazy"
        src="/images/Divisi/MM.png"
        class="w-10 h-10 md:w-12 md:h-12 object-contain" />
      <img
        loading="lazy"
        src="/images/Divisi/RPL.png"
        class="w-10 h-10 md:w-12 md:h-12 object-contain" />
      <img
        loading="lazy"
        src="/images/Divisi/TKJ.png"
        class="w-10 h-10 md:w-12 md:h-12 object-contain" />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  path: "/login",
});

useHead({
  title: "PENUS E-Voting - Login",
});

const formData = ref({
  nomorinduk: "",
  password: "",
});

const errorMessage = ref<string | null>(null);

const { login } = useAuth();

const handleSubmit = async () => {
  errorMessage.value = null; 
  try {
    await login(formData.value);
  } catch (error: any) {
    errorMessage.value = error.message || "Terjadi kesalahan saat login.";
    console.error(error);
  }
};
</script>
