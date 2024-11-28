import React,{Suspense,lazy} from 'react'
import styles from '../page.module.css'

const HeaderComp = lazy(()=> import('../../components/HeaderComp'))
const HeroComp = lazy(()=> import('../../components/HeroComp')) 
const SectionOne = lazy(()=> import('../../components/SectionOne')) 
const TjansterCarousal = lazy(()=> import('../../components/TjansterCarousal')) 
const HogerSection = lazy(()=> import('../../components/HogerSection')) 
const AccordionComp = lazy(()=> import('../../components/AccordionComp')) 
const DividerSection = lazy(()=> import('../../components/DividerSection')) 
const SectionTwo = lazy(()=> import('../../components/SectionTwo')) 
const Tesimonial = lazy(()=> import('../../components/Tesimonial')) 
const Divider = lazy(()=> import('../../components/Divider')) 
const FooterComp = lazy(()=> import('../../components/FooterComp')) 
const PopularaBtns = lazy(()=> import('../../components/PopularaBtns')) 
import {accordionArray} from '../../content/dodsbo'
import {servicesArrayPop,accordionTwo} from '../../content/flytt'
import { sidorbortforsling } from '../../content/sidorna'
import { Box } from '@mui/material'

export const metadata = {
    title: 'Behöver du hjälp med bortforsling av möbler och grovsopor? Vi forslar bort och kör till tippen!',
    description:'Behöver du hjälp med bortforsling av möbler och grovsopor. Vi är en pålitliga och seriös firma som hjälper dig med bortforsling av möbler. Snabb och smidig tjänst.',
    keywords: ['bortforsling möbler', 'hämta möbler', 'slänga möbler','grovsopor','återvinning','köra till tippen','åvc','återvinningscentral','göteborg','städfirma göteborg','flyttfirma göteborg'],
    metadataBase: new URL('https://tantrut-alltjanst.com'),
    alternates: {
      canonical: 'https://tantrut-alltjanst.com/bortforsling-mobler-goteborg',
      languages: {
        'sv': '/sv',
      },
    },
    openGraph: {
      title: 'Behöver du hjälp med bortforsling av möbler och grovsopor? Vi forslar bort och kör till tippen!',
      images: 'https://images.pexels.com/photos/5824520/pexels-photo-5824520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description:'Behöver du hjälp med bortforsling av möbler och grovsopor. Vi är en pålitliga och seriös firma som hjälper dig med bortforsling av möbler. Snabb och smidig tjänst.',
      url: 'https://tantrut-alltjanst.com/bortforsling-mobler-goteborg',
      site_name: 'Tant Rut Alltjänst',
      images: [
        {
          url: 'https://images.pexels.com/photos/5824520/pexels-photo-5824520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          width: 1260,
          height: 750,
          alt: 'Bortforsling av möbler och grovsopor',
        }
      ],
      type: 'website',
      locale: 'sv_SE',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@tantrut', 
      title: 'Bortforsling av möbler och grovsopor',
      description: 'Behöver du hjälp med bortforsling av möbler och grovsopor? Vi forslar bort och kör till tippen!',
      image: 'https://images.pexels.com/photos/5824520/pexels-photo-5824520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    robots: {
      index: true,
      follow: true,
    }
  }
const Bortforsling = () => {
    const article = {
        "@context": "https://schema.org",
        "@type": "Article",
        title: 'Behöver du hjälp med bortforsling av möbler och grovsopor? Vi forslar bort och kör till tippen!',
        description:'Behöver du hjälp med bortforsling av möbler och grovsopor. Vi är en pålitliga och seriös firma som hjälper dig med bortforsling av möbler. Snabb och smidig tjänst.',
        datePublished: '2024-11-15',
        author: {
          "@type": "Person",
          "name": "Tant Rut Alltjänst"
        },
        image: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        publisher: {
          "@type": "Organization",
          "name": "Tant Rut Alltjänst",
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
    <div>
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
<HeaderComp sidor={sidorbortforsling}/>
</header>
<main className={styles.main}>
<HeroComp title={'Bortforsling av möbler och grovsopor'} text={'Vi flyttar, städar och tömmer företag, hushåll, och dödsbon. Nyttja din rut när du använder våra tjänster!'}/>
<div style={{height:'30px'}}></div>
<HogerSection />
<TjansterCarousal />
<div style={{marginTop:'25px',width:'100%'}}>
    <div className={styles.heroMain} id={'stadning'}>
    <Box>
                <img alt={'städning'} src={'https://img.freepik.com/free-vector/cleaning-service-concept-illustration_114360-9852.jpg?t=st=1731531099~exp=1731534699~hmac=6ed2e54648f742a3382968c0c5e7d668bf11b7a637a2458250a5b0face96b63a&w=1800'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </Box>
     <Box>
     <Box>
                 <Box style={{height:'10px'}}></Box>
                 <h4 className={styles.titeln}>{'Städning'}</h4>
     <h2  className={styles.titeln}>{'Vi utför alla typer av städningar'}</h2>
     <p className={styles.textform}>
 Tant Rut erbjuder en rad städtjänster som underlättar din vardag och skapar en trivsam miljö, oavsett behov. Vi hjälper dig med regelbunden <a className={styles.lankar} href='#hemstadning' title='hemstädning'>hemstädning</a>, professionell <a className={styles.lankar} href='#kontorsstadning' title='kontorsstädning'>kontorsstädning</a>, <a className={styles.lankar} href='#stadning-av-dodsbo' title='städning av dödsbon'>städning av dödsbon</a> och specialanpassade städningar. Vårt team arbetar noggrant och respektfullt, med fokus på kvalitet och kundens trygghet. Oavsett om du behöver städhjälp för hemmet, arbetsplatsen eller i en känslig situation, finns vi här för att skapa en ren och välordnad miljö. Tack vare RUT-avdraget kan vi erbjuda våra tjänster till ett förmånligt pris – så att du kan slappna av och lita på att städningen är i goda händer.
     </p>
     </Box>
       </Box>
     
     </div>
   <Divider text={'Utnyttja ditt RUT-avdrag 50%'}/>
   <article style={{height:'25px'}}></article>
     <div className={styles.heroMain} id='bortforsling-grovavfall'>
     <Box>
     <Box>
                 <Box style={{height:'10px'}}></Box>
                 <h4 className={styles.titeln}>{'Bortforsling grovavfall'}</h4>
     <h2 className={styles.titeln}>{'Enkel och privärd bortforsling av grovavfall'}</h2>
     <p className={styles.textform}>
     Har du grovavfall som behöver tas om hand? Vi erbjuder enkel och prisvärd bortforsling av grovavfall, oavsett om det gäller gamla möbler, byggmaterial eller annat skrymmande avfall. Vår tjänst gör det lätt för dig att bli av med stora eller tunga föremål som inte får plats i det vanliga avfallet, samtidigt som vi säkerställer att allt hanteras på ett miljövänligt sätt.
     </p>
     </Box>
       </Box>
       <Box>
                <img alt={'Flyttfirma'} src={'https://images.pexels.com/photos/7464712/pexels-photo-7464712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} style={{width:'100%',height:'320px',objectFit:'contain'}}/>
     </Box>
     </div>
     <article style={{height:'25px'}}></article>
     </div>
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
<div style={{height:'35px'}} id='bortforsling-mobler'></div>
<DividerSection idsec={'koper-dodsbo-goteborg'} idone={'hamtar-skrap'}  imgUrl={'https://images.pexels.com/photos/2547565/pexels-photo-2547565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} text={'Behöver du hjälp med att bli av med skräp och avfall? Vi gör det enkelt för dig! Vi hämtar ditt skräp direkt från din bostad eller arbetsplats och kör det till tippen åt dig. Oavsett om det handlar om gamla möbler, elektronik, byggavfall eller annat skrymmande material, ser vi till att allt transporteras och hanteras på ett miljövänligt sätt.'} service={'Hämtar skräp'} title={'Köper upp dödsbon i Göteborg'} secondTitle={'Vi hämtar ditt skräp'}/>
<div style={{marginTop:'25px',width:'100%'}}>
    <div className={styles.heroMain} id={'hemstad'}>
    <Box>
                <img alt={'hemstäd'} src={'https://img.freepik.com/premium-vector/cleaning-company-service-concept-male-character-washing-sweeping-mopping-floor-with-professional-vacuum-cleaner-man-wash-room-hotel-janitor-occupation-cartoon-people-vector-illustration_1016-7031.jpg?w=1380'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </Box>
     <Box>
     <Box>
                 <Box style={{height:'10px'}}></Box>
                 <h4 className={styles.titeln}>{'Hemstäd'}</h4>
     <h2  className={styles.titeln}>{'Tant Ruts Hemstädning'}</h2>
     <p className={styles.textform}>
     Låt oss hjälpa dig skapa en ren och trivsam hemmiljö med vår professionella hemstädning i Göteborg. Vi erbjuder en flexibel och noggrann städtjänst som anpassas efter dina behov och önskemål. Våra erfarna städare tar hand om allt från dammsugning och golvvård till kök- och badrumsrengöring, så att du kan komma hem till ett skinande rent hem – varje gång. Med våra pålitliga tjänster sparar du tid och energi, och får en lugnare vardag där du kan fokusera på det som betyder mest. Boka din hemstädning idag och upplev skillnaden med professionell hjälp!
     </p>
     </Box>
       </Box>
     
     </div>
   <Divider text={'Bästa & Billigast på hushållsnära tjänster'}/>
     <div className={styles.heroMain} id='byggstad'>
     <Box>
     <Box>
                 <Box style={{height:'10px'}}></Box>
                 <h4 className={styles.titeln}>{'Byggstäd'}</h4>
     <h2 className={styles.titeln}>{'Byggstäd i Göteborg med omnejd '}</h2>
     <p className={styles.textform}>
     Efter ett byggprojekt är det ofta damm, byggrester och smuts som behöver tas om hand innan lokalen är redo att användas. Med vår professionella byggstädning ser vi till att arbetsplatsen blir skinande ren och helt fri från byggdamm och avfall. Vi hanterar allt från grovstädning av byggrester och sopning till noggrann rengöring av ytor, fönsterputs och borttagning av damm från väggar och golv. Vårt team arbetar snabbt och effektivt för att färdigställa byggstädningen i tid, så att du kan överlämna en ren och säker miljö till kunder eller nästa steg i projektet
     </p>
     </Box>
       </Box>
       <Box>
                <img alt={'byggstäd'} src={'https://images.pexels.com/photos/8960945/pexels-photo-8960945.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load'} style={{width:'100%',height:'320px',objectFit:'contain'}}/>
     </Box>
     </div>
     <div className={styles.heroMain} id={'hemstad'}>
    <Box>
                <img alt={'kontorssätdning'} src={'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} style={{width:'100%',height:'320px',objectFit:'contain'}}/>
     </Box>
     <Box>
     <Box>
                 <Box style={{height:'10px'}} id='kontorsstad'></Box>
                 <h4 className={styles.titeln}>{'Kontorsstäd'}</h4>
     <h2  className={styles.titeln}>{'Kontorsstädning'}</h2>
     <p className={styles.textform}>
     Ge ditt team en ren och inspirerande arbetsplats med vår professionella kontorsstädning. Vi erbjuder noggrant anpassade städtjänster för kontor i alla storlekar och branscher, där vi tar hand om allt från dammtorkning av ytor och rengöring av gemensamma utrymmen till tömning av papperskorgar och golvvård. En ren arbetsmiljö förbättrar både trivsel och produktivitet, och vi ser till att allt från skrivbord till kök och toaletter alltid är i bästa skick. 
     </p>
     </Box>
       </Box>
     
     </div>
     </div>
<Tesimonial />
<div className={styles.heroMain} id='kora-till-tippen'>
<article >
<article>
           <article style={{height:'10px'}}></article>
           <h4 className={styles.titeln}>{'Kör till tippen'}</h4>
<h2  className={styles.titeln}>{'Vi kör ditt skräp till tippen'}</h2>
<p className={styles.textform}>
Har du skräp som behöver försvinna? Vi hjälper dig snabbt och enkelt genom att hämta ditt avfall och köra det till tippen. Oavsett om det gäller möbler, elektronik, trädgårdsavfall eller annat skrymmande material, tar vi hand om hela processen åt dig. Vi ser till att ditt skräp hanteras korrekt och på ett miljövänligt sätt, så att du slipper bekymra dig för transport och återvinning.
</p>
</article>
 </article>
 <article>
          <img alt={'fönsterputs'} src={'https://img.freepik.com/free-vector/plastic-windows-flat-composition-with-indoor-scenery-two-workers-washing-glass-with-urban-cityscape-view-vector-illustration_98292-8816.jpg?t=st=1731792041~exp=1731795641~hmac=115feb61f16a3dc27d3caee8e8833d8cfd7f673d589f6ac2c0f99a8549f41743&w=2000'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
</article>
</div>
<PopularaBtns servicesArrayPop={servicesArrayPop}/>
<div className={styles.heroMain} id='tomma-bohag'>
<article>
<article>
           <article style={{height:'10px'}}></article>
           <h4 className={styles.titeln}>{'Tömning av bohag'}</h4>
<h2  className={styles.titeln}>{'Vi tömmer hushåll och dödsbon'}</h2>
<p className={styles.textform}>
Att tömma ett hushåll eller dödsbo kan vara en känslomässig och praktisk utmaning, men vi finns här för att göra processen så enkel som möjligt. Vi erbjuder en komplett tjänst där vi hanterar allt från sortering av ägodelar och bortforsling av avfall till städning av bostaden. Oavsett om det gäller en mindre lägenhet eller ett större hem, ser vi till att allt sköts professionellt och effektivt.

Vårt mål är att underlätta för dig genom att ta hand om hela tömningen på ett miljövänligt sätt. 
</p>
</article>
 </article>
 <article id='vardera-dodsbo-goteborg'>
          <img alt={'värdering av dödsbo i Göteborg'} src={'https://img.freepik.com/free-vector/paid-idea-concept-illustration_114360-8105.jpg?t=st=1731681350~exp=1731684950~hmac=1cec0b1df4d4755f4720d4978e369db4635c80ef1f843e6ce8b6e1276cba7d78&w=1380'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
</article>
</div>
<article style={{height:'50px'}}></article>
<AccordionComp accordionArray={accordionTwo}/>
<div>
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
    <article style={{height:'50px'}}></article>
     <div className={styles.heroMain} id='slutstadning'>
    <article>
                <img loading='lazy' alt={'dödsbo'} src={'https://img.freepik.com/free-vector/women-winning-money-prize-happy-girls-holding-huge-dollar-banknote-flat-illustration_74855-14219.jpg?t=st=1731683637~exp=1731687237~hmac=c441ad257809337783bc2187003c3fbc02e9d5a3e7d06bad218fd81999188d8b&w=1380'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </article>
     <article>
     <article>
                 <article style={{height:'10px'}}></article>
                 <h4 className={styles.titeln}>{'Flytthjälp'}</h4>
     <h2  className={styles.titeln}>{'Billig flytthjälp med Flyttströms'}</h2>
     <p className={styles.textform}>
     Om du söker prisvärd och samtidigt pålitlig <a href='/flyttfirma-goteborg' title='flytthjälp' className={styles.lankar}>flytthjälp</a>  är Flyttströms Alltjänst ett utmärkt val. Vi erbjuder konkurrenskraftiga priser utan att kompromissa med kvaliteten. Genom att utnyttja RUT-avdraget kan du dessutom få upp till 50 % rabatt på arbetskostnaden, vilket gör oss till ett av de mest prisvärda alternativen på marknaden.
     </p>
     </article>
       </article>
     
     </div>
     <article style={{height:'50px'}}></article>
     <article style={{width:'100%'}}>
     <div style={{ justifyContent:'center',margin:'0 auto',alignItems:'center',textAlign:'center'}}>
     <div>
     <h2 style={{textAlign:'center'}} className={styles.titeln}>Flyttströms</h2>
      <p style={{fontSize:'0.85rem',lineHeight:'22px',margin:'0 auto',maxWidth:'700px',marginBottom:'25px'}} className={styles.textform}><strong>När du anlitar Flyttströms Alltjänst i Göteborg </strong> får du en smidig och prisvärd flyttupplevelse. Vi erbjuder flytthjälp med två flyttkillar och lätt lastbil för endast 799 kr per timme. En startavgift på 500 kr tillkommer, vilket är standard bland seriösa flyttföretag.

Hos Flyttströms skiljer vi oss från många andra flyttfirmor genom att inte ha någon minimidebitering – du betalar bara för tiden vi faktiskt arbetar, plus startavgiften. Många konkurrenter kräver debitering på minst 3–5 timmar, men hos oss slipper du dolda kostnader.

Som en mindre och kundfokuserad flyttfirma i Göteborg prioriterar vi personlig service och hög kvalitet. Vi är stolta över att erbjuda trygg och effektiv hjälp för både privatpersoner och företag i hela Göteborgsområdet. Välj Flyttströms Alltjänst för en professionell flytt utan onödiga krångligheter!

Kontakta oss idag för en kostnadsfri offert – vi ser fram emot att hjälpa dig med din flytt!</p>
     </div>
     </div>
  
<div className={styles.classic}>
<ul>
    <li style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Trygg och säker flytt:</strong> Vi skyddar dina möbler och ägodelar noggrant under hela flytten för att säkerställa att de når sin nya plats utan skador.</li>
    <li style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}> Försäkrade flyttjänster:</strong> Flyttströms Alltjänst är ett fullt försäkrat flyttföretag, vilket ger dig extra trygghet vid flytten.</li>
    <li style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Erfaret och utbildat team:</strong> Våra flyttkillar är professionellt utbildade och har lång erfarenhet av att hantera flyttar av alla slag, stora som små.</li>
    <li style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Flexibel och personlig service:</strong> Vi anpassar våra flyttjänster efter dina specifika behov och ser till att din flytt blir så smidig som möjligt.</li>
    <li style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Prisvärd flytthjälp i Göteborg:</strong> Med konkurrenskraftiga priser och RUT-avdrag gör vi din flytt både enkel och ekonomisk.</li>
    <li style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Effektiv och snabb flytt:</strong> Vårt erfarna team ser till att din flytt går snabbt och effektivt, vilket sparar både tid och pengar.</li>
    <li style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Ingen minimidebitering:</strong> Hos oss betalar du endast för den faktiska arbetstiden – utan onödiga extra avgifter.</li>
    <li style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Flytt i hela Göteborgsområdet:</strong> Vi erbjuder flytthjälp över hela Göteborg, från centrala områden till förorter som Majorna och Kungälv.</li>
    <li style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Smidig hantering av tunga lyft:</strong> Vi tar hand om de tunga lyften så att du slipper stressen och risken för skador vid flytten.</li>
    <li style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Snabb och enkel offert:</strong> Kontakta oss för en snabb och kostnadsfri offert så får du veta exakt vad din flytt kommer att kosta.</li>
</ul>
<ul>
    <li  style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Erfaren flyttfirma i Göteborg:</strong> Vi på Flyttströms Alltjänst har många års erfarenhet av flyttjänster i hela Göteborg, vilket gör oss till en pålitlig partner för din flytt.</li>
    <li  style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>RUT-avdrag för lägre kostnader:</strong> Ta del av RUT-avdraget och spara upp till 50% på arbetskostnaden när du anlitar oss för din flytt i Göteborg.</li>
    <li  style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Vi hanterar alla typer av flyttar:</strong> Oavsett om det handlar om en liten lägenhet eller ett stort företag, har vi resurser och erfarenhet för att hantera flyttar av alla storlekar.</li>
    <li  style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Vårt team är professionellt och pålitligt:</strong> Vi värdesätter god kommunikation och att våra kunder känner sig trygga hela vägen genom flytten.</li>
    <li  style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Enkel och snabb bokning:</strong> Vi gör det lätt för dig att boka flytthjälp – enkelt via telefon eller e-post, och vi kan hjälpa till med samma dag vid akuta behov.</li>
    <li  style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Fokus på kundnöjdhet:</strong> Vår kundservice är alltid nära till hands för att svara på frågor och lösa eventuella problem som kan uppstå under flytten.</li>
    <li  style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Effektiv packning och lastning:</strong> Vi erbjuder hjälp med packning och lastning, vilket gör din flytt ännu smidigare och enklare.</li>
    <li  style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Miljövänlig flytt:</strong> Vi strävar efter att göra våra flyttar så miljövänliga som möjligt genom att återvinna och använda hållbara transportlösningar.</li>
    <li  style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Inget dolda avgifter:</strong> Vi är transparenta med våra priser och inga dolda avgifter tillkommer – du betalar för det du får, inget mer.</li>
    <li  style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Flytt med omtanke:</strong> Hos oss är det viktigt att du som kund känner att vi tar hand om din flytt och dina saker med största omsorg och respekt.</li>
</ul>
</div>


     </article>
    </div>
<div className={styles.heroMain} id='slutstadning'>
<article>
          <img alt={'dödsbo'} src={'https://img.freepik.com/free-vector/women-winning-money-prize-happy-girls-holding-huge-dollar-banknote-flat-illustration_74855-14219.jpg?t=st=1731683637~exp=1731687237~hmac=c441ad257809337783bc2187003c3fbc02e9d5a3e7d06bad218fd81999188d8b&w=1380'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
</article>
<article>
<article>
           <article style={{height:'10px'}}></article>
           <h4 className={styles.titeln}>{'Bäst & Billigast'}</h4>
<h2  className={styles.titeln}>{'Tant Ruts slutstädning'}</h2>
<p className={styles.textform}>
Behöver du en pålitlig slutstädning inför flytten? Vi erbjuder en komplett och professionell slutstädning som uppfyller alla krav för besiktning och överlämning. Vårt erfarna team tar hand om allt från grundlig rengöring av kök och badrum till fönsterputsning, dammsugning och avtorkning av alla ytor. Vi ser till att även detaljer som lister, garderober och svåråtkomliga utrymmen blir skinande rena, så att du kan känna dig trygg med att lämna bostaden i perfekt skick.
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

export default Bortforsling

