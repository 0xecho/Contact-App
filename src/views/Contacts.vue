<template>
    <v-content>
      <v-container>
        <Navbar />
        
        <template v-if="is_details">
            <ContactDetails :id="contact_id"/>
        </template>
        <template v-else>
            <ListContacts :filters="filters"/>
        </template>
      </v-container>
    </v-content>
</template>

<script>


import Navbar from '@/components/Navbar'
import ContactDetails from '@/components/ContactDetails'
import ListContacts from '@/components/ListContacts'

export default {
  name: 'Home',
  components: {
    Navbar,
    ContactDetails,
    ListContacts
  },
  data() {
    return {
        contact_id: null,
        is_details: false,
        filters: []
    }
  },
  created() {  
    
    if(Object.entries(this.$route.params).length == true) {
        
        this.contact_id = this.$route.params.id
        this.is_details = true
    }
    else if(Object.entries(this.$route.query).length == true) {
        
        let filters_unfiltered = this.$route.query.filter        
        filters_unfiltered = filters_unfiltered.split(',')
        let filters = []
        filters_unfiltered.forEach(item=>{
            if(item.length)
                filters.push(item)
        })
        this.filters = filters
    }
    
  },
}
</script>
