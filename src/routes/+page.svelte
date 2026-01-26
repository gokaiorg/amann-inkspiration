<script>
	let activeCategory = 'All';

	const streetArt = [
		{ url: '/assets/street-art-01.jpg', title: 'Kami, Collaboration AMANN X PEZ X KAMI', width: 960, height: 719 },
		{ url: '/assets/street-art-02.jpg', title: 'UNITY, The Color of Kolok - December 2018', width: 1080, height: 810 },
		{ url: '/assets/street-art-03.jpg', title: 'Control, mural 2019', width: 960, height: 960 },
		{ url: '/assets/street-art-04.jpg', title: 'Customize your life, Collabotation AMANN X SWEL2', width: 1440, height: 1081 },
		{ url: '/assets/street-art-05.jpg', title: 'Mecano, at bike Phuket', width: 960, height: 960 }
	];

	const paintings = [
		{ url: '/assets/painting-01.jpg', title: 'Lost in the Universe, Acrylic on paper', width: 672, height: 903 },
		{ url: '/assets/painting-02.jpg', title: 'Last match, 50X60cm /Acrylic and spray paint on canvas/ 2021', width: 1440, height: 1440 }
	];

	const expositions = [
		{ url: '/assets/expo-01.jpg', title: 'MUTE exhibition, Exhibition at Design Fiesta Gallery. Tokyo', width: 960, height: 960 }
	];

	const toys = [
		{ url: '/assets/toy-01.jpg', title: 'Hope, Tian Tian Xiang shang X AMANN', width: 1980, height: 1320 },
		{ url: '/assets/toy-02.jpg', title: 'MUTE, resine structure 10cm', width: 4608, height: 3456 },
		{ url: '/assets/toy-03.jpg', title: 'Mute Art Toy 2, Black & white or colors', width: 1728, height: 840 }
	];

	const collages = [
		{ url: '/assets/collage-01.jpg', title: 'Hope, Tian Tian Xiang shang X AMANN', width: 768, height: 960 }
	];

	const tattoos = [
		{ url: '/assets/tattoo-01.jpg', title: 'Rebirth 4, geometry tattoo', width: 960, height: 959 },
		{ url: '/assets/tattoo-02.jpg', title: 'Flower Power, Mandala', width: 960, height: 960 },
		{ url: '/assets/tattoo-03.jpg', title: 'Swallow, geomtric tattoo', width: 960, height: 960 },
		{ url: '/assets/tattoo-04.jpg', title: 'Lola, Geometric french bulldog', width: 960, height: 960 },
		{ url: '/assets/tattoo-05.jpg', title: 'Geo cat, geometrical tattoo', width: 960, height: 960 }
	];

	const allPhotos = [
		...streetArt.map(p => ({ ...p, category: 'Street Art' })),
		...paintings.map(p => ({ ...p, category: 'Paintings' })),
		...expositions.map(p => ({ ...p, category: 'Expositions' })),
		...toys.map(p => ({ ...p, category: 'Toys' })),
		...collages.map(p => ({ ...p, category: 'Collages' })),
		...tattoos.map(p => ({ ...p, category: 'Tattoos' }))
	];

	// Fisher-Yates shuffle algorithm
	function shuffleArray(array) {
		const shuffled = [...array];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		return shuffled;
	}

	$: filteredPhotos = shuffleArray(activeCategory === 'All' ? allPhotos : allPhotos.filter(p => p.category === activeCategory));
</script>

<div class="tabs">
	<button on:click={() => activeCategory = 'All'} class:active={activeCategory === 'All'}>All</button>
	<button on:click={() => activeCategory = 'Street Art'} class:active={activeCategory === 'Street Art'}>Street Art</button>
	<button on:click={() => activeCategory = 'Paintings'} class:active={activeCategory === 'Paintings'}>Paintings</button>
	<button on:click={() => activeCategory = 'Expositions'} class:active={activeCategory === 'Expositions'}>Expositions</button>
	<button on:click={() => activeCategory = 'Toys'} class:active={activeCategory === 'Toys'}>Toys</button>
	<button on:click={() => activeCategory = 'Collages'} class:active={activeCategory === 'Collages'}>Collages</button>
	<button on:click={() => activeCategory = 'Tattoos'} class:active={activeCategory === 'Tattoos'}>Tattoos</button>
</div>

<section>
	<div class="photo-grid">
		{#each filteredPhotos as photo (photo.url)}
			<div class="photo-item">
				<p class="title">{photo.title}</p>
				<img
					src={photo.url}
					alt={photo.title}
					width={photo.width}
					height={photo.height}
					loading="lazy"
					decoding="async"
				/>
			</div>
		{/each}
	</div>
</section>

<style>
	.tabs {
		display: flex;
		justify-content: center;
		gap: 2rem;
		margin: 0 auto 2rem auto;
		max-width: 600px;
		border-bottom: 1px solid #555;
	}
	.tabs button {
		border: none;
		background: transparent;
		color: #ccc;
		padding: 0.75rem 0;
		cursor: pointer;
		transition: all 0.3s ease;
		font-weight: 500;
		font-size: 1rem;
		position: relative;
	}
	.tabs button.active {
		color: #007bff;
	}
	.tabs button.active::after {
		content: '';
		position: absolute;
		bottom: -1px;
		left: 0;
		right: 0;
		height: 2px;
		background: #007bff;
	}
	.tabs button:hover {
		color: white;
	}
	.photo-grid {
		column-count: 5;
		column-gap: 0.5rem;
	}
	@media (max-width: 1024px) {
		.photo-grid {
			column-count: 2;
		}
	}
	@media (max-width: 640px) {
		.photo-grid {
			column-count: 1;
		}
	}
	.photo-item {
		position: relative;
		text-align: center;
		break-inside: avoid;
		margin-bottom: 0.3rem;
	}
	.title {
		position: absolute;
		bottom: 10px;
		left: 50%;
		transform: translateX(-50%);
		background: rgba(0, 0, 0, 0.7);
		color: white;
		padding: 0.5rem;
		border-radius: 4px;
		font-weight: 600;
		font-size: 1rem;
		opacity: 0;
		transition: opacity 0.3s ease;
		pointer-events: none;
	}
	.photo-item:hover .title {
		opacity: 1;
	}
	img {
		width: 100%;
		height: auto;
	}
	section {
		margin-bottom: 2rem;
	}
</style>
