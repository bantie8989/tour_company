import "./tour.css";
import PackageList from "../tourPackage/components/packageListComponet/PackageList.jsx";
import Topbar from "../homepage/components/topbarComponent/Topbar.jsx";
import PackageDetail from "./components/packageDetailComponent/PackageDetail.jsx";
import PackageBooking from "./components/packageBookingComponent/PackageBooking.jsx";
import PackageSimilar from "./components/packageSimilarComponent/PackageSimilar.jsx";
import PackageReviews from "./components/packageReviewComponent/PackageReview.jsx";

function Tour() {
  return (
    <div>
      <Topbar />
      <PackageList />
      <PackageDetail/>
      <PackageBooking/>
      <PackageSimilar/>
      <PackageReviews/>
    </div>
  );
}

export default Tour;
