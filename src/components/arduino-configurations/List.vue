<template>
  <div class="container">
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Serialport</th>
        <th>Delete</th>
        <th>Update</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="config in configurations" :key="config.uuid">
        <td>{{ config.name }}</td>
        <td>{{ config.serialport }}</td>
        <td>
          <button class="btn" @click="deleteConfiguration(config.uuid)">Delete</button>
        </td>
        <td>
          <button class="btn" @click="updateConfiguration">Update</button>
        </td>
      </tr>
      </tbody>
    </table>

    <button @click="createConfiguration">Create</button>
  </div>
</template>

<script>
import {ref} from "vue";
import {useRouter} from "vue-router";
import {configurations, deleteConfigurationByUuid, fetchConfigurations} from "../../store/arduino-configurations";

export default {
  setup() {
    const router = useRouter();

    const loading = ref(false);

    const fetch = () => {
      loading.value = true;

      fetchConfigurations()
          .then(() => loading.value = true)
          .catch(() => loading.value = true)
    }


    const deleteConfiguration = async (uuid) => {
      await deleteConfigurationByUuid(uuid);
      await fetch();
    }

    const updateConfiguration = () => {

    }

    const createConfiguration = () => {
      router.push("/arduino-configurations/create");
    }

    fetch();

    return {configurations, deleteConfiguration, updateConfiguration, createConfiguration}
  }
}
</script>
