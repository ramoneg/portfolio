<template>
  <div>
    <h1 class="font-mono text-ocean-300 opacity-50">Ramon Egger <span class="text-ocean-200">|</span> Full Stack Web Developer</h1>
    <p class="mt-4 text-2xl md:text-3xl leading-none text-ocean-300">Hey! I am <span class="font-bold text-white text-4xl md:text-5xl">Ramon</span></p>
    <p class="mt-2 text-xl leading-none text-ocean-300">I passionately code web-apps and websites</p>
    <div class="text-xl leading-none text-ocean-300 mt-12">This portfolio is on <a class="text-white font-bold" href="https://github.com/ramoneg/portfolio.git">GitHub</a></div>
    
    <div class="mt-4 text-ocean-300">
      <a target="_blank" href="mailto:ramon@ramonegger.ch"><font-awesome-icon size="lg" icon="envelope" /></a>
      <a target="_blank" href="https://github.com/ramoneg" class="ml-2"><font-awesome-icon size="lg" :icon="['fab', 'github']" /></a>
      <a target="_blank" href="https://instagram.com/aintroman" class="ml-2"><font-awesome-icon size="lg" :icon="['fab', 'instagram']" /></a>
      <a target="_blank" href="https://www.linkedin.com/in/ramon-egger-7509a4123/" class="ml-2"><font-awesome-icon size="lg" :icon="['fab', 'linkedin']" /></a>
    </div>
    
    <section ref="References">
      <div class="content">
        <pageTitle>References</pageTitle>
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
        <pageTitle>Job Positions</pageTitle>
          <div class="flex flex-wrap mt-2">
            <card
              class="w-full md:w-1/2 mb-2"
              v-for="(job, index) in jobHistory"
              :key="index"
              :url="job.homepage"
              :title="job.title"
              :subtitle="job.company"
              >
              <h2 class="mt-2 text-gray-500">{{ job.years }}</h2>
            </card>
          </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
    head: {
        title: 'Ramon Egger | Full Stack Web Developer & Audio Producer',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: "description",
                name: 'description',
                content: 'Ramon Egger - Full Stack Web Developer & Audio Producer From Switzerland',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    components: {
        card: () => import('../components/page/card'),
        pageTitle: () => import('../components/page/pageTitle'),
    },
    data() {
        return {
            references: {
                SocialGate: {
                    subtitle: 'Saas App on Lambda',
                    homepage: 'https://socialgate.me',
                },
                'Nitrous': {
                    subtitle: 'Development of Nitrous CMS',
                    homepage: 'https://racerfish.com/en/nitrous',
                },
                'Boesch Boats': {
                    subtitle: 'Website',
                    homepage: 'https://boesch.swiss',
                },
                Hessmoto: {
                    subtitle: 'Website + Blog & Motoscout api',
                    homepage: 'https://hessmoto.ch',
                },
                'Harley Bern': {
                    subtitle: 'Website + Blog & Motoscout api',
                    homepage: 'https://harley-bern.ch',
                },
                'Harley Thun': {
                    subtitle: 'Website + Blog & Motoscout api',
                    homepage: 'https://harley-Thun.ch',
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