<template>
<div class="p-5" >
    <div v-if="productDoc" >
        <h1 class="font-black text-gray-900 text-3xl">
            {{ productDoc.name }}
        </h1>
        <div class="flex gap-3 flex-col w-fit mt-5" >
            <div @click="currentPreviewImageURL=image.image_url"
             :class='[
                "p-2 border-2 border-gray-600/25 rounded hover:bg-black-overlay-50 cursor-pointer",
                currentPreviewImageURL === image.image_url?"border-gray-500/90":""
             ]'
             v-for="image in productDoc.images" >
        <img 
         class="h-15 w-15 "
         :src="image.image_url" 
         alt="product image thmbnail" />
        </div>
        </div>
        <img :src="currentPreviewImageURL" >
    </div> 
</div>
       
</template>
  
<script setup>
import { computed,ref } from "vue";
   import { useRoute } from "vue-router";
   import { createDocumentResource } from "frappe-ui";

   const route = useRoute();
   const currentPreviewImageURL =ref(null);

   const productResource =createDocumentResource({
    doctype: "Product",
    name: route.params.name,
    auto:true,
    onSuccess(data){
        
      
        currentPreviewImageURL.value = data.images[0].image_url;
        
    }
   })
   const productDoc = computed(()=>{
    if (productResource.doc)
   {
    return productResource.doc
   }
   })
</script>
  