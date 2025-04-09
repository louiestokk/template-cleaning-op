'use client'

import React,{Suspense,lazy,useState,useEffect} from 'react'
const HeaderComp = lazy(()=> import('../../../components/HeaderComp'))
const HeroComp = lazy(()=> import('../../../components/HeroComp'))  
const SectionOne = lazy(()=> import('../../../components/SectionOne')) 
const TjansterCarousal = lazy(()=> import('../../../components/TjansterCarousal')) 
const HogerSection = lazy(()=> import('../../../components/HogerSection')) 
const AccordionComp = lazy(()=> import('../../../components/AccordionComp')) 
const DividerSection = lazy(()=> import('../../../components/DividerSection')) 
const SectionTwo = lazy(()=> import('../../../components/SectionTwo')) 
const Tesimonial = lazy(()=> import('../../../components/Tesimonial')) 
const Divider = lazy(()=> import('../../../components/Divider')) 
const FooterComp = lazy(()=> import('../../../components/FooterComp')) 
const PopularaBtns = lazy(()=> import('../../../components/PopularaBtns')) 
const NewSeo = lazy(()=> import('../../../components/NewSeo')) 
import { Box } from '@mui/material'
import {accordionArray} from '../../../content/dodsbo'
import {servicesArrayPop,accordionTwo} from '../../../content/flytt'
import { sidorstadfirma,sidorflytt} from '../../../content/sidorna'
import styles from '../../page.module.css'
import { usePathname } from 'next/navigation'

const ClonFlyttComp = () => {
    const pathname = usePathname()
    const [currentCity, setcurrentCity] = useState('Göteborg')
    const formateCity = () =>{
        const starteerr =    pathname.split('/kontor/kontorsstad-')[1]
        switch (starteerr) {
            case 'goteborg':
              setcurrentCity('Göteborg')
              break;
            case 'skovde':
            setcurrentCity('Skövde')
              break;
              case 'boras':
                setcurrentCity('Borås')
                  break;
                  case 'trollhattan':
                    setcurrentCity('Trollhättan')
                      break;
                      case 'uddevalla':
                        setcurrentCity('Uddevalla')
                          break;
                          case 'kungalv':
                            setcurrentCity('Kungälv')
                              break;
                              case 'lidkoping':
                                setcurrentCity('Lidköping')
                                  break;
                                  case 'alingsas':
                                    setcurrentCity('Alingsås')
                                      break;
                                      case 'falkoping':
                                        setcurrentCity('Falköping')
                                          break;
                                          case 'mariestad':
                                            setcurrentCity('Mariestad')
                                              break;
                                              case 'vanersborg':
                                                setcurrentCity('Vänersborg')
                                                  break;
                                                  case 'kungsbacka':
                                                    setcurrentCity('Kungsbacka')
                                                      break;
                                                      case 'molndal':
                                                        setcurrentCity('Mölndal')
                                                          break;
                                                          case 'partille':
                                                            setcurrentCity('Partille')
                                                              break;
                                                              case 'stromstad':
                                                                setcurrentCity('Strömstad')
                                                                  break;
                                                                  case 'lerum':
                                                                    setcurrentCity('Lerum')
                                                                      break;
                                                                      case 'tibro':
                                                                        setcurrentCity('Tibro')
                                                                          break;
                                                                          case 'tidaholm':
                                                                            setcurrentCity('Tidaholm')
                                                                              break;
                                                                              case 'amal':
                                                                                setcurrentCity('Åmål')
                                                                                  break;
                                                                                  case 'fargelanda':
                                                                                    setcurrentCity('Färgelanda')
                                                                                      break;  
                                                                                      case 'lysekil':
                                                                                        setcurrentCity('Lysekil')
                                                                                          break;
                                                                                          case 'munkedal':
                                                                                            setcurrentCity('Munkedal')
                                                                                              break;
                                                                                              case 'dals-ed':
                                                                                                setcurrentCity('Dals-Ed')
                                                                                                  break;
                                                                                                  case 'tanum':
                                                                                                    setcurrentCity('Tanum')
                                                                                                      break;
                                                                                                      case 'sotenas':
                                                                                                        setcurrentCity('Sotenäs')
                                                                                                          break;
                                                                                                          case 'orust':
                                                                                                            setcurrentCity('Orust')
                                                                                                              break;
                                                                                                              case 'tjorn':
                                                                                                                setcurrentCity('Tjörn')
                                                                                                                  break;
                                                                                                                  case 'herrljunga':
                                                                                                                    setcurrentCity('Herrljunga')
                                                                                                                      break;
                                                                                                                      case 'vara':
                                                                                                                        setcurrentCity('Vara')
                                                                                                                          break;
                                                                                                                          case 'grastorp':
                                                                                                                            setcurrentCity('Grästorp')
                                                                                                                              break;
                                                                                                                              case 'essunga':
                                                                                                                                setcurrentCity('Essunga')
                                                                                                                                  break;
                                                                                                                                  case 'gotene':
                                                                                                                                    setcurrentCity('Götene')
                                                                                                                                      break;
                                                                                                                                      case 'nossebro':
                                                                                                                                        setcurrentCity('Nossebro')
                                                                                                                                          break;
                                                                                                                                          case 'karlskoga':
                                                                                                                                            setcurrentCity('Karlskoga')
                                                                                                                                              break;
                                                                                                                                              case 'gullspang':
                                                                                                                                                setcurrentCity('Gullspång')
                                                                                                                                                  break; 
                                                                                                                                                  case 'skaraborg':
                                                                                                                                                    setcurrentCity('Skaraborg')
                                                                                                                                                      break;
                                                                                                                                                      case 'hjo':
                                                                                                                                                        setcurrentCity('Hjo')
                                                                                                                                                          break;
                                                                                                                                                          case 'tranemo':
                                                                                                                                                            setcurrentCity('Tranemo')
                                                                                                                                                              break;
                                                                                                                                                              case 'svenljunga':
                                                                                                                                                                setcurrentCity('Svenljunga')
                                                                                                                                                                  break;
                                                                                                                                                                  case 'ulricehamn':
                                                                                                                                                                    setcurrentCity('Ulricehamn')
                                                                                                                                                                      break;
                                                                                                                                                                      case 'varberg':
                                                                                                                                                                        setcurrentCity('Varberg')
                                                                                                                                                                          break;
                                                                                                                                                                          case 'falkenberg':
                                                                                                                                                                            setcurrentCity('Falkenberg')
                                                                                                                                                                              break;
                                                                                                                                                                              case 'stenungsund':
                                                                                                                                                                                setcurrentCity('Stenungsund')
                                                                                                                                                                                  break;                                                                                        
            default:
              console.log(`Sorry vi är inte verksamma i denna ort!`);
          }
          
    }
    const article = {
        "@context": "https://schema.org",
        "@type": "Article",
        title: `Kontorsstäd i ${currentCity}? Trygg & Privärd Kontorsstäd  ${currentCity}ning ${currentCity}`,
        description:`Behöver du hjälp med att hitta en bra städfirma i ${currentCity}? Flyttströms ser till att du får den bästa Kontorsstäd i ${currentCity}! Prisvärd Kontorsstäd i ${currentCity}.`,
        datePublished: '2024-11-15',
        author: {
          "@type": "Person",
          "name": "Tant Rut Alltjänst"
        },
        image: "https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        publisher: {
          "@type": "Organization",
          "name": "Tant Rut Alltjänst",
          "logo": {
            "@type": "ImageObject",
            "url": "https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
        }
      };
      const JsonLd = ({ data }) => (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      );

      useEffect(()=>{
        formateCity()
      },[pathname])

      const accordionArray = [
        {
          title:`Hur mycket kostar flyttstädning i ${currentCity}?`,
          text:`Kostnaden för flyttstädning i ${currentCity} varierar beroende på flera faktorer, som bostadens storlek, antal badrum, och städfirmans villkor. Vanligtvis kostar en flyttstädning i ${currentCity} mellan 25–30 kr per kvadratmeter efter RUT-avdraget, vilket innebär att en bostad på 125 kvadratmeter kan kosta runt 3 500 kr. Priset påverkas även av om städningen utförs på vardagar eller under helger, då kvälls- och helgstädning ofta har en prispåslag på 30–60 %.`
        },
        {
          title:`Vad kostar en flyttfirma i ${currentCity}?`,
          text:'Kostnaden att alita en flyttfirma i kostar mellan 700-1200kr per timme efter Rut-avdrag. Mycket handlar om hur mycket det är som skall flyttas och hur långt samt vilka tilläggstjänster man har lagt till som uppackning och montering av möbler. Vi erbjuder kostandsfri offert som är anpassad efter dina behov och budget.'
        },
        {
          title:'Får jag RUT-avdrag när jag flyttar?',
          text:'Ja, du kan få RUT-avdrag för vissa kostnader när du flyttar. RUT-avdraget täcker arbetskostnader för flyttjänster, vilket inkluderar bland annat packning, lastning, uppackning och flyttstädning. Du kan dock inte få avdrag för kostnader relaterade till flyttbil, drivmedel, eller hyra av flyttkartonger. Avdraget gäller upp till 50 % av arbetskostnaden och maximalt 75 000 kronor per år för personer under 65 år, medan för äldre personer gäller ett tak på 50 000 kronor.'
        },
        {
          title:'Hur flyttar man billigast?',
          text:'Bästa sättet att flytta billigt är att man har en bra struktur på hemmet och allt som skall flyttas. Att man packar allt så att det blir enkelt för flyttfirman och bara bära kartonger och möbler. Montera ner möbler och skydda möblerna med filtar eller bubbelplast. Ta så mycket ni själva kan i bilen om ni har en, kläder, skor, jackor och andra mindre tillhörigheter.'
        },
        {
          title:'Vad kostar bortforsling av möbler?',
          text:'Priset för att få bortforsling av möbler varierar beroende på faktorer som plats, mängd möbler och huruvida möblerna kan återanvändas eller måste slängas som avfall. En vanlig metod för prissättning är att företag tar betalt per kubikmeter avfall, och detta kan kosta från cirka 500 till 1000 kronor per kubikmeter. För mindre bortforslingar med enstaka möbler finns ofta en minimikostnad runt 1500–2000 kronor. '
        }
      ]
    
      const accordionThree = [
        {
          title:`Vilken flyttfirma är bäst i ${currentCity}`,
          text:'När du letar efter en flyttfirma i är det viktigt att välja någon som prioriterar kvalitet, pålitlighet och personlig service. Vi på Flyttströms Alltjänst vågar säga att vi tillhör de bästa i branschen. Med erfarenhet, engagemang och ett kundfokus som går utöver det vanliga, ser vi till att din flytt blir smidig och stressfri.'
        } ,
         {
          title:'Vad är ett rimligt pris för en flyttfirma?',
          text:'Priset för en flyttfirma kan variera beroende på faktorer som omfattningen av flytten, avståndet och vilka tjänster du behöver. Generellt sett ligger timpriset för en flyttfirma mellan 600 och 1000 kronor, inklusive moms. För en mindre lägenhet kan totalkostnaden hamna runt 5 000–10 000 kronor, medan en större flytt kan kosta mer.'
        },
        {
          title:'Hur långt innan ska man boka flyttstädning?',
          text:'Det är bäst att boka flyttstädning ungefär två till fyra veckor i förväg, särskilt under högsäsong som månadsskiften och sommarperioder när efterfrågan är hög. Detta ger städfirman möjlighet att reservera en tid som passar dig och garanterar att de har tillräckligt med personal och utrustning tillgänglig'
        },
        {
          title:`Vad kostar flytthjälp i ${currentCity}?`,
          text:`Priset för flytthjälp i ${currentCity} beror på flera faktorer, såsom storleken på ditt bohag, avståndet mellan adresserna och eventuella tilläggstjänster som packning eller magasinering. I genomsnitt ligger kostnaden för flytthjälp ii ${currentCity} på mellan 600 och 1000 kronor per timme. För en normalstor flytt kan totalkostnaden landa på 5 000–15 000 kronor, beroende på omfattningen.`
        }
      ]
    
      const servicesArrayPop = [
        {
            title: `Städfirma ${currentCity}`,
            path:`/pages/tjanster/stadfirma-${currentCity.toLowerCase()}`
          },
            {
              title: "Bortforsling av möbler",
              path:'/bortforsling-mobler-goteborg'
            },
            {
              title: `Städa dödsbo i ${currentCity}`,
              path:`/pages/tjanster/stadfirma-${currentCity.toLowerCase()}`
            },
            {
              title: `Flyttstäd i ${currentCity}`,
              path:`flyttstad-${currentCity.toLowerCase()}`
            },
            {
              title: `Flyttstädning i ${currentCity}`,
              path:`flyttstad-${currentCity.toLowerCase()}`
            },
            {
                title: `Kontorsstäd i ${currentCity}`,
                path:`kontorsstad-${currentCity.toLowerCase()}`
              },
              {
                title: `Fönsterputs i ${currentCity}`,
                 path:`/pages/tjanster/stadfirma-${currentCity.toLowerCase()}`
              },
              {
                title: `Slutstädning i ${currentCity}`,
                path:`/pages/tjanster/stadfirma-${currentCity.toLowerCase()}`
              },
              {
                title: `Hemstäd i ${currentCity}`,
                 path:`/pages/tjanster/stadfirma-${currentCity.toLowerCase()}`
              },
              {
                title: `Flytthjälp i ${currentCity}`,
                path:`/pages/tjanster/stadfirma-${currentCity.toLowerCase()}`
              },
              {
                title: `Slänga möbler i ${currentCity}`,
                path:`/pages/tjanster/stadfirma-${currentCity.toLowerCase()}`
              },
    ]
    
  return (
    <div>
             <title>{`Kontorsstäd i ${currentCity}? Trygg & Privärd Kontorsstäd  ${currentCity}`}</title>
    <meta name="description" content={`Behöver du hjälp med att hitta en bra städfirma i ${currentCity}? Flyttströms ser till att du får den bästa Kontorsstäd i ${currentCity}! Prisvärd Kontorsstäd i ${currentCity}.`}/>
    <meta property="og:title" content={`Kontorsstäd i ${currentCity}? Trygg & Privärd Kontorsstäd  ${currentCity}`}/>
    <meta property="og:description" content={`Behöver du hjälp med att hitta en bra städfirma i ${currentCity}? Flyttströms ser till att du får den bästa Kontorsstädningen i ${currentCity}! Prisvärd Kontorsstäd i ${currentCity}.`}/>
    <meta property="og:image" content="https://images.pexels.com/photos/7464698/pexels-photo-7464698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
    <meta property="og:type" content="website"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content={`Kontorsstäd i ${currentCity}? Trygg & Privärd Kontorsstäd  ${currentCity}`}/>
    <meta name="twitter:description" content={`Behöver du hjälp med att hitta en bra städfirma i ${currentCity}? Flyttströms ser till att du får den bästa kontorstädning i ${currentCity}! Prisvärd Kontorsstäd i ${currentCity}.`}/>
    <meta name="twitter:image" content="https://images.pexels.com/photos/7464698/pexels-photo-7464698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
    <meta name="robots" content="index, follow"/>
    <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>
          <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": article.title,
        "description": article.description,
        "datePublished": article.datePublished,
        "author": article.author,
        "image": [article.image],
        "publisher": article.publisher,
      }} />
            <Suspense fallback={<p>...loading</p>}>
      <header className={styles.header}>
<HeaderComp sidor={sidorflytt}/>
    </header>
    <main className={styles.main}>
    <HeroComp title={`Kontorsstäd i ${currentCity}`} text={`Vi flyttar, städar och tömmer hushåll och dödsbon i ${currentCity}. Nyttja din rut när du använder våra tjänster!`}/>
    <div style={{height:'30px'}}></div>
    <HogerSection />
    <article style={{height:'30px'}}></article>
    <TjansterCarousal />
    <article style={{height:'30px'}}></article>
    <SectionOne />
    <article style={{height:'30px'}}></article>
    <AccordionComp accordionArray={accordionArray}/>
    <div className={styles.blekguidesec} id="flyttfirma-stockholm">
  <article>
    <h2 style={{ maxWidth: '500px', lineHeight: '52px', fontSize: '2.4rem' }} className={styles.titeln}>
     {`Flyttfirma i ${currentCity} – Vad kostar det och vad ska du tänka på?`}
    </h2>
    <p className={styles.specialarre}>
      {`Letar du efter en pålitlig flyttfirma i ${currentCity}? Här hittar du information om priser, tjänster och tips för att välja rätt flyttfirma. Oavsett om du flyttar inom ${currentCity} eller till en ny stad hjälper vi dig att jämföra alternativen.`}
    </p>

    <div style={{ marginTop: '30px' }} id="flyttfirma-info">
      <h2 className={styles.titeln}>{`Vad kostar en flyttfirma i ${currentCity}?`}</h2>
      <p className={styles.textform}>
        Priset för en flyttfirma varierar beroende på tjänst och omfattning. Genomsnittliga timpriser är mellan <strong>500–1 200 SEK</strong>, och många företag erbjuder paketlösningar för större flyttar. Extra kostnader kan tillkomma för packhjälp, transport eller magasinering.
      </p>

      <h2 style={{ marginTop: '20px' }} className={styles.titeln}>Vad ingår i en flyttjänst?</h2>
      <ul className={styles.textform}>
        <li>Lastning och lossning av flyttgods</li>
        <li>Transport till den nya bostaden</li>
        <li>Paket- och packhjälp (mot extra kostnad)</li>
        <li>Magasinering för kort- eller långtid</li>
        <li>Specialtransporter för tunga eller ömtåliga föremål</li>
      </ul>

      <h2 style={{ marginTop: '20px' }} className={styles.titeln}>Tips för att spara pengar vid flytten</h2>
      <ul className={styles.textform}>
        <li>Boka flytten i god tid för att få bästa pris.</li>
        <li>Packa och demontera möbler själv.</li>
        <li><a style={{color:'inherit',fontWeight:'bold'}} href='https://www.recyclerapp.com/flyttfirma-goteborg'>Jämför priser</a> från flera <a style={{color:'inherit',fontWeight:'bold'}} href='https://www.recyclerapp.com/flyttfirma-goteborg'>flyttfirmor</a>.</li>
        <li>Välj en flyttfirma som erbjuder RUT-avdrag för flyttjänster.</li>
      </ul>
    </div>
  </article>

  <article>
    <img
      loading="lazy"
      alt={'Flyttfirma Stockholm - Pris och Tjänster'}
      src={
        'https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
      style={{ width: '100%', height: '340px', objectFit: 'contain' }}
    />

<ul style={{ marginTop: '20px' }}>
  <h2 className={styles.titeln}>{`Vanliga frågor om flyttfirmor i ${currentCity}`}</h2>
  <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
    <strong className={styles.titeln}>Hur bokar jag en flyttfirma?</strong>
    Kontakta flyttfirman för att få en offert och boka i förväg, helst minst två veckor innan flyttdagen.
  </li>
  <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
    <strong className={styles.titeln}>Vilka extra kostnader kan tillkomma?</strong>
    Kostnader för packning, flyttlådor eller tunga lyft som pianon kan tillkomma.
  </li>
  <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
    <strong className={styles.titeln}>Kan jag få RUT-avdrag?</strong>
    Ja, flyttjänster är berättigade till RUT-avdrag, vilket ger dig 50 % rabatt på arbetskostnaden.
  </li>
  <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
    <strong className={styles.titeln}>Hur lång tid tar en flytt?</strong>
    För en normalstor lägenhet tar flytten mellan 3–6 timmar beroende på avstånd och mängd gods.
  </li>
  <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
    <strong className={styles.titeln}>Hur säkerställer jag att mina saker är försäkrade?</strong>
    Kontrollera att flyttfirman erbjuder ansvarsförsäkring och att din hemförsäkring täcker skador vid flytt.
  </li>
  <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
    <strong className={styles.titeln}>{`Vad kostar en flyttfirma i ${currentCity}?`}</strong>
    Priser varierar beroende på flyttstorlek och avstånd, men genomsnittet är 800–1200 SEK per timme för två personer och lastbil.
  </li>
  <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
    <strong className={styles.titeln}>Kan flyttfirman hjälpa till med packning?</strong>
    Ja, många flyttfirmor erbjuder packhjälp som en tilläggstjänst mot extra kostnad.
  </li>
  <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
    <strong className={styles.titeln}>Är det billigare att flytta på vardagar?</strong>
    Ja, priserna är ofta lägre på vardagar jämfört med helger och helgdagar.
  </li>
  <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
    <strong className={styles.titeln}>Vad händer om flyttfirman skadar mina saker?</strong>
    Om något skadas under flytten täcker flyttfirmans ansvarsförsäkring detta, men dokumentera skador direkt.
  </li>
  <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
    <strong className={styles.titeln}>Behöver jag förbereda något inför flytten?</strong>
    Ja, packa ordentligt, märk lådorna och planera logistik för flyttdagen för en smidigare process.
  </li>
</ul>

  </article>
</div>
    <DividerSection idsec={'koper-dodsbo-goteborg'} idone={'flyttstad'}  imgUrl={'https://img.freepik.com/free-vector/moving-new-apartment-concept_74855-7628.jpg?t=st=1731677134~exp=1731680734~hmac=016d52e8b6edea7efc05bd3872cfcb51b491b198b1f523ea4bdf815d8d674bf6&w=1800'} text={`När du behöver hjälp med flyttstädning i ${currentCity}, erbjuder vi en komplett och smidig lösning från början till slut. På det datum vi tillsammans har kommit överens om, anländer vi för att genomföra en grundlig och professionell flyttstädning av ditt hem. Med noggrannhet och omsorg städar vi alla ytor och ser till att inga detaljer förbises. Vi hanterar allt från rengöring av kök och badrum till fönsterputsning och golvvård. Efter att vi har slutfört städningen, ser vi till att hemmet är i toppskick inför nästa boende eller besiktning, så att du kan känna dig trygg och nöjd med resultatet.`} service={'Flyttstäd'} title={`Köper upp dödsbon i ${currentCity}`} secondTitle={`Flyttstäd i ${currentCity}`}/>
    <SectionTwo />
    <Tesimonial />
    <div className={styles.heroMain} id='fonsterputs'>
     <article >
     <article>
                 <article style={{height:'10px'}}></article>
                 <h4 className={styles.titeln}>{`Fönsterputs i ${currentCity}`}</h4>
     <h2  className={styles.titeln}>{'Tant Ruts fönsterputs'}</h2>
     <p className={styles.textform}>
      {`Låt oss hjälpa dig få kristallklara fönster med vår professionella fönsterputsningstjänst i ${currentCity}. Oavsett om det gäller hem, kontor eller butik ser vi till att dina fönster blir fria från smuts, damm och fläckar – både på in- och utsidan. Vi använder effektiva metoder och miljövänliga produkter som ger ett skinande resultat utan ränder. Med rena fönster får du in mer naturligt ljus och skapar en fräsch och välkomnande atmosfär. Boka vår fönsterputsning i ${currentCity} och låt oss förvandla dina fönster till en klarare utsikt!`}
     </p>
     </article>
       </article>
       <article>
                <img alt={'fönsterputs'} src={'https://img.freepik.com/free-vector/plastic-windows-flat-composition-with-indoor-scenery-two-workers-washing-glass-with-urban-cityscape-view-vector-illustration_98292-8816.jpg?t=st=1731792041~exp=1731795641~hmac=115feb61f16a3dc27d3caee8e8833d8cfd7f673d589f6ac2c0f99a8549f41743&w=2000'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </article>
     </div>
     <article style={{height:'20px'}}></article>
     <Divider text={'Vi gör din flytt billig!'}/>
     <article style={{height:'20px'}}></article>
     <NewSeo/>
     <PopularaBtns servicesArrayPop={servicesArrayPop}/>
     <div className={styles.heroMain} id='dodsbostadning'>
     <article>
     <article>
                 <article style={{height:'10px'}}></article>
                 <h4 className={styles.titeln}>{'Dödsbo'}</h4>
     <h2  className={styles.titeln}>{`Dödsbostädning i ${currentCity}`}</h2>
     <p className={styles.textform}>
        {`Vi erbjuder dödsbostädning i ${currentCity} för att underlätta en svår tid, med fokus på noggrannhet, omsorg och respekt. När ett dödsbo ska städas och förberedas, ser vi till att platsen blir fullständigt rengjord och iordningställd för nästa steg – oavsett om det handlar om försäljning, uthyrning eller fortsatt användning. Vi tar hand om allt från grovstädning till noggrann rengöring av ytor, kök, badrum och fönsterputsning. `}
     </p>
     </article>
       </article>
       <article id='vardera-dodsbo-goteborg'>
                <img alt={`värdering av dödsbo i ${currentCity}`} src={'https://img.freepik.com/free-vector/paid-idea-concept-illustration_114360-8105.jpg?t=st=1731681350~exp=1731684950~hmac=1cec0b1df4d4755f4720d4978e369db4635c80ef1f843e6ce8b6e1276cba7d78&w=1380'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </article>
     </div>
     <article style={{height:'50px'}}></article>
     <AccordionComp accordionArray={accordionTwo}/>
     <div className={styles.heroMain} id='slutstadning'>
    <article>
                <img alt={'dödsbo'} src={'https://img.freepik.com/free-vector/women-winning-money-prize-happy-girls-holding-huge-dollar-banknote-flat-illustration_74855-14219.jpg?t=st=1731683637~exp=1731687237~hmac=c441ad257809337783bc2187003c3fbc02e9d5a3e7d06bad218fd81999188d8b&w=1380'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </article>
     <article>
     <article>
                 <article style={{height:'10px'}}></article>
                 <h4 className={styles.titeln}>{'Bäst & Billigast'}</h4>
     <h2  className={styles.titeln}>{`Slutstädning i ${currentCity}`}</h2>
     <p className={styles.textform}>
      {`Behöver du en pålitlig slutstädning i ${currentCity} inför flytten? Vi erbjuder en komplett och professionell slutstädning som uppfyller alla krav för besiktning och överlämning. Vårt erfarna team tar hand om allt från grundlig rengöring av kök och badrum till fönsterputsning, dammsugning och avtorkning av alla ytor. Vi ser till att även detaljer som lister, garderober och svåråtkomliga utrymmen blir skinande rena, så att du kan känna dig trygg med att lämna bostaden i perfekt skick.`}
     </p>
     </article>
       </article>
     
     </div>
     <article style={{height:'50px'}}></article>
     <article style={{width:'100%'}}>
     <div style={{ justifyContent:'center',margin:'0 auto',alignItems:'center',textAlign:'center'}}>
     <Box>
     <h2 style={{textAlign:'center'}} className={styles.titeln}>Tant Rut</h2>
      <p style={{fontSize:'0.85rem',lineHeight:'22px',margin:'0 auto',maxWidth:'700px',marginBottom:'25px'}} className={styles.textform}><strong>När du anlitar Tant Rut Alltjänst i {currentCity} </strong> får du en smidig och prisvärd flyttupplevelse. Vi erbjuder flytthjälp med två flyttkillar och lätt lastbil för endast 799 kr per timme. En startavgift på 500 kr tillkommer, vilket är standard bland seriösa flyttföretag.

Hos Tant Rut skiljer vi oss från många andra flyttfirmor genom att inte ha någon minimidebitering – du betalar bara för tiden vi faktiskt arbetar, plus startavgiften. Många konkurrenter kräver debitering på minst 3–5 timmar, men hos oss slipper du dolda kostnader.

Som en mindre och kundfokuserad flyttfirma i {currentCity} prioriterar vi personlig service och hög kvalitet. Vi är stolta över att erbjuda trygg och effektiv hjälp för både privatpersoner och företag i hela {currentCity}sområdet. Välj Tant Rut Alltjänst för en professionell flytt utan onödiga krångligheter!

Kontakta oss idag för en kostnadsfri offert – vi ser fram emot att hjälpa dig med din flytt!</p>
     </Box>
     </div>
  
<Box className={styles.classic}>
<ul>
    <li style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Trygg och säker flytt:</strong> Vi skyddar dina möbler och ägodelar noggrant under hela flytten för att säkerställa att de når sin nya plats utan skador.</li>
    <li style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}> Försäkrade flyttjänster:</strong> Tant Rut Alltjänst är ett fullt försäkrat flyttföretag, vilket ger dig extra trygghet vid flytten.</li>
    <li style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Erfaret och utbildat team:</strong> Våra flyttkillar är professionellt utbildade och har lång erfarenhet av att hantera flyttar av alla slag, stora som små.</li>
    <li style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Flexibel och personlig service:</strong> Vi anpassar våra flyttjänster efter dina specifika behov och ser till att din flytt blir så smidig som möjligt.</li>
    <li style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Prisvärd flytthjälp i {currentCity}:</strong> Med konkurrenskraftiga priser och RUT-avdrag gör vi din flytt både enkel och ekonomisk.</li>
    <li style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Effektiv och snabb flytt:</strong> Vårt erfarna team ser till att din flytt går snabbt och effektivt, vilket sparar både tid och pengar.</li>
    <li style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Ingen minimidebitering:</strong> Hos oss betalar du endast för den faktiska arbetstiden – utan onödiga extra avgifter.</li>
    <li style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Flytt i hela {currentCity}sområdet:</strong> Vi erbjuder flytthjälp över hela {currentCity}, från centrala områden till förorter som Majorna och Kungälv.</li>
    <li style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Smidig hantering av tunga lyft:</strong> Vi tar hand om de tunga lyften så att du slipper stressen och risken för skador vid flytten.</li>
    <li style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Snabb och enkel offert:</strong> Kontakta oss för en snabb och kostnadsfri offert så får du veta exakt vad din flytt kommer att kosta.</li>
</ul>
<ul>
    <li  style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Erfaren flyttfirma i {currentCity}:</strong> Vi på Tant Rut Alltjänst har många års erfarenhet av flyttjänster i hela {currentCity}, vilket gör oss till en pålitlig partner för din flytt.</li>
    <li  style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>RUT-avdrag för lägre kostnader:</strong> Ta del av RUT-avdraget och spara upp till 50% på arbetskostnaden när du anlitar oss för din flytt i {currentCity}.</li>
    <li  style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Vi hanterar alla typer av flyttar:</strong> Oavsett om det handlar om en liten lägenhet eller ett stort företag, har vi resurser och erfarenhet för att hantera flyttar av alla storlekar.</li>
    <li  style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Vårt team är professionellt och pålitligt:</strong> Vi värdesätter god kommunikation och att våra kunder känner sig trygga hela vägen genom flytten.</li>
    <li  style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Enkel och snabb bokning:</strong> Vi gör det lätt för dig att boka flytthjälp – enkelt via telefon eller e-post, och vi kan hjälpa till med samma dag vid akuta behov.</li>
    <li  style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Fokus på kundnöjdhet:</strong> Vår kundservice är alltid nära till hands för att svara på frågor och lösa eventuella problem som kan uppstå under flytten.</li>
    <li  style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Effektiv packning och lastning:</strong> Vi erbjuder hjälp med packning och lastning, vilket gör din flytt ännu smidigare och enklare.</li>
    <li  style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Miljövänlig flytt:</strong> Vi strävar efter att göra våra flyttar så miljövänliga som möjligt genom att återvinna och använda hållbara transportlösningar.</li>
    <li  style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Inget dolda avgifter:</strong> Vi är transparenta med våra priser och inga dolda avgifter tillkommer – du betalar för det du får, inget mer.</li>
    <li  style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Flytt med omtanke:</strong> Hos oss är det viktigt att du som kund känner att vi tar hand om din flytt och dina saker med största omsorg och respekt.</li>
</ul>
</Box>


     </article>
    </main>
    <div style={{height:'75px'}}></div>
    <FooterComp />
      </Suspense>
    </div>
  )
}

export default ClonFlyttComp