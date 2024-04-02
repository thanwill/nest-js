import { Body, Controller, Get, Post, Put, Delete, HttpStatus, Param, Query } from "@nestjs/common";
import { HttpException } from "@nestjs/common/exceptions/http.exception";
import { ProdutoService } from './produto.service';
import { Produtos } from './produto.model';

@Controller('products')
export class ProdutoController {
    constructor(
        private productService: ProdutoService
    ) { }

    // Função para gerar um código aleatório
    private generateCode(): number {
        return Math.floor(Math.random() * 1000000);
    }

    // Rota para buscar todos os produtos
    @Get()
    async findAll() {
        try {
            const response = await this.productService.findAll();

            if (response.length == 0) {
                throw new HttpException('Products not found', HttpStatus.NOT_FOUND);
            }


            return {
                status: 'success',
                count: response.length,
                data: response
            }
        } catch (error) {
            throw new HttpException('Error finding products: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Rota para buscar um produto por nome usando query
    @Get('search')
    async search(@Query('nome') nome: string): Promise<Produtos[]> {
        const response = await this.productService.findByNameQuery(nome);

        if (response.length == 0) {
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
        }

        return response;
    }

    // Rota para buscar um produto por id usando parametro
    @Get(':id')
    async findOne(@Param('id') id: string) {
        try {
            const response = await this.productService.findOne(id);

            if (!response) {
                throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
            }

            return {
                status: 'success',
                data: response
            }
        } catch (error) {
            throw new HttpException('Error finding product: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Rota para buscar um produto por nome usando parametro
    @Get('name/:name')
    async findByNameParam(@Param('name') nome: string) {

        const response = await this.productService.findByName(nome);

        if (response.length == 0) {
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
        }

        try {
            return {
                status: 'success',
                data: response
            }
        } catch (error) {
            throw new HttpException('Error finding product: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    // Rota para criar um produto
    @Post()
    async create(@Body() company) {
        if (!company.nome || !company.empresa || !company.descricao || !company.quantidade || !company.marca || !company.valor) {
            return {
                status: 'error',
                message: 'Missing data'
            }
        }

        company.id = this.generateCode();

        try {
            const newCompany = await this.productService.create(company);

            return {
                status: 'success',
                message: 'Product created successfully',
                data: newCompany
            }

        } catch (error) {
            throw new HttpException('Error creating product: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Rota para criar varios produtos
    @Post('many')
    async createMany(@Body() products) {
        if (!products.length) {
            return {
                status: 'error',
                message: 'Missing data'
            }
        }

        products.forEach(product => {
            product.id = this.generateCode();
        });

        try {
            const newProducts = await this.productService.createMany(products);

            return {
                status: 'success',
                message: 'Products created successfully',
                data: newProducts
            }

        } catch (error) {
            throw new HttpException('Error creating products: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Rota para atualizar um produto
    @Put(':id')
    async update(@Param('id') id: string, @Body() company) {


        // pesquisar se o produto existe 
        const product = await this.productService.findOne(id);

        if (!product) {
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
        }

        try {
            const response = await this.productService.update(id, company);

            return {
                status: 'success',
                message: 'Product updated successfully',
                data: response[1]
            }

        } catch (error) {
            throw new HttpException('Error updating product: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Rota para deletar varios produtos
    @Delete('many')
    async deleteMany(@Body() ids) {
        if (!ids.length) {
            return {
                status: 'error',
                message: 'Missing data'
            }
        }

        try {
            const response = await this.productService.deleteMany(ids);

            return {
                status: 'success',
                message: 'Products deleted successfully',
                data: response
            }
        } catch (error) {
            throw new HttpException('Error deleting products: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Rota para deletar um produto
    @Delete(':id')
    async delete(@Param('id') id: string) {
        try {


            const product = await this.productService.findOne(id);

            if (!product) {
                throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
            }

            const response = await this.productService.delete(id);

            return {
                status: 'success',
                message: 'Product deleted successfully',
                data: response
            }

        } catch (error) {
            throw new HttpException('Error deleting product: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}