import { Body, Controller, Get, Post, Put, Delete, HttpStatus, Param } from "@nestjs/common";
import { HttpException } from "@nestjs/common/exceptions/http.exception";
import {  ProdutoService } from './produto.service';

@Controller('products')
export class ProdutoController {
    constructor(
        private companyService: ProdutoService
    ) {}

    @Get()
    async findAll() {
        try {
            const response = await this.companyService.findAll();

            if (response.length == 0) {
                throw new HttpException('Products not found', HttpStatus.NOT_FOUND);
            }

            return {
                status: 'success',
                data: response
            }
        } catch (error) {
            throw new HttpException('Error finding products: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get(':id')
    async findOne(id: string) {
        try {
            const response = await this.companyService.findOne(id);

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
        
        const response = await this.companyService.findByName(nome);

        if (response.length == 0) {
            throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
        }

        try {
            return {
                status: 'success',
                data: response
            }
        } catch (error) {
            throw new HttpException('Error finding company: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
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
        
        company.id = Math.floor(Math.random() * 1000);

        try {
            const newCompany = await this.companyService.create(company);

            return {
                status: 'success',
                message: 'Company created successfully',
                data: newCompany
            }

        } catch (error) {
            throw new HttpException('Error creating company: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // Detalhes: 
    @Put(':id')    
    async update(@Param('id') id: string, @Body() company) {
        try {
            const response = await this.companyService.update(id, company);

            if (response[0] == 0) {
                throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
            }

            return {
                status: 'success',
                message: 'Company updated successfully',
                data: response[1]
            }

        } catch (error) {
            throw new HttpException('Error updating company: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Delete(':id')
    async delete(@Param('id') id: string){
        try{
            await this.companyService.delete(id);

            return {
                status: 'success',
                message: 'Company deleted successfully'
            }
        } catch (error) {
            throw new HttpException('Error deleting company: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}