import EmailSubscription from "../aboutUs/components/emailComponet/Email"
import Footer from "../homepage/components/footerComponent/Footer"
import Topbar from "../homepage/components/topbarComponent/Topbar"
import PackageBooking from "../tourPackage/components/packageBookingComponent/PackageBooking"



function Booking() {
  return (
    <div>
      <Topbar/>
      <PackageBooking/>
      <EmailSubscription/>
      <Footer/>
      
  </div>
  )
}

export default Booking