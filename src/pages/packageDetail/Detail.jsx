
import Footer from "../homepage/components/footerComponent/Footer"
import Topbar from "../homepage/components/topbarComponent/Topbar"
import PackageDetail from "../tourPackage/components/packageDetailComponent/PackageDetail"
import PackageReviews from "../tourPackage/components/packageReviewComponent/PackageReview"
import PackageSimilar from "../tourPackage/components/packageSimilarComponent/PackageSimilar"
import "./packageDetail.css"

function Detail() {
  return (
    <div>
        <Topbar/>
        <PackageDetail/>
        <PackageSimilar/>
        <PackageReviews/>
        <Footer/>


    </div>
  )
}

export default Detail