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
    <div className={styles.blekguidesec} id="stadfirma-info">
  <article>
    <h2 style={{ maxWidth: '500px', lineHeight: '52px', fontSize: '2.4rem' }} className={styles.titeln}>
      Städfirma i Göteborg – Hemstäd, Flyttstäd och Kontorsstäd
    </h2>
    <p className={styles.specialarre}>
      Letar du efter professionell hjälp med städning eller flytt i Göteborg? Här går vi igenom priser, tjänster och tips för att välja rätt firma för hemstädning, flyttstädning eller kontorsstädning. Få svar på vanliga frågor och gör ett informerat val!
    </p>

    <div style={{ marginTop: '30px' }} id="stadfirma-tjanster">
      <h2 className={styles.titeln}>Vilka tjänster erbjuder en städfirma i Göteborg?</h2>
      <ul className={styles.textform}>
        <li>Hemstädning – regelbunden eller engångsstädning</li>
        <li>Flyttstädning – noggrann rengöring inför flytt</li>
        <li>Kontorsstädning – anpassad efter företags behov</li>
        <li>Byggstädning – grovstädning efter renoveringar</li>
        <li>Fönsterputsning – skinande rena fönster</li>
      </ul>

      <h2 style={{ marginTop: '20px' }} className={styles.titeln}>Vad kostar städtjänster i Göteborg?</h2>
      <p className={styles.textform}>
        Priser för städtjänster varierar beroende på tjänst och omfattning. För hemstädning ligger timpriset mellan <strong>150–250 SEK</strong> efter RUT-avdrag. Flyttstädning kostar vanligtvis mellan <strong>30–50 SEK/kvm</strong>, beroende på bostadens skick.
      </p>
    </div>
  </article>

  <article>
    <h2 style={{ marginTop: '40px' }} className={styles.titeln}>Vanliga frågor om städ- och flyttjänster i Göteborg</h2>
    <ul className={styles.textform}>
      <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
        <strong className={styles.titeln}>Vad ingår i hemstädning?</strong>
        I hemstädning ingår dammsugning, dammtorkning, rengöring av badrum och kök, samt golvtorkning. Vissa firmor kan erbjuda extra tjänster som fönsterputs eller kylskåpsrengöring mot en tilläggskostnad.
      </li>
      <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
        <strong className={styles.titeln}>Hur bokar jag flyttstädning?</strong>
        Flyttstädning kan bokas via telefon, e-post eller bokningsformulär på företagets hemsida. Det rekommenderas att boka minst 1–2 veckor i förväg för att säkerställa tillgänglighet.
      </li>
      <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
        <strong className={styles.titeln}>Är städtjänster berättigade till RUT-avdrag?</strong>
        Ja, städtjänster är berättigade till RUT-avdrag. Det innebär att du får 50 % avdrag på arbetskostnaden. Städfirman hanterar vanligtvis avdraget åt dig.
      </li>
      <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
        <strong className={styles.titeln}>Vad kostar kontorsstädning per månad?</strong>
        Kontorsstädning kostar vanligtvis mellan 1 500 och 10 000 SEK per månad beroende på kontorets storlek och hur ofta städning behövs.
      </li>
      <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
        <strong className={styles.titeln}>Kan städfirman ta hand om allergistädning?</strong>
        Ja, många städfirmor erbjuder allergivänliga alternativ som inkluderar användning av parfymfria och miljövänliga produkter samt grundlig dammsugning med HEPA-filter.
      </li>
      <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
        <strong className={styles.titeln}>Vad ingår i en flyttstädning?</strong>
        Flyttstädning inkluderar noggrann rengöring av alla ytor, inklusive spis, ugn, kyl, frys, badrum och golv. Fönsterputsning ingår ofta, men det kan variera mellan firmor.
      </li>
      <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
        <strong className={styles.titeln}>Måste jag vara hemma vid hemstädning?</strong>
        Nej, det är inte nödvändigt att vara hemma. Många kunder lämnar nycklar till städfirman efter överenskommelse.
      </li>
      <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
        <strong className={styles.titeln}>Hur förbereder jag för en flyttstädning?</strong>
        Se till att bostaden är tömd på möbler och personliga tillhörigheter innan städfirman anländer. Stäng av kyl och frys och låt dörrarna stå öppna.
      </li>
      <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
        <strong className={styles.titeln}>Vad händer om städningen inte blir godkänd vid flytt?</strong>
        De flesta städfirmor erbjuder en garanti och åtgärdar eventuella brister utan extra kostnad om det påpekas inom en viss tidsram.
      </li>
      <li style={{ fontSize: '0.85rem', lineHeight: '22px' }} className={styles.textform}>
        <strong className={styles.titeln}>Kan jag boka städning akut?</strong>
        Ja, vissa firmor erbjuder akutstädning mot en extra avgift. Tillgänglighet beror på företagets schema.
      </li>
    </ul>
  </article>
</div>
<article style={{height:'50px'}}></article>
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
