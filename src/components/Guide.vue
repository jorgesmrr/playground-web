<template>
  <div class="guide flex">
    <GuideSummary style="width: 250px">
      <GuideSummaryItem title="Typography" />
      <GuideSummaryItem title="Forms" />
      <GuideSummaryItem title="Buttons" />
      <GuideSummaryItem title="Frames" />
    </GuideSummary>

    <div class="content-medium flex-grow">
      <h1>Guide</h1>

      <GuideSection title="Typography">
        <GuideSection title="Headings">
          <div class="card">
            <div class="card-block">
              <component :is="`h${index + 1}`" v-for="(i, index) in Array(6)" :key="index">Headings</component>
            </div>
          </div>
        </GuideSection>

        <GuideSection title="Badges">
          <div class="badge" :class="b" v-for="b in variations.badge">Badge</div>
        </GuideSection>
      </GuideSection>

      <GuideSection title="Forms">
        <div class="form-group">
          <label>Field</label>
          <input type="text" placeholder="Hint" />
        </div>

        <div class="form-group">
          <label>Field</label>
          <select placeholder="Hint">
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
          </select>
        </div>

        <div class="form-check">
          <label>
            <input type="checkbox" />
            Checkbox
          </label>
        </div>

        <div class="form-radio">
          <label>
            <input type="radio" />
            Radio
          </label>
        </div>
      </GuideSection>

      <GuideSection title="Buttons">
        <button v-for="b in variations.buttons" class="btn" :class="b">Button</button>
      </GuideSection>

      <GuideSection title="Frames">
        <GuideSection title="Cards">
          <div class="card">
            <div class="card-block">
              <span class="card-title">Title</span>
            </div>
            <div class="card-block">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos veniam exercitationem dolorem dolor obcaecati ipsum minus facere tenetur atque eum nobis repellendus iusto sint deserunt earum perferendis, facilis, ut rerum.</p>
            </div>
          </div>
        </GuideSection>

        <GuideSection title="Alerts">
          <div class="alert" :class="a" v-for="a in variations.alert">Alert</div>
        </GuideSection>

        <GuideSection title="Modals">
          <button class="btn" @click="showModal = true">Click here to show modal</button>
          <div class="modal" :class="{open: showModal}">
            <div class="modal-content">
              <div class="card">
                <div class="card-block flex">
                  <span class="card-title">Title</span>
                  <span class="fas fa-times ml-auto cursor-pointer" @click="showModal = false" />
                </div>
                <div class="card-block">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos veniam exercitationem dolorem dolor obcaecati ipsum minus facere tenetur atque eum nobis repellendus iusto sint deserunt earum perferendis, facilis, ut rerum.</p>
                </div>
              </div>
            </div>
          </div>
        </GuideSection>
      </GuideSection>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import GuideSection from "./GuideSection.vue";
import GuideSummary from "./GuideSummary.vue";
import GuideSummaryItem from "./GuideSummaryItem.vue";

export default Vue.extend({
  name: "Guide",

  components: { GuideSection, GuideSummary, GuideSummaryItem },

  data() {
    return {
      showModal: false,
      variations: {
        buttons: [
          "btn-primary",
          "btn-neutral",
          "btn-info",
          "btn-success",
          "btn-warning",
          "btn-danger"
        ],
        alert: [
          "alert-primary",
          "alert-neutral",
          "alert-info",
          "alert-success",
          "alert-warning",
          "alert-danger"
        ],
        badge: [
          "badge-primary",
          "badge-neutral",
          "badge-info",
          "badge-success",
          "badge-warning",
          "badge-danger"
        ]
      }
    };
  }
});
</script>