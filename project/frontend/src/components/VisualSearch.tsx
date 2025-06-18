import React, { useState, useRef } from 'react';
import { Button, Card, Input, Select, Space, Upload, message, Spin } from 'antd';
import { UploadOutlined, SearchOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Product } from '../types';
import ProductCard from './ProductCard';

const { Option } = Select;

interface VisualSearchProps {
  onProductSelect?: (product: Product) => void;
}

const VisualSearch: React.FC<VisualSearchProps> = ({ onProductSelect }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>('');
  const [priceRange, setPriceRange] = useState<{ min?: number; max?: number }>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async (imageData: string) => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8000/api/visual-search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          image: imageData,
          category: category || undefined,
          minPrice: priceRange.min,
          maxPrice: priceRange.max,
        }),
      });

      if (!response.ok) {
        throw new Error('Search failed');
      }

      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      message.error('Failed to perform visual search');
      console.error('Visual search error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload: UploadProps['customRequest'] = async ({ file }) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const base64Image = e.target?.result as string;
      handleSearch(base64Image);
    };
    reader.readAsDataURL(file as Blob);
  };

  return (
    <div className="visual-search">
      <Card title="Visual Search" className="mb-4">
        <Space direction="vertical" style={{ width: '100%' }} size="large">
          <Space>
            <Upload
              accept="image/*"
              showUploadList={false}
              customRequest={handleImageUpload}
            >
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
            <Select
              placeholder="Category"
              style={{ width: 120 }}
              onChange={setCategory}
              allowClear
            >
              <Option value="electronics">Electronics</Option>
              <Option value="clothing">Clothing</Option>
              <Option value="books">Books</Option>
            </Select>
            <Input
              placeholder="Min Price"
              type="number"
              style={{ width: 120 }}
              onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
            />
            <Input
              placeholder="Max Price"
              type="number"
              style={{ width: 120 }}
              onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
            />
          </Space>

          {loading ? (
            <div className="text-center">
              <Spin size="large" />
              <p>Searching for similar products...</p>
            </div>
          ) : (
            <div className="product-grid">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={onProductSelect}
                />
              ))}
            </div>
          )}
        </Space>
      </Card>
    </div>
  );
};

export default VisualSearch; 