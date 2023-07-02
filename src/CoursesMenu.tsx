import React, { FC } from 'react';
import './CoursesMenu.scss';
import ReactDOM from 'react-dom';

interface Page {
  name: string;
  num: number;
  link:string;
}

interface MenuItemProps {
  page: Page;
}

const MenuItem: FC<MenuItemProps> = ({ page }) => (
  <li className={`c-list__item c-list__item--${page.num}`}>
    <a className="c-list__link" href={page.link}>{page.name}</a>
  </li>
);

const CoursesMenu: FC = () => {
  const pages: Page[] = [
    {name: 'Expanding Arrays and Objects', num: 1 , link:'/courses/courseSpread'},
    {name: 'TBA', num: 2, link:'#'},
    {name: 'TBA', num: 3, link:'#'},
    {name: 'TBA', num: 4 , link:'#'},
    
  ];

  return (
    <>
    <div className='title'>Begginer Courses</div>
    <div className="c-menu" >
      <ul className="c-list">
        {pages.map((page, index) => <MenuItem key={index} page={page}/>)}
      </ul>
    </div>
    </>
  );
};

export default CoursesMenu;
