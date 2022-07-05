import {ref} from "vue";

const data = ref([]);

const fetchConfigurations = async () => {
    return fetch("/api/arduino-configurations", {
        method: "GET",
        mode: "cors"
    })
        .then(async res => {
            data.value = await res.json();
        })
}

const deleteConfigurationByUuid = async (uuid) => {
    return fetch("/api/arduino-configurations?uuid=" + uuid, {
        method: "DELETE",
        mode: "cors"
    })
}

export {fetchConfigurations, deleteConfigurationByUuid, data as configurations}
