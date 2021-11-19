//import { GetStaticPaths, GetStaticProps } from 'next';
import { useState, useEffect } from 'react'
import SEO from '../../components/SEO';
import { Container, Header, Input, Button } from '../../styles/pages/Products/Form';
import { FaArrowLeft, FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';


interface IProduct {
    id: string,
    name: string,
    description: string
}

// interface IEditProductProps {
//     product: IProduct
// }

export default function EditProduct() {
    const router = useRouter();

 
    const initialInfoState = {
        id: '',
        name: '',
        description: '',

    };

    const [loading, setLoading] = useState(false);
    const [newInfo, setNewInfo] = useState<IProduct>(initialInfoState);

    useEffect(() => {
        // if (!router.isReady) {
        //     return;
        // }
        if (Object.keys(router.query).length > 0) {
            fetch(`${process.env.NEXT_PUBLIC_API_URL_MOCK_PRODUCT}/products/${router.query.id}`).then(response => {
                response.json().then(data => {
                    setNewInfo(data);
                }).catch(function (error) {
                    console.log(error);
                })
            })
        }

    }, [router.query])

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewInfo({ ...newInfo, [name]: value });
    };



    // if(router.isFallback){
    //     return <p>Carregando...</p>
    // }
    // return <h1>{router.query.id}</h1>


    const handleEdit = async () => {
        setLoading(true);
        console.log(newInfo)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_MOCK_PRODUCT}/products/${router.query.id}`, {
                method: "PUT",
                body: JSON.stringify(newInfo),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            const data = await response.json();
            toast("Produto alterado com sucesso. ")
            console.log(data);
            setLoading(false);
            router.push('/products');

        } catch (err) {
            console.log(err);
            toast("Erro ao editar produto.")
            setLoading(false);
        }
    }

    return (
        <Container>
            <SEO
                title="Editar Produto"
                image="icon.jpg"
            />
            <Header>
                <a onClick={() => router.back()}>
                    <FaArrowLeft />
                </a>
                <h3>
                    Editar Produto

                </h3>
            </Header>
            <Input placeholder="Nome" name="name" onChange={handleInputChange} value={newInfo.name} />
            <Input placeholder="Descrição" name="description" onChange={handleInputChange} value={newInfo.description} />
            <Button onClick={() => handleEdit()} >
                {!loading ? (
                    <span>Editar</span>
                ) : (
                    <FaSpinner />
                )}


            </Button>
        </Container>

    )
}


// Páginas dinâmicas renderizadas de forma estática

// Para gerar página estática a partir de parâmetros, é necessário carregar na hora do 
// build os valores ou alguns valores já existentes no banco de dados
// Para que valores adicionados recentemente sejam reconhecidos, não precisa dar um novo build,
// apenas setar o atributo fallback para true
// Exemplo: o parâmetro em questão é o nome do produto, foi realizado o build e ainda não
// existe o produto "mesa", após isso é adicionado esse produto, ao acessar a rota product/mesa com fallback definido como false
// vai retornar uma página 404 por esse produto ainda não ter sido adicionado na hora do build
// com o fallback true, o next consulta a função getStaticProps com o novo parâmetro que ainda não
// foi gerado a página estática, gerando a partir dai . Detalhe: só a primeira chamada é necessária para as que os demais acessos
// ja sejam feito de forma estática. \_/
// export const getStaticPaths: GetStaticPaths = async () => {
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_MOCK_PRODUCT}/products`);
//     const products = await response.json();

//     const paths = products.map(product => {
//         return {
//             params: { id: product.id }
//         }
//     })

//     return {
//         //paths: [],
//         paths,
//         fallback: true
//     }
// }


// export const getStaticProps: GetStaticProps<IEditProductProps> = async (context) => {
//     const { id } = context.params;
//     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_MOCK_PRODUCT}/products/${id}`);
//     const product = await response.json();
//     return {
//         props: {
//             product
//         },
//         revalidate: 10
//     }
// }