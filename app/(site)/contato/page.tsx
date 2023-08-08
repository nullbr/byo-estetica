import ContactHero from "../components/Contact/ContactHero";
import Form from "../components/Contact/Form";
import Map from "../components/Contact/Map";

const Contato = () => {
  return (
    <section>
      {/* left div */}
      <ContactHero />

      {/* right div */}
      <Form />

      {/* map */}
      <Map />
    </section>
  );
};
export default Contato;
