'use client'

const Mailing = () => {
  return (
    <>
    <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js">
    </script>
    <script type="text/javascript">
      (function(){
        emailjs.init('cTwOxaU2kVqzmEP2i');
      })();
    </script>
      </>
  )
}
export default Mailing
