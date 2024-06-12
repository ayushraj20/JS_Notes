/* 
App
<FaQ>
  searchBox -> (question)
  makeAPi to fetch all Faq
  <card data={data} ></card>
  10 faqs on page 1 
  pagination
  

  getAPi-> 50 most asked FAQ


  searchQuery = refund 
  data = 100 faqs
  data:[{question: 'refund', answer:'....'},]
  filteredData = data.filter((item)=>{
        let LowerCaseQuery = searchQuery.LowerCase()

        return item.question.toLowerCase().include(LowerCaseQuery)
    })

  
  count = 3 
  count-- 
  if(count) {
  showMOdal
  }

  
    filteredData.map(())
*/
