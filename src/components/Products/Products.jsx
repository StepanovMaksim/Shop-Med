import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Products.module.css";

import { robeObj } from "../Robe/Robe";


const Products = ({ title, style = {}, products = [], amount }) => {
  const list = robeObj;
  console.log(robeObj[1].category.image)

  return (
		<section className={styles.products} style={style}>
			{title && <h2>{title}</h2>}

			<div className={styles.list}>
				{list.map(
					({
						id,
						category: { image: images },
						title,
						category: { name: cat },
						price,
					}) => (
						<Link to={`/products/${id}`} key={id} className={styles.product}>

							<div className={styles.wrapper}>
								<img src={images} />
								<h3 className={styles.title}>{title}</h3>
								<div className={styles.cat}>{cat}</div>
								<div className={styles.price}>{price} руб.</div>
							</div>
						</Link>
					)
				)}
			</div>
		</section>
	)
};

export default Products;
