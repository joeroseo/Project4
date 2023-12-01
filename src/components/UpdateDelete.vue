<template>
  <div class="page-container">
    <!-- Form -->
    <div class="form-container">
      <div style="margin-top: 10px"><h3>Personal Information</h3></div>
      <br />

      <div class="flex-container">
        <div style="margin-right: 20px">
          <label for="firstName">First Name:</label><br /><br />
          <label for="lastName" style="margin-top: 5px">Last Name:</label
          ><br /><br />
          <label for="phoneNumber" style="margin-top: 5px">Phone Number:</label
          ><br /><br />
          <label for="email" style="margin-top: 8px">Email:</label><br /><br />
        </div>
        <div>
          <input v-model="results.firstName" type="text" id="firstName" />
          <br /><br />
          <input v-model="results.lastName" type="text" id="lastName" />
          <br /><br />
          <input v-model="results.phoneNumber" type="text" id="phoneNumber" />
          <br /><br />
          <input v-model="results.email" type="text" id="email" />
          <br /><br />
        </div>
      </div>

      <label for="gender">Gender: &nbsp;</label>
      <input
        type="radio"
        name="gender"
        value="Male"
        id="male"
        v-model="results.gender"
      />
      <label for="male">Male &nbsp;</label>
      <input
        type="radio"
        name="gender"
        value="Female"
        id="female"
        v-model="results.gender"
      />
      <label for="female">Female &nbsp;</label>
      <input
        type="radio"
        name="gender"
        value="Prefer not to say"
        id="preferNotToSay"
        v-model="results.gender"
      />
      <label for="preferNotToSay">Prefer not to say</label><br />

      <br />
      <h3>Dietary Questions</h3>
      <br />

      <label for="water"
        >How many cups of water on average do you drink a day?
        &nbsp;&nbsp;</label
      >
      <input
        v-model="results.water"
        type="number"
        id="water"
        style="font-size: 11px; width: 6ch"
      />
      <br /><br />

      <div>
        <input
          type="text"
          v-model="results.meals"
          style="
            margin-left: 160px;
            width: 20%;
            max-width: 20px;
            text-align: center;
          "
          maxlength="2"
        />
        <br />
        <input
          v-model="results.meals"
          type="range"
          id="meals"
          min="0"
          max="10"
          style="margin-left: 80px; width: 30%"
        />
        <br />
        <label for="meals"
          >How many meals on average do you eat a day? &nbsp;(0-10)</label
        >
        <br /><br />
      </div>

      <label>Do any of these meals regularly contain:&nbsp;</label>
      <input v-model="results.dairy" type="checkbox" id="dairy" />
      <label for="dairy">Dairy&nbsp;</label>
      <input v-model="results.wheat" type="checkbox" id="wheat" />
      <label for="wheat">Wheat&nbsp;</label>
      <input v-model="results.sugar" type="checkbox" id="sugar" />
      <label for="sugar">Sugar</label><br /><br />

      <label for="walk">On average, how many miles do you walk a day?</label
      >&nbsp;
      <select v-model="results.walk" id="walk">
        <option value="Less than 1 Mile">Less than 1 Mile</option>
        <option value="More than 1 mile but less than 2 miles">
          More than 1 mile but less than 2 miles
        </option>
        <option value="More than 2 miles but less than 3 miles">
          More than 2 miles but less than 3 miles
        </option>
        <option value="More than 3 miles">More than 3 miles</option>
      </select>
      <br /><br />

      <label for="weight">How much do you weigh? &nbsp;</label>
      <input
        v-model="results.weight"
        type="number"
        id="weight"
        style="font-size: 12px; width: 8ch"
      />
      <br /><br />

      <button class="btn btn-sm" @click="removemethod">Delete</button>
      &nbsp;&nbsp;
      <button class="btn btn-sm" @click="update">Update</button>
    </div>
  </div>
</template>

<script>
import ProjectDataService from "../services/ProjectDataService";

export default {
  name: "update-delete",
  data() {
    return {
      results: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        gender: "",
        water: 5,
        meals: 3,
        dairy: false,
        wheat: false,
        sugar: false,
        walk: "Less than 1 Mile",
        weight: "",
      },
      key: "",
      submitted: false,
    };
  },
  methods: {
    removemethod() {
      ProjectDataService.delete(this.key)
        .then(() => {
          console.log("Deleted successfully!" + this.key);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
      this.$router.push({ path: "/results" });
    },

    update() {
      var data = {
        firstName: this.results.firstName,
        lastName: this.results.lastName,
        phoneNumber: this.results.phoneNumber,
        email: this.results.email,
        gender: this.results.gender,
        water: this.results.water,
        meals: this.results.meals,
        dairy: this.results.dairy,
        wheat: this.results.wheat,
        sugar: this.results.sugar,
        walk: this.results.walk,
        weight: this.results.weight,
      };

      ProjectDataService.update(this.key, data)
        .then(() => {
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
      this.$router.push({ path: "/results" });
    },
  },

  mounted() {
    this.results.firstName = this.$store.state.firstName;
    this.results.lastName = this.$store.state.lastName;
    this.results.email = this.$store.state.email;
    this.results.phoneNumber = this.$store.state.phoneNumber;
    this.results.gender = this.$store.state.gender;
    this.results.water = this.$store.state.water;
    this.results.meals = this.$store.state.meals;
    this.results.dairy = this.$store.state.dairy;
    this.results.wheat = this.$store.state.wheat;
    this.results.sugar = this.$store.state.sugar;
    this.results.walk = this.$store.state.walk;
    this.results.weight = this.$store.state.weight;
    this.key = this.$store.state.key;
  },
};
</script>

<style scoped>
.page-container {
  width: 85%;
  height: 125%;
  display: flex;
  transform: translateX(15px);
}

.form-container {
  width: 90%;
  border: 1px solid black;
  padding: 10px;
  transform: translateX(65px);
  height: 105%;
  margin-bottom: 20px;
}

.flex-container {
  display: flex;
  align-items: flex-start;
  justify-content: left;
  margin-bottom: 10px;
}

* {
  font-size: 13px;
}

.btn {
  border: 0.25px solid grey;
}
</style>
