function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    )
}

function ProductRow({ product }) {
    const name = product.stocked ? product.name : <span style={{ color: 'red' }}>{ product.name}</span>;
    return (
        <tr>
            <td>{ name }</td>
            <td>{ product.price }</td>
        </tr>
    );
}

function ProductTable({ products }) {
    const rows = [];
    let lastCategory;
    products.forEach((products) => {
        if (products.category !== lastCategory)
        {
            rows.push(
                <ProductCategoryRow category={products.category} key={products.category} />
            );
        }
        rows.push(
            <ProductRow product={products} key={products.name} />
        )
        lastCategory = products.category;
    });
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function SearchBar() {
    return (
        <form>
            <input type="text" placeholder="Search..." />
            <label>
                <input type="checkbox" />
                {' '}
                Only show products in stock
            </label>
        </form>
    );
}

function FilterableProductTable({ products })
{
    return (
        <>
            <SearchBar />
            <ProductTable products={products}/>
        </>
    );
}

const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];


export default function App() {
    return <FilterableProductTable products={PRODUCTS} />;
}