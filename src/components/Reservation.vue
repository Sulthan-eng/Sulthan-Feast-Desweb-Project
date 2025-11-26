<script setup>
import { ref, reactive } from 'vue';

const formData = reactive({
  name:'',
  number: '',
  email: '',
  room: '',
  date: '',
  time: '',
  guests: '1',
  notes:''
});

const isSubmitted = ref(false);

const handleSubmit = () => {
  const isConfirmed = confirm("Apakah Anda yakin ingin mengirim pesanan ini?");

  if (isConfirmed) {
    console.log('Formulir dikirim dengan data: ', formData); //debug
    isSubmitted.value = true;
  }
};

const handleReset = () => {
  const isConfirmed = confirm("Apakah Anda yakin ingin menghapus semua progress Anda?");

  if (isConfirmed) {
    formData.name = '';
    formData.number = '';
    formData.email = '';
    formData.room = '';
    formData.date = '';
    formData.time = '';
    formData.guests = 1;
    formData.notes = '';
  }
};

const availableTimes = [
  '10:00', '11:00', '12:00', '13:00', '14:00', '15.00',
  '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'
];
</script>

<template>
  <div class="p-4 text-white bg-zinc-900 pt-15 pb-20">
    <h1 class="font-['Cinzel_Decorative'] text-center text-3xl md:text-5xl font-semibold text-yellow-500 space-y-4">
      Reservations
    </h1>
    <p class="text-center text-gray-300 font-medium mt-5 leading-relaxed px-6">
      Rayakan hari spesial anda di Sulthan Fest dengan masakan, interior, serta
      alunan musik khas Timur Tengah yang akan memberikan anda kenangan yang tak
      terlupakan.
    </p>

    <div v-if="isSubmitted" class="mt-10 p-4 bg-green-800/50 border border-green-600 text-green-100 rounded-md text-center max-w-2xl mx-auto ">
      <p class="text-center font-bold text-lg">Reservasi Anda Berhasil Dikirim</p>
      <p>Terimakasih, kami akan segera menghubungi anda melalui Whatsapp/email untuk konfirmasi reservasi anda</p>
    </div>

    <form v-else @submit.prevent="handleSubmit" class="pt-16 max-w-2xl mx-auto">
      <div class="space-y-12">
        <div class="border-b border-white/10 pb-12">
          <h2 class="text-base/7 font-semibold text-white">
            Informasi Pribadi
          </h2>
          <p class="mt-1 text-sm/6 text-gray-400">
            Silahkan isi informasi yang diminta di bawah.
          </p>

          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-3">
              <label
                for="name"
                class="block text-sm/6 font-medium text-white"
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
                  class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                for="number"
                class="block text-sm/6 font-medium text-white"
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
                  class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div class="sm:col-span-4">
              <label for="email" class="block text-sm/6 font-medium text-white"
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
                  class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                for="room"
                class="block text-sm/6 font-medium text-white"
                >Ruangan*</label
              >
              <div class="mt-2 grid grid-cols-1">
                <select
                  id="room"
                  name="room"
                  v-model="formData.room"
                  required
                  class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500 sm:text-sm/6"
                >
                  <option disabled value="">Pilih Ruangan</option>
                  <option>Reguler Area</option>
                  <option>VIP Room</option>
                  <option>VVIP Room</option>
                  <option>Meeting Room</option>
                </select>
                <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4">
                  <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                </svg>
              </div>
            </div>

            <div class="sm:col-span-3">
              <label
                for="date"
                class="block text-sm/6 font-medium text-white"
                >Tanggal*</label
              >
              <div class="mt-2">
                <input
                  id="date"
                  type="date"
                  name="date"
                  v-model="formData.date"
                  required
                  class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500 sm:text-sm/6 [color-scheme:dark]"
                />
              </div>
            </div>

            <div class="sm:col-span-3">
              <label for="time" class="block text-sm/6 font-medium text-white"
                >Jam Reservasi*</label
              >
              <div class="mt-2 grid grid-cols-1">
                <select
                  id="time"
                  name="time"
                  v-model="formData.time"
                  required
                  class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/5 py-1.5 pr-8 pl-3 text-base text-white outline-1 -outline-offset-1 outline-white/10 *:bg-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500 sm:text-sm/6"
                >
                  <option disabled value="">Pilih Jam</option>
                  <option v-for="time in availableTimes" :key="time" :value="time">{{ time }}</option>
                </select>
                <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4">
                  <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                </svg>
              </div>
            </div>

            <div class="sm:col-span-2">
              <label for="guests" class="block text-sm/6 font-medium text-white">Jumlah Orang *</label>
              <div class="mt-2">
                <input
                  id="guests"
                  type="number"
                  name="guests"
                  min="1"
                  v-model="formData.guests"
                  required
                  class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500 sm:text-sm/6"
                />
              </div>
            </div>
            
            <div class="col-span-full">
              <label for="notes" class="block text-sm/6 font-medium text-white">Catatan Tambahan (Opsional)</label>
              <div class="mt-2">
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  v-model="formData.notes"
                  class="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500 sm:text-sm/6"
                  placeholder="Contoh: Request kursi bayi."
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" @click="handleReset" class="text-sm/6 font-semibold text-gray-300 hover:text-white transition-colors">
          Reset
        </button>
        <button
          type="submit"
          class="rounded-md bg-yellow-500 px-6 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
        >
          Kirim
        </button>
      </div>
    </form>
  </div>
</template>
