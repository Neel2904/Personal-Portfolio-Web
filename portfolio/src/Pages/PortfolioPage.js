import React, {useState} from "react";

// Components
import Title from "../Components/Title";
import Categories from "../Components/Categories";
import MenuItems from "../Components/MenuItems";
import portfolios from "../Components/allportfolios";

const allCategories = ['All', ...new Set(portfolios.map(item=> item.category))];

function PortfolioPage() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(portfolios);

  const filter = (category) => {
    if(category === 'All'){
      setMenuItems(portfolios);
      return;
    }
    const filteredData = portfolios.filter((item)=>{
      return item.category === category;
    })
    setMenuItems(filteredData);
  }

  return (
    <div className="PortfolioPage">
      <div className="title">
        <Title title={"Portfolios"} span={"portfolios"} />
      </div>
      <div className="portfolios-data">
          <Categories filter={filter} categories={categories}/>
          <MenuItems menuItems={menuItems}/>
      </div>
    </div>
  );
}

export default PortfolioPage;
