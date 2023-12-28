<script setup lang="ts">
import HeaderPg from '../components/header.pg.vue';
import Footer from '../components/footer.vue';
import BannerSections from '../sections/banner.sections.vue';
import AboutsSections from '../sections/abouts.sections.vue';
import WhyGiveSections from '../sections/why-give.sections.vue';
import DonationAreaSections from '../sections/donation-area.sections.vue';
import ParternSections from '../sections/partern.sections.vue';
import TutorielSections from '../sections/tutoriel.sections.vue';
import ActualiteSections from '../sections/actualite.sections.vue';
</script>

<template>
   <div class="font-sans">
      <HeaderPg />
      <BannerSections />
      <AboutsSections />
      <WhyGiveSections />
      <DonationAreaSections />
      <TutorielSections />
      <ActualiteSections />
      <ParternSections />

      <Footer />
   </div>
</template>

<style scoped></style>
