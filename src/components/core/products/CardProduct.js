import React from "react";

export default function ProductCard() {
  return (
    <Card>
      <ImageProduct src="https://tuchacrita.pe/517-home_default_2x/choclo-x-und.jpg" />
      <ContentProduct>
        <h4>Choclo Peruano 3*4 </h4>
        <p className="description">
          quedando esencialmente igual al original. Fue popularizado en los 60s
          con la creación de las hojas "Letraset"
        </p>
        <p className="price">
          Precio : <span>15 soles</span>
        </p>
        <Button>Anadir al carrito</Button>
      </ContentProduct>
    </Card>
  );
}

const ImageProduct = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const ContentProduct = styled.div`
  padding-bottom: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .description {
    font-size: 0.8rem;
  }

  .price {
    font-size: 0.9rem;
    span {
      font-weight: bold;
    }
  }
`;
