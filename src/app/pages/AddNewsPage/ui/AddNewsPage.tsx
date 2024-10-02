import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { NewsItem } from '../types/newsItem';

const AddNewsPage: React.FC = () => {
  const [news, setNews] = useLocalStorage<NewsItem[]>('news', []);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newNewsItem: NewsItem = {
      id: Date.now(),
      title: formData.get('title') as string,
      content: formData.get('content') as string,
    };
    setNews([...news, newNewsItem]);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Заголовок" required />
      <textarea name="content" placeholder="Содержимое" required />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddNewsPage;
