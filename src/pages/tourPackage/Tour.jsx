import "./tour.css";
import PackageList from "../tourPackage/components/packageListComponet/PackageList.jsx";
import Topbar from "../homepage/components/topbarComponent/Topbar.jsx";
import PackageDetail from "./components/packageDetailComponent/PackageDetail.jsx";
import PackageBooking from "./components/packageBookingComponent/PackageBooking.jsx";
import PackageSimilar from "./components/packageSimilarComponent/PackageSimilar.jsx";
import PackageReviews from "./components/packageReviewComponent/PackageReview.jsx";
import Footer from "../homepage/components/footerComponent/Footer.jsx";

function Tour() {
  return (
    <div>
      <Topbar />
      <PackageList />
      <PackageReviews/>
      <Footer/>
      
    </div>
  );
}

export default Tour;
