import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Produtos } from "./produto.model";

@Injectable()
export class ProdutoService {

    constructor(
        @InjectModel(Produtos)
        private produtoModel: typeof Produtos,
    ) { }

    async findAll(): Promise<Produtos[]> {
        return this.produtoModel.findAll();
    }

    async findByName(nome: string): Promise<Produtos[]> {
        return this.produtoModel.findAll({ where: { nome } });
    }

    async findOne(id: string): Promise<Produtos> {
        return this.produtoModel.findOne({ where: { id } });
    }

    async create(company: Produtos): Promise<Produtos> {
        return this.produtoModel.create(company);
    }

    async delete(id: string): Promise<void> {
        await this.produtoModel.destroy({ where: { id } });
    }

    async update(id: string, company: Produtos): Promise<[number, Produtos[]]> {
        return this.produtoModel.update(company, { where: { id }, returning: true });
    }

}