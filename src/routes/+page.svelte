<div class="mx-auto my-8 max-w-screen-md">
	<header class=" border-t-4 border-cyan-light bg-cyan px-8 py-6 text-base-paper">
		<h1 class="mb-2 font-archivo text-6xl font-bold">Valkey&reg;</h1>
		<nav class="flex flex-wrap gap-x-4 text-lg">
			<a href="#" class="hover:underline">Home</a>
			<a href="#" class="hover:underline">Download</a>
			<a href="#" class="hover:underline">Documentation</a>
			<a href="#" class="hover:underline">Community</a><a href="#">Blog</a>
			<a href="#" class="hover:underline">Source</a>
		</nav>
	</header>
	<main class="border border-base-300 bg-base-50 shadow-sm">
		<section class=" border-b border-base-paper px-8 py-6">
			<h1 class="mb-2 max-w-xl font-archivo text-4xl font-medium text-base-black">
				Valkey is an astonishingly fast & open source data store.
			</h1>
			<h2 class="mb-6 max-w-xl text-xl text-base-600">
				It is well suited for key/value workloads, yet also features a wide variety of native data
				structures.
			</h2>
			<div class="flex gap-4">
				<button
					class="flex items-center gap-2 rounded border-2 border-cyan bg-gradient-to-b from-cyan-light via-cyan to-cyan px-3 py-2 font-archivo font-bold text-base-paper shadow-inner drop-shadow transition-all hover:scale-[101%] hover:brightness-105 hover:drop-shadow-md active:scale-95 active:brightness-95"
					>Get started
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="-mr-2 stroke-base-paper"><polyline points="9 18 15 12 9 6"></polyline></svg
					>
				</button>

				<button
					class=" flex items-center gap-2 rounded border border-base-300 bg-base-100 px-3 py-2 font-archivo font-medium text-base-800 drop-shadow-sm transition-all hover:scale-[101%] hover:drop-shadow active:scale-95 active:brightness-95"
					>Documentation
				</button>
			</div>
		</section>

		<section class="border-t border-t-base-300 px-8 py-6">
			<h1 class="mb-2 font-archivo text-3xl font-bold text-cyan">Key features</h1>
			<div class=" grid grid-cols-3 gap-2">
				<div class="grid-span-1 flex flex-col gap-2">
					<article class="col-span-1 rounded border border-base-300 bg-base-100 px-3 py-2">
						<h1 class="text-archivo mb-1 text-xl font-bold text-base-black">Super speedy</h1>
						<p class="text-base-black">
							Valkey is an <i>in memory</i> data store, making it faster than most disk based solutions.
						</p>
					</article>

					<article class="col-span-1 rounded border border-base-300 bg-base-100 px-3 py-2">
						<h1 class="text-archivo mb-1 text-xl font-bold text-base-black">
							Many data structures
						</h1>
						<p class="text-base-black">
							Valkey could be described as a "data structure server". It supports strings, hashes,
							lists, sets, streams, & many more.
						</p>
					</article>
				</div>
				<div class="grid-span-1 flex flex-col gap-2">
					<article class="col-span-1 rounded border border-base-300 bg-base-100 px-3 py-2">
						<h1 class="text-archivo mb-1 text-xl font-bold text-base-black">Persistent</h1>
						<p class="text-base-black">
							Valkey saves all writes to permanent storage to survive reboots and system failures.
						</p>
					</article>
					<article class="col-span-1 rounded border border-base-300 bg-base-100 px-3 py-2">
						<h1 class="text-archivo mb-1 text-xl font-bold text-base-black">Extensible</h1>
						<p class="text-base-black">
							Valkey has a modular API, facilitating the creation of custom extensions in C, C++, or
							Rust.
						</p>
					</article>
				</div>
				<div class="grid-span-1 flex flex-col gap-2">
					<article class="col-span-1 rounded border border-base-300 bg-base-100 px-3 py-2">
						<h1 class="text-archivo mb-1 text-xl font-bold text-base-black">Scalable</h1>
						<p class="text-base-black">
							Valkey supports horizontal scalability with hash-based sharding. It can automatically
							re-partition when growing the cluster.
						</p>
					</article>
					<article class="col-span-1 rounded border border-base-300 bg-base-100 px-3 py-2">
						<h1 class="text-archivo mb-1 text-xl font-bold text-base-black">Highly Avaliable</h1>
						<p class="text-base-black">
							Replication with automatic failover for both standalone and clustered deployments.
						</p>
					</article>
				</div>
			</div>
		</section>
	</main>
</div>
