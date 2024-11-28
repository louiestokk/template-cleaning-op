import Image from "next/image";
import styles from "./page.module.css";
import HeaderComp from "../components/HeaderComp";
import HeroComp from "../components/HeroComp";
import HogerSection from "../components/HogerSection";
import LeftSection from "../components/LeftSection";
import TjansterCarousal from "../components/TjansterCarousal";
import AccordionComp from "../components/AccordionComp";
import DividerSection from "../components/DividerSection";
import FooterComp from "../components/FooterComp";
import Tesimonial from "../components/Tesimonial";
import {sidor} from '../content/sidorna'
import {accordionArray} from '../content/flytt'
export default function Home() {
  return (
    <div className={styles.page}>
    <header className={styles.header}>
<HeaderComp sidor={sidor}/>
    </header>
      <main className={styles.main}>
    <HeroComp />
    <div style={{height:'30px'}}></div>
    <HogerSection/>
    <div style={{height:'50px'}}></div>
    <TjansterCarousal />
    <div style={{height:'70px'}}></div>
    <LeftSection />
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
    <DividerSection />
    <Tesimonial />
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
      </main>
     <FooterComp />
    </div>
  );
}
