const wyanjana:{ [id: string]: string; }  = {
    b: 'ᬩ',       // ba
    c: 'ᬘ',       // ca
    d: 'ᬤ',       // da
    dh:'ᬥ',       // dha
    ḍ: 'ᬟ',       // dha
    ḍh:'ᬠ',       // dha mahaprana
    dz:'ᬤ᭄ᬚ᬴',     // dza rekan
    f: 'ᬧ᬴',      // fa rekan
    g: 'ᬕ',       // ga
    gh:'',     // gha rekan
    h: 'ᬳ',       // ha
    j: 'ᬚ',       // ja
    k: 'ᬓ',       // ka
    kh:'ᬔ',     // kha rekan
    l: 'ᬮ',       // la
    m: 'ᬫ',       // ma
    n: 'ᬦ',       // na
    ng:'ᬗ',      // nga
    ŋ: 'ᬗ',       // nga
    ny:'ᬜ',       // nya
    nc:'ᬜ᭄ᬘ',       // nca
    nj:'ᬜ᭄ᬚ',       // nja
    ñ: 'ᬜ',       // nya
    ṇ: 'ᬡ',       // na murda
    p: 'ᬧ',       // pa
    p̣: 'ᬨ',       // pa murda
    q: 'ᭅ',       // ka sasak
    r: 'ᬭ',       // ra
    s: 'ᬲ',       // sa
    ś: 'ᬰ',       // sa murda
    ṣ: 'ᬱ',       // sa mahaprana
    t: 'ᬢ',       // ta
    th:'ᬣ',       // ta
    ṭ: 'ᬝ',       // ta murda
    ṭh:'ᬞ',      // tha mahaprana
    v: 'ᬯ᬴',      // va rekan
    w: 'ᬯ',       // wa
    x: 'ᬓ᭄ᬱ',     // ks 
    y: 'ᬬ',       // ya
    z: 'ᬚ᬴',      // za rekan
}

const swara:{ [id: string]: string; }  = {
    A: 'ᬅ',       // aksara swara a
    I: 'ᬇ',       // aksara swara i
    U: 'ᬉ',       // aksara swara u
    E: 'ᬏ',       // aksara swara e
    È: 'ᬏ',       // aksara swara e
    É: 'ᬏ',       // aksara swara e
    Ê: 'ᬅᭂ',      // aksara swara ê
    Ě: 'ᬅᭂ',      // aksara swara ê
    O: 'ᬑ',       // aksara swara o      
}

const murdaConsonants:{ [id: string]: string; } = {
    'n': 'ᬡ',      // na murda
    'k': 'ᬔ',       // ka murda
    'kh':'ᬔ',       // kha murda
    't': 'ᬣ',       // ta murda
    's': 'ᬰ',      // sa murda
    'p': 'ᬨ',       // pa murda
    'f': 'ᭈ',       // fa murda
    'ny':'ᬜ',      // nya murda
    'ñ': 'ᬜ',       // nya murda
    'g': 'ᬖ',      // ga murda
    'gh':'ᬖ',      // gha murda
    'b': 'ᬪ',       // ba murda
}

const penganggeArdhaswara:{ [id: string]: string; } = {
    r: '᭄ᬭ',   // cakra
    ṛ: 'ᬺ',   // cakra keret
    y: '᭄ᬬ',   // pengkal
    l: '᭄ᬮ',   
    w: '᭄ᬯ', 
    rê:'ᬺ', //guwung maclek
    rě:'ᬺ', //guwung maclek
    lê:'ᬍ', //nga lêlêt
    lě:'ᬍ', //nga lělět
    lêu:'ᬎ', //nga lêlêt Raswadi -- archaic
    lěu: 'ᬎ', //nga lělět Raswadi -- archaic
}

const penganggeTangenan:{ [id: string]: string; } = {
    r: 'ᬃ',
    h: 'ᬄ', 
    ng:'ᬂ',
    ī: 'ᬷ',
    ṁ: 'ᬁ',
    ṃ: 'ᬀ',    
}

const pengaggeSwara:{ [id: string]: string; } = { 
    a: '',
    ö: 'ᭃ',
    aa:'ᬵ',
    ai:' ᬿ',
    au:'ᭁ',
    ôô:'',
    ā: 'ᬵ',
    i: 'ᬶ',
    ii:'ᬷ',
    ī: 'ᬷ',
    u: 'ᬸ',
    uu:'ᬹ',
    ū: 'ᬹ',
    e: ' ᬾ',
    è: ' ᬾ',
    é: ' ᬾ',
    ê: ' ᭂ',
    ě: ' ᭂ',
    ĕ: ' ᭂ',
    o: 'ᭀ',
    rö:' ᬻ',
    lö:'ᬽ',
}

const cecirenpepaosan:{ [id: string]: string; } = {
    ' ' : '​',
    '.' : '᭟',
    ',' : '᭞',
    '-' : '᭠',
    '1' : '​᭑',
    '2' : '᭒',
    '3' : '᭓',
    '4' : '᭔',
    '5' : '᭕',
    '6' : '᭖',
    '7' : '᭗​',
    '8' : '᭘',
    '9' : '᭙',
    '0' : '᭐',
}

function convert(str:string, isIgnoreSpace:boolean = false, isMurda:boolean = false, isDiphthong:boolean = false):string {
   var length = str.length;
   var output = [];
   var isMurdaAlreadyIncluded = false;
   var isAlreadyStacked = false;

   for (var i = 0; i < length; i++)
   {
       var c:string = str[i];

       if(i + 1 < length) {
           var cc:string = c + str[i + 1];
           
           if(isConsonants(cc) || isConsonants(cc.toLowerCase())) {
               i++;
               
               if(cc === cc.toUpperCase()) {
                   cc = cc.toLowerCase();
               }

               if(isConsonantsPenganggeTangenan(cc)) {
                   isAlreadyStacked = false;
                   
                   if(i - 2 >= 0 && i + 1 < length) {
                       var cBefore = str[i - 2];
                       var cAfter = str[i + 1];

                       if(isVowels(cBefore) && !isVowels(cAfter)) {
                           output.push(penganggeTangenan[cc]);
                           continue;
                       }
                   }

                   if(i - 2 >= 0 && i === length - 1) {
                       var cBefore = str[i - 2];

                       if(isVowels(cBefore)) {
                           output.push(penganggeTangenan[cc]);
                           continue;
                       }
                   }
               }

               // prevent "tumpuk telu" by adding zero width space
               if(output.length - 2 >= 0) {
                   var lastOutput:string = output[output.length - 1];
                   var lastOutput2:string = output[output.length - 2];
                   
                   if(isPangkon(lastOutput) && isWyanjanaPenganggeInBelow(lastOutput2)) { 
                       if(isAlreadyStacked) {
                           // pop last two output
                           output.pop();
                           output.pop();

                           output.push('​'); // push zero width space

                           // push again last two output
                           output.push(lastOutput2);
                           output.push(lastOutput);
                           isAlreadyStacked = false;
                       } else {
                           isAlreadyStacked = true;
                       }
                   }
               }

               if(isMurda && !isMurdaAlreadyIncluded && isConsonantsMurda(cc)) {
                   output.push(murdaConsonants[cc]);
                   isMurdaAlreadyIncluded = true;
               } else {
                   output.push(wyanjana[cc]);
               }
               
               output.push('᭄');
               continue;
           }
       }

       if(isConsonantsPenganggeTangenan(c)) {
           isAlreadyStacked = false;
           let isPenganggeTangenan = false;

           if(i - 1 >= 0 && i + 1 < length) {
               var cBefore = str[i - 1];
               var cAfter = str[i + 1];

               if(isVowels(cBefore) && !isVowels(cAfter)) {
                   isPenganggeTangenan = true;
               }
           }

           if(i - 1 >= 0 && i === length - 1) {
               var cBefore = str[i - 1];

               if(isVowels(cBefore)) {
                   isPenganggeTangenan = true;
               }
           }

           if(isPenganggeTangenan) {
               // remove pangkon if exist
               if(output.length - 1 >= 0) {
                   var lastOutput:string = output[output.length - 1];   

                   if(isPangkon(lastOutput)) {
                       output.pop();
                   }
               }

               output.push(penganggeTangenan[c]);
               continue;
           }
       }
       
       if(isConsonantsPenganggeArdhaswara(c)) {
           isAlreadyStacked = false;
           let isPenganggeArdhaswara = false;

           if(i - 2 >= 0) {
               var cBefore = str[i - 2] + str[i - 1];

               if(isConsonants(cBefore) && !isPenganggeTangenan(output[output.length - 1])) {
                   isPenganggeArdhaswara = true;
               }
           }

           if(i - 1 >= 0) {
               var cBefore = str[i - 1];

               if(isConsonants(cBefore) && !isPenganggeTangenan(output[output.length - 1])) {
                   isPenganggeArdhaswara = true;
               }
           }

           if(isPenganggeArdhaswara) {
               // remove pangkon if exist
               if(output.length - 1 >= 0) {
                   var lastOutput:string = output[output.length - 1];   

                   if(isPangkon(lastOutput)) {
                       output.pop();
                   }
               }

               output.push(penganggeArdhaswara[c]);
               continue;
           }
       }
       
       if(isConsonants(c) || isConsonants(c.toLowerCase())) {
           if(c === c.toUpperCase()) {
               c = c.toLowerCase();
           }

           // prevent "tumpuk telu" by adding zero width space
           if(output.length - 2 >= 0) {
               var lastOutput:string = output[output.length - 1];
               var lastOutput2:string = output[output.length - 2];
               
               if(isPangkon(lastOutput) && isWyanjanaPenganggeInBelow(lastOutput2)) { 
                   if(isAlreadyStacked) {
                       output.pop();
                       output.pop();

                       output.push('​'); // push zero width space
                       output.push(lastOutput2);
                       output.push(lastOutput);
                       isAlreadyStacked = false;
                   } else {
                       isAlreadyStacked = true;
                   }
               }
           }

           if(isMurda && !isMurdaAlreadyIncluded && isConsonantsMurda(c)) {
               output.push(murdaConsonants[c]);
               isMurdaAlreadyIncluded = true;
           } else {
               output.push(wyanjana[c]);
           }

           output.push('᭄');
           continue;
       }

       if(isVowelsSwara(c)) {
           isAlreadyStacked = false;

           output.push(swara[c]);
           continue;
       }
       
       if(isVowels(c)) {
           isAlreadyStacked = false;

           if(i + 1 < length) {
               var c2 = str[i + 1];

               // change ia, iu, ie, iê, io to iya, iyu, iye, iyê, iyo
               if(isVowelsWulu(c) && isVowels(c2) && !isVowelsWulu(c2)) {
                   str = str.substring(0, i + 1) + 'y' + str.substring(i + 1, str.length);
                   length = str.length;
               }

               // change ua, ui, ue, uê, uo to uwa, uwi, uwe, uwê, uwo
               if(isVowelsSuku(c) && isVowels(c2) && !isVowelsSuku(c2)) {
                   str = str.substring(0, i + 1) + 'w' + str.substring(i + 1, str.length);
                   length = str.length;
               }

               // change ea to eya
               if(isVowelsTaling(c) && isVowelsA(c2)) {
                   str = str.substring(0, i + 1) + 'y' + str.substring(i + 1, str.length);
                   length = str.length;
               }

               // change eo to eyo
               if(isVowelsTaling(c) && isVowelsTalingTarung(c2)) {
                   str = str.substring(0, i + 1) + 'y' + str.substring(i + 1, str.length);
                   length = str.length;
               }
               
               // change oa to owa
               if(isVowelsTalingTarung(c) && isVowelsA(c2)) {
                   str = str.substring(0, i + 1) + 'w' + str.substring(i + 1, str.length);
                   length = str.length;
               }
               
               // change oe to owe
               if(isVowelsTalingTarung(c) && isVowelsTaling(c2)) {
                   str = str.substring(0, i + 1) + 'w' + str.substring(i + 1, str.length);
                   length = str.length;
               }
           }
           
           if(isVowelsPepet(c)) {
               // check cakra keret
               if(output.length - 1 >= 0) {
                   var lastOutputChar = output[output.length - 1];
                   
                   if(isCakra(lastOutputChar)) {
                       output.pop();
                       output.push('ᬺ');
                       continue;
                   }

                    // check nga lelet
                   if(i - 1 >= 0) {
                       var cBefore = str[i - 1];
                       
                       if(cBefore === 'l' && !isPangkon(lastOutputChar)) {
                           output.pop(); // pop pangkon
                           output.pop(); // pop aksara la
                           output.push('ᬎ');
                           continue;
                       }
                   }
               }

               if(i - 1 >= 0) {
                   var cBefore = str[i - 1];
                   
                   // check pa ceret
                   if(cBefore === 'r') {
                       output.pop(); // pop pangkon
                       output.pop(); // pop aksara ra
                       output.push('ᬋ');
                       continue;
                   }
               }
           }            
           
           if(i - 1 >= 0 && isConsonants(str[i - 1])) {
               // check pangkon
               if(output.length - 1 >= 0) {
                   var lastOutputChar = output[output.length - 1];
                   
                   if(isPangkon(lastOutputChar)) {
                       output.pop();
                   }
               }

               output.push(pengaggeSwara[c]);
           } else {
               output.push(wyanjana['h']);
               output.push(pengaggeSwara[c]);
           }

           // isDiphthong
           if(isDiphthong && i + 1 < length && isVowels(str[i + 1])) {
               var c2 = str[i + 1];

               if(isVowelsA(c) && isVowelsA(c2)) {
                   output.push(pengaggeSwara['aa']);
                   i++;
                   continue;
               }

               if(isVowelsA(c) && isVowelsWulu(c2)) {
                   output.push(pengaggeSwara['ai']);
                   i++;
                   continue;
               }

               if(isVowelsA(c) && isVowelsSuku(c2)) {
                   output.push(pengaggeSwara['au']);
                   i++;
                   continue;
               }

               if(isVowelsWulu(c) && isVowelsWulu(c2)) {
                   output.pop();
                   output.push(pengaggeSwara['ii']);
                   i++;
                   continue;
               }
               
               if (isVowelsSuku(c) && isVowelsSuku(c2)) {
                   output.pop();
                   output.push(pengaggeSwara['uu']);
                   i++;
                   continue;
               }
           }

           continue;
       }
       
       if(isCharactersCecirenpepaosan(c)) {
           isAlreadyStacked = false;

           if(isIgnoreSpace && c === ' ') {
               continue;
           }

           output.push(cecirenpepaosan[c]);
           continue;
       }
       
       output.push(c);
   }

   return output.join('');
}

function isWyanjana(key:string) { return Object.values(wyanjana).includes(key); }

function isWyanjanaPenganggeInRight(wyanjana:string):boolean { 
   return wyanjana === 'ꦥ' || wyanjana === 'ꦥ꦳' || wyanjana === 'ꦲ' || wyanjana === 'ꦏ꧀ꦱ' || wyanjana === 'ꦰ' || wyanjana === 'ꦱ' || wyanjana === 'ꦦ'; 
}

function isWyanjanaPenganggeInBelow(wyanjana:string):boolean { 
   return isWyanjana(wyanjana) && !isWyanjanaPenganggeInRight(wyanjana); 
}

function isPenganggeArdhaswara(key:string):boolean { return Object.values(penganggeArdhaswara).includes(key); }

function isPenganggeTangenan(key:string):boolean { return Object.values(penganggeTangenan).includes(key); }

function isConsonants(s:string):boolean { 
   return Object.prototype.hasOwnProperty.call(wyanjana, s.toLowerCase()); 
}

function isConsonantsMurda(s:string):boolean {
   return Object.prototype.hasOwnProperty.call(murdaConsonants, s.toLowerCase()); 
}

function isConsonantsPenganggeTangenan(s:string):boolean {
   return Object.prototype.hasOwnProperty.call(penganggeTangenan, s.toLowerCase());
}

function isConsonantsPenganggeArdhaswara(s:string):boolean {
   return Object.prototype.hasOwnProperty.call(penganggeArdhaswara, s.toLowerCase());
}

function isVowels(s:string):boolean { 
   return Object.prototype.hasOwnProperty.call(pengaggeSwara, s); 
}

function isVowelsSwara(s:string):boolean { 
   return Object.prototype.hasOwnProperty.call(swara, s); 
}

function isCharactersCecirenpepaosan(s:string):boolean {
   return Object.prototype.hasOwnProperty.call(cecirenpepaosan, s);
}

function isVowelsA(s:string):boolean {
   return s === 'a' || s === 'ô';
}

function isVowelsPepet(s:string):boolean {
   return s === 'ê' || s === 'ě';
}

function isVowelsWulu(s:string):boolean {
   return s === 'i';
}

function isVowelsSuku(s:string):boolean {
   return s === 'u';
}

function isVowelsTaling(s:string):boolean {
   return s === 'e' || s === 'é' || s === 'è';
}

function isVowelsTalingTarung(s:string):boolean {
   return s === 'o';
}

function isPangkon(s:string):boolean {
   return s === '᭄';
}

function isCakra(s:string):boolean {
   return s === '᭄';
}

export { convert };