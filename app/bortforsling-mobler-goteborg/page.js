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
    metadataBase: new URL('https://tantrut.netlify.app'),
    alternates: {
      canonical: 'https://tantrut.netlify.app/bortforsling-mobler-goteborg',
      languages: {
        'sv': '/sv',
      },
    },
    openGraph: {
      title: 'Behöver du hjälp med bortforsling av möbler och grovsopor? Vi forslar bort och kör till tippen!',
      images: 'https://images.pexels.com/photos/5824520/pexels-photo-5824520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description:'Behöver du hjälp med bortforsling av möbler och grovsopor. Vi är en pålitliga och seriös firma som hjälper dig med bortforsling av möbler. Snabb och smidig tjänst.',
      url: 'https://tantrut.netlify.app/bortforsling-mobler-goteborg',
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
                <img alt={'Flyttfirma'} src={'https://img.freepik.com/free-vector/moving-concept-illustration_114360-8292.jpg?t=st=1731537696~exp=1731541296~hmac=67d81f44920ef5a6eebd759148d358c050b7987eeeaa1f7c8a82f448e72b2cd3&w=1800'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </Box>
     </div>
     
     </div>
<AccordionComp accordionArray={accordionArray}/>
<div id='bortforsling-mobler'></div>
<DividerSection idsec={'koper-dodsbo-goteborg'} idone={'hamtar-skrap'}  imgUrl={'https://img.freepik.com/free-vector/moving-new-apartment-concept_74855-7628.jpg?t=st=1731677134~exp=1731680734~hmac=016d52e8b6edea7efc05bd3872cfcb51b491b198b1f523ea4bdf815d8d674bf6&w=1800'} text={'Behöver du hjälp med att bli av med skräp och avfall? Vi gör det enkelt för dig! Vi hämtar ditt skräp direkt från din bostad eller arbetsplats och kör det till tippen åt dig. Oavsett om det handlar om gamla möbler, elektronik, byggavfall eller annat skrymmande material, ser vi till att allt transporteras och hanteras på ett miljövänligt sätt.'} service={'Hämtar skräp'} title={'Köper upp dödsbon i Göteborg'} secondTitle={'Vi hämtar ditt skräp'}/>
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
                <img alt={'byggstäd'} src={'https://img.freepik.com/free-vector/builders-helmets-working-construction-site-machine-building-worker-flat-vector-illustration-engineering-development_74855-8259.jpg?t=st=1731790095~exp=1731793695~hmac=3c083af2716e9edaf01bafb7e8cd80ab2a18dc1b5b76c30f79efe55cdcf6c5f3&w=2000'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </Box>
     </div>
     <div className={styles.heroMain} id={'hemstad'}>
    <Box>
                <img alt={'kontorssätdning'} src={'https://img.freepik.com/free-vector/professional-janitors-working-office-isolated-flat-vector-illustration-cartoon-cleaning-team-washing-holding-stuff-removing-dust-using-vacuum-cleaner_74855-8544.jpg?t=st=1731790380~exp=1731793980~hmac=2b062d71dd3e8344566e188eb727ea6bb4f0cae0be0bfae20c35214cb2b0defb&w=2000'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
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

