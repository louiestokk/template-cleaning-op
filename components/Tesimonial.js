import React from 'react'
import ThreePIcon from '@mui/icons-material/ThreeP';
import StarIcon from '@mui/icons-material/Star';
const Tesimonial = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '500px', marginTop: '100px', overflow: 'hidden' }}>
    <h2 style={{ fontFamily: 'Georgia, sans-serif', textAlign: 'center', padding: '1rem', lineHeight: '36px', fontSize: '1.8rem',marginBottom:'25px' }}>
      Vad säger våra våra kunder?
    </h2>
    <div
      style={{
        display: 'flex',
        overflowX:'scroll'
      }}
    >
      {homeTestimonial?.map((el, i) => (
        <div
          key={i}
          style={{
            background: 'white',
            padding: '1rem',
            borderRadius: '50px',
            width: '80%',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px',
            margin: '0.25rem',
            position: 'relative',
            flex: 'none',
            maxWidth:'450px'
          }}
        >
          <div style={{ position: 'absolute', top: '0%'}}>
            <ThreePIcon style={{ color: 'orange' }} />
          </div>
          <h5 style={{ textAlign: 'center', marginTop: '0.5rem' }}>{el.service}</h5>
          <p style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.85rem', lineHeight: '20px', padding: '0.5rem',width:'85%' }}>{el.testimonial}</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={el.img} alt="user photo" style={{ objectFit: 'cover', width: '55px', height: '55px', borderRadius: '50%' }} />
            <div>
            <h4 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', marginLeft: '0.4rem' }}>{el.name}</h4>
            <article>
            <StarIcon style={{color:'orange'}}/>
            <StarIcon style={{color:'orange'}}/>
            <StarIcon style={{color:'orange'}}/>
            <StarIcon style={{color:'orange'}}/>
            <StarIcon style={{color:'orange'}}/>
            </article>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Tesimonial

const homeTestimonial = [
    {
      name: "Erik Johansson",
      img:'https://randomuser.me/api/portraits/men/85.jpg',
      service: "Kontorsstädning",
      testimonial: "Vi behövde professionell kontorsstädning och Tant Rut levererade. Vi fick offert och valde en bra upplägg. Väldigt nöjda!"
    },
    {
      name: "Maria Lindberg",
      img:'https://randomuser.me/api/portraits/women/64.jpg',
      service: "Tömning av dödsbo",
      testimonial: "Att tömma ett dödsbo är aldrig lätt, men Tant Rut gjorde processen mycket enklare. Jag fick snabbt offert och kunde välja den bästa tjänsten för mina behov."
    },

    {
      name: "Linda Persson",
      img:'https://randomuser.me/api/portraits/women/24.jpg',
      service: "Flyttstädning",
      testimonial: "Flyttstädning kan vara stressigt, men Tant Rut gjorde det lättare. Vi fick ett bra pris och ett skräddarsytt upplägg som passade oss. Rekommenderar starkt!"
    },
    {
      name: "Mats Bergström",
      img:'https://randomuser.me/api/portraits/men/76.jpg',
      service: "Kontorsflytt",
      testimonial: "Vi använde Tant Rut för att få hjälp med kontorsflytten. Processen var enkel och vi fick snabbt en offert. Väldigt nöjd med tjänsten!"
    },
    {
      name: "Anna Svensson",
      img:'https://randomuser.me/api/portraits/women/68.jpg',
      service: "Städning",
      testimonial: "Tant Rut hjälpte mig med vårstädning som vi brukar göra varje år. Kundservicen var smidig och jag fick snabbt svar. Rekommenderas starkt!"
    },
    {
      name: "Fredrik Olsson",
      img:'https://randomuser.me/api/portraits/men/17.jpg',
      service: "Flytthjälp",
      testimonial: "Vi behövde hjälp med att flytta och Tant Rut gjorde ett fantastiskt jobb och hela flytten gick väldigt smdidigt. Väldigt nöjd med hur smidigt allt gick."
    },
    {
      name: "Sara Andersson",
      img:'https://randomuser.me/api/portraits/women/63.jpg',
      service: "Bortforsling möbler",
      testimonial: "Vi använde Tant Rut för att få hjälp med bortforsling av möbler och grovsopor, och det visade sig vara ett utmärkt val. Personalen var otroligt lyhörd och erbjöd personlig service. Tant Rut gjorde processen enkel och stressfri, vilket vi uppskattade mycket."
    },
    {
      name: "Johan Karlsson",
      img:'https://randomuser.me/api/portraits/men/57.jpg',
      service: "Hemstäd",
      testimonial: "Trevlig personal som är självgående och effektiva. Vi har använt Tant Rut för hemstäd i flera månader nu och vi är jätte nöjda. Rekommenderar starkt!"
    },
    {
      name: "Eva Nilsson",
      img:'https://randomuser.me/api/portraits/women/53.jpg',
      service: "Värdera dödsbo",
      testimonial: "Vi fick hjälp med helhetslösning för vårt dödsbo. Tant Rut gjorde hela processeen enkel för oss och med respekt. Vi kommer använda Tant Rut igen!"
    },
    {
      name: "Lars Eriksson",
      img:'https://randomuser.me/api/portraits/men/21.jpg',
      service: "Flytt till boende",
      testimonial: "Tack vare Tant Rut kunde vi snabbt och enkelt hjälpa min bror att flytta till ett boende. Tant Rut gjorde det enkelt att jämföra alternativ och hitta det som passade oss bäst."
    },
  ];