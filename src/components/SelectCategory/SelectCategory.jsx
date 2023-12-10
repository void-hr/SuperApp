import './selectcategory.css'
import action from '../../assets/images/action.png'
import drama from '../../assets/images/drama.png'
import romance from '../../assets/images/romance.png'
import thriller from '../../assets/images/thriller.png'
import western from '../../assets/images/western.png'
import horror from '../../assets/images/horror.png'
import fantasy from '../../assets/images/fantasy.png'
import music from '../../assets/images/music.png'
import fiction from '../../assets/images/fiction.png'
import caution from '../../assets/warning.svg'
import { useEffect, useState } from 'react'
import CategoryTag from './CategoryTag'
import { useNavigate } from 'react-router-dom'



const data = [
    {
        id: 1,
        title: 'Action',
        color: '#FF5209',
        image: action
    },
    {
        id: 2,
        title: 'Drama',
        color: '#D7A4FF',
        image: drama
    },
    {
        id: 3,
        title: 'Romance',
        color: '#11B800',
        image: romance
    },
    {
        id: 4,
        title: 'Thriller',
        color: '#84C2FF',
        image: thriller
    },
    {
        id: 5,
        title: 'Western',
        color: '#902500',
        image: western
    },
    {
        id: 6,
        title: 'Horror',
        color: '#7358FF',
        image: horror
    },
    {
        id: 7,
        title: 'Fantasy',
        color: '#FF4ADE',
        image: fantasy
    },
    {
        id: 8,
        title: 'Music',
        color: '#E61E32',
        image: music
    },
    {
        id: 9,
        title: 'Fiction',
        color: '#6CD061',
        image: fiction
    },]

    const SelectCategory = () => {
        const navigate = useNavigate();
        const [category, setCategory] = useState([]); 
        const [categoryError, setCategoryError] = useState(true); 

        const handleClick = (elem) => {
          let clickedCat;
          if (elem.target.nodeName === 'IMG' || elem.target.nodeName === 'P') {
            clickedCat = elem.target.parentNode.firstChild.innerText;
          } else {
            clickedCat = elem.target.firstChild.innerText;
          }
      
          if (category.includes(clickedCat)) {
            const newCategory = category.filter((cat) => cat !== clickedCat);
            setCategory(newCategory);
          } else {
            setCategory((prev) => [...prev, clickedCat]);
          }
        };

        useEffect(()=> {
          localStorage.setItem('categories', category)
        }, [category])
      
       const handleSubmit = () => {
        if(category.length >=3) {
            navigate('/')
        }
       }
      
        return (
          <div className='outer_category_container'>
            <div className='left_category_container'>
              <div className='logo'>
                <p className='logo_text'>Super App</p>
              </div>
              <p className='choose_title'>Choose your entertainment category</p>
              <div className='chip_container'>
                <CategoryTag category={category} setCategory={setCategory} setCategoryError={setCategoryError} />
              </div>
             {categoryError && <div className='cat_warning'>
                <img src={caution} alt="" />
                Minimum 3 category required
              </div>}
            </div>
            <div className='right_category_container'>
              {data.map((elem) => (
                <div
                  key={elem.id}
                  className="cat_card"
                  style={{
                    border: category.includes(elem.title) ? '2px solid #11B800' : '2px solid transparent', background: elem.color
                  }}
                  onClick={(elem) => handleClick(elem)}
                >
                  <p>{elem.title}</p>
                  <img src={elem.image} alt="" />
                </div>
              ))}
             {!categoryError && <button className='next_page' onClick={()=> handleSubmit()}>Next Page</button>}
            </div>
          </div>
        );
      };
      
      export default SelectCategory;
