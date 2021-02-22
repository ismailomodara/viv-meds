<template>
  <div>
    <el-collapse v-model="activeFaq" accordion>
      <el-collapse-item
        v-for="(faq, i) in faqs"
        :key="i"
        :title="faq.title"
        :name="i + 1"
      >
        <div>
          <p>{{ faq.content }}</p>
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="mt-3">
      <p class="mb-2"><strong>About COVID-19 Vaccine</strong></p>
      <el-collapse v-model="activeAboutCovid" accordion>
        <el-collapse-item
          v-for="(about, i) in aboutCovid"
          :key="i"
          :title="about.title"
          :name="i + 1"
        >
          <div>
            <p>{{ about.content }}</p>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faq',
  data() {
    return {
      activeFaq: '',
      faqs: [
        {
          title: 'Will Vivmeds Pharmacy offer the COVID-19 vaccine?',
          content:
            'Yes, Vivmeds Pharmacy is part of the federal program to receive the vaccines from the CDC.',
        },
        {
          title: 'When will my pharmacy have the vaccine?',
          content:
            'We expect our pharmacy to receive vaccine supply. Currently, supply is allocated by state and local health departments as well as the federal government. Stores may receive supply that is withheld from the general public in order to fulfill second dose appointments or for specific prioritized recipients specified by the state and local health department.',
        },
        {
          title: 'Who will administer the vaccine?',
          content:
            'The COVID-19 vaccine will be administered in accordance with state law and federal guidance by our pharmacists, pharmacy interns, and technicians.',
        },
        {
          title:
            'Do I have to wear a mask to get the vaccine at Vivmeds Pharmacy?',
          content:
            "Yes, we require customers to wear face coverings when shopping with us, for their protection and for that of our associates.\nFurthermore, CDC recommends that during the pandemic people age 2 and older should wear masks in public settings and when around people who don't live in their household. This would include visiting a pharmacy or clinic to receive any vaccine, including the COVID-19 vaccine.\n",
        },
      ],
      activeAboutCovid: '',
      aboutCovid: [
        {
          title: 'Will the vaccine be offered to the\n' + 'general public?',
          content:
            'Yes. The COVID-19 vaccine should be available or most adults\n' +
            'this year. Adults that fall into a higher risk category, as designated by the\n' +
            'CDC and state and local health departments, will have access to the vaccine\n' +
            'before the general healthy public',
        },
        {
          title: 'Who is immediately eligible for the\n' + 'vaccine?',
          content:
            ' Eligibility is determined by state and local health departments based\n' +
            'on recommendations from the CDC. Please check your state or health department\n' +
            'website for prioritization criteria and timing',
        },
        {
          title: 'Is the vaccine free?',
          content:
            'Yes,\n' +
            'vaccine doses purchased with U.S. taxpayer dollars will be administered to\n' +
            'patients with no out-of-pocket cost. Please bring proof of insurance to your\n' +
            'appointment, including any Medicare, Medicaid, pharmacy, and medical cards. If\n' +
            'you do not have insurance, please bring state identification/driver’s license\n' +
            '(if available).',
        },
        {
          title: 'How many doses is the COVID-19\n' + 'vaccine?',
          content:
            'Both the Moderna and Pfizer-BioNTech COVID-19 vaccines are 2 doses\n' +
            'separated by 28 or 21 days respectively. You should not get your second dose\n' +
            'earlier than recommended, however there is no maximum interval. You should get\n' +
            'your second dose as close to the recommended interval as possible to be\n' +
            'protected sooner. A series started with one product must be completed with the\n' +
            'same product.',
        },
        {
          title:
            'If I have already had coronavirus, do I still need to be\n' +
            'vaccinated?',
          content:
            'Yes. Reinfection with COVID-19 is uncommon, but it is probable.\n' +
            'Therefore, the CDC recommends vaccination even if you have had and recovered\n' +
            'from COVID-19. If you were treated for COVID-19 symptoms with monoclonal\n' +
            'antibodies or convalescent plasma, you should wait 90 days before getting a\n' +
            'COVID-19 vaccine.',
        },
        {
          title: 'Are there side effects associated with the vaccine?',
          content:
            'The side\n' +
            'effects from COVID-19 vaccinations may feel like the flu and might affect your\n' +
            'ability to do daily activities, but they should go away in a few days. Learn\n' +
            'more about what side effects to expect and get helpful tips on how to reduce\n' +
            'pain and discomfort after your vaccination. \n CDC is also implementing a new\n' +
            'smartphone-based tool called v-safe to check in on people’s health after they\n' +
            'receive a COVID-19 vaccine. When you receive your vaccine, you should also\n' +
            'receive a v-safe information sheet telling you how to enroll in v-safe. If you\n' +
            'enroll, you will receive regular text messages directing you to surveys where\n' +
            'you can report any problems or adverse reactions you have after receiving a\n' +
            'COVID-19 vaccine.',
        },
        {
          title: 'After I get the vaccine, can I stop wearing a mask?',
          content:
            'No. While\n' +
            'experts learn more about the protection that COVID-19 vaccines provide under\n' +
            'real-life conditions, it will be important for everyone to continue using all\n' +
            'the tools available to us to help slow virus spread, like covering your mouth\n' +
            'and nose with a mask, washing hands often, and staying at least 6 feet away from\n' +
            'others. Together, the COVID-19 vaccination and following the CDC’s\n' +
            'recommendations for how to protect yourself and others will offer the best\n' +
            'protection from getting and spreading COVID-19. Experts need to understand more\n' +
            'about the protection that COVID-19 vaccines provide before deciding to change\n' +
            'recommendations on steps everyone should take to slow the spread of the virus\n' +
            'that causes COVID-19. Other factors, including how many people get vaccinated\n' +
            'and how the virus is spreading in communities, will also affect this decision.',
        },
        {
          title:
            'Is it true that the COVID-19 vaccine is only available to people 18+ years of\n' +
            'age? What should I do to protect my younger children who are not old enough to\n' +
            'receive the vaccination?',
          content:
            'The Pfizer-BioNTech COVID-19 vaccine is presently\n' +
            'indicated for people 16 years of age and older, while the Moderna vaccine is\n' +
            'indicated for people 18 years of age and older. While neither COVID-19 vaccine\n' +
            'is currently recommended for children, ACIP will continue to reevaluate data as\n' +
            'it becomes available',
        },
        {
          title:
            'Can I get my COVID-19 vaccine at the same time as other\n' +
            'vaccines?',
          content:
            'Other vaccines should be separated from COVID-19 vaccine by at least\n' +
            '14 days. If COVID-19 vaccine is accidentally given within 14 days of another\n' +
            'vaccine, you do not need to restart the COVID-19 vaccine series and should still\n' +
            'complete it on schedule. CDC may update this recommendation when more data is\n' +
            'available.',
        },
      ],
    }
  },
}
</script>

<style lang="scss"></style>
