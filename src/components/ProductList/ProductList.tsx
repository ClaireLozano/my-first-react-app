import { useState } from 'react';
import Input from '../ProductList/forms/Input';
import { CustomCheckbox } from '../ProductList/forms/CustomCheckbox';
import { ProductCategoryRow } from '../ProductList/products/ProductCategoryRow';
import { ProductRow } from '../ProductList/products/ProductRow';

const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragon Fruit' },
  { category: 'Fruits', price: '$1', stocked: false, name: 'Passion fruit' },
  { category: 'Vegetables', price: '$3', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$1', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$5', stocked: true, name: 'Peas' },
];
export function ProductList() {
  const [showStockedOnly, setShowStockedOnly] = useState(false);
  const [search, setSearch] = useState('');

  const visibleProducts = PRODUCTS.filter((product) => {
    if (!product.stocked && showStockedOnly) {
      return false;
    }

    if (!product.name.includes(search) && search) {
      return false;
    }

    return true;
  });

  return (
    <>
      <SearchBar
        showStockedOnly={showStockedOnly}
        onStockedOnlyChange={setShowStockedOnly}
        search={search}
        onSetSearch={setSearch}
      />
      <ProductTable products={visibleProducts} />
    </>
  );
}

function SearchBar({
  showStockedOnly,
  onStockedOnlyChange,
  search,
  onSetSearch,
}: any): JSX.Element {
  return (
    <>
      <Input placeholder="Search..." value={search} onChange={onSetSearch} />
      <br />
      <CustomCheckbox
        label="N'afficher que les produits en stock"
        id="search"
        checked={showStockedOnly}
        onChange={onStockedOnlyChange}
      />
    </>
  );
}

function ProductTable({ products }: any): JSX.Element {
  const rows = [];
  let lastCategory = null;

  for (const product of products) {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow name={product.category} />);
    }
    lastCategory = product.category;
    rows.push(<ProductRow key={product.name} product={product} />);
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
}
