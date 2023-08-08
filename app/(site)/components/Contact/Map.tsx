const Map = () => {
  return (
    <div className="w-screen">
      <iframe
        title="maps"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=aveida%20bandeirantes%20401,%20sao%20roque+(My%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        style={{
          width: "100%",
          height: "30rem",
          border: "0",
        }}
        allowFullScreen={false}
        loading="lazy"
      ></iframe>
    </div>
  );
};
export default Map;
