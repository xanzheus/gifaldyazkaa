<script lang="ts" context="module">
	export async function load({ fetch }) {
		const selfRes = await fetch(`/api/self.json`);
		const waifusRes = await fetch(`/api/waifus.json`);
		const skillsRes = await fetch(`/api/skills.json`);
		const { self } = await selfRes.json();
		const { waifus } = await waifusRes.json();
		const { skills } = await skillsRes.json();
		if (selfRes.ok && waifusRes.ok && skillsRes.ok) {
			return {
				props: {
					self,
					waifus,
					skills
				}
			};
		}
		return {
			status: selfRes.status,
			error: new Error('Could not fetch the data')
		};
	}
</script>

<script lang="ts">
	import { blur } from 'svelte/transition';
	export let self: any, waifus: any, skills: any;
	let name = self.name;
	let avatarUrl = self.avatarUrl;
	let languageSkills = skills.langSkills;
	let frontEndSkills = skills.frontEndSkills;
	let backEndSkills = skills.backEndSkills;
	let toolsSkills = skills.toolsSkills;
	if (!avatarUrl) avatarUrl = `https://cdn.statically.io/avatar/shape=circle/${name}`;
</script>

<svelte:head>
	<title>About | {name}</title>
</svelte:head>
<section
	class="container section section__height"
	id="about"
	in:blur={{ duration: 500 }}
	out:blur={{ duration: 500 }}
>
	<h2 class="section__title">About Me</h2>
	<hr />
	<div id="image-container">
		<img id="profile" src={avatarUrl} alt={name} />
	</div>
	<div id="paragraph">
		<p>
			Hello, my name is <strong>{name}</strong>. Usually called
			<strong>Gifaldy / Azka / Falcxxdev (at the internet)</strong>. Born and live in
			<a href="https://www.bandung.go.id/">{self.born_and_live_at}</a>.
		</p>
		<br />
		<p>
			I started learning about Data and Algorithm since 2020 with C++ language. And now i spend more
			time to explore Web development using JavaScript, Node.js, and Svelte.
		</p>
		<br />
		<p>
			Umm, I don't know, But i have some weird obsession with Virtual YouTubers. I can't control
			myself when watching their livestream. Hehehe...
		</p>
	</div>
	<div id="skills">
		<h2 class="pb">Skills</h2>
		<div class="grid-container">
			<div class="tech-stack">
				<h4 class="pb">Languages</h4>
				<ul>
					{#each languageSkills as { name }}
						<li>{name}</li>
					{/each}
				</ul>
			</div>
			<div class="tech-stack">
				<h4 class="pb">Front-end</h4>
				<ul>
					{#each frontEndSkills as { name }}
						<li>{name}</li>
					{/each}
				</ul>
			</div>
			<div class="tech-stack">
				<h4 class="pb">Back-end</h4>
				<ul>
					{#each backEndSkills as { name }}
						<li>{name}</li>
					{/each}
				</ul>
			</div>
			<div class="tech-stack">
				<h4 class="pb">Tools</h4>
				<ul>
					{#each toolsSkills as { name }}
						<li>{name}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
	<div id="waifus">
		<h2 class="pb">Current waifus</h2>
		<p class="pb">Here are my current waifus</p>
		<ul>
			{#each waifus as { name, from, link, fromLink }}
				<li>
					<a href={link}>{name.jp} ／ {name.en}</a>
					from
					<a href={fromLink}>{from}</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	/* Base */
	h2,
	h4,
	p {
		font-family: 'Lexend', sans-serif;
		cursor: default;
	}
	a {
		color: rgb(18, 18, 211);
	}
	a:hover {
		color: rgb(22, 22, 153);
	}
	a:visited {
		color: rgb(18, 18, 211);
	}
	li {
		font-family: 'Lexend', sans-serif;
		list-style: disc;
		margin-left: 18px;
		cursor: default;
	}
	/* Main section */
	#image-container {
		display: flex;
		justify-content: center;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	#profile {
		height: 8.5rem;
		width: 8.5rem;
		border-radius: 50%;
		border: solid 2px #fff;
		text-align: center;
		pointer-events: none;
	}
	.pb {
		padding-bottom: 7px;
	}
	#paragraph,
	#skills {
		padding-bottom: 20px;
	}
	#waifus {
		padding-bottom: 90px;
	}
	.grid-container {
		display: grid;
		grid-template-columns: repeat(2, minmax(0px, 1fr));
	}
	.tech-stack {
		display: flex;
		-webkit-box-align: start;
		flex-direction: column;
		padding-bottom: 7px;
	}
</style>
