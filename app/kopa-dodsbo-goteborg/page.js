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
  title: 'Köper dödsbo Göteborg? Vi köper ditt dödsbo i Göteborg till det bästa priset | Tant Rut',
  description:'Skall du sälja ett dödsbo i Göteborg? Vi köper upp dödsbon och bohag i Göteborg. Köpa upp, tömma och städa dödsbo i Göteborg',
  keywords: ['sälja dödsbo Göteborg','köper dödsbo Göteborg','dödsbouppköpare Göteborg','värdera dödsbo i Göteborg','köper allt i hemmet i Göteborg','dödsbo i Göteborg','bortforsling dödsbo','värdering dödsbo','dödsbostädning i Göteborg','slutstädning i Göteborg','auktionsfirma','loppisar','köper lösöre','tömma dödsbo', 'röja dödsbo', 'tömning av dödsbo i Göteborg','tömmer dödsbo','dödsbotömning','bouppteckning','städfirma','flyttfirma','rut avdrag','recycla','recycle','recycling','bortforsling','bortforsling Göteborg','sälja dödsbo','uppköp av dödsbo i Göteborg','köper dödsbo i Göteborg'],
  metadataBase: new URL('https://tantrut.netlify.app'),
  alternates: {
    canonical: 'https://tantrut.netlify.app/kopa-dodsbo-goteborg',
    languages: {
      'sv': '/sv',
    },
  },
  openGraph: {
    title: 'Köper dödsbo Göteborg? Vi köper ditt dödsbo i Göteborg till det bästa priset | Tant Rut',
    images: 'https://img.freepik.com/premium-vector/funeral-ceremony-vector-illustration-sad-people-black-clothes-standing-by-grave-with-wreaths-around-coffin-flat-cartoon-background_2175-25085.jpg?w=1800',
    description:'Skall du sälja ett dödsbo i Göteborg? Vi köper upp dödsbon och bohag i Göteborg. Köpa upp, tömma och städa dödsbo i Göteborg',
    url: 'https://tantrut.netlify.app/kopa-dodsbo-goteborg',
    site_name: 'Tant Rut Alltjänst',
    images: [
      {
        url: 'https://img.freepik.com/premium-vector/funeral-ceremony-vector-illustration-sad-people-black-clothes-standing-by-grave-with-wreaths-around-coffin-flat-cartoon-background_2175-25085.jpg?w=1800',
        width: 1260,
        height: 750,
        alt: 'köper dödsbo i Göteborg',
      }
    ],
    type: 'website',
    locale: 'sv_SE',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tanrut', 
    title: 'Köper dödsbo Göteborg? Vi köper ditt dödsbo i Göteborg till det bästa priset | Tant Rut',
    description:'Skall du sälja ett dödsbo i Göteborg? Vi köper upp dödsbon och bohag i Göteborg. Köpa upp, tömma och städa dödsbo i Göteborg',
    image: 'https://images.pexels.com/photos/4098778/pexels-photo-4098778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  robots: {
    index: true,
    follow: true,
  }
}

const KopaDodsbo = () => {
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    title: 'Köper dödsbo Göteborg? Vi köper ditt dödsbo i Göteborg till det bästa priset | Tant Rut',
    description:'Skall du sälja ett dödsbo i Göteborg? Vi köper upp dödsbon och bohag i Göteborg. Köpa upp, tömma och städa dödsbo i Göteborg',
    datePublished: '2024-11-15',
    author: {
      "@type": "Person",
      "name": "Tant Rut Alltjänsts"
    },
    image: "https://img.freepik.com/premium-vector/funeral-ceremony-vector-illustration-sad-people-black-clothes-standing-by-grave-with-wreaths-around-coffin-flat-cartoon-background_2175-25085.jpg?w=1800",
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
    <div className={styles.page} id='koper-dodsbo'>
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
    <HeroComp title={'Köper dödsbo i Göteborg'} text={'Vi köper upp, städar och tömmer hushåll och dödsbon i Göteborg. Nyttja din rut när du använder våra tjänster!'}/>
    <div style={{height:'30px'}}></div>
    <HogerSection/>
    <TjansterCarousal />
    <div id='salja-dodsbo-goteborg'  style={{height:'70px'}}></div>
    <LeftSection textsecond={'Vi erbjuder kostnadsfri och professionell värdering av dödsbon, bohag och enskilda föremål i Göteborg med omnejd. Genom vår tjänst kan vi hjälpa dig att få en noggrann uppskattning av hemmets lösöre, vilket är ett viktigt steg inför en eventuell tömning av dödsboet. Vår bedömning ger dig ett fast pris för tömningen, och vi kan även lämna ett specifikt erbjudande för uppköp av värdefulla föremål vi är intresserade av att köpa.'} servicesec={'Dödsbo'} titlesecond={'Värdering av dödsbo i Göteborg'} bannerText={'Skall du flytta till ett boende? Nyttja din RUT(50%)'} service={'Dödsbo'} title={'Sälja dödsbo i Göteborg?'} text={'Vi erbjuder professionell hantering av dödsbon, inklusive tömning, städning och försäljning av föremål. Vi köper upp dödsbon i Göteborg och säljer vidare värdefulla objekt på ett effektivt sätt, samtidigt som vi ser till att tömma och städa dödsbot i Göteborg. Vårt mål är att underlätta processen för anhöriga genom att ta hand om allt från värdering och bortforsling av dödsbo i Göteborg till slutstädning, med omtanke och respekt.'} imgUrl={'https://img.freepik.com/premium-vector/funeral-ceremony-vector-illustration-sad-people-black-clothes-standing-by-grave-with-wreaths-around-coffin-flat-cartoon-background_2175-25085.jpg?w=1800'}/>
    <AccordionComp accordionArray={accordionArray}/>
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
     <div className={styles.heroMain}>
    <article>
                <img alt={'dödsbo'} src={'https://img.freepik.com/free-vector/women-winning-money-prize-happy-girls-holding-huge-dollar-banknote-flat-illustration_74855-14219.jpg?t=st=1731683637~exp=1731687237~hmac=c441ad257809337783bc2187003c3fbc02e9d5a3e7d06bad218fd81999188d8b&w=1380'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </article>
     <article>
     <article>
                 <article style={{height:'10px'}} id='slutstadning'></article>
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

export default KopaDodsbo
