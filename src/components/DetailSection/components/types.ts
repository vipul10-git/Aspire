export type IconTypeMapperType={
    [k:string]:{
        icon :string ,
        bgcolor:string
    }
}

type DataType = {
    type: string;
    transactionType: string;
    amount: number;
    date: string;
    name: string;
};

export interface AccordianProps {
    icon: string;
    title: string;
    data: DataType[];
    isOpen: boolean;
    callBackOpen?: (isOpen: boolean) => void;
}

export type CardType = {
    name: string;
    cardNumber: string;
    ex: string;
    cvv: string;
    freeze:boolean
  };