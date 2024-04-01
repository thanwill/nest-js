import { Body, Controller, Get, Post, Put, Delete, HttpStatus, Param } from "@nestjs/common";
import { HttpException } from "@nestjs/common/exceptions/http.exception";
import {  ProdutoService } from './produto.service';

@Controller('products')
export class ProdutoController {
    constructor(
        private productService: ProdutoService
    ) {}

    // funcao para gerar um COD PROD+TIMESTAMP
    private generateCode() : number {    
        return Math.floor(Math.random() * 1000000);
    }

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

    @Get(':id')
    async findOne(id: string) {
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

    // listar por nome 
    @Get('name/:name')    
    async findByName(@Param('name') nome: string) {
        
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

    // post com um array de produtos
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

    // Detalhes: 
    @Put(':id')    
    async update(@Param('id') id: string, @Body() company) {
        try {
            const response = await this.productService.update(id, company);

            if (response[0] == 0) {
                throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
            }

            return {
                status: 'success',
                message: 'Product updated successfully',
                data: response[1]
            }

        } catch (error) {
            throw new HttpException('Error updating product: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Delete(':id')
    async delete(@Param('id') id: string){
        try{
            await this.productService.delete(id);

            return {
                status: 'success',
                message: 'Product deleted successfully'
            }
        } catch (error) {
            throw new HttpException('Error deleting product: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // delete all
    @Delete()
    async deleteAll() {
        try {
            await this.productService.deleteAll();

            return {
                status: 'success',
                message: 'All products deleted successfully'
            }
        } catch (error) {
            throw new HttpException('Error deleting products: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}