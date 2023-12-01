<template>
  <div class="list row">
    <div class="col-md-12">
      <h4>Survey Results List</h4>
      <button class="btn btn-sm" @click="download">Download</button><br /><br />
      <h6>Click on a survey result</h6>
      <br />

      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(result, index) in results"
            :key="index"
            @click="setActiveProject(result, index)"
          >
            <td>{{ result.firstName }}</td>
            <td>{{ result.lastName }}</td>
            <td>{{ result.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-6">
      <div v-if="currentProject">
        <result-details :result="currentProject" @refreshList="refreshList" />
      </div>
    </div>
  </div>
</template>

<script>
import ProjectDataService from "../services/ProjectDataService";
import Papa from "papaparse";

export default {
  name: "project-list",
  data() {
    return {
      results: [],
      currentProject: null,
      currentIndex: -1,
    };
  },
  methods: {
    download() {
      // credit: https://www.bitdegree.org/learn/javascript-download
      let filename = "results.csv";
      let text = Papa.unparse(this.results);

      let element = document.createElement("a");
      element.setAttribute(
        "href",
        "data:text/csv;charset=utf-8," + encodeURIComponent(text)
      );
      element.setAttribute("download", filename);

      element.style.display = "none";
      document.body.appendChild(element);

      element.click();
      document.body.removeChild(element);
    },

    onDataChange(items) {
      let _results = [];

      items.forEach((item) => {
        let key = item.key;
        let data = item.val();

        _results.push({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phoneNumber: data.phoneNumber,
          gender: data.gender,
          water: data.water,
          meals: data.meals,
          dairy: data.dairy,
          wheat: data.wheat,
          sugar: data.sugar,
          walk: data.walk,
          weight: data.weight,
          key: key,
        });
      });

      this.results = _results;
      console.log("Updated results:", this.results);
    },

    refreshList() {
      this.currentProject = null;
      this.currentIndex = -1;
    },

    setStore(result) {
      this.$store.state.firstName = result.firstName;
      this.$store.state.lastName = result.lastName;
      this.$store.state.email = result.email;
      this.$store.state.phoneNumber = result.phoneNumber;
      this.$store.state.gender = result.gender;
      this.$store.state.water = result.water;
      this.$store.state.meals = result.meals;
      this.$store.state.dairy = result.dairy;
      this.$store.state.wheat = result.wheat;
      this.$store.state.sugar = result.sugar;
      this.$store.state.walk = result.walk;
      this.$store.state.weight = result.weight;
      this.$store.state.primaryKey = result.primaryKey;
      this.$store.state.key = result.key;
    },

    setActiveProject(result, index) {
      console.log("Entering setActiveProject method");

      this.currentProject = result;
      this.currentIndex = index;

      console.log("Setting store properties");
      this.setStore(result);
      console.log("Navigating to /updatedelete");
      this.$router.push({
        path: "/updatedelete",
      });

      console.log("Exiting setActiveProject method");
    },
  },
  mounted() {
    ProjectDataService.getAll().on("value", this.onDataChange);
  },
  beforeUnmount() {
    ProjectDataService.getAll().off("value", this.onDataChange);
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 100%;
  margin: auto;
}

.btn {
  border: 0.25px solid grey;
}
</style>
