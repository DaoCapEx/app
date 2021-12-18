import Models from '../model/index';

/**
 *  This is a base ModelService class for every other ModelService.
 */
export default class ModelService {
    static modelType = null;

    static _precheck() {
        if (this.modelType === null) {
            throw new Error('this.modelType is null');
        }

        if (Models[this.modelType] === null) {
            throw new Error(
                `modelType '${
                    this.modelType
                }' is invalid. modelType should be any of these: ${Models.keys()}`
            );
        }
    }

    static async isValid(data) {
        return await this._isValid(data);
    }

    static async _isValid(data) {
        if (!data) {
            throw new Error('data is null');
        }

        return true;
    }

    static async create(data) {
        return await this._create(data);
    }

    static async _create(data) {
        this._precheck();

        const result = this._isValid(data);

        if (!result) {
            throw new Error('data is not valid');
        }

        const instance = Models[this.modelType].build(data);
        return await instance.save();
    }

    static async update(data) {
        return await this._update(data);
    }

    static async _update(data) {
        this._precheck();
        const result = this._isValid(data);

        if (!result) {
            throw new Error('data is not valid');
        }

        return await Models[this.modelType].update(data, {
            where: { _id: data._id },
        });
    }

    static async findById(data) {
        return await this._findById(data);
    }

    static async _findById(id) {
        this._precheck();
        return await Models[this.modelType].findByPk(id);
    }

    static async findOne(data) {
        return await this._findOne(data);
    }

    static async _findOne(query) {
        this._precheck();
        return await Models[this.modelType].findOne({ where: query });
    }

    static async find(data) {
        return await this._find(data);
    }

    static async _find(query) {
        this._precheck();
        return await Models[this.modelType].find({ where: query });
    }

    static async findAll(data) {
        return await this._findAll(data);
    }

    static async _findAll() {
        this._precheck();
        return await Models[this.modelType].findAll();
    }

    static async count(data) {
        return await this._count(data);
    }

    static async _count(query) {
        this._precheck();
        return await Models[this.modelType].count({ where: query });
    }
}
