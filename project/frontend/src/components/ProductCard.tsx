import React from 'react';
import { Card, Button, Rate, Tag, Space } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Product } from '../types';
import '../styles/ProductCard.css';

interface ProductCardProps {
  product: Product;
  onSelect?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => {
  const handleAddToCart = () => {
    if (onSelect) {
      onSelect(product);
    }
  };

  return (
    <Card
      hoverable
      cover={<img alt={product.name} src={product.image} />}
      className="product-card"
    >
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="product-meta">
          <Rate disabled defaultValue={product.rating} />
          <span className="reviews">({product.reviews} reviews)</span>
        </div>

        <div className="product-tags">
          {product.tags.map((tag) => (
            <Tag key={tag} color="blue">
              {tag}
            </Tag>
          ))}
        </div>

        <div className="product-price">
          <span className="price">${product.price.toFixed(2)}</span>
          <span className="stock">In Stock: {product.stock}</span>
        </div>

        <Button
          type="primary"
          icon={<ShoppingCartOutlined />}
          onClick={handleAddToCart}
          disabled={product.stock === 0}
        >
          Add to Cart
        </Button>
      </div>
    </Card>
  );
};

export default ProductCard; 