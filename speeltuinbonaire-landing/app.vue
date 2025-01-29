<template>
  <div>
    <NuxtRouteAnnouncer />
    <div
      class="flex flex-col bg-white text-black items-center justify-center p-8 pb-12 xl:px-64 xl:py-16"
    >
      <NuxtImg src="/logo.png" />

      <div class="text-center p-6 max-w-xl">
        <h1 class="text-gray-700 text-3xl font-bold">
          Speeltuin Bonaire Hoogvliet
        </h1>
        <p class="text-gray-700 mt-2 text-lg">
          Onze website is momenteel in aanbouw!
        </p>
        <section class="py-12">
          <div class="max-w-6xl mx-auto text-center px-4">
            <h2 class="text-lg text-gray-700 mb-2">Heeft u vragen?</h2>
            <p class="text-gray-500 mb-8">
              Neem contact met ons op via een van de onderstaande kanalen:
            </p>

            <div class="flex flex-col items-center gap-6">
              <!-- Facebook -->
              <a
                href="https://www.facebook.com/speeltuin.bonaire/"
                target="_blank"
                class="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-all w-full sm:w-auto"
              >
                <Icon size="24" name="fa-brands:facebook" />
                <span class="text-lg text-gray-800">speeltuin.bonaire</span>
              </a>

              <!-- WhatsApp -->
              <a
                href="https://wa.me/3165133640"
                target="_blank"
                class="flex items-center space-x-2 text-green-500 hover:text-green-700 transition-all w-full sm:w-auto"
              >
                <Icon size="24" name="fa-brands:whatsapp" />
                <span class="text-lg text-gray-800"
                  >065133640 (alleen App)</span
                >
              </a>

              <!-- Email -->
              <a
                href="mailto:info@speeltuinbonaire.nl"
                class="flex items-center space-x-2 text-gray-800 hover:text-gray-600 transition-all w-full sm:w-auto"
              >
                <Icon size="24" name="fa6-solid:envelope" />
                <span class="text-lg text-gray-800"
                  >info@speeltuinbonaire.nl</span
                >
              </a>

              <!-- Adres -->
              <div
                class="flex items-center space-x-2 text-gray-800 w-full sm:w-auto"
              >
                <Icon size="24" name="fa-solid:map-marker-alt" />
                <span class="text-lg text-gray-800"
                  >Windmolenpad 24, 3193AR Hoogvliet Rotterdam</span
                >
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
