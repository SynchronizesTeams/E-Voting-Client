<template>
  <div
    class="min-h-screen bg-[url('~/assets/images/Background/KPOP.png')] bg-cover bg-no-repeat bg-fixed p-6"
  >
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-white mb-2">Dashboard Admin</h1>
        <p class="text-gray-300">E-Voting SMK Plus Pelita Nusantara</p>
      </div>

      <div class="flex flex-col sm:flex-row sm:flex-wrap gap-4 mb-8">
        <div
          class="flex-1 bg-gradient-to-r from-brown-secondary to-brown-primary text-[#19303E] p-4 rounded-lg text-center"
        >
          <div class="text-2xl font-bold">{{ totalVotes }}</div>
          <div class="text-sm">Total Votes</div>
        </div>
        <div
          class="flex-1 bg-gradient-to-r from-brown-secondary to-brown-primary text-[#19303E] p-4 rounded-lg text-center"
        >
          <div class="text-2xl font-bold">{{ mpkVotes }}</div>
          <div class="text-sm">MPK Votes</div>
        </div>
        <div
          class="flex-1 bg-gradient-to-r from-brown-secondary to-brown-primary text-[#19303E] p-4 rounded-lg text-center"
        >
          <div class="text-2xl font-bold">{{ osisVotes }}</div>
          <div class="text-sm">OSIS Votes</div>
        </div>
        <!-- <div
          class="flex-1 bg-gradient-to-r from-brown-secondary to-brown-primary text-[#19303E] py-4 px-10 rounded-lg text-center cursor-pointer"
          @click=""
        >
          <div
            class="text-xl bg-gradient-to-r from-purple-secondary to-purple-primary text-white font-semibold py-2 px-5 rounded-full transition-all hover:shadow-lg hover:scale-105"
          >
            Details
          </div>
          <div class="text-sm">Not Vote</div>
        </div> -->
      </div>

      <div class="flex flex-col md:flex-row gap-6 mb-8">
        <div
          class="flex-1 bg-gradient-to-r from-brown-secondary to-brown-primary rounded-lg p-6"
        >
          <h3 class="text-xl font-bold mb-4">Hasil MPK</h3>
          <PieChart
            :labels="mpkData.labels"
            :values="mpkData.values"
            title="Voting MPK"
            :colors="['#3B82F6', '#10B981', '#EF4444']"
          />
        </div>

        <div
          class="flex-1 bg-gradient-to-r from-brown-secondary to-brown-primary rounded-lg p-6"
        >
          <h3 class="text-xl font-bold mb-4">Hasil OSIS</h3>
          <PieChart
            :labels="osisData.labels"
            :values="osisData.values"
            title="Voting OSIS"
            :colors="['#8B5CF6', '#F97316', '#EC4899']"
          />
        </div>
      </div>

      <div
        class="bg-gradient-to-r from-brown-primary to-brown-secondary rounded-lg p-6 mt-8"
      >
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-xl font-bold">
            Belum Voting {{ selectedKelas || "" }}
          </h3>

          <select
            v-model="selectedKelas"
            @change="fetchSiswaByKelas(selectedKelas)"
            class="px-3 py-2 rounded-lg border border-gray-300"
          >
            <option disabled value="">Pilih Kelas</option>
            <option v-for="k in daftarKelas" :key="k" :value="k">
              {{ k }}
            </option>
          </select>
        </div>

        <!-- Tabel -->
        <!-- <div v-if="loading" class="text-gray-500 text-center py-4">
          Loading...
        </div> -->

        <!-- Table nama siswa belum vote -->
        <div class="overflow-x-auto">
          <table
            v-if="students.length > 0"
            class="min-w-full text-sm text-left text-gray-700"
          >
            <thead>
              <tr class="bg-brown-secondary text-[#19303E]">
                <th class="px-4 py-2">No</th>
                <th class="px-4 py-2">Nama</th>
                <th class="px-4 py-2">Kelas</th>
                <th class="px-4 py-2">Keterangan</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(siswa, index) in students"
                :key="siswa.id"
                class="border-b hover:bg-brown-secondary/30"
              >
                <td class="px-4 py-2">{{ index + 1 }}</td>
                <td class="px-4 py-2">{{ siswa.name }}</td>
                <td class="px-4 py-2">{{ siswa.class }}</td>
                <td class="px-4 py-2 text-red-600 font-semibold">belum vote</td>
              </tr>
            </tbody>
          </table>

          <div v-else class="text-center text-gray-500 py-4">
            Tidak ada siswa yang belum vote di kelas ini 🎉
          </div>
        </div>
      </div>

      <!-- Logging -->
      <div
        class="bg-gradient-to-r from-brown-primary to-brown-secondary rounded-lg p-6 mt-8"
      >
        <h3 class="text-xl font-bold mb-4">Voting Logs</h3>
        <div class="overflow-x-auto">
          <table
            v-if="logs.length > 0"
            class="min-w-full text-sm text-left text-gray-700"
          >
            <thead>
              <tr class="bg-brown-secondary text-[#19303E]">
                <th class="px-4 py-2">No</th>
                <th class="px-4 py-2">Log</th>
                <th class="px-4 py-2">Waktu Voting</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(log, index) in logs"
                :key="log.id"
                class="border-b hover:bg-brown-secondary/30"
              >
                <td class="px-4 py-2">{{ index + 1 }}</td>
                <td class="px-4 py-2">
                  {{ log.user.name }} memilih OSIS Kandidat {{ log.voted_osis }}
                  dan MPK Kandidat {{ log.voted_mpk }}
                </td>
                <td class="px-4 py-2">{{ new Date(log.created_at).toLocaleString() }}</td>
              </tr>
            </tbody>
          </table>
          <div v-else class="text-center text-gray-500 py-4">
            Tidak ada log voting tersedia.
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    v-if="showNotVoteModal"
    class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
  >
    <div class="bg-white rounded-lg p-6 max-w-sm w-full shadow-xl text-center">
      <h2 class="text-xl font-bold mb-4">Belum Voting</h2>
      <ul class="space-y-2">
        <li
          v-for="item in notVoteData"
          :key="item.kelas"
          class="p-2 bg-gray-100 rounded"
        >
          <div class="font-semibold">{{ item.kelas }}</div>
          <div class="text-sm">
            Belum Vote: {{ item.belum_vote }} / Total: {{ item.total }}
          </div>
        </li>
      </ul>
      <button
        @click="showNotVoteModal = false"
        class="bg-gradient-to-r from-purple-secondary to-purple-primary text-white px-4 py-2 rounded-lg hover:scale-105 transition"
      >
        Tutup
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NotVoteListResponse } from "~/types/main.type";

definePageMeta({
  path: "/vote-stats",
});
const config = useRuntimeConfig();



const {
    mpkData,
    osisData,
    totalVotes,
    mpkVotes,
    osisVotes,
    fetchAll,
    votingLogs,
    loading,
    notVoteData,
    students,
    selectedKelas,
    daftarKelas,
    showNotVoteModal,
    fetchDaftarKelas,
    fetchSiswaByKelas,
    logs,
  } = useDashboard();





onMounted(() => {
  fetchAll();
  votingLogs();
  fetchDaftarKelas();
});
</script>
