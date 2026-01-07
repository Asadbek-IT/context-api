import React, { useEffect } from "react";

const UserItem = ({ category, price, images, title }) => {
  // Меняем фон всей страницы при монтировании компонента
  useEffect(() => {
    document.body.style.backgroundColor = "#010409"; // Самый темный фон GitHub
    document.body.style.margin = "0";
    document.body.style.padding = "20px";
  }, []);

  const styles = {
    // Основной контейнер с использованием Flex
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      
      maxWidth: '650px',
      margin: '0 auto 16px auto',
      padding: '16px',
      
      backgroundColor: '#0d1117', // Цвет карточки
      border: '1px solid #30363d',
      borderRadius: '6px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    },
    
    // Левая часть: Текст
    infoSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
    },
    
    title: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#58a6ff',
      margin: 0,
      cursor: 'pointer',
    },
    
    categoryTag: {
      display: 'inline-block',
      fontSize: '12px',
      color: '#8b949e',
      border: '1px solid #30363d',
      borderRadius: '20px',
      padding: '0 7px',
      width: 'fit-content',
      marginTop: '4px',
    },

    // Правая часть: Цена и Изображение
    sideSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    
    price: {
      fontSize: '14px',
      color: '#7ee787', // Зеленый цвет коммитов
      fontWeight: '500',
    },
    
    img: {
      width: '48px',
      height: '48px',
      borderRadius: '6px',
      objectFit: 'cover',
      border: '1px solid #30363d',
      backgroundColor: '#161b22',
    }
  };

  return (
    <div style={styles.container}>
      {/* Слева: Название и категория */}
      <div style={styles.infoSection}>
        <h1 style={styles.title}>{title}</h1>
        <div style={styles.categoryTag}>{category}</div>
      </div>

      {/* Справа: Цена и Картинка */}
      <div style={styles.sideSection}>
        <span style={styles.price}>{price}</span>
        <img style={styles.img} src={images[0]} alt={title} />
      </div>
    </div>
  );
};

export default UserItem;