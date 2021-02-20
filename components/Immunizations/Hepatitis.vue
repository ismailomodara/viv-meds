<template>
  <div>
    <div class="vm-section_content">
      <p>
        Hepatitis means inflammation of the liver. The liver is a vital organ
        that processes nutrients, filters the blood, and fights infections. When
        the liver is inflamed or damaged, its function can be affected. Heavy
        alcohol use, toxins, some medications, and certain medical conditions
        can cause hepatitis.
        <br />
        However, hepatitis is often caused by a virus. In the United States, the
        most common types of viral hepatitis are hepatitis A, hepatitis B, and
        hepatitis C.
        <br />
        Discuss with your Pharmacist.
        <span class="text-primary">
          Schedule an appointment with us at Vivmeds Pharmacy Denton Texas or
          call us at: 940-226-4848.</span
        >
        <br />
        <span class="text-primary">
          https://www.cdc.gov/hepatitis/abc/index.html</span
        >
      </p>
    </div>
    <div class="vm-section_content">
      <h5 class="text-black">What causes it?</h5>
      <p>
        <span class="mr-2">Hepatitis A</span> Hepatitis A virus<br />
        <span class="mr-2">Hepatitis B</span> Hepatitis B virus<br />
        <span class="mr-2">Hepatitis C</span> Hepatitis C virus
      </p>
    </div>
    <el-collapse v-model="active" accordion>
      <el-collapse-item
        v-for="(item, i) in hepatitis"
        :key="i"
        :title="item.title"
        :name="i + 1"
      >
        <div>
          <component :is="item.component"></component>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import HepatitisA from '@/components/Immunizations/HepatitisA'
import HepatitisB from '@/components/Immunizations/HepatitisB'
import HepatitisC from '@/components/Immunizations/HepatitisC'

export default {
  name: 'Hepatitis',
  components: {
    HepatitisA,
    HepatitisB,
    HepatitisC,
  },
  data() {
    return {
      active: '',
      hepatitis: [
        {
          title: 'Hepatitis A Vaccine',
          component: 'hepatitis-a',
        },
        {
          title: 'Hepatitis B Vaccine',
          component: 'hepatitis-b',
        },
        {
          title: 'Hepatitis C Vaccine',
          component: 'hepatitis-c',
        },
      ],
    }
  },
}
</script>

<style lang="scss"></style>
