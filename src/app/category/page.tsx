import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import CategoryBanner from "@/app/components/categoryblocks/Categorybanner";
import OtherCategories from "../components/categoryblocks/OtherCategories";

export default function CategoryPage(props: any) {
  const slug = props?.params?.slug || "";

  const filterRaw = props?.searchParams?.filter;
  const filter =
    typeof filterRaw === "string"
      ? filterRaw
      : Array.isArray(filterRaw)
      ? filterRaw[0]
      : "all";

  return (
    <div>
      <Header />
      <main>
        <CategoryBanner category={slug} />
       
        <div className="">
            <OtherCategories/>
        </div>
      </main>
      <Footer />
    </div>
  );
}
