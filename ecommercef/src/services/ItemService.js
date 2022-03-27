import axios from 'axios';

const ITEMS_REST_API_URL = 'http://localhost:8080/items'

class ItemService{

    getItems(){
        axios.get(ITEMS_REST_API_URL)
    }
}   

export default new ItemService();