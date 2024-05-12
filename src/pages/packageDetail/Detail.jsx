
import Topbar from "../homepage/components/topbarComponent/Topbar"
import PackageBooking from "../tourPackage/components/packageBookingComponent/PackageBooking"
import PackageDetail from "../tourPackage/components/packageDetailComponent/PackageDetail"
import PackageReviews from "../tourPackage/components/packageReviewComponent/PackageReview"
import "./packageDetail.css"

function Detail() {
  return (
    <div>
        <Topbar/>
        <PackageBooking/>
        <PackageDetail/>
        <PackageReviews/>


    </div>
  )
}

export default Detail