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
import { sidorflytt } from '../../content/sidorna'
export const metadata = {
    title: 'Flyttstäd i Göteborg? Vi hjälper dig med flyttstädning i Göteborg med städgaranti!',
    description:'Behöver du hjälp med flyttstäd i Göteborg? Tant Rut ser till att du får den bästa flyttstädningen i Göteborg! Hos oss ingår alltid städgaranti.',
    keywords: [
        'flyttstäd Göteborg', 'flyttstädning Göteborg', 'flyttstäd hisingen', 'billig flyttstädning', 'flyttfirma', 
        'städa inför flytt', 'miljövänlig flyttstädning', 'flyttstäd pris', 'kontorsstäd', 
        'privatstäd', 'industristäd', 'byggstäd', 'flyttstäd checklista', 'garanterad flyttstädning',
        'billig flyttstäd Göteborg','bra flyttstäd Göteborg','Göteborg'
      ],
    metadataBase: new URL('https://tantrut.netlify.app'),
    alternates: {
      canonical: 'https://tantrut.netlify.app/flyttstad-goteborg',
      languages: {
        'sv': '/sv',
      },
    },
    openGraph: {
      title: 'Flyttstäd i Göteborg? Vi hjälper dig med flyttstädning i Göteborg med städgaranti!',
      images: 'https://img.freepik.com/premium-vector/funeral-ceremony-vector-illustration-sad-people-black-clothes-standing-by-grave-with-wreaths-around-coffin-flat-cartoon-background_2175-25085.jpg?w=1800',
      description:'Behöver du hjälp med flyttstäd i Göteborg? Tant Rut ser till att du får den bästa flyttstädningen i Göteborg! Hos oss ingår alltid städgaranti.',
      url: 'https://tantrut.netlify.app/flyttstad-goteborg',
      site_name: 'Tant Rut Alltjänst',
      images: [
        {
          url: 'https://img.freepik.com/premium-vector/funeral-ceremony-vector-illustration-sad-people-black-clothes-standing-by-grave-with-wreaths-around-coffin-flat-cartoon-background_2175-25085.jpg?w=1800',
          width: 1260,
          height: 750,
          alt: 'flyttstäd i Göteborg',
        }
      ],
      type: 'website',
      locale: 'sv_SE',
    },
    twitter: {
      card: 'summary_large_image',
      site: '@tanrut', 
      title: 'Flyttstäd i Göteborg? Vi hjälper dig med flyttstädning i Göteborg med städgaranti!',
      description:'Behöver du hjälp med flyttstäd i Göteborg? Tant Rut ser till att du får den bästa flyttstädningen i Göteborg! Hos oss ingår alltid städgaranti.',
      image: 'https://images.pexels.com/photos/4098778/pexels-photo-4098778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    robots: {
      index: true,
      follow: true,
    }
  }

const FlyttstadGoteborg = () => {
    const article = {
        "@context": "https://schema.org",
        "@type": "Article",
        title: 'Flyttstäd i Göteborg? Vi hjälper dig med flyttstädning i Göteborg med städgaranti!',
        description:'Behöver du hjälp med flyttstäd i Göteborg? Tant Rut ser till att du får den bästa flyttstädningen i Göteborg! Hos oss ingår alltid städgaranti.',
        datePublished: '2024-11-15',
        author: {
          "@type": "Person",
          "name": "Tant Rut Alltjänsts"
        },
        image: "https://img.freepik.com/premium-vector/funeral-ceremony-vector-illustration-sad-people-black-clothes-standing-by-grave-with-wreaths-around-coffin-flat-cartoon-background_2175-25085.jpg?w=1800",
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
<HeaderComp sidor={sidorflytt}/>
    </header>
    <main className={styles.main}>
    <HeroComp title={'Flyttstäd i Göteborg'} text={'Vi flyttar, städar och tömmer hushåll och dödsbon i Göteborg. Nyttja din rut när du använder våra tjänster!'}/>
    <div style={{height:'30px'}}></div>
    <HogerSection />
    <TjansterCarousal />
    <SectionOne />
    <AccordionComp accordionArray={accordionArray}/>
    <DividerSection idsec={'koper-dodsbo-goteborg'} idone={'flyttstad'}  imgUrl={'https://img.freepik.com/free-vector/moving-new-apartment-concept_74855-7628.jpg?t=st=1731677134~exp=1731680734~hmac=016d52e8b6edea7efc05bd3872cfcb51b491b198b1f523ea4bdf815d8d674bf6&w=1800'} text={'När du behöver hjälp med flyttstädning i Göteborg, erbjuder vi en komplett och smidig lösning från början till slut. På det datum vi tillsammans har kommit överens om, anländer vi för att genomföra en grundlig och professionell flyttstädning av ditt hem. Med noggrannhet och omsorg städar vi alla ytor och ser till att inga detaljer förbises. Vi hanterar allt från rengöring av kök och badrum till fönsterputsning och golvvård. Efter att vi har slutfört städningen, ser vi till att hemmet är i toppskick inför nästa boende eller besiktning, så att du kan känna dig trygg och nöjd med resultatet.'} service={'Flyttstäd'} title={'Köper upp dödsbon i Göteborg'} secondTitle={'Flyttstäd i Göteborg'}/>
    <SectionTwo />
    <Tesimonial />
    <div className={styles.heroMain} id='fonsterputs'>
     <article >
     <article>
                 <article style={{height:'10px'}}></article>
                 <h4 className={styles.titeln}>{'Fönsterputs'}</h4>
     <h2  className={styles.titeln}>{'Tant Ruts fönsterputs'}</h2>
     <p className={styles.textform}>
     Låt oss hjälpa dig få kristallklara fönster med vår professionella fönsterputsningstjänst. Oavsett om det gäller hem, kontor eller butik ser vi till att dina fönster blir fria från smuts, damm och fläckar – både på in- och utsidan. Vi använder effektiva metoder och miljövänliga produkter som ger ett skinande resultat utan ränder. Med rena fönster får du in mer naturligt ljus och skapar en fräsch och välkomnande atmosfär. Boka vår fönsterputsning och låt oss förvandla dina fönster till en klarare utsikt!
     </p>
     </article>
       </article>
       <article>
                <img alt={'fönsterputs'} src={'https://img.freepik.com/free-vector/plastic-windows-flat-composition-with-indoor-scenery-two-workers-washing-glass-with-urban-cityscape-view-vector-illustration_98292-8816.jpg?t=st=1731792041~exp=1731795641~hmac=115feb61f16a3dc27d3caee8e8833d8cfd7f673d589f6ac2c0f99a8549f41743&w=2000'} style={{width:'100%',height:'400px',objectFit:'contain'}}/>
     </article>
     </div>
     <PopularaBtns servicesArrayPop={servicesArrayPop}/>
     <div className={styles.heroMain} id='dodsbostadning'>
     <article>
     <article>
                 <article style={{height:'10px'}}></article>
                 <h4 className={styles.titeln}>{'Dödsbo'}</h4>
     <h2  className={styles.titeln}>{'Dödsbostädning'}</h2>
     <p className={styles.textform}>
     Vi erbjuder dödsbostädning för att underlätta en svår tid, med fokus på noggrannhet, omsorg och respekt. När ett dödsbo ska städas och förberedas, ser vi till att platsen blir fullständigt rengjord och iordningställd för nästa steg – oavsett om det handlar om försäljning, uthyrning eller fortsatt användning. Vi tar hand om allt från grovstädning till noggrann rengöring av ytor, kök, badrum och fönsterputsning. 
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

export default FlyttstadGoteborg