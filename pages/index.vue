<template>
  <div>
    <h1 class="font-mono text-gray-500">Ramon Egger <span class="text-ocean-200">|</span> Full Stack Web Developer</h1>
    <p class="mt-6 text-2xl md:text-3xl leading-none text-ocean-300">Hey! I am <span class="font-bold text-white text-4xl md:text-5xl">Ramon</span></p>
    <p class="mt-2 text-xl leading-none text-ocean-300">I passionately code web-apps and websites</p>
    <section ref="meta" class="text-xl leading-none text-ocean-300">This portfolio is on <a class="text-white font-bold" href="https://github.com/ramoneg/portfolio.git">GitHub</a></section>
    <section ref="References">
      <div class="content">
        <h-2>References</h-2>
        <div class="flex flex-wrap mt-2">
            <card
              class="w-full md:w-1/2 mb-2"
              v-for="(reference, index) in references"
              :key="index"
              :url="reference.homepage"
              :title="index"
              :subtitle="reference.subtitle"
            />
        </div>
      </div>
    </section>
    <section ref="Positions">
      <div class="content">
        <h-2>Job Positions</h-2>
          <div class="flex flex-wrap mt-2">
            <card
              class="w-full md:w-1/2 mb-2"
              v-for="(job, index) in jobHistory"
              :key="index"
              :url="job.homepage"
              :title="job.title"
              :subtitle="job.company">
              <h2 class="mt-2 text-gray-500">{{ job.years }}</h2>
            </card>
          </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
    head() {},
    components: {
        card: () => import('../components/page/card'),
        'h-2': () => import('../components/page/h2'),
    },
    data() {
        return {
            references: {
                'SocialGate': {
                    subtitle: 'Saas App on Lambda',
                    homepage: 'https://socialgate.me',
                },
                'Boesch Boats': {
                    subtitle: 'Website',
                    homepage: 'https://boesch.swiss',
                },
                'Hessmoto': {
                    subtitle: 'Website + Blog & Shop api',
                    homepage: 'https://hessmoto.ch',
                },
            },
            jobHistory: [
                {
                    company: 'RACERFISH AG',
                    years: '2020 - now',
                    title: 'Web Developer',
                    homepage: 'https://racerfish.com',
                },
                {
                    company: 'RACERFISH AG',
                    years: '2020 - now',
                    title: 'Audio Producer',
                    homepage: 'https://racerfish.com',
                },
                {
                    company: 'Ramon Egger Software',
                    years: '2020 - now',
                    title: 'Web Developer',
                    homepage: 'https://socialgate.me',
                },
                {
                    company: 'Hostpoint AG',
                    years: '2018',
                    title: 'Unix System Administrator',
                    homepage: 'https://hostpoint.ch',
                },
                {
                    company: 'Sidmar AG',
                    years: '2014',
                    title: 'Apprenticeship',
                    homepage: 'https://sidmar.ch',
                },
            ],
        }
    },
}
</script>