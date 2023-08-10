const Map = () => {
  return (
    <div className="w-screen">
      <iframe
        title="mapa"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14633.155121257032!2d-47.1319596!3d-23.5221137!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf130dbc0be17f%3A0xf828aa877cefa63d!2sBYO%20Est%C3%A9tica%20Avan%C3%A7ada!5e0!3m2!1sen!2sbr!4v1691675891508!5m2!1sen!2sbr"
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
