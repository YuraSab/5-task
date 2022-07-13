export default class PostService{
    url = 'https://jsonplaceholder.typicode.com/posts';

    async getPosts(){
        return await fetch(this.url)
            .then(value => value.json())
    }

    async getPostById(id){
        return await fetch(`${this.url}/${id}`)
            .then(value => value.json())
    }

}
