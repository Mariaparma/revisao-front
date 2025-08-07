import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.productcard} data-category={product.category}>
      <div className={styles.productimage}>
          <img
        src={product.image}
        alt={product.title}
        width={250}
        height={160}
        style={{ borderRadius: '8px' }}
    />
      </div>
      <div className={styles.producttitle}>{product.title}</div>
      <div className={styles.productprice}>R$ {product.price}</div>
      <div className={styles.productdescription}>{product.description}</div>
      <div className={styles.productrating}>
        <span className={styles.stars}>⭐⭐⭐⭐⭐</span>
        <span>(4.8) - 1.234 avaliações</span>
      </div>
    </div>
  );
};

export default ProductCard;