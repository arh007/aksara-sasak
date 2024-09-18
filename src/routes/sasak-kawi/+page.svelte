<script lang="ts">
import { ConverterMethod } from "$lib/scripts/global";
import SvelteSeo from "svelte-seo";
import Converter from "$lib/components/Converter.svelte";
</script>
    
<SvelteSeo
    title="Transliterasi | Sasak-Kawi"
    description="Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Sasak menjadi aksara Kawi."
    canonical="https://arh007.github.io/aksara-sasak/sasak-kawi"
    keywords="alat, transliterasi, konversi, alih, aksara, sasak, kawi"
    openGraph={{
        title: "Transliterasi | Sasak-Kawi",
        description: "Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Sasak menjadi aksara Kawi.",
        url: "https://arh007.github.io/aksara-sasak/sasak-kawi",
        type: "website",
        images: [{
            url: "https://arh007.github.io/aksara-sasak/aksara-sasak.png",
          },],
        site_name: "Transliterasi Aksara Sasak",
      }}
      twitter={{
        card: "summary_large_image",
        title: "Transliterasi | Sasak-Kawi",
        description: "Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Sasak menjadi aksara Kawi.",
        image: "https://arh007.github.io/aksara-sasak/aksara-sasak.png",
      }}
/>
    
<Converter method = { ConverterMethod.JavaToKawi } />