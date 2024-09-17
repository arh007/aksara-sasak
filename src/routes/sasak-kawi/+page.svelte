<script lang="ts">
import { ConverterMethod } from "$lib/scripts/global";
import SvelteSeo from "svelte-seo";
import Converter from "$lib/components/Converter.svelte";
</script>
    
<SvelteSeo
    title="Transliterasi Aksara Sasak | Sasak-Kawi"
    description="Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Sasak menjadi aksara Kawi."
    canonical="https://aksarasasak.id/transliterasi-sasak/sasak-kawi"
    keywords="alat, transliterasi, konversi, alih, aksara, sasak, kawi"
    openGraph={{
        title: "Transliterasi Aksara Sasak | Sasak-Kawi",
        description: "Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Sasak menjadi aksara Kawi.",
        url: "https://aksarasasak.id/transliterasi-sasak/sasak-kawi",
        type: "website",
        images: [{
            url: "https://aksarasasak.id/transliterasi-sasak/aksara-sasak.png",
          },],
        site_name: "Transliterasi Aksara Sasak",
      }}
      twitter={{
        card: "summary_large_image",
        title: "Transliterasi Aksara Sasak | Sasak-Kawi",
        description: "Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Sasak menjadi aksara Kawi.",
        image: "https://aksarasasak.id/transliterasi-sasak/aksara-sasak.png",
      }}
/>
    
<Converter method = { ConverterMethod.JavaToKawi } />