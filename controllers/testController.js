import TestRepository from '../repository/testrepository';

const testRepository = new TestRepository();
export default class TestController {

    async createTest(req, res, next) {
        const { id, task, dueDate, timeToAchieve, status} = req.body;
        const testData = await testRepository.insert({ id, task, status, dueDate, timeToAchieve })
        const response = {
            message: 'Task added successfully',
            data: testData,
        }
        console.log('Response', response)
        return res.send(response)
    }
    
    async listTest(req, res, next){
        const taskList = await testRepository.list({});
        return res.send({
            message : "taskList fetched successfully",
            data : taskList
         });
    }
    
}