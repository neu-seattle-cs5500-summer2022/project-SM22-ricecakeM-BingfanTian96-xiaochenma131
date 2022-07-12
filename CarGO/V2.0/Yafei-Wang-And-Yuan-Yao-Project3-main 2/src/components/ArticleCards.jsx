// import React from "react";
// import { Button } from "react-bootstrap";
// import ArticleCard from "./ArticleCard";
// import CarCard from "./CarCard";
// import SearchForm from "./SearchForm";

// export default function ArticleCards(props) {
//   // const articles = props.articles;
//   // const articleComponent = [];
//   const cars = props.cars;
//   const carComponent = [];
//   /**
//   for (let article of articles) {
//     articleComponent.push(
//       <div class='article-card'>
//         <ArticleCard article={article} />
//         <a href={"/articles/" + article._id}>
//           <Button size="sm" className="custom-btn">View the article</Button>
//         </a>
//       </div>
//     )
//   }
//   */
//   for (let car of cars) {
//     carComponent.push(
//       <CarCard car={car} />
//     )
//   }
//   carComponent.reverse();
//   // articleComponent.reverse();

//   return (
//     <div>
//       <SearchForm />
//       {carComponent}
//     </div>
//   )
// }