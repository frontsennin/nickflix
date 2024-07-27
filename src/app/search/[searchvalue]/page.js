import SearchContent from "@/components/search-content";

 export default function Page({params}) {
  return <SearchContent searchValue={params.searchvalue}/>
}