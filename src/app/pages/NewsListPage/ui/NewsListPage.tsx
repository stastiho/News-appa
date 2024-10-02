import React from 'react';
import { Link } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { NewsItem } from '../types/newsItem';

const NewsListPage: React.FC = () => {
  const [news, setNews] = useLocalStorage<NewsItem[]>('news', []);

  const deleteNews = (id: number) => {
    const updatedNews = news.filter(item => item.id !== id);
    setNews(updatedNews);
  };

  return (
    <div>
      <h1>Новости</h1>
      <Link to="/add">Добавить новость</Link>
      <ul>
        {news.map(item => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <Link to={`/edit/${item.id}`}>Редактировать</Link>
            <button onClick={() => deleteNews(item.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsListPage;
