<template>
   <div class="new-message">
      <form @submit.prevent="addMessage">
         <label for="new-message">New Message (enter to add)</label>
         <input type="text" name="message" v-model="message" />
         <p class="red-text" v-if="feedback">{{ feedback }}</p>
      </form>
   </div>
</template>

<script>
import db from "../firebase/init"
export default {
   name: "NewMessage",
   props: ["name"],
   data() {
      return {
         message: null,
         feedback: null,
      }
   },
   methods: {
      addMessage() {
         if (this.message) {
            db.collection("messages")
               .add({
                  content: this.message,
                  name: this.name,
                  timestamp: Date.now(),
               })
               .catch((err) => {
                  console.log(err)
               })
         } else {
            this.feedback = "You must enter a message in oder to send one"
         }
      },
   },
}
</script>

<style></style>
