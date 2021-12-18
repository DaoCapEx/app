import Models from '../model/index';

/**
 *  This is a base ModelService class for every other ModelService. 
 */
export default class ModelService {

    static modelType = null;

    static #precheck() {
        if (this.modelType === null) {
            throw new Error("this.modelType is null");
        }

        if (Models[modelType] === null) {
            throw new Error(`modelType '${this.modelType}' is invalid. modelType should be any of these: ${Models.keys()}`);
        }
    }

    
    static async isValid(data){
        return await this.#isValid(data);
    }

    static async #isValid(data) {
        
        if (!data) {
            throw new Error("data is null");
        }

        return true; 
    }

    static async create(data){
        return await this.#create(data);
    }

    static async #create(data) {

        this.#precheck();
    
        const result = this.#isValid(data);

        if (!result) {
            throw new Error("data is not valid");
        }

        const instance = Models[modelType].build(data);
        return await instance.save();
    }

    static async update(data){
        return await this.#update(data);
    }

    static async #update(data) {
        this.#precheck();
        const result = this.#isValid(data);

        if (!result) {
            throw new Error("data is not valid");
        }

        return await Models[modelType].update(
            data,
            { where: { _id: data._id } }
        )
    }

    static async findById(data){
        return await this.#findById(data);
    }

    static async #findById(id) {
        this.#precheck();
        return await Models[modelType].findByPk(id);
    }

    static async findOne(data){
        return await this.#findOne(data);
    }

    static async #findOne(query){
        this.#precheck();
        return await Models[modelType].findOne({ where: query });
    }

    static async find(data){
        return await this.#find(data);
    }

    static async #find(query){
        this.#precheck();
        return await Models[modelType].find({ where: query });
    }

    static async findAll(data){
        return await this.#findAll(data);
    }

    static async #findAll(){
        this.#precheck();
        return await Models[modelType].findAll();
    }

    static async count(data){
        return await this.#count(data);
    }

    static async #count(query){
        this.#precheck();
        return await Models[modelType].count({where: query});
    }
}