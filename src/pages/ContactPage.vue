<template>
  <div class="head rounded-md flex flex-row p-3 m-3 bg-slate-50">
    <div class="basis-1/2 px-5 flex flex-col justify-center items-center">
      <h2 class="text-4xl py-3 font-thin text-center text-aqua">Contact Us</h2>
      <p class="text-sm text-center from-neutral-900">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
        aspernatur incidunt aliquam placeat ipsum dolores. Quae optio labore
        tempora molestiae facilis quidem culpa minus itaque!
      </p>
    </div>

    <div class="basis-1/2">
      <div class="p-2 mx-2">
        <div class="w-full md:w-96 md:max-w-full mx-auto">
          <div class="p-6 border border-gray-300 sm:rounded-md">
            <form method="POST" action="https://herotofu.com/start">
              <label class="block mb-6">
                <span class="text-gray-700">Your name</span>
                <input
                  type="text py-4"
                  name="name"
                  class="
                    block
                    w-full
                    mt-1
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                  "
                  placeholder="Rakibul Hasan"
                />
              </label>
              <label class="block mb-6">
                <span class="text-gray-700">Email address</span>
                <input
                  name="email"
                  type="email"
                  class="
                    block
                    w-full
                    mt-1
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                  "
                  placeholder="developer@creativetechpark.com"
                  required
                />
              </label>
              <label class="block mb-6">
                <span class="text-gray-700">Message</span>
                <textarea
                  name="message"
                  class="
                    block
                    w-full
                    mt-1
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:border-indigo-300
                    focus:ring
                    focus:ring-indigo-200
                    focus:ring-opacity-50
                  "
                  rows="3"
                  placeholder="Tell us what you're thinking about..."
                ></textarea>
              </label>
              <div class="mb-6">
                <button
                  type="submit"
                  class="
                    h-10
                    px-5
                    text-indigo-100
                    bg-indigo-700
                    rounded-lg
                    transition-colors
                    duration-150
                    focus:shadow-outline
                    hover:bg-indigo-800
                  "
                >
                  Contact Us
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
