import SEO from '../../components/SEO';
import { useRouter } from 'next/router';
import { useState } from 'react'
import { Container, Header, Input, Button } from '../../styles/pages/ValidateDate/Validate';

import { FaArrowLeft, FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';



export default function Date() {
    const router = useRouter();
    const [date, setDate] = useState();
    const [loading, setLoading] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        //console.log(value)
        setDate(value);
    };

    const handleValidate = async () => {
        setLoading(true);
        try {
            const response = await fetch(process.env.NEXT_PUBLIC_API_URL_MOCK_DATE);
            const data = await response.json();
            const dateFormatted = format(parseISO(date), "dd-MM-yyyy");

            const result = data[0].date.filter(function (item) {
                if (dateFormatted === item.data) {
                    return true;
                } else {
                    return false;
                }
            })
            
            if (result.length > 0) {
                toast('Data indísponivel.')
            } else {
                toast('Data disponível.')
            }
            setLoading(false);
        } catch (err) {
            console.log(err);
            toast('Erro: ' + err);
            setLoading(false);
        }
    }
    return (
        <Container>
            <SEO
                title="Validar Data"
                image="icon.jpg"
                shouldExcludeTitleSuffix
            />
            <Header>
                <a onClick={() => router.back()}>
                    <FaArrowLeft />
                </a>
                <h3>
                    Validar Data

                </h3>
            </Header>
            <Input placeholder="Data" type="date" name="date" onChange={handleInputChange} value={date} />

            <Button onClick={() => handleValidate()} >
                {!loading ? (
                    <span>Validar</span>
                ) : (
                    <FaSpinner />
                )}


            </Button>
        </Container>

    )
}