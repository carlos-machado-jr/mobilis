import { Veiculos } from './veiculos';
export interface Proprietarios {
    id: String;
    nome: String;
    email: String;
    nip: String;
    cnh: String;
    setor: String;
    posto: String;
    cartao: String;
    veiculos: Veiculos[];
    
}
