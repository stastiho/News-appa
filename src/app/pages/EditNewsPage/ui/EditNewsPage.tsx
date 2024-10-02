import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { NewsItem } from '../types/newsItem';

const EditNewsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [news, setNews] = useLocalStorage<NewsItem[]>('news', []);
  const navigate = useNavigate();
  
  const currentNews = news.find(item => item.id === Number(id));

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const updatedNewsItem: NewsItem = {
      id: currentNews!.id,
      title: formData.get('title') as string,
      content: formData.get('content') as string,
    };
    const updatedNews = news.map(item =>
      item.id === updatedNewsItem.id ? updatedNewsItem : item
    );
    setNews(updatedNews);
    navigate('/');
  };

  if (!currentNews) return <div>Новость не найдена</div>;

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" defaultValue={currentNews.title} required />
      <textarea name="content" defaultValue={currentNews.content} required />
      <button type="submit">Обновить</button>
    </form>
  );
};

export default EditNewsPage;
