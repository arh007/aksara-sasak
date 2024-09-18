<script lang="ts">
import { ConverterMethod } from "$lib/scripts/global";
import SvelteSeo from "svelte-seo";
import Converter from "$lib/components/Converter.svelte";
</script>
    
<SvelteSeo
    title="Transliterasi | Latin-Sasak"
    description="Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Latin menjadi aksara Sasak."
    canonical="https://arh007.github.io/aksara-sasak/latin-sasak"
    keywords="alat, transliterasi, konversi, alih, aksara, sasak, latin"
    openGraph={{
        title: "Transliterasi | Latin-Sasak",
        description: "Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Latin menjadi aksara Sasak.",
        url: "https://arh007.github.io/aksara-sasak/latin-sasak",
        type: "website",
        images: [{
            url: "https://arh007.github.io/aksara-sasak/aksara-sasak.png",
        },],
        site_name: "Transliterasi Aksara Sasak",
    }}
    twitter={{
        card: "summary_large_image",
        title: "Transliterasi | Latin-Sasak",
        description: "Alat transliterasi sederhana untuk mengalihkan/mengubah/mengkonversi teks aksara Latin menjadi aksara Sasak.",
        image: "https://arh007.github.io/aksara-sasak/aksara-sasak.png",
    }}
/>

<Converter method = { ConverterMethod.LatinToSasak } />