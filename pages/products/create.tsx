import { useRouter } from 'next/router';
import { useState } from 'react';
import SEO from '../../components/SEO';
import { FaArrowLeft, FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Container, Header, Input, Button } from '../../styles/pages/Products/Form';

export default function CreateProduct() {
    const router = useRouter();

    const initialInfoState = {
        name: "",
        description: "",

    };

    const [newInfo, setNewInfo] = useState(initialInfoState);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewInfo({ ...newInfo, [name]: value });
    };

    const handleCreate = async () => {
        

        if(newInfo.name === ''){
            toast("Campo nome obrigatório");
            return;
        }
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_MOCK_PRODUCT}/products`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newInfo),
            })
            const content = await response.json();
            console.log(content);
            setNewInfo(initialInfoState);
            setLoading(false);
            toast("Produto criado com sucesso");
        } catch (err) {
            console.log(err);
            setNewInfo(initialInfoState);
            setLoading(false);
            toast("Erro ao criar produto");
        }


    }
    return (
        <Container>
            <SEO
                title="Novo Produto"
                image="icon.jpg"
                shouldExcludeTitleSuffix
            />
            <Header>
                <a onClick={() => router.back()}>
                    <FaArrowLeft />
                </a>
                <h3>
                    Novo Produto
                    
                </h3>
            </Header>
            <Input placeholder="Nome" name="name" onChange={handleInputChange} value={newInfo.name} />
            <Input placeholder="Descrição" name="description" onChange={handleInputChange} value={newInfo.description} />
            <Button onClick={() => handleCreate()} >
                {!loading ? (
                    <span>Criar</span>
                ) : (
                    <FaSpinner />
                )}


            </Button>
        </Container>

    )
}