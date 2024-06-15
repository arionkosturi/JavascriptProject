export const headerHTML = `
        <div class="flex justify-between items-center py-4">
          <!-- <div class="flex"> -->
            <!-- Logo -->
            <div class="ml-8 font-bold text-purple-700 text-xl">
              <a href="index.html">
                <i class="fa-newspaper fa-regular"><p>news</p></i>
              </a>
            </div>

            <!--Search-->
            <div
              class="flex -space-x-16 mx-10 xl:ml-40 rounded-full w-3/5 xl:w-full text-purple-700 group hover:ring ring-purple-300"
            >
              <input
                type="text"
                class="border-purple-600 bg-white dark:bg-neutral-900 focus:ring-opacity-70 p-2 border border-opacity-30 rounded-full w-full focus:outline-none focus:ring focus:ring-purple-600"
                placeholder="Search"
              />
              <div class="flex text-center">
                <i
                  class="group-hover:bg-purple-600 group-hover:text-white group-active:bg-green-900 bg-purple-300 dark:bg-slate-900 bg-opacity-60 hover:bg-opacity-80 p-2 rounded-full w-16 text-xl hover:text-white fa fa-search"
                ></i>
              </div>
            </div>
            <!--./Search-->
          <!-- </div> -->
          <!-- Menu Toggler -->
          <label for="menu-toggler">
            <i
              class="xl:hidden mx-4 my-2 dark:text-gray-300 fa-bars fa-solid"
            ></i>
          </label>
          <input type="checkbox" id="menu-toggler" class="hidden peer" />
          <!-- ./Menu Toggler -->

          <!-- NAVBAR -->
          <nav
            class="peer-checked:block xl:relative top-16 xl:top-0 absolute xl:flex justify-end md:items-center hidden bg-white dark:bg-neutral-800 shadow-md lg:shadow-none sm:mt-0 xl:mr-10 py-2 w-full"
          >
            <div
              class="flex xl:flex-row flex-col shadow-md xl:shadow-none mx-4 px-2 text-left text-purple-700"
            >
              <a
                class="hover:bg-purple-600 sm:px-2 text-md hover:text-white transition-all duration-300 ease-in-out"
                href="#"
                >News</a
              >
              <a
                class="hover:bg-purple-600 sm:px-2 text-md hover:text-white transition-all duration-300 ease-in-out"
                href="category.html?category=Finance"
                >Finance</a
              >
              <a
                class="hover:bg-purple-600 sm:px-2 text-md hover:text-white transition-all duration-300 ease-in-out"
                href="#"
                >Sports</a
              >
              <!-- Dropdown -->
              <div
                class="inline-block relative hover:bg-purple-600 text-left hover:text-white group"
              >
                <button
                  type="button"
                  class="inline-flex justify-left items-center hover:bg-purple-600 sm:px-2 w-full text-md hover:text-white transition-all duration-300 ease-in-out"
                >
                  More
                  <!-- Dropdown arrow -->
                  <svg
                    class="ml-1 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path fill-rule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                  </svg>
                </button>
                <!-- Dropdown items -->
                <div
                  class="group-hover:visible top-5 left-0 absolute bg-white dark:bg-neutral-800 opacity-0 group-hover:opacity-100 shadow-lg mt-1 rounded-md w-full xl:w-auto transition duration-300 invisible"
                >
                  <div class="py-1">
                    <a
                      href="#"
                      class="block hover:bg-purple-600 px-4 py-2 text-gray-700 text-sm hover:text-white dark:text-gray-200"
                      >News</a
                    >
                    <a
                      href="#"
                      class="block hover:bg-purple-600 px-4 py-2 text-gray-700 text-sm hover:text-white dark:text-gray-200"
                      >Life</a
                    >
                    <a
                      href="#"
                      class="block hover:bg-purple-600 px-4 py-2 text-gray-700 text-sm hover:text-white dark:text-gray-200"
                      >Entertainment</a
                    >
                    <a
                      href="#"
                      class="block hover:bg-purple-600 px-4 py-2 text-gray-700 text-sm hover:text-white dark:text-gray-200"
                      >Finance</a
                    >
                    <a
                      href="#"
                      class="block hover:bg-purple-600 px-4 py-2 text-gray-700 text-sm hover:text-white dark:text-gray-200"
                      >Sports</a
                    >
                    <a
                      href="#"
                      class="block hover:bg-purple-600 px-4 py-2 text-gray-700 text-sm hover:text-white dark:text-gray-200"
                      >Climate Change</a
                    >
                    <a
                      href="#"
                      class="block hover:bg-purple-600 px-4 py-2 text-gray-700 text-sm hover:text-white dark:text-gray-200"
                      >Health</a
                    >
                  </div>
                </div>
            </div>
          </nav>
          <!-- ./NAVBAR -->
        </div>
      </div>

      <!-- Submenu -->
    <div
      class="xl:block top-[76px] z-20 sticky hidden bg-gray-100 dark:bg-neutral-900 text-center"
    >
      <span class="mx-2 font-bold text-m dark:text-gray-300">Today's News</span>
      <a
        class="hover:bg-purple-600 mx-2 text-gray-600 text-m hover:text-white"
        href="#"
        >US</a
      >
      <a
        class="hover:bg-purple-600 mx-2 text-gray-600 text-m hover:text-white"
        href="#"
        >Politics</a
      >
      <a
        class="hover:bg-purple-600 mx-2 text-gray-600 text-m hover:text-white"
        href="#"
        >World</a
      >
      <a
        class="hover:bg-purple-600 mx-2 text-gray-600 text-m hover:text-white"
        href="category.html?category=Science"
        >Science</a
      >
      <a
        class="hover:bg-purple-600 mx-2 text-gray-600 text-m hover:text-white"
        href="#"
        >Originals</a
      >
      <a
        class="hover:bg-purple-600 mx-2 text-gray-600 text-m hover:text-white"
        href="#"
        >Contact</a
      >
    </div>
    <!-- ./Submenu -->
  `