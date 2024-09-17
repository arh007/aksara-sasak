<script lang="ts">
import { ConverterMethod } from "$lib/scripts/global";
import SvelteSeo from "svelte-seo";
import Converter from "$lib/components/Converter.svelte";
</script>
        
<SvelteSeo
    title="Transliterasi | Sasak-Latin"
    description="Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Sasak menjadi aksara Latin."
    canonical="https://arh007.github.io/transliterasi-sasak/sasak-latin"
    keywords="alat, transliterasi, konversi, alih, aksara, sasak, latin"
    openGraph={{
        title: "Transliterasi | Sasak-Latin",
        description: "Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Sasak menjadi aksara Latin.",
        url: "https://arh007.github.io/transliterasi-sasak/sasak-latin",
        type: "website",
        images: [{
            url: "https://arh007.github.io/transliterasi-sasak/aksara-sasak.png",
          },],
        site_name: "Transliterasi Aksara Sasak",
      }}
      twitter={{
        card: "summary_large_image",
        title: "Transliterasi | Sasak-Latin",
        description: "Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Sasak menjadi aksara Latin.",
        image: "https://arh007.github.io/transliterasi-sasak/aksara-sasak.png",
      }}
/>
    
<Converter method = { ConverterMethod.JavaToLatin } />