import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import SEO from '../../components/SEO';
import { Container, ProductList, Product, ContentProduct, HeaderProduct, IconGroup, Header } from '../../styles/pages/Products/Products';
import { FaEdit, FaTrash, FaArrowLeft, FaPlus } from 'react-icons/fa';


interface IProduct {
    id: string,
    name: string,
    description: string,

}

// interface IHomeProps {
//     products: IProduct[];

// }


// Primeiro parÂmetro : importa modal delete apenas quando solicitado e não quando carrega a página
// Segundo parâmetro: feedback enquanto o componente é carregado
// ssr: false - faz com que o component seja renderizado pelo browser e não pelo servidor (node), dessa forma poderá ser utilizado sintaxes como document, window, navigator etc...
const DeleteModal = dynamic(
    () => import('../../components/DeleteModal'),
    { loading: () => <p>Carregando...</p>, ssr: false }
)

export default function Products() {
    const router = useRouter();
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    
    const [products, setProducts] = useState<IProduct[]>([]);
    const [productSelectedId, setProductSelectedId] = useState('');

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL_MOCK_PRODUCT}/products/`).then(response => {
            response.json().then(data => {
                setProducts(data);
            })
        })
    }, [isDeleteModalVisible])

    function handleOpenModalDelete(id: string) {
        setProductSelectedId(id);
        setIsDeleteModalVisible(true);
    }

    const handleGoCreateProduct = () => {
        router.push('/products/create')
    }
    
    return (
        <Container>
            <SEO
                title="Produtos"
                image="icon.jpg"
            />
            <Header>
                <a onClick={() => router.back()}><FaArrowLeft /></a>
                <button onClick={() => handleGoCreateProduct()}>Adicionar <FaPlus /></button>
            </Header>
            <ProductList>
                {products.map((product, index) => {
                    return (
                        
                        <Product key={product.id}>
                            <img src='https://source.unsplash.com/random/300x200?sig=${Math.random()}' alt="Imagem" />
                            <ContentProduct>

                                <HeaderProduct>
                                    <h2>{product.name}</h2>
                                    <IconGroup>
                                        <FaEdit onClick={() => router.push('products/' + product.id)}  />
                                        <FaTrash onClick={() => handleOpenModalDelete(product.id)} />
                                    </IconGroup>
                                </HeaderProduct>

                                <span>
                                    {product.description}
                                </span>
                            </ContentProduct>

                        </Product>
                    )
                })}
            </ProductList>

            {isDeleteModalVisible && (
                <DeleteModal productSelectedId={productSelectedId} setIsDeleteModalVisible={setIsDeleteModalVisible} />
            )}
        </Container>
    )
}


// Em situações que seja necessário a indexação do resultado da consulta em motores de busca
// a função abaixo cumpre esse papel, pois o browser renderiza o contéudo já em html, sem necessidade do js pra isso 
// por já ter sido feito antes pelo next. 
// Diferente do getStaticProps,a api é chamada toda vez que a rota for acessada

// export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
//     const response = await fetch('https://6195da7f74c1bd00176c6eed.mockapi.io/api/products');
//     const products = await response.json();

//     return {
//         props: {
//             products
//         }
//     }

// }



// Em páginas que seus conteúdos não precisem ser atualizados muito constantemente
// é recomendado utilizar função abaixo para ganho de performance, ele faz a chamada a api
// apenas uma vez tornando o site estático.
// A Props revalidate serve para realizar uma nova chamada na api em determinado intervalo
// de tempo(s). Exemplo: Uma rota recebe 1000 acessos por minuto em um cenário comum,
// no lugar de consumir a API as 1000 vezes, pode, por exemplo, colocar no valor de revalidate 10 (s), ou seja, 
// em um minuto irá consumir a API apenas 6 vezes, e ter os contéudos atualizados a cada 10 segundos.

// export const getStaticProps: GetStaticProps<IHomeProps> = async (context) => {

//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_MOCK_PRODUCT}/products`);
//     const products = await response.json();
//     return {
//         props: {
//             products
//         },
//         revalidate: 10
//     }
// }
