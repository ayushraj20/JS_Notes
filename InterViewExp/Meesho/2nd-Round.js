/* 

What is the use of 'null' if we already have 'undefined' in JS ??

******************************************************************************
You want to show user an onboarding Screen for the first 3 times,
Where will you store the count variable (localStorage, cookies, redux, DB) ??

  count = 3 
  count-- 
  if(count) {
  showMOdal
  }

******************************************************************************
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


    filteredData.map(())
*/
