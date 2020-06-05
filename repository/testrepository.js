import { TestModel } from './model';


export default class TestRepository {

    async insert(data) {
        const instance = new TestModel(data);
        return instance.save();
    }
    
    async list(options) {
        return TestModel.find(options);
    }
    
}
  