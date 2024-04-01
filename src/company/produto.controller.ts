import { Body, Controller, Get, Post, Put, Delete, HttpStatus, Param } from "@nestjs/common";
import { HttpException } from "@nestjs/common/exceptions/http.exception";
import {  ProdutoService } from './produto.service';

@Controller('company')
export class ProdutoController {
    constructor(
        private companyService: ProdutoService
    ) {}

    @Get()
    async findAll() {
        return this.companyService.findAll();
    }

    @Get(':id')
    async findOne(id: string) {
        return this.companyService.findOne(id);
    }

    // listar por nome 
    @Get('nome/:nome')    
    async findByName(@Param('nome') nome: string) {
        console.log(nome);        
        return this.companyService.findByName(nome);
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

    @Put(':id')
    async update(@Param('id') id: string, @Body() company) {
        console.log(company);
        console.log(id);

        try {
            const updatedCompany = await this.companyService.update(company, id);

            return {
                status: 'success',
                message: 'Company updated successfully',
                data: updatedCompany
            }
        } catch (error) {
            throw new HttpException('Error updating company: ' + error.message, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @Delete(':id')
    async delete(@Param('id') id: string){
        return this.companyService.delete(id);
    }
}