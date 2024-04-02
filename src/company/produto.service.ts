import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Produtos } from "./produto.model";
import { Op } from 'sequelize';

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
        return await this.produtoModel.findAll({
            where: {
                nome: {
                    [Op.like]: '%' + nome + '%'
                    // nome
                }
            }
        });
    }

    async findByName2(searchName : string ) : Promise <Produtos[]> {
        return await this.produtoModel.findAll({
            include: [{
                model: Produtos,
                where:{
                    name: searchName
                }
            }]
            
        })
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

    // delete all
    async deleteAll2(): Promise<void> {
        await this.produtoModel.destroy({ where: {} });
    }

    async update(id: string, company: Produtos): Promise<[number, Produtos[]]> {
        return this.produtoModel.update(company, { where: { id }, returning: true });
    }

    // post com um array de produtos
    async createMany(products: Produtos[]): Promise<Produtos[]> {
        return this.produtoModel.bulkCreate(products);
    }

}