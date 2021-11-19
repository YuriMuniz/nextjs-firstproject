import { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';
import { ModalBlock, ModalContainer, ModalBody, ModalTitle, ModalHeader, Button } from '../styles/components/DeleteModal';

interface IDeleteModalProps{
    
        productSelectedId: string,
        setIsDeleteModalVisible: Dispatch<SetStateAction<boolean>>
    
    
}

export default function DeleteModal({productSelectedId , setIsDeleteModalVisible}: IDeleteModalProps ) {

    const handleDelete = async() => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_MOCK_PRODUCT}/products/${productSelectedId}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });
            const data = response.json();
            console.log(data);
            toast("Produto excluído");
            setIsDeleteModalVisible(false);
        }catch(err){
            console.log(err);
            toast("Erro ao excluir produto");
        }
    }
    return (
        <ModalBlock>
            <ModalContainer>
                <ModalTitle>
                    Deseja realmente excluir esse produto?
                </ModalTitle>
                <ModalBody>
                    <Button onClick = {() => handleDelete()}>
                        Sim
                    </Button>
                    <Button onClick={() => setIsDeleteModalVisible(false)}>
                        Não
                    </Button>
                </ModalBody>
            </ModalContainer>

        </ModalBlock>
    )
}