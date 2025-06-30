Main Points

# Įdomūs dalykėliai head dalyje
• Kadangi bus daug style, pasidarau išorinį styles.css failą, kurį prijungiu prie html failo per link (html line 9)
• importuoju ubuntu šriftą per GoogleFonts (html lines 10-14)

# Puslapio sandara
• Traktuoju, kad puslapis susideda iš body, kuriame yra headeris, table, footeris.

# Įdomūs dalykėliai lentelėje
• striped lentelė (kas antroje tr kita bg spalva), pagerina lentelės skaitomumą, padaroma per tr:nth-child(even) selectorių (css lines 66-68)
• hover effektas (užvedus pelę pasikeičia tr spalva) padaromas su tr:hover selectoriumi, bet kadangi aš nenorėjau, kad keistusi ir pirmos tr (pačios lentelės headeris), naudoju tr:not(:first-child):hover, kuris pritaiko stylių visom tr išskyrus pirmą. (lines 61-63).
• pačioje lentelėje, kur yra dt su paveikslėliu panaudojus floatą, man nesigavo jų normaliai išcentruoti vertikaliai, todėl naudoju flexbox. Iš esmės panaudojus display: flex, elementai stoja į vieną eilę horizontaliai. Flebox taip pat leidžia pasinaudoti gap property kuris tarp visų elementų įdės kažkokio dyždio tarpelį. Bet, kad flexbox suveiktų man html reikia padaryti, kad būtų 2 elementai, todėl teko įvilkti p elementus į papildomą divą. (css lines 81-85, html lines 30-38).

# Styliu klasės
• Kadangi yra daug pasikartojančio stiliaus elementų galima juos sugrupuoti per klases, priskyrus vieną (<p class="member-name">) ar kelias klases (<div class="card active-status-tag">). 
• Pavyzdžiui turim tuos spalvotus tag elementus, kurie yra panašūs dydžių ber skiriasi spalva. Per .card klasę priskiriu jiems bendrą styliu, o per kitas klases spalvas. (css lines 87-131)

# Buttonsai
• Footeryje naudoju du buttonsus. Kadangi noriu kad jie būtų balti su klase priskiriu baltą spalvą. Tačiau reikia padaryti, kad current page būtų biški kitos spalvos, kad perrašyti klasę naudoju id, kuris turi didesnį specificity html rašosi <button class="page-number-btn" id="current-page">, o per css naudojant  #current-page{} selectorių (html line 134, css lines 134-148).

# Figma
• Patogu atstumus tarp elementų, spalvas ir etc pasižiūrėti per dizaino toolą Figma, taip pat jame pasipaišyti svetainės layoutą jeigu neduotas. https://www.figma.com/ bet reikia užsiregistuoti.