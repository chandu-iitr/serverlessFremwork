module.exports.handler = async(event) => {
    return {
        statusCode: 200,
        Headers: {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({message : "Bye from you tube demo API"}),
    };
};