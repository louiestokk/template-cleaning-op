import React,{Suspense,lazy} from 'react'
import styles from '../page.module.css'

const HeaderComp = lazy(()=> import('../../components/HeaderComp'))
const HeroComp = lazy(()=> import('../../components/HeroComp')) 
const HogerSection = lazy(()=> import('../../components/HogerSection')) 
const TjansterCarousal = lazy(()=> import('../../components/TjansterCarousal')) 
const LeftSection = lazy(()=> import('../../components/LeftSection')) 
const AccordionComp = lazy(()=> import('../../components/AccordionComp')) 
const DividerSection = lazy(()=> import('../../components/DividerSection')) 
const Tesimonial = lazy(()=> import('../../components/Tesimonial')) 
const Divider = lazy(()=> import('../../components/Divider')) 
const FooterComp = lazy(()=> import('../../components/FooterComp')) 
const PopularaBtns = lazy(()=> import('../../components/PopularaBtns')) 
import {accordionArray,accordionTwo,servicesArrayPop} from '../../content/dodsbo'
import { sidorsalja } from '../../content/sidorna'
export const metadata = {
  title: 'Värdera dödsbo Göteborg? Vi erbjuder kostnadsfri värdering!',
  description:'Behöver du värdera ett dödsbo i Göteborg? Vi värderar, tömmer och städar dödsbon och bohag i Göteborg. Köpa upp, tömma och städa dödsbo i Göteborg',
  keywords: ['sälja dödsbo Göteborg','köper dödsbo Göteborg','dödsbouppköpare Göteborg','värdera dödsbo i Göteborg','köper allt i hemmet i Göteborg','dödsbo i Göteborg','bortforsling dödsbo','värdering dödsbo','dödsbostädning i Göteborg','slutstädning i Göteborg','auktionsfirma','loppisar','köper lösöre','tömma dödsbo', 'röja dödsbo', 'tömning av dödsbo i Göteborg','tömmer dödsbo','dödsbotömning','bouppteckning','städfirma','flyttfirma','rut avdrag','recycla','recycle','recycling','bortforsling','bortforsling Göteborg','sälja dödsbo','tömma dödsbo','tömmer dödsbo i göteborg','röjer dödsbo i Göteborg','dödsbo göteborg','göteborg','dödsbo','tömma dödsbo Göteborrg','dödsbovärdering','värderar dödsbo i Göteborg'],
  metadataBase: new URL('https://tantrut-alltjanst.com'),
  alternates: {
    canonical: 'https://tantrut-alltjanst.com/varderar-dodsbo-goteborg',
    languages: {
      'sv': '/sv',
    },
  },
  openGraph: {
    title: 'Värdera dödsbo Göteborg? Vi erbjuder kostnadsfri värdering!',
    images: 'https://tantrut-alltjanst.com/hero.jpg',
    description:'Behöver du värdera ett dödsbo i Göteborg? Vi värderar, tömmer och städar dödsbon och bohag i Göteborg. Köpa upp, tömma och städa dödsbo i Göteborg',
    url: 'https://tantrut-alltjanst.com/varderar-dodsbo-goteborg',
    site_name: 'Tant Rut Alltjänst',
    images: [
      {
        url: 'https://tantrut-alltjanst.com/hero.jpg',
        width: 1260,
        height: 750,
        alt: 'värdera dödsbo i Göteborg',
      }
    ],
    type: 'website',
    locale: 'sv_SE',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tanrut', 
    title: 'Värdera dödsbo Göteborg? Vi erbjuder kostnadsfri värdering!',
    description:'Behöver du värdera ett dödsbo i Göteborg? Vi värderar, tömmer och städar dödsbon och bohag i Göteborg. Köpa upp, tömma och städa dödsbo i Göteborg',
    image: 'https://tantrut-alltjanst.com/hero.jpg',
  },
  robots: {
    index: true,
    follow: true,
  }
}

const VarderaDodsbo = () => {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    title: 'Värdera dödsbo Göteborg? Vi erbjuder kostnadsfri värdering!',
    description:'Behöver du värdera ett dödsbo i Göteborg? Vi värderar, tömmer och städar dödsbon och bohag i Göteborg. Köpa upp, tömma och städa dödsbo i Göteborg',
    datePublished: '2024-11-15',
    author: {
      "@type": "Person",
      "name": "Tant Rut Alltjänsts"
    },
    image: "https://tantrut-alltjanst.com/hero.jpg",
    publisher: {
      "@type": "Organization",
      "name": "Tant Rut Alltjänsts",
      "logo": {
        "@type": "ImageObject",
        "url": "https://img.freepik.com/free-vector/cleaning-service-concept-illustration_114360-9852.jpg?t=st=1731531099~exp=1731534699~hmac=6ed2e54648f742a3382968c0c5e7d668bf11b7a637a2458250a5b0face96b63a&w=1800"
      }
    }
  };
  const JsonLd = ({ data }) => (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );

  return (
    <div className={styles.page} id='salja-dodsbo'>
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
<HeaderComp sidor={sidorsalja}/>
    </header>
    <main className={styles.main}>
    <HeroComp title={'Värdera dödsbo i Göteborg'} text={'Vi köper upp, städar och tömmer hushåll och dödsbon i Göteborg. Nyttja din rut när du använder våra tjänster!'}/>
    <div style={{height:'30px'}}></div>
    <HogerSection/>
    <TjansterCarousal />
    <div id='salja-dodsbo-goteborg'  style={{height:'70px'}}></div>
    <LeftSection textsecond={'Vi erbjuder kostnadsfri och professionell värdering av dödsbon, bohag och enskilda föremål i Göteborg med omnejd. Genom vår tjänst kan vi hjälpa dig att få en noggrann uppskattning av hemmets lösöre, vilket är ett viktigt steg inför en eventuell tömning av dödsboet. Vår bedömning ger dig ett fast pris för tömningen, och vi kan även lämna ett specifikt erbjudande för uppköp av värdefulla föremål vi är intresserade av att köpa.'} servicesec={'Dödsbo'} titlesecond={'Värdering av dödsbo i Göteborg'} bannerText={'Skall du flytta till ett boende? Nyttja din RUT(50%)'} service={'Dödsbo'} title={'Sälja dödsbo i Göteborg?'} text={'Vi erbjuder professionell hantering av dödsbon, inklusive tömning, städning och försäljning av föremål. Vi köper upp dödsbon i Göteborg och säljer vidare värdefulla objekt på ett effektivt sätt, samtidigt som vi ser till att tömma och städa dödsbot i Göteborg. Vårt mål är att underlätta processen för anhöriga genom att ta hand om allt från värdering och bortforsling av dödsbo i Göteborg till slutstädning, med omtanke och respekt.'} imgUrl={'https://tantrut-alltjanst.com/hero.jpg'}/>
    <AccordionComp accordionArray={accordionArray}/>
    <div className={styles.blekguidesec} id="flyttfirma-goteborg">
  <article>
    <h2 style={{ maxWidth: '500px', lineHeight: '52px', fontSize: '2.4rem' }} className={styles.titeln}>
      Flyttfirma i Göteborg – Vad kostar det och vad ska du tänka på?
    </h2>
    <p className={styles.specialarre}>
      Letar du efter en pålitlig flyttfirma i Göteborg? Här hittar du information om priser, tjänster och tips för att välja rätt flyttfirma. Oavsett om du flyttar inom Göteborg eller till en ny stad hjälper vi dig att jämföra alternativen.
    </p>

    <div style={{ marginTop: '30px' }} id="flyttfirma-info">
      <h2 className={styles.titeln}>Vad kostar en flyttfirma i Göteborg?</h2>
      <p className={styles.textform}>
        Priset för en flyttfirma i Göteborg varierar beroende på tjänst och omfattning. Genomsnittliga timpriser är mellan <strong>500–1 200 SEK</strong>, och många företag erbjuder paketlösningar för större flyttar. Extra kostnader kan tillkomma för packhjälp, transport eller magasinering.
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
        <li>Jämför priser från flera flyttfirmor i Göteborg.</li>
        <li>Välj en flyttfirma som erbjuder RUT-avdrag för flyttjänster.</li>
      </ul>
    </div>
  </article>

  <article>
    <img
      loading="lazy"
      alt={'Flyttfirma Göteborg - Pris och Tjänster'}
      src={
        'https://images.pexels.com/photos/7464230/pexels-photo-7464230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      }
      style={{ width: '100%', height: '340px', objectFit: 'contain' }}
    />

<ul style={{ marginTop: '20px' }}>
  <h2 className={styles.titeln}>Vanliga frågor om flyttfirmor i Göteborg</h2>
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
    <strong className={styles.titeln}>Vad kostar en flyttfirma i Göteborg?</strong>
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
    <DividerSection idsec={'koper-dodsbo-goteborg'} idone={'tomma-dodsbo-goteborg'}  imgUrl={'https://img.freepik.com/free-vector/moving-new-apartment-concept_74855-7628.jpg?t=st=1731677134~exp=1731680734~hmac=016d52e8b6edea7efc05bd3872cfcb51b491b198b1f523ea4bdf815d8d674bf6&w=1800'} text={'När du behöver hjälp med att tömma ett dödsbo i Göteborg, erbjuder vi en komplett och smidig lösning från början till slut. På den dag vi tillsammans kommit överens om, kommer vi till platsen för att påbörja en noggrann sortering av dödsboet eller bohaget. Med omsorg och respekt går vi igenom alla föremål för att avgöra vad som kan doneras, återvinnas, eller tas till tippen. Efter att vi har hanterat allt som ska skänkas eller återvinnas, tar vi med oss det lösöre vi har köpt upp och transporterar det till vårt lager eller butik.'} service={'Dödsbo'} title={'Köper upp dödsbon i Göteborg'} secondTitle={'Tömmer dödsbo i Göteborg'}/>
    <LeftSection idtwo={'stadar-dodsbon-goteborg'} imgUrlsec={'https://img.freepik.com/free-vector/tiny-people-standing-near-prohibited-gesture-isolated-flat-illustration_74855-11132.jpg?t=st=1731678123~exp=1731681723~hmac=1eea5227b407e6759ec5d7c416d1a10f5720d1fcb033bc1a4a556bfd2d855953&w=1800'} textsecond={'Behöver du hjälp med sanering och luktsanering av ett dödsbo i Göteborg? Vi erbjuder specialiserade saneringstjänster för dödsbon och arbetar omsorgsfullt för att återställa bostaden till ett rent och hygieniskt skick. Vårt erfarna team är utbildat i att hantera sanering av känsliga miljöer och förstår vikten av respekt och noggrannhet i varje steg.'} servicesec={'Dödsbo'} titlesecond={'Sanering av dödsbo i Göteborg'} bannerText={'Har du lösöre som du vill få värderat?'} service={'Dödsbo'} title={'Dödsbostädning i Göteborg'} text={'Att städa ett dödsbo kan vara en känslomässigt tung uppgift. Vi erbjuder därför en komplett tjänst för dödsbostädning i Göteborg som gör processen enklare för dig och din familj. Vår städning innefattar en noggrann och omsorgsfull hantering av bostaden, där varje moment utförs med respekt för det arbete och den omtanke som situationen kräver.'} imgUrl={'https://img.freepik.com/free-vector/cleaning-service-concept-illustration_114360-9785.jpg?t=st=1731677531~exp=1731681131~hmac=28f0d55a870780698e50e3db1846067fb8c9cc443d685bec71dae983d22a7aff&w=1800'}/>
    <Tesimonial />
    <Divider text={'Helhetslösning för dödsbon och bohag'}/>
    <div className={styles.heroMain} id='stadning'>
    <article>
                <img alt={'dödsbo'} src={'https://img.freepik.com/free-vector/cleaning-service-concept-illustration_114360-9852.jpg?t=st=1731531099~exp=1731534699~hmac=6ed2e54648f742a3382968c0c5e7d668bf11b7a637a2458250a5b0face96b63a&w=1800'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </article>
     <article >
     <article>
                 <article style={{height:'10px'}}></article>
                 <h4 className={styles.titeln}>{'Helhetslösning'}</h4>
     <h2  className={styles.titeln}>{'Köper, tömmer och städar dödsbon'}</h2>
     <p className={styles.textform}>
     Vi erbjuder professionell hantering av dödsbon, inklusive tömning, städning och försäljning av föremål. Vi köper upp dödsbon och säljer vidare värdefulla objekt på ett effektivt sätt, samtidigt som vi ser till att tömma och städa bostaden. Vårt mål är att underlätta processen för anhöriga genom att ta hand om allt från värdering och bortforsling till slutstädning, med omtanke och respekt.
     </p>
     </article>
       </article>
     
     </div>
     <PopularaBtns servicesArrayPop={servicesArrayPop}/>
     <div className={styles.blekguidesec} id="jämför-flyttfirmor">
    <article>
    <h2 style={{maxWidth:'500px',lineHeight:'52px',fontSize:'2.4rem'}} className={styles.guidetitle}>
        Så hittar och <a style={{color:'black'}} title='flyttfirrma i Göteborg' href='https://www.recyclerapp.com/flyttfirma-goteborg'>jämför</a> du flyttfirmor – Din kompletta guide
    </h2>
    <p className={styles.specialarre}>
        Ska du flytta och vill <a style={{color:'black'}} title='flyttfirrma i Göteborg' href='https://www.recyclerapp.com/flyttfirma-goteborg'>jämför</a> professionella och prisvärda <a style={{color:'black'}} title='flyttfirrma i Göteborg' href='https://www.recyclerapp.com/flyttfirma-goteborg'>flyttfirmor</a>? Här är en jämförelsesajt för flytttjänster där du kan 
        <a style={{color:'black'}} title='flyttfirrma i Göteborg' href='https://www.recyclerapp.com/flyttfirma-goteborg'> jämföra flyttfirmor</a> och deras tjänster. Spara tid och pengar genom att jämföra rätt flytthjälp för just dina behov eller kontakta oss så hjälper vi dig gärna!
    </p>
    <div id="guide-steps">
        <h2 className={styles.guidetitle}>Vad du behöver tänka på</h2>
        <ul className={styles.textform}>
            <li>Storleken på din flytt (antal rum, volym på möbler och lådor).</li>
            <li>Avståndet mellan nuvarande bostad och din nya adress.</li>
            <li>Tilläggstjänster som packning, magasinering eller städning.</li>
            <li>Budget och <a style={{color:'black'}} title='flyttfirrma i Göteborg' href='https://www.recyclerapp.com/flyttfirma-goteborg'>prisjämförelse</a>.</li>
        </ul>
        <div style={{height:'20px'}}></div>
        <h2 className={styles.guidetitle}>
            <strong style={{background:'#9825ac',padding:'0.8rem',borderRadius:'50%',color:'white'}}>1</strong> Undersök dina behov
        </h2>
        <p className={styles.textform}>
            Börja med att skriva ner exakt vad du behöver hjälp med. Behöver du bara transport, eller vill du också ha hjälp med 
            att packa, bära eller montera möbler? Ju mer detaljerad du är, desto enklare blir det att hitta rätt flyttfirma.
        </p>
    
        <h2 className={styles.guidetitle}>
            <strong style={{background:'#9825ac',padding:'0.8rem',borderRadius:'50%',color:'white'}}>2</strong> Jämför flyttfirmor
        </h2>
        <p className={styles.textform}>
            Använd en <a style={{color:'black'}} title='flyttfirrma i Göteborg' href='https://www.recyclerapp.com/flyttfirma-goteborg'>jämförelsesajt</a> för att lista flyttfirmor i din region. Jämför recensioner, priser och erbjudna tjänster. Kontrollera om 
            flyttfirman har försäkring och är auktoriserad för att säkerställa kvalitet och trygghet.
        </p>
    
        <h2 className={styles.guidetitle}>
            <strong style={{background:'#9825ac',padding:'0.8rem',borderRadius:'50%',color:'white'}}>3</strong> Be om offerter
        </h2>
        <p className={styles.textform}>
            Kontakta flera flyttfirmor och be om <a style={{color:'black'}} title='flyttfirrma i Göteborg' href='https://www.recyclerapp.com/flyttfirma-goteborg'>kostnadsfria offerter</a>. Det hjälper dig att få en översikt över vad som ingår och vilka priser som 
            erbjuds. Var noga med att fråga om eventuella extraavgifter.
        </p>
    
        <h2 className={styles.guidetitle}>
            <strong style={{background:'#9825ac',padding:'0.8rem',borderRadius:'50%',color:'white'}}>4</strong> Läs recensioner
        </h2>
        <p className={styles.textform}>
            Ta dig tid att läsa omdömen från tidigare kunder. Genom att förstå andras erfarenheter kan du undvika oseriösa aktörer och 
            välja en flyttfirma med hög kundnöjdhet.
        </p>
    
        <h2 className={styles.guidetitle}>
            <strong style={{background:'#9825ac',padding:'0.8rem',borderRadius:'50%',color:'white'}}>5</strong> Boka i god tid
        </h2>
        <p className={styles.textform}>
            När du <a style={{color:'black'}} title='flyttfirrma i Göteborg' href='https://www.recyclerapp.com/flyttfirma-goteborg'>hitta rätt flyttfirma</a>, se till att boka i god tid – särskilt under högsäsonger som sommaren och slutet av månaden, då 
            många flyttar. Detta säkerställer att du får din önskade flyttdag.
        </p>
    </div>
    
    </article>
    
    <article>
    <img loading='lazy' alt={'Hitta och jämför flyttfirmor – tips och guide'} src={'https://images.pexels.com/photos/4569330/pexels-photo-4569330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>

    <ul>
    <h2 className={styles.vanligafragar}>Vanliga frågor</h2>
    <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
        <strong className={styles.titeln}>Hur packar jag mina saker inför flytt? </strong>
        Börja med att sortera och packa rum för rum. Använd starka lådor och märk dem tydligt. Skydda ömtåliga föremål med bubbelplast eller tidningspapper.
    </li>
    <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
        <strong className={styles.titeln}>Erbjuder flyttfirmor försäkring? </strong>
        De flesta flyttfirmor har en grundförsäkring som täcker skador på dina föremål. Kontrollera alltid detaljerna och överväg extra försäkring vid behov.
    </li>
    <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
        <strong className={styles.titeln}>Vad kostar magasinering? </strong>
        Priser för magasinering varierar beroende på utrymmets storlek och lagringstid. Genomsnittet ligger mellan 400 och 1 000 kr per månad.
    </li>
    <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
        <strong className={styles.titeln}>Kan jag få hjälp med flyttstädning? </strong>
        Ja, många flyttfirmor erbjuder flyttstädning som en tilläggstjänst. Priserna varierar beroende på bostadens storlek och omfattningen av städningen.
    </li>
    <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
        <strong className={styles.titeln}>Vad gör jag om något går sönder under flytten? </strong>
        Kontakta flyttfirman direkt och dokumentera skadan. Om de är försäkrade, kan du ansöka om ersättning för de skadade föremålen.
    </li>
    <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
        <strong className={styles.titeln}>Hur hanteras stora möbler vid flytt? </strong>
        Flyttfirmor har oftast utrustning som lyftselar och skydd för att transportera stora föremål. De kan även montera isär möbler vid behov.
    </li>
    <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
        <strong className={styles.titeln}>Vad kostar en flyttfirma? </strong>
        Priserna varierar beroende på avstånd, omfattning av tjänster och flyttdatum. Genomsnittet ligger mellan 800 och 1 200 kr per timme.
    </li>
    <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
        <strong className={styles.titeln}>Hur hittar jag den bästa flyttfirman? </strong>
        Jämför recensioner, priser och tjänsteutbud. Se till att firman är försäkrad och auktoriserad för trygghet och kvalitet.
    </li>
    <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
        <strong className={styles.titeln}>Vilka tjänster erbjuder en flyttfirma? </strong>
        De flesta flyttfirmor erbjuder packning, transport, magasinering och flyttstädning. Vissa kan också hantera tunga föremål som pianon.
    </li>
    <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
        <strong className={styles.titeln}>Hur lång tid tar en flytt? </strong>
        Det beror på mängden saker, avståndet och hur väl förberedd du är. En genomsnittlig flytt tar mellan 4 och 8 timmar.
    </li>
    <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
        <strong className={styles.titeln}>Är det värt att anlita en flyttfirma? </strong>
        Ja, särskilt om du vill undvika stress och tungt arbete. Det kan också spara tid och minska risken för skador på dina saker.
    </li>
    <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
        <strong className={styles.titeln}>Vilka frågor ska jag ställa en flyttfirma? </strong>
        Fråga om försäkring, dolda avgifter, vilka tjänster som ingår och hur de hanterar värdefulla eller känsliga föremål.
    </li>
</ul>


    </article>

    </div>
     <div className={styles.heroMain} id='stadning'>
     <article>
     <article>
                 <article style={{height:'10px'}}></article>
                 <h4 className={styles.titeln}>{'Värdering av dödsbo'}</h4>
     <h2  className={styles.titeln}>{'Vi erbjuder kostnadsfri värdering av dödsbon i Göteborg'}</h2>
     <p className={styles.textform}>
     Vi erbjuder professionell värdering av dödsbon i Göteborg, inklusive tömning, städning och försäljning av föremål. Vi köper upp dödsbon i Göteborg och säljer vidare värdefulla objekt på ett effektivt sätt, samtidigt som vi ser till att tömma och städa bostaden. Vårt mål är att underlätta processen för anhöriga genom att ta hand om allt från värdering och bortforsling till slutstädning, med omtanke och respekt.
     </p>
     </article>
       </article>
       <article id='vardera-dodsbo-goteborg'>
                <img alt={'värdering av dödsbo i Göteborg'} src={'https://img.freepik.com/free-vector/paid-idea-concept-illustration_114360-8105.jpg?t=st=1731681350~exp=1731684950~hmac=1cec0b1df4d4755f4720d4978e369db4635c80ef1f843e6ce8b6e1276cba7d78&w=1380'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </article>
     </div>
     <article style={{height:'50px'}}></article>
     <AccordionComp accordionArray={accordionTwo}/>
     <div className={styles.heroMain} id='stadning'>
    <article>
                <img alt={'dödsbo'} src={'https://img.freepik.com/free-vector/women-winning-money-prize-happy-girls-holding-huge-dollar-banknote-flat-illustration_74855-14219.jpg?t=st=1731683637~exp=1731687237~hmac=c441ad257809337783bc2187003c3fbc02e9d5a3e7d06bad218fd81999188d8b&w=1380'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </article>
     <article>
     <article>
                 <article style={{height:'10px'}}></article>
                 <h4 className={styles.titeln}>{'Bäst & Billigast'}</h4>
     <h2  className={styles.titeln}>{'Betalar bäst för dödsbon i Göteborg'}</h2>
     <p className={styles.textform}>
     Hos oss får du de bästa priserna när du säljer ett dödsbo i Göteborg. Vi erbjuder en rättvis och transparent värdering av föremålen och ser till att du får ett konkurrenskraftigt pris för lösöret. Vårt erfarna team gör processen enkel och smidig. Kontakta oss för en kostnadsfri värdering – vi betalar bäst för dödsbon!
     </p>
     </article>
       </article>
     
     </div>
    </main>
    <div style={{height:'75px'}}></div>
    <FooterComp />
      </Suspense>
    </div>
  )
}

export default VarderaDodsbo
