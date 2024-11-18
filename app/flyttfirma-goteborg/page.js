import React,{Suspense,lazy} from 'react'
import styles from '../page.module.css'
import { Box } from '@mui/material'
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

import {servicesArrayPop,accordionThree,accordionArray} from '../../content/flytt'
import { sidorFlyttfirma } from '../../content/sidorna'
export const metadata = {
    title: 'Flyttfirma i Göteborg? Vi är Göteborgs mest omtyckat flyttfirma! Trygg & Privärd Flyttfirma',
    description:'Behöver du hjälp med att hitta en bra flyttfirma i Göteborg? Tant Rut ser till att du får den bästa flytten i Göteborg! Trygg & Prisvärd flyttfirma i Göteborg.',
    keywords: [
        'flyttstäd Göteborg', 'flyttstädning Göteborg', 'flyttstäd hisingen', 'billig flyttstädning', 'flyttfirma', 
        'städa inför flytt', 'miljövänlig flyttstädning', 'flyttstäd pris', 'kontorsstäd', 
        'privatstäd', 'industristäd', 'byggstäd', 'flyttstäd checklista', 'garanterad flyttstädning',
        'billig flyttstäd Göteborg','bra flyttstäd Göteborg','Göteborg','flyttfirma Göteborg','flytthjälp Göteborg',
        'cityflytt','Guldhedens Flytt','vad kostar et flyttfirma i Göteborg','Flyttkillarna','reco.se'
      ],
    metadataBase: new URL('https://tantrut.netlify.app'),
    alternates: {
      canonical: 'https://tantrut.netlify.app/flyttfirma-goteborg',
      languages: {
        'sv': '/sv',
      },
    },
    openGraph: {
      title: 'Flyttfirma i Göteborg? Vi är Göteborgs mest omtyckat flyttfirma! Trygg & Privärd Flyttfirma',
      images: 'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description:'Behöver du hjälp med att hitta en bra flyttfirma i Göteborg? Tant Rut ser till att du får den bästa flytten i Göteborg! Trygg & Prisvärd flyttfirma i Göteborg.',
      url: 'https://tantrut.netlify.app/flyttfirma-goteborg',
      site_name: 'Tant Rut Alltjänst',
      images: [
        {
          url: 'https://images.pexels.com/photos/5025639/pexels-photo-5025639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          width: 1260,
          height: 750,
          alt: 'flyttfirma i Göteborg',
        }
      ],
      type: 'website',
      locale: 'sv_SE',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@tanrut', 
      title: 'Flyttfirma i Göteborg? Vi är Göteborgs mest omtyckat flyttfirma! Trygg & Privärd Flyttfirma',
      description:'Behöver du hjälp med att hitta en bra flyttfirma i Göteborg? Tant Rut ser till att du får den bästa flytten i Göteborg! Trygg & Prisvärd flyttfirma i Göteborg.',
      image: 'https://images.pexels.com/photos/4098778/pexels-photo-4098778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    robots: {
      index: true,
      follow: true,
    }
  }

const FlyttfirmaGoteborg = () => {
    const article = {
        "@context": "https://schema.org",
        "@type": "Article",
        title: 'Flyttfirma i Göteborg? Vi är Göteborgs mest omtyckat flyttfirma! Trygg & Privärd Flyttfirma',
        description:'Behöver du hjälp med att hitta en bra flyttfirma i Göteborg? Tant Rut ser till att du får den bästa flytten i Göteborg! Trygg & Prisvärd flyttfirma i Göteborg.',
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
<HeaderComp sidor={sidorFlyttfirma}/>
    </header>
    <main className={styles.main}>
    <HeroComp title={'Flyttfirma i Göteborg'} text={'Vi flyttar, städar och tömmer hushåll och dödsbon i Göteborg. Nyttja din rut när du använder våra tjänster!'}/>
    <div style={{height:'30px'}}></div>
    <HogerSection />
    <TjansterCarousal />
    <div style={{height:'30px'}}></div>
    <div style={{marginTop:'25px',width:'100%'}}>
    <div className={styles.heroMain} id={'flyttfirma-goteborg'}>
    <Box>
                <img alt={'flyttfirma i Göteborg'} src={'https://img.freepik.com/free-vector/house-moving-illustration_52683-46999.jpg?t=st=1731882469~exp=1731886069~hmac=4c740f5e90d811bf1daed4dd97f0ff46045e73023e5c4f4655955c43033c1495&w=1800'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </Box>
     <Box>
     <Box>
                 <Box style={{height:'10px'}}></Box>
                 <h4 className={styles.titeln}>{'Flyttfirma'}</h4>
     <h2  className={styles.titeln}>{'Smidig och Trygg Flyttfirma'}</h2>
     <p className={styles.textform}>
     Tant Rut erbjuder ett brett utbud av flyttjänster i Göteborg som gör din flytt smidig, säker och stressfri. Vi hjälper dig med allt från planering och packning till transport och uppackning i ditt nya hem eller företag. Vårt team är professionellt, noggrant och lyhörda för dina behov, och vi arbetar alltid med högsta fokus på kvalitet och trygghet för våra kunder.

Oavsett om du behöver hjälp med en mindre bohagsflytt, en större företagsflytt, eller en specialanpassad flyttservice, finns vi här för att göra hela processen enklare och effektivare. Tack vare RUT-avdraget kan vi dessutom erbjuda våra tjänster till ett förmånligt pris – så att du kan luta dig tillbaka och känna dig trygg med att din flytt är i goda händer.
     </p>
     </Box>
       </Box>
     
     </div>
     <Box style={{height:'30px'}}></Box>
   <Divider text={'Utnyttja ditt RUT-avdrag 50%'}/>
     <div className={styles.heroMain} id='privatflytt-goteborg'>
     <Box>
     <Box>
                 <Box style={{height:'10px'}}></Box>
                 <h4 className={styles.titeln}>{'Privatflytt'}</h4>
     <h2 className={styles.titeln}>{'Professionell privatflytt'}</h2>
     <p className={styles.textform}>
     Att genomföra en <a href='#privatflytt' className={styles.lankar}>privatflytt</a> kan vara en stor och tidskrävande process, men med Tant Rut som din flyttpartner blir flytten både smidig och trygg. Vi erbjuder omfattande flyttjänster för privatpersoner som vill ha professionell hjälp hela vägen – från packning och transport till uppackning och slutstädning.

Med vår långa erfarenhet av privatflytt i Göteborg och ett engagerat team, anpassar vi varje flytt efter dina specifika behov och önskemål. Vi hanterar allt från mindre flyttar inom staden till längre flyttar mellan städer, och vårt mål är alltid att ge dig en stressfri och säker flyttupplevelse.
     </p>
     </Box>
       </Box>
       <Box>
                <img alt={'Flyttfirma'} src={'https://img.freepik.com/free-vector/moving-concept-with-couple-move-new-house-office-work_513217-177.jpg?t=st=1731882536~exp=1731886136~hmac=1eee313e134af71efc95dd449978e8f68fdf569e6440fcb20fd9eeac999a5b4a&w=1380'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </Box>
     </div>
     
     </div>
     <div style={{height:'50px'}}></div>
    <AccordionComp accordionArray={accordionArray}/>
    <DividerSection idsec={'foretagsflytt'} idone={'flyttstadning-goteborg'}  imgUrl={'https://img.freepik.com/free-vector/cleaning-service-concept-illustration_114360-9785.jpg?t=st=1731883402~exp=1731887002~hmac=b8794434e7b3012a084180f19d0868cfe0b1fa3bce2546fae5b562e94530f145&w=1800'} text={'När du behöver hjälp med flyttstädning i Göteborg, erbjuder vi en komplett och smidig lösning från början till slut. På det datum vi tillsammans har kommit överens om, anländer vi för att genomföra en grundlig och professionell flyttstädning av ditt hem. Med noggrannhet och omsorg städar vi alla ytor och ser till att inga detaljer förbises. Vi hanterar allt från rengöring av kök och badrum till fönsterputsning och golvvård. Efter att vi har slutfört städningen, ser vi till att hemmet är i toppskick inför nästa boende eller besiktning, så att du kan känna dig trygg och nöjd med resultatet.'} service={'Flyttstäd'} title={'Köper upp dödsbon i Göteborg'} secondTitle={'Flyttstäd i Göteborg'}/>
    <div style={{marginTop:'25px',width:'100%'}}>
    <div className={styles.heroMain} id={'foretagsflytt-goteborg'}>
    <Box>
                <img alt={'foretagsflytt-goteborg'} src={'https://img.freepik.com/free-vector/house-moving-couple-wearing-yellow-shirt_52683-47238.jpg?t=st=1731883677~exp=1731887277~hmac=82e5af24b76005eb5a5f5838beffa08f0aa933f2b1c777e5e55b72a6691fff44&w=1800'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </Box>
     <Box>
     <Box>
                 <Box style={{height:'35px'}}></Box>
                 <h4 className={styles.titeln}>{'Företagsflytt'}</h4>
     <h2  className={styles.titeln}>{'Trygg Företagsflytt för ditt Företag i Göteborg'}</h2>
     <p className={styles.textform}>
     När det är dags för företagsflytt, är det viktigt att välja en <a href='/flyttfirma-goteborg' title='flyttfirma göteborg' className={styles.lankar}>flyttfirma</a> som förstår företagets unika behov och som kan hantera processen effektivt. Tant Rut erbjuder professionella tjänster för företagsflytt i Göteborg och ser till att flytten går smidigt, så att ni kan återgå till arbetet utan onödiga avbrott.

Med lång erfarenhet av  <a href='#foretagsflytt-goteborg' title='företagsflytt göteborg' className={styles.lankar}>företagsflytt</a> hjälper vi företag att planera och genomföra alla steg av flyttprocessen – från noggrann packning och säker transport av kontorsmöbler och utrustning till uppackning och installation på den nya arbetsplatsen
     </p>
     </Box>
       </Box>
     </div>
     <Box style={{height:'35px'}}></Box>
   <Divider text={'Shooof så va det flyttat'}/>
     <div className={styles.heroMain} id='utlandsflytt'>
     <Box>
     <Box>
                 <Box style={{height:'10px'}}></Box>
                 <h4 className={styles.titeln}>{'Flytta utomlands'}</h4>
     <h2 className={styles.titeln}>{'Effektiv Utlandsflytt med Expertis'}</h2>
     <p className={styles.textform}>
     Att genomföra en utlandsflytt är ett stort steg och kräver noggrann planering och professionell hjälp för att allt ska gå smidigt. Tant Rut erbjuder kompletta tjänster för utlandsflytt och hjälper dig genom varje steg av processen, så att du kan känna dig trygg och väl förberedd inför ditt nya äventyr.

Vi hanterar allt som rör utlandsflytt – från packning och transport av bohag till hantering av tull och logistik. Med vår långa erfarenhet av internationella flyttar ser vi till att dina ägodelar transporteras säkert och effektivt, oavsett om du flyttar inom Europa eller till en annan världsdel. Vårt team är specialiserade på att skapa en smidig flyttprocess som är anpassad efter dina unika behov, och vi arbetar alltid med högsta fokus på kvalitet och säkerhet.
     </p>
     </Box>
       </Box>
       <Box>
                <img alt={'utlandsflytt'} src={'https://img.freepik.com/free-vector/flat-design-house-moving-concept-with-truck_23-2148665508.jpg?t=st=1731883724~exp=1731887324~hmac=de9bdc6f3b57818dd740116cf717c37c6079f7ce4bed10fd80a553ac93840f17&w=1800'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </Box>
     </div>
     <div style={{height:'45px'}}></div>
     <div className={styles.heroMain} id={'hemstad'}>
    <Box>
                <img alt={'kontorssätdning'} src={'https://img.freepik.com/free-vector/professional-janitors-working-office-isolated-flat-vector-illustration-cartoon-cleaning-team-washing-holding-stuff-removing-dust-using-vacuum-cleaner_74855-8544.jpg?t=st=1731790380~exp=1731793980~hmac=2b062d71dd3e8344566e188eb727ea6bb4f0cae0be0bfae20c35214cb2b0defb&w=2000'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </Box>
     <Box>
     <Box>
                 <Box style={{height:'10px'}} id='kontorsstad'></Box>
                 <h4 className={styles.titeln}>{'Bohagsflytt'}</h4>
     <h2  className={styles.titeln}>{'Bohagsflytt Göteborg – Prisvärd Flytthjälp med Tant Rut'}</h2>
     <p className={styles.textform}>
     Letar du efter trygg och prisvärd hjälp med din bohagsflytt i Göteborg? Hos Tant Rut Alltjänst erbjuder vi professionella flyttjänster anpassade efter dina behov. Med vår erfarenhet och omsorg ser vi till att din flytt blir smidig och stressfri. Tack vare RUT-avdraget får du dessutom ett prisvärt alternativ för flytthjälp. Kontakta oss idag för en kostnadsfri offert och låt oss göra din bohagsflytt enkel och effektiv!
     </p>
     </Box>
       </Box>
     
     </div>
     </div>
    <Tesimonial />
    <div className={styles.heroMain} id='tomma-dodsbo-goteborg'>
     <article >
     <article>
                 <article style={{height:'10px'}}></article>
                 <h4 className={styles.titeln}>{'Tömma dödsbo'}</h4>
     <h2  className={styles.titeln}>{'Hjälp att tömma dödsbo '}</h2>
     <p className={styles.textform}>
     Att <a href='/tomma-dodsbo-goteborg' title='tömma dödsbo göteborg' className={styles.lankar}>tömma ett dödsbo</a>  är en känslomässigt tung och tidskrävande process, men med hjälp från Tant Rut blir det både enklare och mer hanterbart. Vi erbjuder professionell tömning av dödsbon i Göteborg och hanterar hela processen – från sortering och värdering av föremål till bortforsling och städning. 
     </p>
     </article>
       </article>
       <article>
                <img alt={'tömma dödsbo'} src={'https://img.freepik.com/free-vector/people-moving-furniture-illustrated_23-2148651598.jpg?t=st=1731882327~exp=1731885927~hmac=d2ed439f3d6898dac376f2d74534d4b56ac1a7df8ba9085ac859f00c75146f1f&w=1800'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </article>
     </div>
     <PopularaBtns servicesArrayPop={servicesArrayPop}/>
     <div className={styles.heroMain} id='tomma-dodsbo'>
     <article>
     <article>
                 <article style={{height:'10px'}}></article>
                 <h4 className={styles.titeln}>{'Dödsbo'}</h4>
     <h2  className={styles.titeln}>{'Dödsbostädning'}</h2>
     <p className={styles.textform}>
     Vi erbjuder <a href='/stadar-dodsbon-goteborg' className={styles.lankar}>dödsbostädning</a>  för att underlätta en svår tid, med fokus på noggrannhet, omsorg och respekt. När ett dödsbo ska städas och förberedas, ser vi till att platsen blir fullständigt rengjord och iordningställd för nästa steg – oavsett om det handlar om försäljning, uthyrning eller fortsatt användning. Vi tar hand om allt från grovstädning till noggrann rengöring av ytor, kök, badrum och fönsterputsning. 
     </p>
     </article>
       </article>
       <article id='vardera-dodsbo-goteborg'>
                <img alt={'värdering av dödsbo i Göteborg'} src={'https://img.freepik.com/free-vector/paid-idea-concept-illustration_114360-8105.jpg?t=st=1731681350~exp=1731684950~hmac=1cec0b1df4d4755f4720d4978e369db4635c80ef1f843e6ce8b6e1276cba7d78&w=1380'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </article>
     </div>
     <article style={{height:'50px'}}></article>
     <AccordionComp accordionArray={accordionThree}/>
     <div className={styles.heroMain} id='slutstadning'>
    <article>
                <img alt={'dödsbo'} src={'https://img.freepik.com/free-vector/women-winning-money-prize-happy-girls-holding-huge-dollar-banknote-flat-illustration_74855-14219.jpg?t=st=1731683637~exp=1731687237~hmac=c441ad257809337783bc2187003c3fbc02e9d5a3e7d06bad218fd81999188d8b&w=1380'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </article>
     <article>
     <article>
                 <article style={{height:'10px'}}></article>
                 <h4 className={styles.titeln}>{'Flytthjälp'}</h4>
     <h2  className={styles.titeln}>{'Billig flytthjälp i Göteborg'}</h2>
     <p className={styles.textform}>
     Om du söker prisvärd och samtidigt pålitlig <a href='/flyttfirma-goteborg' title='flyttfirma Göteborg' className={styles.lankar}>flytthjälp i Göteborg</a>  är Tant Rut Alltjänst ett utmärkt val. Vi erbjuder konkurrenskraftiga priser utan att kompromissa med kvaliteten. Genom att utnyttja RUT-avdraget kan du dessutom få upp till 50 % rabatt på arbetskostnaden, vilket gör oss till ett av de mest prisvärda alternativen på marknaden.
     </p>
     </article>
       </article>
     
     </div>
     <article style={{height:'50px'}}></article>
     <article style={{width:'100%'}}>
     <div style={{ justifyContent:'center',margin:'0 auto',alignItems:'center',textAlign:'center'}}>
     <Box>
     <h2 style={{textAlign:'center'}} className={styles.titeln}>Tant Rut</h2>
      <p style={{fontSize:'0.85rem',lineHeight:'22px',margin:'0 auto',maxWidth:'700px',marginBottom:'25px'}} className={styles.textform}><strong>När du anlitar Tant Rut Alltjänst i Göteborg </strong> får du en smidig och prisvärd flyttupplevelse. Vi erbjuder flytthjälp med två flyttkillar och lätt lastbil för endast 799 kr per timme. En startavgift på 500 kr tillkommer, vilket är standard bland seriösa flyttföretag.

Hos Tant Rut skiljer vi oss från många andra flyttfirmor genom att inte ha någon minimidebitering – du betalar bara för tiden vi faktiskt arbetar, plus startavgiften. Många konkurrenter kräver debitering på minst 3–5 timmar, men hos oss slipper du dolda kostnader.

Som en mindre och kundfokuserad flyttfirma i Göteborg prioriterar vi personlig service och hög kvalitet. Vi är stolta över att erbjuda trygg och effektiv hjälp för både privatpersoner och företag i hela Göteborgsområdet. Välj Tant Rut Alltjänst för en professionell flytt utan onödiga krångligheter!

Kontakta oss idag för en kostnadsfri offert – vi ser fram emot att hjälpa dig med din flytt!</p>
     </Box>
     </div>
  
<Box className={styles.classic}>
<ul>
    <li style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Trygg och säker flytt:</strong> Vi skyddar dina möbler och ägodelar noggrant under hela flytten för att säkerställa att de når sin nya plats utan skador.</li>
    <li style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}> Försäkrade flyttjänster:</strong> Tant Rut Alltjänst är ett fullt försäkrat flyttföretag, vilket ger dig extra trygghet vid flytten.</li>
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
    <li  style={{fontSize:'0.85rem',lineHeight:'22px'}}  className={styles.textform}><strong className={styles.titeln}>Erfaren flyttfirma i Göteborg:</strong> Vi på Tant Rut Alltjänst har många års erfarenhet av flyttjänster i hela Göteborg, vilket gör oss till en pålitlig partner för din flytt.</li>
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
</Box>


     </article>
    </main>
    <div style={{height:'75px'}}></div>
    <FooterComp />
      </Suspense>
    </div>
  )
}

export default FlyttfirmaGoteborg