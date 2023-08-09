const Map = () => {
  return (
    <div className="w-screen">
      <iframe
        title="mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.289537356052!2d-47.13452582229773!3d-23.52208646015516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf12ac1078e4d7%3A0x79fc4dd020ddf4a6!2sAv.%20Bandeirantes%2C%20417%20-%20Jardim%20Bandeirantes%2C%20S%C3%A3o%20Roque%20-%20SP%2C%2018134-220!5e0!3m2!1sen!2sbr!4v1691607776211!5m2!1sen!2sbr"
        style={{
          width: "100%",
          height: "30rem",
          border: "0",
        }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};
export default Map;
