import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  CarFront,
  Compass,
  Footprints,
  Headphones,
  HeartHandshake,
  MapPin,
  Menu,
  MountainSnow,
  Quote,
  Route as RouteIcon,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import heroImage from "@/assets/explore-yatra-hero.jpg";
import meadowImage from "@/assets/explore-yatra-meadow.jpg";
import riverImage from "@/assets/explore-yatra-river.jpg";
import templeImage from "@/assets/explore-yatra-temple.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Explore Yatra | Discover Uttarakhand" },
      {
        name: "description",
        content:
          "Explore Uttarakhand through curated journeys, pilgrimage experiences, adventure tours and unforgettable Himalayan escapes.",
      },
      { property: "og:title", content: "Explore Yatra | Discover Uttarakhand" },
      {
        property: "og:description",
        content: "Thoughtfully planned journeys into the heart of the Indian Himalayas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const destinations = [
  { name: "Chopta", note: "Meadows beneath the peaks", image: meadowImage, area: "feature" },
  { name: "Rishikesh", note: "River, ritual and rhythm", image: riverImage, area: "river" },
  { name: "Kedarnath", note: "A path into stillness", image: templeImage, area: "temple" },
  { name: "Nainital", note: "The lake district", image: riverImage, area: "small-a" },
  { name: "Auli", note: "High alpine horizons", image: heroImage, area: "small-b" },
  { name: "Mussoorie", note: "Old-world mountain air", image: meadowImage, area: "small-c" },
  { name: "Badrinath · Mukteshwar · Joshimath", note: "More places, one remarkable state", image: heroImage, area: "wide" },
];

const packages = [
  {
    title: "Panch Kedar Expedition",
    duration: "10 days",
    type: "Spiritual trek",
    copy: "A considered journey through five revered Himalayan temples, slow mountain roads and ancient footpaths.",
    image: templeImage,
    featured: true,
  },
  {
    title: "Char Dham, Slowly",
    duration: "8 days",
    type: "Pilgrimage",
    copy: "Comfortable travel through Uttarakhand’s four sacred shrines.",
    image: heroImage,
    featured: false,
  },
  {
    title: "Winter in Auli",
    duration: "5 days",
    type: "Mountain escape",
    copy: "Snowfields, cedar forests and unhurried evenings in the high country.",
    image: meadowImage,
    featured: false,
  },
];

const testimonials = [
  {
    quote:
      "Every transfer, stay and temple visit felt thoughtfully paced. We never felt rushed, even on the busiest parts of the route.",
    name: "Anjali Sharma",
    trip: "Kedarnath journey",
  },
  {
    quote:
      "The local guidance changed everything. We found quiet viewpoints and stories we would never have discovered alone.",
    name: "Rahul Gupta",
    trip: "Chopta & Auli",
  },
  {
    quote:
      "A beautifully balanced trip — spiritual, adventurous and comfortable for our whole family.",
    name: "Megha Verma",
    trip: "Uttarakhand family escape",
  },
];

function Mark() {
  return (
    <a className="brand" href="#top" aria-label="Explore Yatra home">
      <span className="brand__icon"><MountainSnow aria-hidden="true" /></span>
      <span>Explore <b>Yatra</b></span>
    </a>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={light ? "eyebrow eyebrow--light" : "eyebrow"}><span />{children}</p>;
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top">
      <header className={scrolled ? "site-header site-header--scrolled" : "site-header"}>
        <div className="header-inner">
          <Mark />
          <nav className={menuOpen ? "nav nav--open" : "nav"} aria-label="Main navigation">
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#destinations" onClick={closeMenu}>Destinations</a>
            <a href="#packages" onClick={closeMenu}>Journeys</a>
            <a href="#stories" onClick={closeMenu}>Stories</a>
            <Button asChild variant="journey" size="journey"><a href="#contact" onClick={closeMenu}>Plan my yatra <ArrowRight /></a></Button>
          </nav>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img className="hero__image" src={heroImage} width={1920} height={1088} alt="Sunrise across the snow-covered Uttarakhand Himalayas" fetchPriority="high" />
        <div className="hero__shade" />
        <div className="hero__content">
          <Eyebrow light>Discover Uttarakhand</Eyebrow>
          <h1 id="hero-title">Where the<br /><em>mountains</em> call.</h1>
          <p>Thoughtfully planned journeys through sacred valleys, alpine meadows and the living culture of the Himalayas.</p>
          <div className="hero__actions">
            <Button asChild variant="journey" size="journey"><a href="#packages">Explore journeys <ArrowRight /></a></Button>
            <Button asChild variant="light" size="journey"><a href="#destinations">View destinations</a></Button>
          </div>
        </div>
        <aside className="hero__caption" aria-label="Featured location">
          <MapPin aria-hidden="true" />
          <div><small>Featured landscape</small><strong>Garhwal Himalayas</strong></div>
        </aside>
        <a className="scroll-cue" href="#about" aria-label="Scroll to discover"><span>Scroll to discover</span><ArrowDown /></a>
      </section>

      <section className="assurance" aria-label="Our approach">
        <div className="assurance__inner">
          {[
            ["01", "Expertly crafted", "travel experiences"],
            ["02", "Local insight", "global standards"],
            ["03", "Traveller-first", "from start to finish"],
          ].map(([number, title, copy]) => (
            <div className="assurance__item" key={number}><span>{number}</span><div><strong>{title}</strong><p>{copy}</p></div></div>
          ))}
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about__visual reveal">
          <img src={templeImage} width={1280} height={1600} loading="lazy" alt="Historic stone temple below Himalayan peaks" />
          <div className="about__note"><Compass aria-hidden="true" /><span>Rooted in place.<br />Designed around you.</span></div>
        </div>
        <div className="about__copy reveal">
          <Eyebrow>About us</Eyebrow>
          <h2>Closer to the land.<br /><em>Deeper into the journey.</em></h2>
          <p className="lead">Explore Yatra opens Uttarakhand through journeys that make room for wonder.</p>
          <p>We bring together local knowledge, comfortable travel and carefully chosen experiences — so you can move beyond the obvious and feel the true character of the mountains.</p>
          <Button asChild variant="outline" size="journey"><a href="#stories">Our approach <ArrowRight /></a></Button>
        </div>
      </section>

      <section className="destinations section" id="destinations">
        <div className="section-heading reveal">
          <div><Eyebrow>Destinations</Eyebrow><h2>Nine places.<br /><em>Countless ways to feel alive.</em></h2></div>
          <p>From temple paths and river towns to quiet lake shores, discover the places that make Uttarakhand unforgettable.</p>
        </div>
        <div className="destination-grid">
          {destinations.map((place) => (
            <a href="#packages" className={`destination destination--${place.area} reveal`} key={place.name}>
              <img src={place.image} width={place.area === "temple" ? 1280 : 1600} height={place.area === "temple" ? 1600 : 1072} loading="lazy" alt={`${place.name}, Uttarakhand`} />
              <span className="destination__shade" />
              <span className="destination__content"><small>{place.note}</small><strong>{place.name}</strong><ArrowRight /></span>
            </a>
          ))}
        </div>
        <Button asChild variant="outline" size="journey"><a href="#packages">View all destinations <ArrowRight /></a></Button>
      </section>

      <section className="packages section" id="packages">
        <div className="packages__intro reveal"><Eyebrow light>Curated journeys</Eyebrow><h2>Travel with<br /><em>intention.</em></h2><p>Routes designed around what matters: meaningful places, seamless movement and time to take it all in.</p></div>
        <div className="package-layout">
          {packages.map((item) => (
            <article className={item.featured ? "package package--featured reveal" : "package reveal"} key={item.title}>
              <img src={item.image} width={item.featured ? 1280 : 1600} height={item.featured ? 1600 : 1072} loading="lazy" alt={item.title} />
              <div className="package__shade" />
              <div className="package__content">
                <div className="package__meta"><span>{item.duration}</span><span>{item.type}</span></div>
                <h3>{item.title}</h3><p>{item.copy}</p>
                <a href="#contact" aria-label={`View ${item.title}`}>View journey <ArrowRight /></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="why" aria-labelledby="why-title">
        <img src={heroImage} width={1920} height={1088} loading="lazy" alt="Panoramic Uttarakhand mountain range at sunrise" />
        <div className="why__shade" />
        <div className="why__content">
          <Eyebrow light>Why explore with us</Eyebrow>
          <h2 id="why-title">The mountains are wild.<br /><em>Your journey needn’t be.</em></h2>
          <p>Thoughtful planning and grounded local support give you the freedom to be fully present.</p>
          <div className="benefits">
            {[
              [Sparkles, "Cultural experiences", "Encounters with the people, traditions and stories of the region."],
              [CarFront, "Travel support", "Considered routes and dependable movement from valley to valley."],
              [ShieldCheck, "Trusted service", "Clear communication and attentive help throughout your journey."],
              [Footprints, "Adventure tours", "Trek, raft and explore with the right pace and preparation."],
            ].map(([Icon, title, copy]) => {
              const BenefitIcon = Icon as typeof Sparkles;
              return <div className="benefit" key={title as string}><BenefitIcon /><strong>{title as string}</strong><p>{copy as string}</p></div>;
            })}
          </div>
        </div>
      </section>

      <section className="beyond section" id="stories">
        <div className="beyond__image reveal"><img src={riverImage} width={1600} height={1072} loading="lazy" alt="The Ganges flowing through Rishikesh at dusk" /><span>30.0869° N<br />78.2676° E</span></div>
        <div className="beyond__copy reveal"><Eyebrow light>Beyond pilgrimage</Eyebrow><h2>There is more<br />to seek than<br /><em>the summit.</em></h2><p>Uttarakhand is morning light on the Ganges, cedar-scented trails, lake towns, village kitchens and long conversations around a fire.</p><Button asChild variant="light" size="journey"><a href="#destinations">Explore the unexpected <ArrowRight /></a></Button></div>
      </section>

      <section className="testimonials section" aria-labelledby="testimonial-title">
        <div className="testimonial-heading reveal"><Eyebrow>Traveller stories</Eyebrow><h2 id="testimonial-title">Journeys remembered<br /><em>in their own words.</em></h2></div>
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <blockquote className={index === 0 ? "testimonial testimonial--featured reveal" : "testimonial reveal"} key={item.name}>
              <Quote aria-hidden="true" />
              <div className="stars" aria-label="5 out of 5 stars">{Array.from({ length: 5 }).map((_, star) => <Star key={star} fill="currentColor" />)}</div>
              <p>“{item.quote}”</p><footer><strong>{item.name}</strong><span>{item.trip}</span></footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="offer">
        <img src={meadowImage} width={1600} height={1072} loading="lazy" alt="Hiker crossing an alpine meadow in Uttarakhand" />
        <div className="offer__shade" />
        <div className="offer__content"><Eyebrow light>Limited seasonal offer</Eyebrow><h2>Get 30% off on<br /><em>your dream yatra.</em></h2><p>Begin with a conversation. We’ll help shape the route around the places and pace that feel right for you.</p><Button asChild variant="journey" size="journey"><a href="#contact">Plan my journey <ArrowRight /></a></Button></div>
      </section>

      <section className="contact section" id="contact">
        <div className="contact__intro reveal"><Eyebrow>Find us</Eyebrow><h2>Your journey<br /><em>starts here.</em></h2><p>Tell us where the mountains are calling you. Our team will help turn the first idea into a thoughtful itinerary.</p><div className="contact__details"><span><MapPin /> Uttarakhand, India <small>Full office address to be added</small></span><span><Headphones /> Travel planning support <small>Contact details to be added</small></span></div><Button asChild variant="journey" size="journey"><a href="mailto:hello@example.com">Start a conversation <ArrowRight /></a></Button></div>
        <div className="map-art reveal" role="img" aria-label="Stylised map of Uttarakhand journey points">
          <div className="map-art__route" />
          <span className="map-pin map-pin--one"><i />Dehradun</span><span className="map-pin map-pin--two"><i />Rishikesh</span><span className="map-pin map-pin--three"><i />Kedarnath</span><span className="map-pin map-pin--four"><i />Auli</span>
          <div className="map-art__key"><RouteIcon /> Your route, thoughtfully connected</div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__top"><div><Mark /><p>Meaningful journeys into the heart of Uttarakhand.</p></div><div><strong>Explore</strong><a href="#destinations">Destinations</a><a href="#packages">Journeys</a><a href="#stories">Stories</a></div><div><strong>Travel</strong><a href="#about">Our approach</a><a href="#contact">Plan a yatra</a><a href="#contact">Contact</a></div><div><strong>Stay inspired</strong><p>Occasional notes from the mountains.</p><a className="footer__email" href="mailto:hello@example.com">Your email <ArrowRight /></a></div></div>
        <div className="footer__bottom"><span>© 2026 Explore Yatra</span><span>Made for the mountains</span></div>
      </footer>
    </main>
  );
}