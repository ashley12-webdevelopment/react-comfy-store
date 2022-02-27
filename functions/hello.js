// domain/.netlify/functions/hello

const people = [
    {id:1,name:'john'},
    {id:2,name:'susan'},
]

exports.handler = async function(event,context){
    return{
        statusCode:200,
        // body:'Hello World',
        body:JSON.stringify(people),
    }
}