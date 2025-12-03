<script setup>
import { ref, reactive, computed } from "vue";

const formData = reactive({
  name: "",
  number: "",
  email: "",
  room: "",
  date: "",
  time: "",
  guests: "1",
  notes: "",
});

const isSubmitted = ref(false);

const handleSubmit = () => {
  const isConfirmed = confirm("Apakah Anda yakin ingin mengirim reservasi?");

  if (isConfirmed) {
    console.log("Formulir dikirim dengan data: ", formData); //debug
    isSubmitted.value = true;
  }
};

const handleReset = () => {
  const isConfirmed = confirm(
    "Apakah Anda yakin ingin menghapus semua progress Anda?",
  );

  if (isConfirmed) {
    formData.name = "";
    formData.number = "";
    formData.email = "";
    formData.room = "";
    formData.date = "";
    formData.time = "";
    formData.guests = 1;
    formData.notes = "";
  }
};

const availableTimes = [
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15.00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
];

const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2,'0');

  return `${year}-${month}-${day}`;
}

const minDate = computed(() => getTodayDate());
</script>

<template>
  <div class="bg-zinc-900 p-4 pt-15 pb-120 text-white">
    <h1
      class="space-y-4 text-center font-['Cinzel_Decorative'] text-3xl font-semibold text-yellow-500 md:text-5xl"
    >
      Reservations
    </h1>
    <p
      class="mx-auto mt-8 max-w-3xl px-6 text-center leading-relaxed font-medium text-gray-300"
    >
      Rayakan hari spesial anda di Sulthan Fest dengan masakan, interior, serta
      alunan musik khas Timur Tengah yang akan memberikan anda kenangan yang tak
      terlupakan.
    </p>

    <div
      v-if="isSubmitted"
      class="mx-auto mt-12 max-w-2xl rounded-md border border-green-600 bg-green-800/50 p-5 text-center text-green-100"
    >
      <p class="text-center text-lg font-bold">
        Reservasi Anda Berhasil Dikirim
      </p>
      <p>
        Terimakasih, kami akan segera menghubungi anda melalui Whatsapp/email
        untuk konfirmasi reservasi anda
      </p>
    </div>

    <form
      v-else
      @submit.prevent="handleSubmit"
      class="mx-auto mt-12 max-w-4xl rounded-2xl border border-white/5 bg-zinc-800/80 p-6 shadow-2xl md:p-10"
    >
      <div class="space-y-12">
        <div class="pb-4">
          <h2 class="text-lg font-semibold text-white">Informasi Pribadi</h2>
          <p class="mt-1 text-sm text-gray-400">
            Silahkan isi informasi yang diminta di bawah.
          </p>

          <div class="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label for="name" class="block text-sm font-medium text-white"
                >Nama Lengkap*</label
              >
              <div class="mt-2">
                <input
                  id="name"
                  type="text"
                  name="name"
                  autocomplete="given-name"
                  v-model="formData.name"
                  required
                  placeholder="Masukkan nama lengkap"
                  class="block w-full rounded-md bg-zinc-950/50 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="number" class="block text-sm font-medium text-white"
                >Nomor Whatsapp*</label
              >
              <div class="mt-2">
                <input
                  id="number"
                  type="tel"
                  name="number"
                  autocomplete="tel"
                  v-model="formData.number"
                  required
                  placeholder="08xxxxxxxxxx"
                  class="block w-full rounded-md bg-zinc-950/50 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="sm:col-span-6">
              <label for="email" class="block text-sm font-medium text-white"
                >Alamat Email*</label
              >
              <div class="mt-2">
                <input
                  id="email"
                  type="email"
                  name="email"
                  autocomplete="email"
                  v-model="formData.email"
                  required
                  placeholder="emailanda@gmail.com"
                  class="block w-full rounded-md bg-zinc-950/50 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="room" class="block text-sm font-medium text-white"
                >Ruangan*</label
              >
              <div class="mt-2 grid grid-cols-1">
                <select
                  id="room"
                  name="room"
                  v-model="formData.room"
                  required
                  class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-zinc-950/50 py-2 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500 sm:text-sm"
                >
                  <option disabled value="">Pilih Ruangan</option>
                  <option>Reguler Area</option>
                  <option>VIP Room</option>
                  <option>VVIP Room</option>
                  <option>Meeting Room</option>
                </select>
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                >
                  <path
                    d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="date" class="block text-sm font-medium text-white"
                >Tanggal*</label
              >
              <div class="mt-2">
                <input
                  id="date"
                  type="date"
                  name="date"
                  v-model="formData.date"
                  :min="minDate"
                  required
                  class="5 block w-full rounded-md bg-zinc-950/50 px-3 py-2 text-base text-white scheme-dark outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="time" class="block text-sm font-medium text-white"
                >Jam Reservasi*</label
              >
              <div class="mt-2 grid grid-cols-1">
                <select
                  id="time"
                  name="time"
                  v-model="formData.time"
                  required
                  class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-zinc-950/50 py-2 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500 sm:text-sm"
                >
                  <option disabled value="">Pilih Jam</option>
                  <option
                    v-for="time in availableTimes"
                    :key="time"
                    :value="time"
                  >
                    {{ time }}
                  </option>
                </select>
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                  class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                >
                  <path
                    d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="guests" class="block text-sm font-medium text-white"
                >Jumlah Orang*</label
              >
              <div class="mt-2">
                <input
                  id="guests"
                  type="number"
                  name="guests"
                  min="1"
                  v-model="formData.guests"
                  required
                  class="block w-full rounded-md bg-zinc-950/50 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500 sm:text-sm"
                />
              </div>
            </div>

            <div class="col-span-full">
              <label for="notes" class="block text-sm font-medium text-white"
                >Catatan Tambahan (Opsional)</label
              >
              <div class="mt-2">
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  v-model="formData.notes"
                  class="5 block w-full rounded-md bg-zinc-950/50 px-3 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500 sm:text-sm"
                  placeholder="Contoh: Request kursi bayi."
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-8 flex items-center justify-end gap-x-6 border-t border-white/10 pt-6"
      >
        <button
          type="button"
          @click="handleReset"
          class="text-sm font-semibold text-gray-300 transition-colors hover:text-white"
        >
          Reset
        </button>
        <button
          type="submit"
          class="rounded-md bg-yellow-500 px-8 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-yellow-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
        >
          Kirim
        </button>
      </div>
    </form>
  </div>
</template>
