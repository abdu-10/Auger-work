import React from "react";

function Footer() {
  return (
    <>
<div class="max-w-2xl mx-auto">

	<footer class="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
		<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com" class="hover:underline" target="_blank">Auger™</a>. All Rights Reserved.
    </span>
		<ul class="flex flex-wrap items-center mt-3 sm:mt-0">
			<li>
				<a href="#" class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">About</a>
			</li>
			<li>
				<a href="#" class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Privacy
					Policy</a>
			</li>
			<li>
				<a href="#" class="mr-4 text-sm text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</a>
			</li>
			<li>
				<a href="#" class="text-sm text-gray-500 hover:underline dark:text-gray-400">Contact</a>
			</li>
		</ul>
	</footer>
</div>
    </>
  );
}

export default Footer;
